import { lazy, Suspense } from 'react'; import { Routes, Route } from 'react-router-dom'
import Cursor from './components/Cursor'; import Loader from './components/Loader'; import PageTransition from './components/PageTransition'
import Navbar from './components/Navbar'; import Footer from './components/Footer'
const Home=lazy(()=>import('./pages/Home')), Services=lazy(()=>import('./pages/Services')), About=lazy(()=>import('./pages/About')),
Portfolio=lazy(()=>import('./pages/Portfolio')), Contact=lazy(()=>import('./pages/Contact')), CaseStudy=lazy(()=>import('./pages/CaseStudy')), Admin=lazy(()=>import('./pages/Admin')), NotFound=lazy(()=>import('./pages/NotFound'))
export default function App(){return(<><Loader/><Cursor/><PageTransition/><Navbar/><Suspense fallback={<div className="min-h-screen"/>}><main><Routes>
<Route path="/" element={<Home/>}/><Route path="/services" element={<Services/>}/><Route path="/about" element={<About/>}/>
<Route path="/portfolio" element={<Portfolio/>}/><Route path="/contact" element={<Contact/>}/><Route path="/portfolio/:slug" element={<CaseStudy/>}/><Route path="/admin" element={<Admin/>}/><Route path="*" element={<NotFound/>}/>
</Routes></main></Suspense><Footer/>
<a href="https://wa.me/923106370125" aria-label="Chat on WhatsApp" className="fixed bottom-5 right-5 z-40 rounded-full bg-cyan px-4 py-3 text-sm font-medium text-ink">WhatsApp</a></>)}
