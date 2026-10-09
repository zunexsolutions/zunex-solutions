import raw from './blog.json'
export type Section={h:string;p:string[];l?:string[]}
export type Post={slug:string;title:string;description:string;keyword:string;category:string;kind:'news'|'guide';date:string;updated:string;readMin:number;intro:string;sections:Section[];sources:[string,string][]}
export const posts=raw as unknown as Post[]
export const categories=['All',...Array.from(new Set(posts.map(p=>p.category)))]
export const fmtDate=(d:string)=>new Date(d).toLocaleDateString('en-GB',{day:'numeric',month:'long',year:'numeric'})
