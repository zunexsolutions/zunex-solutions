// Post-build SEO step: writes a real HTML file per route (title, meta, canonical, JSON-LD, crawlable content), sitemap.xml and robots.txt.
import fs from 'fs'
const seo=JSON.parse(fs.readFileSync('src/data/seo.json','utf8'))
const blog=JSON.parse(fs.readFileSync('src/data/blog.json','utf8')),products=JSON.parse(fs.readFileSync('src/data/products.json','utf8'))
const SITE=(process.env.VITE_SITE_URL||seo.site).replace(/\/$/,'')
const tpl=fs.readFileSync('dist/index.html','utf8').replaceAll('__SITE__',SITE)
const esc=s=>s.replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;')
const nav=['/','/services','/about','/products','/blog','/contact'].map(r=>`<a href="${SITE}${r==='/'?'/':r+'/'}">${r==='/'?'Home':r.slice(1)}</a>`).join(' ')
const ld=o=>`<script type="application/ld+json">${JSON.stringify(o)}</script>`
function build(route,e,noindex=false){
 const url=SITE+(route==='/'?'/':route+'/'); let h=tpl
 h=h.replace(/<title>.*?<\/title>/,`<title>${esc(e.title)}</title>`)
 h=h.replace(/<meta name="description"[^>]*>/,`<meta name="description" content="${esc(e.description)}"/>`)
 h=h.replace(/<meta name="robots"[^>]*>/,`<meta name="robots" content="${noindex?'noindex,nofollow':'index,follow,max-image-preview:large'}"/>`)
 h=h.replace(/<link rel="canonical"[^>]*>/,`<link rel="canonical" href="${url}"/>`)
 h=h.replace(/<meta property="og:title"[^>]*>/,`<meta property="og:title" content="${esc(e.title)}"/>`).replace(/<meta property="og:description"[^>]*>/,`<meta property="og:description" content="${esc(e.description)}"/>`).replace(/<meta property="og:url"[^>]*>/,`<meta property="og:url" content="${url}"/>`)
 h=h.replace(/<meta name="twitter:title"[^>]*>/,`<meta name="twitter:title" content="${esc(e.title)}"/>`).replace(/<meta name="twitter:description"[^>]*>/,`<meta name="twitter:description" content="${esc(e.description)}"/>`)
 let extra=''
 if(route==='/') extra+=ld({'@context':'https://schema.org','@type':'FAQPage',mainEntity:seo.faq.map(([q,a])=>({'@type':'Question',name:q,acceptedAnswer:{'@type':'Answer',text:a}}))})
 else if(!noindex){const parts=route.split('/').filter(Boolean);extra+=ld({'@context':'https://schema.org','@type':'BreadcrumbList',itemListElement:[{'@type':'ListItem',position:1,name:'Home',item:SITE+'/'},...parts.map((p,i)=>({'@type':'ListItem',position:i+2,name:seo.pages['/'+parts.slice(0,i+1).join('/')]?.h1||p,item:SITE+'/'+parts.slice(0,i+1).join('/')+'/'}))]})}
 const post=blog.find(b=>'/blog/'+b.slug===route)
 if(post) extra+=ld({'@context':'https://schema.org','@type':'Article',headline:post.title,description:post.description,datePublished:post.date,dateModified:post.updated,keywords:post.keyword,articleSection:post.category,author:{'@type':'Organization',name:'Zunex Solutions',url:SITE+'/'},publisher:{'@type':'Organization',name:'Zunex Solutions',logo:{'@type':'ImageObject',url:SITE+'/og.png'}},mainEntityOfPage:url,image:SITE+'/og.png'})
 const prod=products.find(x=>'/products/'+x.slug===route)
 if(prod) extra+=ld({'@context':'https://schema.org','@type':'SoftwareApplication',name:prod.name,applicationCategory:'BusinessApplication',description:prod.summary,provider:{'@type':'Organization',name:'Zunex Solutions',url:SITE+'/'},url:url})
 h=h.replace('</head>',extra+'</head>')
 const body=prod?`<p>${esc(prod.tagline)}</p><ul>${prod.features.map(i=>`<li>${esc(i)}</li>`).join('')}</ul>`:post?`<p>${esc(post.intro)}</p>`+post.sections.map(x=>`<h2>${esc(x.h)}</h2>`+x.p.map(t=>`<p>${esc(t)}</p>`).join('')+(x.l?`<ul>${x.l.map(i=>`<li>${esc(i)}</li>`).join('')}</ul>`:'')).join(''):''
 return h.replace('<div id="root"></div>',`<div id="root"><main><h1>${esc(e.h1||e.title)}</h1><p>${esc(e.description)}</p>${body}<nav aria-label="Main">${nav}</nav></main></div>`)
}
const urls=[]
for(const [route,e] of Object.entries(seo.pages)){
 const out=route==='/'?'dist/index.html':`dist${route}/index.html`
 fs.mkdirSync(out.replace(/\/index\.html$/,''),{recursive:true}); fs.writeFileSync(out,build(route,e)); urls.push(SITE+(route==='/'?'/':route+'/'))}
fs.writeFileSync('dist/404.html',build('/404',{title:'Page not found | Zunex Solutions',description:'This page could not be found.',h1:'Page not found'},true))
const d=new Date().toISOString().slice(0,10)
fs.writeFileSync('dist/sitemap.xml',`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.map(u=>`<url><loc>${u}</loc><lastmod>${d}</lastmod></url>`).join('')}</urlset>`)
fs.writeFileSync('dist/robots.txt',`User-agent: *\nAllow: /\nDisallow: /admin\n\nSitemap: ${SITE}/sitemap.xml\n`)
console.log('prerendered',urls.length,'pages')
