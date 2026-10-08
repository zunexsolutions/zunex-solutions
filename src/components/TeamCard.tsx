import { useRef, MouseEvent } from 'react'; import gsap from 'gsap'; import { asset } from '../lib/utils'; import type { Member } from '../data/team'
export default function TeamCard({m}:{m:Member}){const r=useRef<HTMLElement>(null)
const mv=(e:MouseEvent)=>{if(!matchMedia('(pointer:fine)').matches)return;const b=r.current!.getBoundingClientRect(),x=(e.clientX-b.left)/b.width-.5,y=(e.clientY-b.top)/b.height-.5;gsap.to(r.current,{rotateY:x*8,rotateX:-y*8,transformPerspective:900,duration:.5,ease:'power3.out'})}
const lv=()=>{gsap.to(r.current,{rotateX:0,rotateY:0,duration:.6,ease:'power3.out'})}
return(<article ref={r} onMouseMove={mv} onMouseLeave={lv} className="group border border-white/10 bg-panel transition-colors hover:border-cyan/50">
<div className="flex aspect-[4/5] items-end justify-center overflow-hidden bg-gradient-to-b from-deep to-[#101830]">
<img src={asset(m.img)} alt={m.alt} width={700} height={875} loading="lazy" className={m.cutout?'h-[92%] w-auto max-w-full object-contain':'h-full w-full object-cover object-top'}/></div>
<div className="p-5"><h3 className="font-display text-xl">{m.name}</h3><p className="mt-1 text-sm text-cyan">{m.role}</p>
<ul className="mt-4 flex flex-wrap gap-2">{m.focus.map(f=><li key={f} className="border border-white/10 px-2 py-1 text-xs text-mute">{f}</li>)}</ul></div></article>)}
