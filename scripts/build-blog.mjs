// Turns content/posts/*.md into src/data/blog.json and the blog entries in src/data/seo.json. Runs before every build.
import fs from 'fs'
const dir='content/posts', fail=m=>{console.error('\nBLOG ERROR: '+m+'\n');process.exit(1)}
const posts=[]
for(const f of fs.readdirSync(dir).filter(f=>f.endsWith('.md')&&!f.startsWith('_'))){
 if(!/^[a-z0-9-]+\.md$/.test(f)) fail(`File name "${f}" must be lowercase letters, numbers and hyphens only.`)
 const m=fs.readFileSync(`${dir}/${f}`,'utf8').replace(/\r\n/g,'\n').match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/)
 if(!m) fail(`${f}: missing the --- header block at the top.`)
 const fm={sources:[]};let src=false
 for(const line of m[1].split('\n')){
  if(src&&line.startsWith('- ')){const t=line.slice(2),i=t.lastIndexOf(' | ');if(i<0)fail(`${f}: source must look like "Name | https://link"`);fm.sources.push([t.slice(0,i).trim(),t.slice(i+3).trim()]);continue}
  const k=line.match(/^(\w+):\s*(.*)$/);if(!k)continue;src=k[1]==='sources';if(!src)fm[k[1]]=k[2].trim()}
 for(const k of ['title','description','keyword','category','date']) if(!fm[k]) fail(`${f}: "${k}" is missing.`)
 if(!/^\d{4}-\d{2}-\d{2}$/.test(fm.date)) fail(`${f}: date must be YYYY-MM-DD.`)
 fm.kind=fm.kind==='guide'?'guide':'news'
 if(fm.kind==='news'&&!fm.sources.length) fail(`${f}: news posts need at least one source.`)
 if(fm.description.length>160) console.warn(`warning: ${f} description is ${fm.description.length} chars (aim under 155).`)
 const seoTitle=fm.seoTitle||`${fm.title} | Zunex Solutions`
 if(seoTitle.length>65) console.warn(`warning: ${f} seoTitle is ${seoTitle.length} chars (aim under 60).`)
 const [introRaw,...parts]=m[2].split(/^## /m)
 const sections=parts.map(p=>{const [h,...rest]=p.split('\n'),s={h:h.trim(),p:[]};const l=[]
  for(const b of rest.join('\n').trim().split(/\n\s*\n/)){const t=b.trim();if(!t)continue;if(t.startsWith('- '))l.push(...t.split('\n').map(x=>x.replace(/^- /,'').trim()));else s.p.push(t.replace(/\n/g,' '))}
  if(l.length)s.l=l;return s})
 const intro=introRaw.trim().replace(/\n+/g,' ');if(!intro)fail(`${f}: add an opening paragraph under the header block.`)
 const words=[intro,...sections.flatMap(s=>[...s.p,...(s.l||[])])].join(' ').split(/\s+/).length
 posts.push({slug:f.replace(/\.md$/,''),title:fm.title,description:fm.description,keyword:fm.keyword,category:fm.category,kind:fm.kind,date:fm.date,updated:fm.updated||fm.date,readMin:Math.max(2,Math.round(words/200)),seoTitle,intro,sections,sources:fm.sources})
}
posts.sort((a,b)=>b.date.localeCompare(a.date)||(a.kind==='guide')-(b.kind==='guide')||a.slug.localeCompare(b.slug))
fs.writeFileSync('src/data/blog.json',JSON.stringify(posts,null,1))
const seo=JSON.parse(fs.readFileSync('src/data/seo.json','utf8'))
for(const k of Object.keys(seo.pages)) if(k.startsWith('/blog/')) delete seo.pages[k]
for(const p of posts) seo.pages['/blog/'+p.slug]={h1:p.title,title:p.seoTitle,description:p.description}
fs.writeFileSync('src/data/seo.json',JSON.stringify(seo,null,1))
console.log(`blog: ${posts.length} posts`)
