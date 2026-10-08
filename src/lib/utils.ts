export const asset=(p:string)=>import.meta.env.BASE_URL+p
export const slugify=(s:string)=>s.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,'')
