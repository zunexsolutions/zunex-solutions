import { useEffect, useRef, useState } from 'react'; import { NavLink, Link, useLocation } from 'react-router-dom'; import gsap from 'gsap'
const links=[['/','Home'],['/services','Services'],['/about','About'],['/products','Products'],['/blog','Blog'],['/contact','Contact']]
export default function Navbar(){const [open,setOpen]=useState(false),[solid,setSolid]=useState(false),m=useRef<HTMLDivElement>(null),loc=useLocation()
useEffect(()=>{const f=()=>setSolid(scrollY>40);f();addEventListener('scroll',f,{passive:true});return()=>removeEventListener('scroll',f)},[])
useEffect(()=>{setOpen(false);scrollTo(0,0)},[loc.pathname])
useEffect(()=>{document.body.style.overflow=open?'hidden':'';if(open&&m.current)gsap.fromTo(m.current.querySelectorAll('a'),{y:30,opacity:0},{y:0,opacity:1,stagger:.06,duration:.6,ease:'power3.out'})},[open])
return(<header className={`fixed inset-x-0 top-0 z-30 border-b transition-colors ${solid||open?'border-white/10 bg-ink/80 backdrop-blur':'border-transparent'}`}><nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4" aria-label="Main">
<Link to="/" className="relative z-40 font-display font-bold tracking-widest">ZUNEX <span className="font-normal text-mute">SOLUTIONS</span></Link>
<ul className="hidden gap-8 md:flex">{links.map(([to,l])=><li key={to}><NavLink to={to} className={({isActive})=>`text-sm transition-colors ${isActive?'text-cyan':'text-mute hover:text-white'}`}>{l}</NavLink></li>)}</ul>
<Link to="/contact" className="hidden bg-white px-4 py-2 text-xs font-medium text-ink md:block">START A PROJECT →</Link>
<button className="relative z-40 text-sm md:hidden" aria-expanded={open} aria-controls="mobile-menu" onClick={()=>setOpen(!open)}>{open?'CLOSE':'MENU'}</button></nav>
{open&&<div id="mobile-menu" ref={m} className="fixed inset-0 z-30 flex flex-col justify-center gap-6 bg-ink px-6 md:hidden">{links.map(([to,l])=><Link key={to} to={to} className="font-display text-5xl font-bold">{l}</Link>)}</div>}</header>)}
