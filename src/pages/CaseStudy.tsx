import { Link, useParams } from 'react-router-dom'; import { portfolio } from '../data/portfolio'; import Mockup from '../components/Mockup'; import NotFound from './NotFound'
export default function CaseStudy(){const {slug}=useParams();const p=portfolio.find(x=>x.slug===slug);if(!p)return <NotFound/>
const B=({t,children}:{t:string;children:React.ReactNode})=><div className="border-t border-white/10 py-8"><h2 className="text-xs tracking-[.3em] text-cyan">{t}</h2><div className="mt-3 text-mute">{children}</div></div>
return(<article className="mx-auto max-w-4xl px-6 pb-24 pt-40"><Link to="/portfolio" className="text-sm text-mute hover:text-white">← All projects</Link>
<p className="mt-8 text-xs tracking-widest text-cyan">{p.n} · {p.cat.toUpperCase()} · {p.year}</p><h1 className="font-display text-6xl font-bold md:text-8xl">{p.name}</h1><p className="mt-6 text-lg text-mute">{p.desc}</p>
<div className="my-12"><Mockup bars={p.bars} label={p.name}/></div>
<B t="CHALLENGE">{p.challenge}</B><B t="SOLUTION">{p.solution}</B><B t="TECHNOLOGY">{p.tech.join(' · ')}</B>
<B t="KEY FEATURES"><ul className="list-disc space-y-1 pl-5">{p.features.map(f=><li key={f}>{f}</li>)}</ul></B><B t="OUTCOME">{p.outcome}</B>
<p className="mt-8 border border-white/10 p-4 text-sm text-mute">Concept Project: created by Zunex Solutions as part of our experimental product portfolio.</p></article>)}
