import { useState } from 'react'; import { Link } from 'react-router-dom'; import { posts, categories, fmtDate } from '../data/blog'; import { useSeo } from '../lib/seo'
export default function Blog(){useSeo('/blog');const [cat,setCat]=useState('All'),[kind,setKind]=useState('all'),list=posts.filter(p=>(cat==='All'||p.category===cat)&&(kind==='all'||p.kind===kind))
return(<section className="mx-auto max-w-7xl px-6 pb-24 pt-40"><h1 className="font-display text-5xl font-bold md:text-7xl">INSIGHTS</h1>
<p className="mt-4 max-w-2xl text-mute">Researched IT news and practical guides on AI, web development, security, SEO and cloud. Every post links its sources and shows when it was last updated.</p>
<div className="mt-10 flex flex-wrap gap-2" role="group" aria-label="Filter by type">{[['all','All posts'],['news','News & updates'],['guide','Knowledge base']].map(([k,l])=><button key={k} onClick={()=>setKind(k)} aria-pressed={kind===k} className={`px-3 py-1.5 text-xs transition-colors ${kind===k?'bg-white text-ink':'bg-white/5 text-mute hover:text-white'}`}>{l}</button>)}</div>
<div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Filter by category">{categories.map(c=><button key={c} onClick={()=>setCat(c)} aria-pressed={cat===c} className={`border px-3 py-1.5 text-xs transition-colors ${cat===c?'border-cyan text-cyan':'border-white/10 text-mute hover:text-white'}`}>{c}</button>)}</div>
<div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{list.map(p=><article key={p.slug} className="group relative flex flex-col border border-white/10 bg-panel p-6 transition-colors hover:border-cyan/50">
<p className="text-xs tracking-widest text-cyan">{p.category.toUpperCase()} · {p.kind==='guide'?'GUIDE':'NEWS'}</p>
<h2 className="mt-3 font-display text-xl leading-snug"><Link to={`/blog/${p.slug}`} data-cursor="READ" className="after:absolute after:inset-0">{p.title}</Link></h2>
<p className="mt-3 flex-1 text-sm text-mute">{p.description}</p>
<p className="mt-5 text-xs text-mute">{fmtDate(p.updated)} · {p.readMin} min read</p></article>)}</div></section>)}
