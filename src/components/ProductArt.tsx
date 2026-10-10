import type { ReactNode } from 'react'
const ACC:Record<string,string>={voxpilot:'#00BCD4',opsloom:'#6C63FF',bazaario:'#3B82F6',vitrina:'#14B8A6',chatsetu:'#34D399'}
export function Mark({slug,className}:{slug:string;className?:string}){const c=ACC[slug]??'#00BCD4';let d:ReactNode
if(slug==='voxpilot')d=<><circle cx="32" cy="32" r="27"/><path d="M20 26V38M26 19V45M32 13V51M38 21V43M44 27V37"/></>
else if(slug==='opsloom')d=<><path d="M10 20H54M10 32H54M10 44H54M20 10V54M32 10V54M44 10V54"/>{[20,32,44].flatMap(x=>[20,32,44].map(y=><circle key={x+'-'+y} cx={x} cy={y} r="2.6" fill={c} stroke="none"/>))}</>
else if(slug==='bazaario')d=<><path d="M16 24H48L52 54H12Z"/><path d="M24 24C24 12 40 12 40 24"/><circle cx="32" cy="39" r="3" fill={c} stroke="none"/></>
else if(slug==='vitrina')d=<><path d="M10 24L16 10H48L54 24Z"/><path d="M14 24V54H50V24"/><path d="M26 54V38H38V54"/></>
else d=<><path d="M8 14H36V34H20L12 42V34H8Z"/><path d="M28 28H56V48H52V56L44 48H28Z"/></>
return <svg viewBox="0 0 64 64" fill="none" stroke={c} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>{d}</svg>}
export default function ProductArt({slug,name,compact}:{slug:string;name:string;compact?:boolean}){const c=ACC[slug]??'#00BCD4'
return(<div role="img" aria-label={`${name} logo`} className="relative flex aspect-[16/10] w-full items-center justify-center overflow-hidden border border-white/10" style={{background:`radial-gradient(circle at 28% 18%, ${c}30, transparent 55%), linear-gradient(135deg,#0B0F19,#050505)`}}>
<span aria-hidden className="absolute aspect-square w-[95%] rounded-full border" style={{borderColor:`${c}1f`}}/>
<span aria-hidden className="absolute aspect-square w-[68%] animate-[spin_60s_linear_infinite] rounded-full border border-dashed" style={{borderColor:`${c}40`}}/>
<div className="relative flex flex-col items-center gap-3"><div className="rounded-md border p-4" style={{borderColor:`${c}55`,background:`${c}14`,boxShadow:`0 0 60px ${c}33`}}><Mark slug={slug} className={compact?'h-12 w-12':'h-16 w-16 md:h-20 md:w-20'}/></div><p className="font-display text-lg tracking-wide">{name}</p></div></div>)}
