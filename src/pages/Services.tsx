import { services } from '../data/services'
export default function Services(){return(<section className="mx-auto max-w-7xl px-6 pb-24 pt-40"><h1 className="font-display text-5xl font-bold md:text-7xl">WHAT WE DO</h1>
<p className="mt-4 text-mute">Technology, creativity and strategy working together.</p>
<ul className="mt-16 border-t border-white/10">{services.map(s=><li key={s.n} className="group grid gap-4 border-b border-white/10 py-8 transition-colors hover:bg-panel md:grid-cols-[80px_1fr_1fr_40px] md:px-4">
<span className="font-display text-cyan">{s.n}</span><h2 className="font-display text-2xl">{s.name}</h2>
<div><p className="text-mute">{s.desc}</p><p className="mt-3 text-xs text-mute/70">{s.tags.join(' · ')}</p></div><span className="transition-transform group-hover:translate-x-2" aria-hidden>→</span></li>)}</ul></section>)}
