import { lazy, Suspense, useEffect, useRef } from 'react'; import { Link } from 'react-router-dom'; import gsap from 'gsap'; import Magnetic from '../components/Magnetic'; import { useSeo } from '../lib/seo'
const HomeSections=lazy(()=>import('../components/HomeSections')),ThreeScene=lazy(()=>import('../components/ThreeScene'))
export default function Home(){useSeo('/');const h=useRef<HTMLElement>(null)
useEffect(()=>{if(matchMedia('(prefers-reduced-motion: reduce)').matches)return
let c:gsap.Context|undefined;const run=()=>{c=gsap.context(()=>{gsap.from('.line',{yPercent:110,opacity:0,duration:1.1,ease:'power4.out',stagger:.12});gsap.from('.fade',{y:20,opacity:0,duration:.9,delay:.5,stagger:.1,ease:'power3.out'})},h)}
if((window as unknown as {__zunexReady?:boolean}).__zunexReady)run();else window.addEventListener('zunex:ready',run,{once:true})
return()=>{window.removeEventListener('zunex:ready',run);c?.revert()}},[])
return(<><section ref={h} className="relative flex min-h-screen items-center overflow-hidden bg-deep px-6"><Suspense fallback={null}><ThreeScene/></Suspense>
<div className="relative mx-auto w-full max-w-7xl"><p className="fade mb-6 text-xs tracking-[.3em] text-cyan">ZUNEX SOLUTIONS · AVAILABLE FOR SELECT PROJECTS</p>
<h1 className="font-display text-6xl font-bold leading-[.95] md:text-8xl"><span className="block overflow-hidden"><span className="line block">WE BUILD</span></span><span className="block overflow-hidden"><span className="line block">WHAT'S NEXT.</span></span></h1>
<p className="fade mt-8 max-w-xl text-lg text-mute">Digital products, intelligent systems and high-performance experiences built for ambitious businesses.</p>
<div className="fade mt-10 flex flex-wrap gap-4"><Magnetic><Link to="/contact" className="inline-block bg-white px-6 py-3 text-sm font-medium text-ink">START A PROJECT →</Link></Magnetic><Magnetic><Link to="/portfolio" className="inline-block border border-white/20 px-6 py-3 text-sm">EXPLORE OUR WORK →</Link></Magnetic></div></div>
<div className="fade absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-[10px] tracking-[.3em] text-mute md:flex" aria-hidden>SCROLL TO EXPLORE<span className="scrollline h-12 w-px bg-cyan"/></div></section>
<Suspense fallback={null}><HomeSections/></Suspense></>)}
