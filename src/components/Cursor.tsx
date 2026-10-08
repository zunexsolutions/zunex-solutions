import { useEffect, useRef, useState } from 'react'; import gsap from 'gsap'
export default function Cursor(){const dot=useRef<HTMLDivElement>(null),ring=useRef<HTMLDivElement>(null),[label,setLabel]=useState('')
useEffect(()=>{if(!matchMedia('(pointer:fine)').matches)return
const dx=gsap.quickTo(dot.current,'x',{duration:.05}),dy=gsap.quickTo(dot.current,'y',{duration:.05}),rx=gsap.quickTo(ring.current,'x',{duration:.4}),ry=gsap.quickTo(ring.current,'y',{duration:.4})
const mv=(e:MouseEvent)=>{dx(e.clientX);dy(e.clientY);rx(e.clientX);ry(e.clientY)}
const ov=(e:MouseEvent)=>{const t=(e.target as HTMLElement).closest('a,button,[data-cursor]') as HTMLElement|null;setLabel(t?(t.dataset.cursor||'OPEN'):'');gsap.to(ring.current,{scale:t?1.8:1,duration:.3})}
addEventListener('mousemove',mv);addEventListener('mouseover',ov);return()=>{removeEventListener('mousemove',mv);removeEventListener('mouseover',ov)}},[])
if(typeof matchMedia!=='undefined'&&!matchMedia('(pointer:fine)').matches)return null
return(<><div ref={dot} aria-hidden className="pointer-events-none fixed left-0 top-0 z-[60] -ml-1 -mt-1 h-2 w-2 rounded-full bg-cyan"/><div ref={ring} aria-hidden className="pointer-events-none fixed left-0 top-0 z-[60] -ml-6 -mt-6 flex h-12 w-12 items-center justify-center rounded-full border border-white/30 text-[7px] tracking-widest">{label}</div></>)}
