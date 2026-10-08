import { useEffect, useState, FormEvent } from 'react'; import { supabase } from '../lib/supabase'
type Row={id:string;name:string;email:string;phone:string|null;company:string|null;service:string|null;budget:string|null;project_details:string;status:string;created_at:string}
const statuses=['new','contacted','in_progress','completed','archived']
import { useSeo } from '../lib/seo'
export default function Admin(){useSeo('/admin',true,{title:'Admin | Zunex Solutions',description:'Private area.'});const [authed,setAuthed]=useState(false),[rows,setRows]=useState<Row[]>([]),[msg,setMsg]=useState('')
const load=async()=>{const {data,error}=await supabase.from('contact_submissions').select('*').order('created_at',{ascending:false});if(error)setMsg(error.message);else setRows(data as Row[])}
useEffect(()=>{supabase.auth.getSession().then(({data})=>{if(data.session){setAuthed(true);load()}})},[])
async function login(e:FormEvent<HTMLFormElement>){e.preventDefault();const d=new FormData(e.currentTarget);const {error}=await supabase.auth.signInWithPassword({email:String(d.get('email')),password:String(d.get('password'))});if(error)setMsg('Login failed.');else{setMsg('');setAuthed(true);load()}}
const setStatus=async(id:string,status:string)=>{await supabase.from('contact_submissions').update({status}).eq('id',id);load()}
const del=async(id:string)=>{if(confirm('Delete this submission?')){await supabase.from('contact_submissions').delete().eq('id',id);load()}}
const i='border border-white/10 bg-panel px-4 py-3 text-sm'
if(!authed)return(<section className="mx-auto max-w-sm px-6 pt-40"><h1 className="font-display text-3xl">Admin</h1><form onSubmit={login} className="mt-6 flex flex-col gap-3"><input className={i} name="email" type="email" placeholder="Email" aria-label="Email"/><input className={i} name="password" type="password" placeholder="Password" aria-label="Password"/><button className="bg-white px-4 py-3 text-sm text-ink">SIGN IN</button>{msg&&<p role="alert" className="text-sm text-red-400">{msg}</p>}</form></section>)
return(<section className="mx-auto max-w-7xl px-6 pb-24 pt-40"><div className="flex justify-between"><h1 className="font-display text-3xl">Submissions ({rows.length})</h1><button className="text-sm text-mute" onClick={async()=>{await supabase.auth.signOut();setAuthed(false)}}>Sign out</button></div>{msg&&<p className="text-red-400">{msg}</p>}
<ul className="mt-8 space-y-4">{rows.map(r=><li key={r.id} className="border border-white/10 bg-panel p-5"><div className="flex flex-wrap justify-between gap-2"><strong>{r.name}</strong><span className="text-xs text-mute">{new Date(r.created_at).toLocaleString()}</span></div>
<p className="text-sm text-mute">{r.email} · {r.phone||'—'} · {r.company||'—'} · {r.service||'—'} · {r.budget||'—'}</p><p className="mt-3 whitespace-pre-wrap text-sm">{r.project_details}</p>
<div className="mt-4 flex gap-3"><select aria-label="Status" className={i} value={r.status} onChange={e=>setStatus(r.id,e.target.value)}>{statuses.map(s=><option key={s}>{s}</option>)}</select><button className="text-sm text-red-400" onClick={()=>del(r.id)}>Delete</button></div></li>)}</ul></section>)}
