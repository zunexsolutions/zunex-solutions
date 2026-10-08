import { Link } from 'react-router-dom'
export default function NotFound(){return(<section className="flex min-h-screen flex-col items-center justify-center px-6 text-center"><p className="font-display text-8xl text-cyan">404</p>
<h1 className="mt-4 font-display text-3xl">LOOKS LIKE THIS PAGE<br/>LEFT THE SYSTEM.</h1><Link to="/" className="mt-8 bg-white px-6 py-3 text-sm text-ink">BACK HOME</Link></section>)}
