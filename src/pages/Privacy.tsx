import { useSeo } from '../lib/seo'
const S=({h,children}:{h:string;children:React.ReactNode})=><section className="mt-10"><h2 className="font-display text-2xl">{h}</h2><div className="mt-3 space-y-3 text-mute">{children}</div></section>
export default function Privacy(){useSeo('/privacy');return(<article className="mx-auto max-w-3xl px-6 pb-24 pt-40"><h1 className="font-display text-5xl font-bold">Privacy Policy</h1><p className="mt-4 text-sm text-mute">Last updated 9 October 2026</p>
<p className="mt-8 text-mute">This policy explains what information Zunex Solutions (Sahiwal, Punjab, Pakistan) collects through this website and how we use it.</p>
<S h="What we collect"><p>When you send a project request we collect the details you type into the form: name, email, phone, company, the service or product you are interested in, budget range and project details. If you call or message us on WhatsApp, we see the number and messages you send.</p></S>
<S h="How we use it"><p>We use this information only to reply to you, discuss your project and send a quote. We do not sell your information.</p></S>
<S h="Where it is stored"><p>Form submissions are stored in a database hosted by Supabase and are visible only to authorised Zunex Solutions staff. WhatsApp and phone calls are handled by those services under their own policies.</p></S>
<S h="Cookies and tracking"><p>This website does not use advertising or analytics cookies at the time of writing. If that changes, we will update this page.</p></S>
<S h="How long we keep it"><p>We keep enquiries for as long as needed to respond and keep business records, then delete them.</p></S>
<S h="Your choices"><p>You can ask us to show, correct or delete the information you sent us. Call or message us on +92-310-6370125 and we will help.</p></S>
<S h="Changes"><p>We may update this policy and will change the date above when we do.</p></S></article>)}
