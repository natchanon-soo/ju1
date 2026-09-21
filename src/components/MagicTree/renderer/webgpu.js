import { shader } from './shaders.js';
function cube(cx,cy,cz,sx,sy,sz,c,out){const v=[[-1,-1,-1],[1,-1,-1],[1,1,-1],[-1,1,-1],[-1,-1,1],[1,-1,1],[1,1,1],[-1,1,1]],q=[[0,1,2,0,2,3],[4,6,5,4,7,6],[0,4,5,0,5,1],[3,2,6,3,6,7],[1,5,6,1,6,2],[0,3,7,0,7,4]];for(const f of q)for(const i of f){const p=v[i];out.push(cx+p[0]*sx,cy+p[1]*sy,cz+p[2]*sz,...c)}}
function branch(a,b,r,c,out){const dx=b[0]-a[0],dy=b[1]-a[1],dz=b[2]-a[2],len=Math.hypot(dx,dy,dz);const mx=(a[0]+b[0])/2,my=(a[1]+b[1])/2,mz=(a[2]+b[2])/2;/* compact reconstruction: vertical-ish cuboid */cube(mx,my,mz,r,Math.max(r,len/2),r,c,out)}
export async function createRenderer(canvas,{interactive=true,onReady,onError}={}){
  try{
    if(!navigator.gpu) throw new Error('WebGPU is not available. Use current Chrome/Edge over HTTPS or localhost.');
    const adapter=await navigator.gpu.requestAdapter(); if(!adapter) throw new Error('Unable to acquire WebGPU adapter.');
    const device=await adapter.requestDevice(); const ctx=canvas.getContext('webgpu'); const format=navigator.gpu.getPreferredCanvasFormat();
    ctx.configure({device,format,alphaMode:'opaque'});
    const ub=device.createBuffer({size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});
    const bgl=device.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:'uniform'}}]});
    const bg=device.createBindGroup({layout:bgl,entries:[{binding:0,resource:{buffer:ub}}]});
    const module=device.createShaderModule({code:shader});
    const info=await module.getCompilationInfo(); const errs=info.messages.filter(m=>m.type==='error'); if(errs.length) throw new Error(errs.map(e=>e.message).join('\n'));
    const pipeline=device.createRenderPipeline({layout:device.createPipelineLayout({bindGroupLayouts:[bgl]}),vertex:{module,entryPoint:'vs',buffers:[{arrayStride:24,attributes:[{shaderLocation:0,offset:0,format:'float32x3'},{shaderLocation:1,offset:12,format:'float32x3'}]}]},fragment:{module,entryPoint:'fs',targets:[{format}]},primitive:{topology:'triangle-list',cullMode:'back'},depthStencil:undefined});
    let vb=null,count=0,yaw=.72,pitch=-.24,zoom=4.1,raf=0,dirty=true,drag=false,px=0,py=0;
    const resize=()=>{const d=Math.min(devicePixelRatio||1,2);const w=Math.max(1,Math.floor(canvas.clientWidth*d)),h=Math.max(1,Math.floor(canvas.clientHeight*d));if(canvas.width!==w||canvas.height!==h){canvas.width=w;canvas.height=h;dirty=true}};
    const draw=()=>{raf=requestAnimationFrame(draw);resize();if(!dirty)return;dirty=false;device.queue.writeBuffer(ub,0,new Float32Array([canvas.width/canvas.height,yaw,pitch,zoom]));const enc=device.createCommandEncoder();const pass=enc.beginRenderPass({colorAttachments:[{view:ctx.getCurrentTexture().createView(),clearValue:{r:.965,g:.945,b:.90,a:1},loadOp:'clear',storeOp:'store'}]});pass.setPipeline(pipeline);pass.setBindGroup(0,bg);if(vb&&count){pass.setVertexBuffer(0,vb);pass.draw(count)}pass.end();device.queue.submit([enc.finish()])};
    const down=e=>{if(!interactive)return;drag=true;px=e.clientX;py=e.clientY;canvas.setPointerCapture?.(e.pointerId)};
    const move=e=>{if(!interactive||!drag)return;yaw+=(e.clientX-px)*.009;pitch=Math.max(-1.0,Math.min(.45,pitch+(e.clientY-py)*.006));px=e.clientX;py=e.clientY;dirty=true};
    const up=()=>{drag=false};const wheel=e=>{if(!interactive)return;e.preventDefault();zoom=Math.max(2.4,Math.min(7.0,zoom+Math.sign(e.deltaY)*.22));dirty=true};
    canvas.addEventListener('pointerdown',down);canvas.addEventListener('pointermove',move);canvas.addEventListener('pointerup',up);canvas.addEventListener('pointercancel',up);canvas.addEventListener('wheel',wheel,{passive:false});
    draw(); onReady?.({device,adapter});
    return {setScene(scene){const out=[];for(const b of scene.blocks)cube(b.x,-.012,b.z,.030,b.h,.030,scene.colors.ground,out);for(const s of scene.segments)branch(s.a,s.b,s.r,scene.colors.trunk,out);for(const l of scene.leaves)cube(l.x,l.y,l.z,l.s,l.s*.72,l.s,scene.colors.leaf,out);const arr=new Float32Array(out);vb?.destroy();vb=device.createBuffer({size:Math.max(4,arr.byteLength),usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST});if(arr.byteLength)device.queue.writeBuffer(vb,0,arr);count=arr.length/6;dirty=true},setInteractive(v){interactive=!!v},resetCamera(){yaw=.72;pitch=-.24;zoom=4.1;dirty=true},resize,dispose(){cancelAnimationFrame(raf);vb?.destroy();ub.destroy();canvas.removeEventListener('pointerdown',down);canvas.removeEventListener('pointermove',move);canvas.removeEventListener('pointerup',up);canvas.removeEventListener('pointercancel',up);canvas.removeEventListener('wheel',wheel)}};
  }catch(e){onError?.(e);throw e}
}
