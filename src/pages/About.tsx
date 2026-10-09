import TeamRow from '../components/TeamRow'; import Founder from '../components/Founder'; import { useSeo } from '../lib/seo'
export default function About(){useSeo('/about');return(<section className="mx-auto max-w-7xl px-6 pb-24 pt-40"><h1 className="font-display text-5xl font-bold md:text-8xl">WE ARE<br/>ZUNEX SOLUTIONS.</h1>
<p className="mt-10 max-w-2xl text-lg text-mute">Zunex Solutions is a technology and digital solutions agency focused on building modern digital products, intelligent systems and high-impact online experiences. We bring together development, design, AI, marketing and strategy to help businesses turn ideas into scalable digital solutions.</p>
<Founder/>
<h2 className="mt-32 font-display text-4xl font-bold md:text-6xl">OUR TEAM</h2><p className="mt-4 text-mute">The people building your product.</p><div className="mt-8"><TeamRow/></div></section>)}
