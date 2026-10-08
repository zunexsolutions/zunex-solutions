import { useEffect, useRef, useState } from 'react'; import gsap from 'gsap'
export default function Loader(){const r=useRef<HTMLDivElement>(null),[done,setDone]=useState(false)
useEffect(()=>{const t=gsap.timeline({onComplete:()=>setDone(true)});t.from('.lz',{yPercent:100,opacity:0,stagger:.08,duration:.5,ease:'power3.out'}).to(r.current,{yPercent:-100,duration:.6,ease:'power4.inOut',delay:.2});return()=>{t.kill()}},[])
if(done)return null
return <div ref={r} className="fixed inset-0 z-[70] flex items-center justify-center bg-ink font-display text-6xl font-bold tracking-widest" aria-label="Loading">{'ZUNEX'.split('').map((c,i)=><span key={i} className="lz inline-block">{c}</span>)}</div>}
