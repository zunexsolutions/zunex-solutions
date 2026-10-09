import { useEffect, useRef, useState } from 'react'; import gsap from 'gsap'
export default function Loader(){const r=useRef<HTMLDivElement>(null),bar=useRef<HTMLSpanElement>(null),[done,setDone]=useState(false)
useEffect(()=>{const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches
const ready=()=>{(window as unknown as {__zunexReady?:boolean}).__zunexReady=true;window.dispatchEvent(new Event('zunex:ready'))}
const t=gsap.timeline({onComplete:()=>setDone(true)})
if(reduce)t.to({},{duration:.6}).add(ready).to(r.current,{autoAlpha:0,duration:.2})
else t.from('.lz',{yPercent:100,opacity:0,stagger:.1,duration:.7,ease:'power3.out'}).from('.ltag',{opacity:0,y:10,duration:.8},'-=.3').fromTo(bar.current,{scaleX:0},{scaleX:1,duration:3,ease:'power1.inOut'},'<').add(ready,'+=.2').to(r.current,{yPercent:-100,duration:.7,ease:'power4.inOut'})
return()=>{t.kill()}},[])
if(done)return null
return(<div ref={r} role="status" aria-label="Loading" className="fixed inset-0 z-[70] flex flex-col items-center justify-center bg-ink"><div className="font-display text-6xl font-bold tracking-widest md:text-8xl">{'ZUNEX'.split('').map((c,i)=><span key={i} className="inline-block overflow-hidden"><span className="lz inline-block">{c}</span></span>)}</div>
<p className="ltag mt-5 px-6 text-center text-xs tracking-[.3em] text-mute">POWERING THE FUTURE, ONE SOLUTION AT A TIME</p><span className="mt-10 block h-px w-48 bg-white/10"><span ref={bar} className="block h-full origin-left bg-cyan"/></span></div>)}
