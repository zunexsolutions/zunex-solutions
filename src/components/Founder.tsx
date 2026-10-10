import { useEffect, useRef } from 'react'; import gsap from 'gsap'; import { ScrollTrigger } from 'gsap/ScrollTrigger'; import { founder } from '../data/team'; import { asset } from '../lib/utils'
gsap.registerPlugin(ScrollTrigger)
const msg=['At Zunex Solutions, my vision is simple: build technology that creates real value.','I believe great digital products are not created by technology alone. They are created by understanding people, solving the right problems and combining thoughtful design with reliable engineering.','Zunex Solutions was built to bring development, AI, digital strategy and creative thinking together under one roof.','Our goal is to help businesses move from ideas to practical digital solutions that are built to perform, scale and evolve.','We are not here to simply build websites or applications. We are here to build digital systems that help businesses move forward.']
export default function Founder(){const r=useRef<HTMLElement>(null)
useEffect(()=>{if(matchMedia('(prefers-reduced-motion: reduce)').matches)return
const c=gsap.context(()=>{const st={trigger:r.current,start:'top 70%'}
gsap.fromTo('.f-img',{clipPath:'inset(0 100% 0 0)'},{clipPath:'inset(0 0% 0 0)',duration:1.4,ease:'power4.inOut',scrollTrigger:st})
gsap.fromTo('.f-photo',{scale:1.25},{scale:1,ease:'none',scrollTrigger:{trigger:r.current,start:'top bottom',end:'bottom top',scrub:true}})
gsap.from('.f-frame',{x:-28,y:28,opacity:0,duration:1.2,delay:.5,ease:'power3.out',scrollTrigger:st})
gsap.from('.f-quote',{scale:.4,opacity:0,duration:1,ease:'power3.out',scrollTrigger:st})
gsap.from('.f-line',{y:30,opacity:0,duration:.9,stagger:.22,ease:'power3.out',scrollTrigger:{trigger:'.f-msg',start:'top 78%'}})
gsap.from('.f-sign',{scaleX:0,transformOrigin:'left',duration:1.1,ease:'power3.out',scrollTrigger:{trigger:'.f-sign',start:'top 92%'}})
gsap.to('.f-badge',{y:-8,duration:2.2,yoyo:true,repeat:-1,ease:'sine.inOut'})},r);const t=setTimeout(()=>ScrollTrigger.refresh(),500);return()=>{clearTimeout(t);c.revert()}},[])
return(<section ref={r} className="mt-24 grid gap-14 md:grid-cols-[380px_1fr]" aria-label="Message from the founder">
<div className="relative"><span aria-hidden className="f-frame absolute -bottom-5 -left-5 h-full w-full border border-cyan/40"/>
<div className="f-img relative aspect-[3/4] overflow-hidden bg-gradient-to-b from-[#101830] to-deep"><img src={asset(founder.img)} alt={founder.alt} width={408} height={514} className="f-photo h-full w-full object-contain object-bottom"/></div>
<p className="f-badge absolute -right-3 bottom-8 bg-cyan px-3 py-2 text-[10px] font-medium tracking-[.25em] text-ink">FOUNDER & CEO</p></div>
<div className="f-msg"><p className="text-xs tracking-[.3em] text-cyan">FOUNDER'S MESSAGE</p>
<span aria-hidden className="f-quote mt-4 block font-display text-8xl leading-none text-cyan/30">“</span>
<blockquote className="-mt-8 space-y-5 font-display text-xl leading-relaxed">{msg.map((t,i)=><p key={i} className={`f-line ${i===0?'text-2xl text-white':'text-mute'}`}>{t}</p>)}</blockquote>
<span aria-hidden className="f-sign mt-8 block h-px w-24 bg-cyan"/><p className="mt-4 font-medium">{founder.name}</p><p className="text-sm text-mute">{founder.role}, Zunex Solutions</p></div></section>)}
