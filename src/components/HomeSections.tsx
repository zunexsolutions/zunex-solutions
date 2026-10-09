import { useEffect, useRef } from 'react'; import { Link } from 'react-router-dom'; import gsap from 'gsap'; import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { services, process, tech } from '../data/services'; import { portfolio } from '../data/portfolio'; import { team, founder } from '../data/team'; import seo from '../data/seo.json'
import { posts, fmtDate } from '../data/blog'; import { slugify } from '../lib/utils'; import Mockup from './Mockup'; import TeamRow from './TeamRow'; import Reviews from './Reviews'; import Counter from './Counter'; import Magnetic from './Magnetic'
gsap.registerPlugin(ScrollTrigger)
const H=({children}:{children:string})=><h2 className="rev font-display text-4xl font-bold md:text-6xl">{children}</h2>
export default function HomeSections(){const r=useRef<HTMLDivElement>(null)
useEffect(()=>{if(matchMedia('(prefers-reduced-motion: reduce)').matches)return
const c=gsap.context(()=>{gsap.utils.toArray<HTMLElement>('.rev').forEach(e=>gsap.from(e,{y:40,opacity:0,duration:1,ease:'power3.out',scrollTrigger:{trigger:e,start:'top 88%'}}))
gsap.from('.tl',{scaleY:0,transformOrigin:'top',ease:'none',scrollTrigger:{trigger:'.steps',start:'top 70%',end:'bottom 70%',scrub:true}})},r);const t=setTimeout(()=>ScrollTrigger.refresh(),600);return()=>{clearTimeout(t);c.revert()}},[])
const items=[...tech,...tech]
return(<div ref={r}>
<section className="mx-auto max-w-7xl px-6 py-32"><p className="rev max-w-4xl font-display text-3xl leading-snug md:text-5xl">We combine <span className="text-cyan">strategy</span>, <span className="text-cyan">design</span>, <span className="text-cyan">engineering</span> and <span className="text-cyan">AI</span> to turn ambitious ideas into powerful digital products.</p>
<div className="rev mt-20 grid grid-cols-2 gap-10 border-t border-white/10 pt-10 md:grid-cols-4"><Counter to={services.length} label="Core services"/><Counter to={tech.length} label="Technologies"/><Counter to={portfolio.length} label="Concept products"/><Counter to={team.length+1} label="Experts on the team"/></div></section>
<section className="mx-auto max-w-7xl px-6 py-24"><H>WHAT WE DO</H><p className="rev mt-4 text-mute">Technology, creativity and strategy working together.</p>
<ul className="mt-12 border-t border-white/10">{services.map(s=><li key={s.n} className="rev"><Link to={`/services#${slugify(s.name)}`} className="group flex items-center justify-between gap-6 border-b border-white/10 py-6 transition-colors hover:bg-panel md:px-4"><span className="font-display text-cyan">{s.n}</span><span className="flex-1 font-display text-2xl transition-transform group-hover:translate-x-2 md:text-4xl">{s.name}</span><span aria-hidden className="transition-transform group-hover:translate-x-2">→</span></Link></li>)}</ul></section>
<section className="overflow-hidden border-y border-white/10 py-8" aria-label="Technologies we use"><ul className="marquee flex gap-12">{items.map((t,i)=><li key={i} className="whitespace-nowrap font-display text-3xl text-white/30">{t}</li>)}</ul></section>
<section className="mx-auto max-w-7xl px-6 py-24"><H>HOW WE WORK</H>
<ol className="steps relative mt-16 space-y-12 pl-10"><span className="absolute bottom-0 left-2 top-0 w-px bg-white/10"/><span className="tl absolute bottom-0 left-2 top-0 w-px bg-cyan"/>
{process.map(([n,t,d])=><li key={n} className="rev"><span className="font-display text-cyan">{n}</span><h3 className="font-display text-2xl">{t}</h3><p className="text-mute">{d}</p></li>)}</ol></section>
<section className="mx-auto max-w-7xl px-6 py-24"><div className="flex items-end justify-between"><H>WHAT WE BUILD</H><Link to="/portfolio" className="text-sm text-mute hover:text-white">All concepts →</Link></div>
<p className="rev mt-4 text-mute">ZUNEX LAB concept projects, not client work.</p>
<div className="mt-12 grid gap-6 md:grid-cols-3">{portfolio.slice(0,3).map(p=><Link key={p.slug} to={`/portfolio/${p.slug}`} data-cursor="VIEW CASE" className="rev group border border-white/10 bg-panel p-5 transition-colors hover:border-cyan/50"><Mockup viz={p.viz} bars={p.bars} label={p.name}/><p className="mt-5 text-xs tracking-widest text-cyan">{p.n} · CONCEPT PROJECT</p><h3 className="mt-1 font-display text-xl">{p.name}</h3><p className="text-sm text-mute">{p.cat}</p></Link>)}</div></section>
<section className="mx-auto max-w-7xl px-6 py-24"><div className="flex items-end justify-between"><H>THE TEAM</H><Link to="/about" className="text-sm text-mute hover:text-white">Meet {founder.name} and the team →</Link></div>
<div className="rev mt-8"><TeamRow/></div></section>
<Reviews/>
<section className="mx-auto max-w-7xl px-6 py-24"><div className="flex items-end justify-between"><H>LATEST INSIGHTS</H><Link to="/blog" className="text-sm text-mute hover:text-white">All posts →</Link></div>
<div className="mt-12 grid gap-6 md:grid-cols-3">{posts.slice(0,3).map(p=><Link key={p.slug} to={`/blog/${p.slug}`} data-cursor="READ" className="rev border border-white/10 bg-panel p-6 transition-colors hover:border-cyan/50"><p className="text-xs tracking-widest text-cyan">{p.category.toUpperCase()}</p><h3 className="mt-3 font-display text-xl leading-snug">{p.title}</h3><p className="mt-3 text-xs text-mute">{fmtDate(p.updated)} · {p.readMin} min read</p></Link>)}</div></section>
<section className="mx-auto max-w-4xl px-6 py-24"><H>QUESTIONS</H><div className="mt-10 border-t border-white/10">{seo.faq.map(([q,a])=><details key={q} className="rev group border-b border-white/10 py-5"><summary className="cursor-pointer list-none font-display text-xl">{q}</summary><p className="mt-3 text-mute">{a}</p></details>)}</div></section>
<section className="border-y border-white/10 bg-panel px-6 py-32 text-center"><h2 className="rev font-display text-5xl font-bold md:text-8xl">HAVE AN IDEA?<br/>LET'S BUILD IT.</h2>
<p className="rev mx-auto mt-6 max-w-lg text-mute">Tell us what you're building, what you're solving, or where you want to go next.</p>
<div className="rev mt-10"><Magnetic><Link to="/contact" className="inline-block bg-white px-8 py-4 text-sm font-medium text-ink">START A PROJECT →</Link></Magnetic></div></section></div>)}
