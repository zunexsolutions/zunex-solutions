import { useEffect, useRef } from 'react'
export default function ScrollProgress(){const r=useRef<HTMLDivElement>(null)
useEffect(()=>{const f=()=>{const h=document.documentElement.scrollHeight-innerHeight;if(r.current)r.current.style.transform=`scaleX(${h>0?scrollY/h:0})`};f();addEventListener('scroll',f,{passive:true});addEventListener('resize',f);return()=>{removeEventListener('scroll',f);removeEventListener('resize',f)}},[])
return <div ref={r} aria-hidden className="fixed left-0 top-0 z-[65] h-[2px] w-full origin-left scale-x-0 bg-cyan"/>}
