import { ReactNode, useRef, MouseEvent } from 'react'; import gsap from 'gsap'
export default function Magnetic({children,strength=.3}:{children:ReactNode;strength?:number}){const r=useRef<HTMLSpanElement>(null)
const mv=(e:MouseEvent)=>{const b=r.current!.getBoundingClientRect();gsap.to(r.current,{x:(e.clientX-b.left-b.width/2)*strength,y:(e.clientY-b.top-b.height/2)*strength,duration:.4,ease:'power3.out'})}
const lv=()=>{gsap.to(r.current,{x:0,y:0,duration:.6,ease:'power3.out'})}
return <span ref={r} onMouseMove={mv} onMouseLeave={lv} className="inline-block">{children}</span>}
