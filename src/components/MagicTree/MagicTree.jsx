import React, { forwardRef, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react';
import './MagicTree.css';
import { qrToMatrix } from './lib/qr.js';
import { buildScene } from './lib/scene.js';
import { createRenderer } from './renderer/webgpu.js';

const MagicTree = forwardRef(function MagicTree({
  qr,
  value,
  season='spring',
  palette='natural',
  interactive=true,
  errorCorrectionLevel='M',
  className='',
  style,
  onReady,
  onError,
  showStatus=false,
}, ref) {
  const canvasRef=useRef(null); const rendererRef=useRef(null); const [error,setError]=useState(''); const [status,setStatus]=useState('Initializing WebGPU…');
  const content=useMemo(()=>qr ?? value ?? '',[qr,value]);

  useImperativeHandle(ref,()=>({
    resetCamera:()=>rendererRef.current?.resetCamera(),
    resize:()=>rendererRef.current?.resize(),
    getCanvas:()=>canvasRef.current,
  }),[]);

  useEffect(()=>{let dead=false;setError('');(async()=>{try{const r=await createRenderer(canvasRef.current,{interactive,onReady:(ctx)=>{setStatus('Ready');onReady?.(ctx)},onError});if(dead){r.dispose();return}rendererRef.current=r;r.resize()}catch(e){if(!dead){setError(e.message||String(e));setStatus('WebGPU error');onError?.(e)}}})();return()=>{dead=true;rendererRef.current?.dispose();rendererRef.current=null}},[]);
  useEffect(()=>{rendererRef.current?.setInteractive(interactive)},[interactive]);
  useEffect(()=>{let dead=false;(async()=>{try{setStatus('Building QR tree…');const {matrix}=await qrToMatrix(content,errorCorrectionLevel);if(dead)return;const scene=buildScene({matrix,value:content,season,palette});rendererRef.current?.setScene(scene);setStatus(`Ready · ${matrix.length}×${matrix.length} QR`)}catch(e){if(!dead){setError(e.message||String(e));onError?.(e)}}})();return()=>{dead=true}},[content,season,palette,errorCorrectionLevel]);

  return <div className={`magicTreeRoot ${className}`.trim()} style={style}>
    <canvas ref={canvasRef} className="magicTreeCanvas" aria-label="Interactive 3D QR tree" />
    {(showStatus||error) && <div className={`magicTreeStatus ${error?'magicTreeError':''}`}>{error||status}</div>}
  </div>;
});
export default MagicTree;
