import { reviews } from '../data/reviews'
export default function Reviews(){const items=[...reviews,...reviews],sample=reviews.some(r=>r.sample)
return(<section className="py-24" aria-labelledby="reviews-h"><div className="mx-auto max-w-7xl px-6"><h2 id="reviews-h" className="rev font-display text-4xl font-bold md:text-6xl">CLIENT REVIEWS</h2>
{sample&&<p className="mt-4 max-w-2xl border-l-2 border-cyan pl-3 text-sm text-mute">Sample reviews shown to preview this section. Replace them with real client feedback in src/data/reviews.ts before launch.</p>}</div>
<div className="mt-12 overflow-hidden motion-reduce:overflow-x-auto"><ul className="marquee-slow flex pl-6">{items.map((r,i)=><li key={i} aria-hidden={i>=reviews.length} className="mr-6 flex w-[320px] shrink-0 flex-col justify-between border border-white/10 bg-panel p-6 transition-colors hover:border-cyan/50">
<div><p className="text-xs tracking-widest text-cyan">{r.product.toUpperCase()}</p><p className="mt-3 leading-relaxed">“{r.text}”</p></div><div className="mt-6 border-t border-white/10 pt-4"><p className="font-display">{r.name}</p><p className="text-xs text-mute">{r.role}</p></div></li>)}</ul></div></section>)}
