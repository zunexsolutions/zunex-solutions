import { Link } from 'react-router-dom'; import { portfolio } from '../data/portfolio'; import Mockup from '../components/Mockup'
import { useSeo } from '../lib/seo'
export default function Portfolio(){useSeo('/portfolio');return(<section className="mx-auto max-w-7xl px-6 pb-24 pt-40"><h1 className="font-display text-5xl font-bold md:text-7xl">SELECTED WORK</h1>
<p className="mt-4 text-mute">ZUNEX LAB: concept projects created by Zunex Solutions, not client work.</p>
<div className="mt-16 grid gap-6 md:grid-cols-3">{portfolio.map(p=><Link key={p.slug} to={`/portfolio/${p.slug}`} data-cursor="VIEW CASE" className={`group border border-white/10 bg-panel p-6 transition-colors hover:border-cyan/50 ${p.big?'md:col-span-2':''}`}>
<Mockup viz={p.viz} bars={p.bars} label={p.name}/><p className="mt-6 text-xs tracking-widest text-cyan">{p.n} · CONCEPT PROJECT</p><h2 className="mt-2 font-display text-2xl">{p.name}</h2><p className="text-mute">{p.cat} · {p.year}</p></Link>)}</div></section>)}
