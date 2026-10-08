import { useEffect, useRef } from 'react'; import { useLocation } from 'react-router-dom'; import gsap from 'gsap'
// Overlay is fully hidden (autoAlpha 0) unless a transition is running, so it can never block the page.
export default function PageTransition(){const r=useRef<HTMLDivElement>(null),loc=useLocation(),first=useRef(true)
useEffect(()=>{gsap.set(r.current,{autoAlpha:0,yPercent:100})},[])
useEffect(()=>{if(first.current){first.current=false;return}if(matchMedia('(prefers-reduced-motion: reduce)').matches)return
const t=gsap.timeline({onComplete:()=>{gsap.set(r.current,{autoAlpha:0,yPercent:100})}})
t.set(r.current,{autoAlpha:1,yPercent:100}).to(r.current,{yPercent:0,duration:.25,ease:'power2.in'}).to(r.current,{yPercent:-100,duration:.35,ease:'power2.out'});return()=>{t.kill();gsap.set(r.current,{autoAlpha:0})}},[loc.pathname])
return <div ref={r} aria-hidden className="pointer-events-none fixed inset-0 z-[55] bg-panel invisible"/>}
