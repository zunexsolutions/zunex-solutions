import { Link, useParams } from 'react-router-dom'; import { posts, fmtDate } from '../data/blog'; import { useSeo } from '../lib/seo'; import NotFound from './NotFound'
export default function BlogPost(){const {slug}=useParams(),p=posts.find(x=>x.slug===slug);useSeo(`/blog/${slug}`,!p);if(!p)return <NotFound/>
const rel=[...posts.filter(x=>x.slug!==p.slug&&x.category===p.category),...posts.filter(x=>x.slug!==p.slug&&x.category!==p.category)].slice(0,3)
return(<article className="mx-auto max-w-3xl px-6 pb-24 pt-40"><nav aria-label="Breadcrumb" className="text-sm text-mute"><Link to="/blog" className="hover:text-white">Insights</Link> / {p.category}</nav>
<h1 className="mt-6 font-display text-4xl font-bold leading-tight md:text-6xl">{p.title}</h1>
<p className="mt-5 text-xs tracking-widest text-mute">BY ZUNEX SOLUTIONS · UPDATED <time dateTime={p.updated}>{fmtDate(p.updated).toUpperCase()}</time> · {p.readMin} MIN READ</p>
<p className="mt-10 text-xl leading-relaxed">{p.intro}</p>
{p.sections.map(s=><section key={s.h} className="mt-12"><h2 className="font-display text-2xl">{s.h}</h2>
{s.p.map((t,i)=><p key={i} className="mt-4 leading-relaxed text-mute">{t}</p>)}{s.l&&<ul className="mt-4 list-disc space-y-2 pl-5 text-mute">{s.l.map(i=><li key={i}>{i}</li>)}</ul>}</section>)}
{p.sources.length>0&&<aside className="mt-16 border-t border-white/10 pt-8"><h2 className="text-xs tracking-[.3em] text-cyan">SOURCES</h2><ul className="mt-4 space-y-2 text-sm text-mute">{p.sources.map(([n,u])=><li key={u}><a href={u} target="_blank" rel="noopener noreferrer" className="underline decoration-white/20 underline-offset-4 hover:text-white">{n}</a></li>)}</ul>
<p className="mt-4 text-xs text-mute">News changes quickly. Figures reflect the sources above as of the update date.</p></aside>}
<div className="mt-16 border border-white/10 bg-panel p-8"><p className="font-display text-2xl">Have a project in mind?</p><p className="mt-2 text-mute">Tell us what you are building and we will tell you honestly how we would approach it.</p><Link to="/contact" className="mt-6 inline-block bg-white px-6 py-3 text-sm font-medium text-ink">START A PROJECT →</Link></div>
<h2 className="mt-16 font-display text-2xl">Keep reading</h2><ul className="mt-4 space-y-3">{rel.map(r=><li key={r.slug}><Link to={`/blog/${r.slug}`} className="text-mute hover:text-white">{r.title} →</Link></li>)}</ul></article>)}
