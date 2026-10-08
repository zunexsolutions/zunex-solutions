import { useEffect, useRef } from 'react'; import gsap from 'gsap'
export default function Counter({to,label}:{to:number;label:string}){const r=useRef<HTMLSpanElement>(null)
useEffect(()=>{const el=r.current!;const o=new IntersectionObserver(([e])=>{if(!e.isIntersecting)return;o.disconnect();const v={n:0};gsap.to(v,{n:to,duration:1.4,ease:'power2.out',onUpdate:()=>{el.textContent=String(Math.round(v.n))}})},{threshold:.6});o.observe(el);return()=>o.disconnect()},[to])
return <div><p className="font-display text-5xl font-bold"><span ref={r}>{to}</span>+</p><p className="mt-1 text-sm text-mute">{label}</p></div>}
