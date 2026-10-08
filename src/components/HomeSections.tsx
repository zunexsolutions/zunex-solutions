import { useEffect, useRef } from 'react'; import { Link } from 'react-router-dom'; import gsap from 'gsap'; import { ScrollTrigger } from 'gsap/ScrollTrigger'; import { process, tech } from '../data/services'
gsap.registerPlugin(ScrollTrigger)
export default function HomeSections(){const r=useRef<HTMLDivElement>(null)
useEffect(()=>{if(matchMedia('(prefers-reduced-motion: reduce)').matches)return
const c=gsap.context(()=>{gsap.utils.toArray<HTMLElement>('.rev').forEach(e=>gsap.from(e,{y:40,opacity:0,duration:1,ease:'power3.out',scrollTrigger:{trigger:e,start:'top 85%'}}))
gsap.from('.tl',{scaleY:0,transformOrigin:'top',ease:'none',scrollTrigger:{trigger:'.steps',start:'top 70%',end:'bottom 70%',scrub:true}})},r);return()=>c.revert()},[])
return(<div ref={r}>
<section className="mx-auto max-w-7xl px-6 py-32"><p className="rev max-w-4xl font-display text-3xl leading-snug md:text-5xl">We combine <span className="text-cyan">strategy</span>, <span className="text-cyan">design</span>, <span className="text-cyan">engineering</span> and <span className="text-cyan">AI</span> to turn ambitious ideas into powerful digital products.</p></section>
<section className="mx-auto max-w-7xl px-6 py-24"><h2 className="rev font-display text-4xl font-bold md:text-6xl">HOW WE WORK</h2>
<ol className="steps relative mt-16 space-y-12 pl-10"><span className="absolute bottom-0 left-2 top-0 w-px bg-white/10"/><span className="tl absolute bottom-0 left-2 top-0 w-px bg-cyan"/>
{process.map(([n,t,d])=><li key={n} className="rev"><span className="font-display text-cyan">{n}</span><h3 className="font-display text-2xl">{t}</h3><p className="text-mute">{d}</p></li>)}</ol></section>
<section className="mx-auto max-w-7xl px-6 py-24"><h2 className="rev font-display text-4xl font-bold md:text-6xl">TECHNOLOGY</h2>
<ul className="rev mt-10 flex flex-wrap gap-3">{tech.map(t=><li key={t} className="border border-white/10 px-4 py-2 text-sm text-mute transition-colors hover:border-cyan hover:text-white">{t}</li>)}</ul></section>
<section className="border-y border-white/10 bg-panel px-6 py-32 text-center"><h2 className="rev font-display text-5xl font-bold md:text-8xl">HAVE AN IDEA?<br/>LET'S BUILD IT.</h2>
<p className="rev mx-auto mt-6 max-w-lg text-mute">Tell us what you're building, what you're solving, or where you want to go next.</p>
<Link to="/contact" className="rev mt-10 inline-block bg-white px-8 py-4 text-sm font-medium text-ink">START A PROJECT →</Link></section></div>)}
