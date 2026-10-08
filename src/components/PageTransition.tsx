import { useEffect, useRef } from 'react'; import { useLocation } from 'react-router-dom'; import gsap from 'gsap'
export default function PageTransition(){const r=useRef<HTMLDivElement>(null),loc=useLocation(),first=useRef(true)
useEffect(()=>{if(first.current){first.current=false;return}if(matchMedia('(prefers-reduced-motion: reduce)').matches)return
gsap.timeline().set(r.current,{yPercent:100}).to(r.current,{yPercent:0,duration:.25,ease:'power2.in'}).to(r.current,{yPercent:-100,duration:.35,ease:'power2.out'})},[loc.pathname])
return <div ref={r} aria-hidden className="pointer-events-none fixed inset-0 z-[55] translate-y-full bg-panel"/>}
