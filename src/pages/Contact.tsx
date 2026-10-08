import { useState, FormEvent } from 'react'; import { supabase } from '../lib/supabase'
const services=['Web Development','SaaS Development','AI Solutions','Full Stack App Development','Social Media Solutions','Digital Marketing','SEO','Other']
const budgets=['Under $500','$500 – $1,500','$1,500 – $3,000','$3,000 – $5,000','$5,000+']
const f='w-full border border-white/10 bg-panel px-4 py-3 text-sm'
import { useSeo } from '../lib/seo'
export default function Contact(){useSeo('/contact');const [state,setState]=useState<'idle'|'loading'|'done'|'error'>('idle'),[err,setErr]=useState('')
async function submit(e:FormEvent<HTMLFormElement>){e.preventDefault();const form=e.currentTarget,d=Object.fromEntries(new FormData(form)) as Record<string,string>
if(!/^\S+@\S+\.\S+$/.test(d.email||'')||!d.name?.trim()||(d.project_details||'').trim().length<10){setErr('Please enter your name, a valid email and at least 10 characters of project details.');setState('error');return}
setState('loading');const {error}=await supabase.from('contact_submissions').insert({name:d.name.trim(),email:d.email.trim(),phone:d.phone,company:d.company,service:d.service,budget:d.budget,project_details:d.project_details.trim()})
if(error){setErr('Something went wrong. Please try again or WhatsApp us.');setState('error')}else{form.reset();setState('done')}}
return(<section className="mx-auto grid max-w-7xl gap-16 px-6 pb-24 pt-40 md:grid-cols-2"><div><h1 className="font-display text-5xl font-bold md:text-7xl">LET'S BUILD<br/>SOMETHING GREAT.</h1>
<p className="mt-8 text-mute">Sahiwal, Punjab, Pakistan</p><div className="mt-6 flex gap-3"><a className="bg-cyan px-5 py-3 text-sm text-ink" href="tel:+923106370125">Call 0310-6370125</a><a className="border border-white/20 px-5 py-3 text-sm" href="https://wa.me/923106370125">WhatsApp</a></div></div>
{state==='done'?<p role="status" className="self-center font-display text-2xl">Thanks — your project request has been received. We'll get back to you shortly.</p>:
<form onSubmit={submit} className="space-y-4" noValidate><input className={f} name="name" placeholder="Name" aria-label="Name" required/><input className={f} name="email" type="email" placeholder="Email" aria-label="Email" required/>
<input className={f} name="phone" placeholder="Phone" aria-label="Phone"/><input className={f} name="company" placeholder="Company" aria-label="Company"/>
<select className={f} name="service" aria-label="Service" defaultValue=""><option value="" disabled>Service</option>{services.map(s=><option key={s}>{s}</option>)}</select>
<select className={f} name="budget" aria-label="Budget" defaultValue=""><option value="" disabled>Budget</option>{budgets.map(s=><option key={s}>{s}</option>)}</select>
<textarea className={f} name="project_details" rows={5} placeholder="Project details" aria-label="Project details" required/>
{state==='error'&&<p role="alert" className="text-sm text-red-400">{err}</p>}
<button disabled={state==='loading'} className="bg-white px-6 py-3 text-sm font-medium text-ink disabled:opacity-50">{state==='loading'?'SENDING…':'SEND PROJECT REQUEST'}</button></form>}</section>)}
