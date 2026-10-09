import { useEffect, useRef } from 'react'; import gsap from 'gsap'; import { ScrollTrigger } from 'gsap/ScrollTrigger'; import { team } from '../data/team'; import { asset } from '../lib/utils'
gsap.registerPlugin(ScrollTrigger)
// Small circular avatars: they drift left to right as you scroll, float gently and pop in when they enter the screen.
export default function TeamRow(){const r=useRef<HTMLDivElement>(null)
useEffect(()=>{if(matchMedia('(prefers-reduced-motion: reduce)').matches)return
const c=gsap.context(()=>{gsap.fromTo('.t-track',{x:-90},{x:90,ease:'none',scrollTrigger:{trigger:r.current,start:'top bottom',end:'bottom top',scrub:.6}})
gsap.from('.t-av',{scale:.6,opacity:0,duration:.9,stagger:.15,ease:'power3.out',scrollTrigger:{trigger:r.current,start:'top 85%'}})
gsap.to('.t-img',{y:-10,duration:2.4,yoyo:true,repeat:-1,ease:'sine.inOut',stagger:.5})},r);const t=setTimeout(()=>ScrollTrigger.refresh(),500);return()=>{clearTimeout(t);c.revert()}},[])
return(<div ref={r} className="overflow-hidden py-8"><ul className="t-track flex flex-wrap justify-center gap-x-10 gap-y-10 md:gap-x-20">{team.map(m=><li key={m.slug} className="t-av group flex w-48 flex-col items-center text-center">
<div className="t-img relative h-36 w-36 md:h-40 md:w-40"><span aria-hidden className="absolute -inset-2 animate-[spin_24s_linear_infinite] rounded-full border border-dashed border-cyan/40 transition-colors group-hover:border-cyan"/>
<span className="block h-full w-full overflow-hidden rounded-full bg-gradient-to-b from-[#101830] to-deep transition-transform duration-500 group-hover:scale-105"><img src={asset(m.avatar)} alt={m.alt} width={360} height={360} loading="lazy" className="h-full w-full object-cover object-top"/></span></div>
<p className="mt-5 font-display text-base">{m.name}</p><p className="mt-1 text-xs text-cyan">{m.role}</p></li>)}</ul></div>)}
