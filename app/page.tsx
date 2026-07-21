"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

type RevealProps = { children: React.ReactNode; className?: string };

const services = [
  { number: "01", title: "Design systems", text: "Distinct visual systems and conversion-led interfaces that give your brand a clear point of view." },
  { number: "02", title: "Web development", text: "Fast, scalable Next.js sites engineered around the experience your customers actually need." },
  { number: "03", title: "Performance + SEO", text: "Technical optimization that makes pages load fast, surface clearly, and turn traffic into action." },
  { number: "04", title: "CMS + automation", text: "Sanity CMS and n8n workflows that let your team publish, connect systems, and move faster after launch." },
];

function Reveal({ children, className = "" }: RevealProps) {
  return <motion.div className={`reveal ${className}`} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.16 }} transition={{ duration: 0.75, ease: [0.2, 0.7, 0.2, 1] }}>{children}</motion.div>;
}

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const [pointer, setPointer] = useState({ x: 74, y: 40 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    const move = (event: PointerEvent) => {
      const rect = hero.getBoundingClientRect();
      setPointer({ x: ((event.clientX - rect.left) / rect.width) * 100, y: ((event.clientY - rect.top) / rect.height) * 100 });
    };
    hero.addEventListener("pointermove", move);
    return () => hero.removeEventListener("pointermove", move);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add("is-visible"); });
    }, { threshold: 0.14 });
    const elements = document.querySelectorAll(".reveal");
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const interactionStyle = { "--x": `${pointer.x}%`, "--y": `${pointer.y}%`, "--dx": `${(pointer.x - 50) * 1.4}px`, "--dy": `${(pointer.y - 50) * 1.1}px`, "--tilt-x": `${(pointer.y - 50) * -0.08}deg`, "--tilt-y": `${(pointer.x - 50) * 0.08}deg` } as React.CSSProperties;

  return (
    <main className="site-shell">
      <section className={`hero ${isHovering ? "is-hovering" : ""}`} id="top" ref={heroRef} style={interactionStyle} onPointerEnter={() => setIsHovering(true)} onPointerLeave={() => setIsHovering(false)}>
        <nav className="navbar" aria-label="Main navigation">
          <div className="nav-pill"><a className="wordmark" href="#top">CYLVOX<span>.</span></a><div className="nav-links"><a href="#services">Services</a><a href="#proof">Results</a><a href="#process">Process</a></div><a className="nav-cta" href="#contact">Let&apos;s talk <ArrowUpRight /></a></div>
        </nav>
        <div className="hero-art" aria-hidden="true"><div className="dot-grid" /><div className="dot-grid dot-grid-active" /><div className="ribbon-wrap"><div className="ribbon" /></div><div className="grain" /><p className="reveal-hint"><span /> Move across the field</p></div>
        <div className="hero-copy"><p className="eyebrow"><span /> Independent digital agency</p><h1>Make your<br /><em>next move</em><br />matter.</h1><p className="description">We design, develop, and optimize digital systems for ambitious brands ready to be impossible to ignore.</p><a href="#contact" className="primary-cta">Start a project <ArrowUpRight /></a></div>
        <div className="hero-meta"><div className="location-card">Sri Lanka &middot; Working globally</div><p>Scroll to explore <b>&darr;</b></p></div>
      </section>

      <section className="services section" id="services">
        <Reveal className="section-head"><p className="kicker">What we do</p><h2>Every part of your site should <em>pull forward.</em></h2></Reveal>
        <div className="service-grid">
          {services.map((service, index) => <Reveal className="service-card" key={service.number}><span className="service-number">{service.number}</span><div><h3>{service.title}</h3><p>{service.text}</p></div><span className="service-arrow"><ArrowUpRight /></span></Reveal>)}
        </div>
      </section>

      <section className="proof-band" id="proof">
        <div className="proof-inner section">
          <Reveal><p className="kicker light">The cost of slow</p><h2>Good work deserves a <em>fast</em> home.</h2></Reveal>
          <div className="metric-grid"><Reveal className="metric"><strong>54 <i>&rarr;</i> 99</strong><span>PageSpeed score</span></Reveal><Reveal className="metric"><strong>13.4s <i>&rarr;</i> 0.8s</strong><span>Largest Contentful Paint</span></Reveal><Reveal className="metric"><strong>100%</strong><span>Built around your team</span></Reveal></div>
          <Reveal className="proof-note"><span className="pulse" /> One anonymous case study. Real numbers. No smoke and mirrors.</Reveal>
        </div>
      </section>

      <section className="process section" id="process">
        <Reveal className="section-head process-head"><p className="kicker">How we work</p><h2>A clear path from <em>idea to impact.</em></h2><p>Small senior team. Direct conversations. No handoffs into a black box.</p></Reveal>
        <div className="process-track">
          {[['01','Align','We get close to the ambition, audience, and constraints before making a thing.'],['02','Shape','We make the strategy visible through a distinctive system and an experience map.'],['03','Build','We develop the site with performance, accessibility, and content operations built in.'],['04','Refine','We measure, learn, and keep moving the parts that make the biggest difference.']].map(([number,title,text]) => <Reveal className="process-step" key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p><div className="step-line" /></Reveal>)}
        </div>
      </section>

      <section className="closing section" id="contact"><Reveal><p className="kicker light">Have a project in mind?</p><h2>Let&apos;s build the thing<br />people <em>remember.</em></h2><a href="mailto:hello@cylvox.com" className="primary-cta light-cta">Start a conversation <ArrowUpRight /></a></Reveal></section>
      <footer><a className="wordmark" href="#top">CYLVOX<span>.</span></a><p>Designing better ways forward.</p><p>&copy; 2026 Cylvox</p></footer>
    </main>
  );
}