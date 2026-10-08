import { founder, team } from '../data/team'; import { asset } from '../lib/utils'; import TeamCard from '../components/TeamCard'; import { useSeo } from '../lib/seo'
export default function About(){useSeo('/about');return(<section className="mx-auto max-w-7xl px-6 pb-24 pt-40"><h1 className="font-display text-5xl font-bold md:text-8xl">WE ARE<br/>ZUNEX SOLUTIONS.</h1>
<p className="mt-10 max-w-2xl text-lg text-mute">Zunex Solutions is a technology and digital solutions agency focused on building modern digital products, intelligent systems and high-impact online experiences. We bring together development, design, AI, marketing and strategy to help businesses turn ideas into scalable digital solutions.</p>
<div className="mt-24 grid gap-12 md:grid-cols-[360px_1fr]"><img src={asset(founder.img)} alt={founder.alt} width={800} height={1200} className="aspect-[3/4] w-full object-cover"/>
<div><p className="text-xs tracking-[.3em] text-cyan">FOUNDER'S MESSAGE</p>
<blockquote className="mt-6 space-y-4 font-display text-xl leading-relaxed"><p>"At Zunex Solutions, my vision is simple: build technology that creates real value.</p>
<p className="text-mute">I believe great digital products are not created by technology alone. They are created by understanding people, solving the right problems and combining thoughtful design with reliable engineering.</p>
<p className="text-mute">Our goal is to help businesses move from ideas to practical digital solutions that are built to perform, scale and evolve.</p>
<p className="text-mute">We are not here to simply build websites or applications. We are here to build digital systems that help businesses move forward."</p></blockquote>
<p className="mt-8 font-medium">{founder.name}</p><p className="text-sm text-mute">{founder.role}, Zunex Solutions</p></div></div>
<h2 className="mt-32 font-display text-4xl font-bold md:text-6xl">OUR TEAM</h2><p className="mt-4 text-mute">The people building your product.</p>
<div className="mt-12 grid gap-6 md:grid-cols-3">{team.map(m=><TeamCard key={m.slug} m={m}/>)}</div></section>)}
