function hashString(s){let h=2166136261>>>0;for(let i=0;i<s.length;i++){h^=s.charCodeAt(i);h=Math.imul(h,16777619)}return h>>>0}
function rng(seed){let x=seed||1;return()=>{x^=x<<13;x^=x>>>17;x^=x<<5;return((x>>>0)%100000)/100000}}

export const PALETTES = {
  natural:{ground:[0.73,0.72,0.66],trunk:[0.30,0.14,0.07],spring:[0.40,0.74,0.31],summer:[0.14,0.56,0.18],fall:[0.83,0.38,0.08],winter:[0.76,0.83,0.84]},
  pastel:{ground:[0.82,0.80,0.76],trunk:[0.43,0.28,0.20],spring:[0.61,0.83,0.55],summer:[0.42,0.72,0.46],fall:[0.91,0.56,0.30],winter:[0.83,0.88,0.91]},
  forest:{ground:[0.48,0.50,0.43],trunk:[0.22,0.10,0.05],spring:[0.23,0.61,0.25],summer:[0.06,0.42,0.12],fall:[0.68,0.27,0.04],winter:[0.60,0.69,0.68]},
  mono:{ground:[0.63,0.63,0.61],trunk:[0.25,0.25,0.23],spring:[0.48,0.52,0.47],summer:[0.38,0.42,0.37],fall:[0.50,0.45,0.40],winter:[0.70,0.72,0.72]}
};

export function buildScene({matrix, value, season='spring', palette='natural'}){
  const n=matrix.length; const r=rng(hashString(String(value)+season+palette));
  const p=PALETTES[palette]||PALETTES.natural;
  const blocks=[]; let dark=0;
  const scale=2.6/Math.max(1,n); const offset=(n-1)*scale/2;
  for(let y=0;y<n;y++)for(let x=0;x<n;x++)if(matrix[y][x]){dark++;const edge=(x===0||y===0||x===n-1||y===n-1);blocks.push({x:x*scale-offset,z:y*scale-offset,h:0.035+(edge?0.012:0)+r()*0.018})}
  const density=dark/(n*n);
  const trunkH=1.45+density*0.65; const segments=[];
  const trunkSteps=11; let prev=[0,0,0];
  for(let i=1;i<=trunkSteps;i++){const t=i/trunkSteps;const cur=[Math.sin(t*2.1)*0.06*t,t*trunkH,Math.cos(t*1.7)*0.04*t];segments.push({a:prev,b:cur,r:0.105*(1-t*.63)+0.025});prev=cur}
  const branchCount=13+Math.floor(density*12);
  for(let b=0;b<branchCount;b++){
    const baseT=.33+r()*.58;const angle=(b/branchCount)*Math.PI*2+r()*.65;let a=[Math.sin(baseT*2.1)*.06*baseT,baseT*trunkH,Math.cos(baseT*1.7)*.04*baseT];
    const levels=3+Math.floor(r()*3);let len=.55+r()*.55;
    for(let j=0;j<levels;j++){const up=.22+r()*.22;const dir=[Math.cos(angle+j*.20)*len,up,Math.sin(angle+j*.20)*len];const bb=[a[0]+dir[0],a[1]+dir[1],a[2]+dir[2]];segments.push({a,b:bb,r:.045*(1-j/levels)+.015});a=bb;len*=.58}
  }
  const leafColor=p[season]||p.spring;
  const leaves=[]; for(const s of segments.slice(Math.floor(segments.length*.35))){if(r()>.22){const count=2+Math.floor(r()*4);for(let i=0;i<count;i++)leaves.push({x:s.b[0]+(r()-.5)*.23,y:s.b[1]+(r()-.5)*.16,z:s.b[2]+(r()-.5)*.23,s:.045+r()*.035})}}
  return {blocks,segments,leaves,colors:{ground:p.ground,trunk:p.trunk,leaf:leafColor},season,palette,density};
}
