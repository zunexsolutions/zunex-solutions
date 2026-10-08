import { Link } from 'react-router-dom'
const nav=[['/','Home'],['/services','Services'],['/about','About'],['/portfolio','Portfolio'],['/blog','Blog'],['/contact','Contact']]
const svc=['Web Development','SaaS Development','AI Solutions','App Development','Digital Marketing','SEO']
export default function Footer(){return(<footer className="border-t border-white/10 px-6 py-16"><div className="mx-auto max-w-7xl">
<div className="grid gap-10 md:grid-cols-4"><div className="md:col-span-2"><p className="font-display text-xl font-bold tracking-widest">ZUNEX SOLUTIONS</p><p className="mt-3 max-w-sm text-mute">Powering the Future, One Solution at a Time.</p></div>
<nav aria-label="Footer"><p className="mb-3 text-xs tracking-widest text-cyan">PAGES</p><ul className="space-y-2 text-sm text-mute">{nav.map(([t,l])=><li key={t}><Link className="hover:text-white" to={t}>{l}</Link></li>)}</ul></nav>
<div><p className="mb-3 text-xs tracking-widest text-cyan">SERVICES</p><ul className="space-y-2 text-sm text-mute">{svc.map(s=><li key={s}><Link className="hover:text-white" to="/services">{s}</Link></li>)}</ul></div></div>
<p className="mt-10 text-sm text-mute">0310-6370125 · Sahiwal, Punjab, Pakistan</p>
<p className="mt-10 font-display text-[18vw] font-bold leading-none text-white/5" aria-hidden>ZUNEX</p>
<p className="mt-4 text-xs text-mute">© 2026 Zunex Solutions. All rights reserved.</p></div></footer>)}
