import { useEffect } from 'react'; import { useLocation, Link } from 'react-router-dom'; import { Code2, Layers, Bot, Smartphone, Share2, Megaphone, Search, Video } from 'lucide-react'
import { services } from '../data/services'; import { slugify } from '../lib/utils'; import { useSeo } from '../lib/seo'
const icons=[Code2,Layers,Bot,Smartphone,Share2,Megaphone,Search,Video]
export default function Services(){useSeo('/services');const {hash}=useLocation()
useEffect(()=>{if(hash)setTimeout(()=>document.getElementById(hash.slice(1))?.scrollIntoView({behavior:'smooth',block:'center'}),150)},[hash])
return(<section className="mx-auto max-w-7xl px-6 pb-24 pt-40"><h1 className="font-display text-5xl font-bold md:text-7xl">WHAT WE DO</h1>
<p className="mt-4 text-mute">Technology, creativity and strategy working together.</p>
<ul className="mt-16 border-t border-white/10">{services.map((s,i)=>{const I=icons[i];return(<li id={slugify(s.name)} key={s.n} className="group grid gap-4 border-b border-white/10 py-8 transition-colors hover:bg-panel md:grid-cols-[60px_1fr_1.2fr_40px] md:px-4">
<span className="font-display text-cyan">{s.n}</span><h2 className="font-display text-2xl">{s.name}</h2>
<div><p className="text-mute">{s.desc}</p>{s.tags.length>0&&<ul className="mt-3 flex flex-wrap gap-2">{s.tags.map(t=><li key={t} className="border border-white/10 px-2 py-1 text-xs text-mute">{t}</li>)}</ul>}</div>
<I aria-hidden className="h-6 w-6 text-cyan transition-transform duration-500 group-hover:rotate-12 group-hover:scale-125"/></li>)})}</ul>
<div className="mt-16"><Link to="/contact" className="inline-block bg-white px-6 py-3 text-sm font-medium text-ink">START A PROJECT →</Link></div></section>)}
