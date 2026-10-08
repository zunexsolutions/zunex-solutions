import { useEffect } from 'react'; import seo from '../data/seo.json'
type E={title:string;description:string}
const SITE=((import.meta.env.VITE_SITE_URL as string|undefined)??seo.site).replace(/\/$/,'')
export function useSeo(path:string,noindex=false,fallback?:E){useEffect(()=>{
const e=(seo.pages as unknown as Record<string,E>)[path]??fallback;if(!e)return
document.title=e.title;const url=SITE+(path==='/'?'/':path+'/')
const m=(n:string,c:string,prop=false)=>{const k=prop?'property':'name';let el=document.head.querySelector(`meta[${k}="${n}"]`);if(!el){el=document.createElement('meta');el.setAttribute(k,n);document.head.appendChild(el)}el.setAttribute('content',c)}
m('description',e.description);m('robots',noindex?'noindex,nofollow':'index,follow,max-image-preview:large')
m('og:title',e.title,true);m('og:description',e.description,true);m('og:url',url,true);m('twitter:title',e.title);m('twitter:description',e.description)
let l=document.head.querySelector('link[rel=canonical]');if(!l){l=document.createElement('link');l.setAttribute('rel','canonical');document.head.appendChild(l)}l.setAttribute('href',url)},[path,noindex])}
