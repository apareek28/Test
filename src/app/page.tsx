'use client';

import { useEffect, useMemo, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import { AnimatedSection } from '@/components/animated-section';

const heroTitle = 'Engineering Intelligent Automation for the Future';

const logos = ['Fortivon', 'Nexora', 'CloudSpring', 'ArcLedger', 'Velora'];
const insights = [
  { title: 'Designing AI Workflows for Regulated Industries', category: 'AI' },
  { title: 'Salesforce Patterns that Improve Revenue Operations', category: 'Salesforce' },
  { title: 'Automation Architecture for Fortune 500 Teams', category: 'Automation' },
  { title: 'Cloud Operating Models Built for Scale', category: 'Cloud' }
];

function Counter({ value, suffix }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const [node, setNode] = useState<HTMLSpanElement | null>(null);
  const inView = useInView(node, { once: true, margin: '-20% 0px' });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1300;
    const startTime = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      start = Math.floor(value * progress);
      setCount(start);
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [inView, value]);

  return (
    <span ref={setNode}>
      {count}
      {suffix}
    </span>
  );
}

export default function HomePage() {
  const [activeCase, setActiveCase] = useState(0);
  const [filter, setFilter] = useState('All');
  const [mouse, setMouse] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleMove = (event: MouseEvent) => {
      setMouse({ x: (event.clientX / window.innerWidth) * 100, y: (event.clientY / window.innerHeight) * 100 });
    };
    window.addEventListener('mousemove', handleMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => setActiveCase((prev) => (prev + 1) % 3), 4000);
    return () => window.clearInterval(timer);
  }, []);

  const filteredInsights = useMemo(
    () => insights.filter((item) => filter === 'All' || item.category === filter),
    [filter]
  );

  return (
    <>
      <div
        className="pointer-events-none fixed inset-0 z-0 transition-all duration-500"
        style={{ background: `radial-gradient(circle at ${mouse.x}% ${mouse.y}%, rgba(201,182,255,.2), transparent 22%)` }}
      />

      <section id="home" className="relative z-10 section-padding overflow-hidden">
        <div className="noise absolute inset-0 opacity-60" />
        <motion.div
          animate={{ y: [0, -14, 0] }}
          transition={{ repeat: Infinity, duration: 9, ease: 'easeInOut' }}
          className="absolute left-0 top-20 h-72 w-72 rounded-full bg-primary/35 blur-[100px]"
        />
        <motion.div
          animate={{ y: [0, 16, 0] }}
          transition={{ repeat: Infinity, duration: 10, ease: 'easeInOut' }}
          className="absolute right-6 top-24 h-72 w-72 rounded-full bg-sky/40 blur-[105px]"
        />

        <div className="container-wrap grid min-h-[86vh] items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="glass inline-block rounded-full px-4 py-1 text-sm text-slate-600">AI + Salesforce Intelligence</p>
            <h1 className="mt-6 text-5xl font-semibold leading-tight text-slate-800 md:text-6xl">
              {heroTitle.split('').map((letter, idx) => (
                <motion.span
                  key={`${letter}-${idx}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.02, duration: 0.6 }}
                >
                  {letter}
                </motion.span>
              ))}
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted">
              We unify enterprise AI automation and Salesforce architecture to build intelligent systems that drive measurable growth.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="#solutions" className="rounded-full bg-aurora px-6 py-3 font-semibold text-slate-700 shadow-glow transition hover:-translate-y-0.5">
                Explore Solutions
              </Link>
              <Link href="/contact" className="glass rounded-full px-6 py-3 font-semibold text-slate-700 transition hover:-translate-y-0.5">
                Schedule Consultation
              </Link>
            </div>
          </div>

          <motion.div whileHover={{ scale: 1.02 }} className="glass relative overflow-hidden rounded-[24px] p-4 shadow-soft">
            <div className="h-[520px] w-full rounded-[20px] bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.8),transparent_22%),linear-gradient(135deg,rgba(201,182,255,0.85),rgba(191,223,255,0.82),rgba(255,215,198,0.8))]" aria-label="AI systems visualization" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/25 via-transparent to-transparent" />
          </motion.div>
        </div>
      </section>

      <AnimatedSection className="container-wrap relative z-10 py-10">
        <div className="glass grid grid-cols-2 gap-5 rounded-3xl p-8 md:grid-cols-5">
          {logos.map((logo) => (
            <p key={logo} className="text-center text-sm font-medium uppercase tracking-[0.2em] text-slate-400 transition hover:text-slate-600">
              {logo}
            </p>
          ))}
        </div>
      </AnimatedSection>

      <section id="solutions" className="container-wrap relative z-10 section-padding">
        <AnimatedSection>
          <h2 className="text-4xl font-semibold text-slate-800">Services built for modern enterprise ecosystems</h2>
        </AnimatedSection>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {[
            ['AI Automation', ['Intelligent workflows', 'Machine learning integrations', 'Predictive analytics', 'Process automation']],
            ['Salesforce Solutions', ['Implementation', 'Customization', 'Marketing Cloud', 'Service Cloud']],
            ['Digital Transformation', ['System architecture', 'Data engineering', 'API integrations', 'Cloud modernization']]
          ].map(([title, items], idx) => (
            <AnimatedSection key={title as string} delay={idx * 0.08} className="glass rounded-3xl p-7 transition duration-500 hover:-translate-y-2 hover:shadow-soft">
              <h3 id={(title as string).toLowerCase().replace(' ', '-')} className="text-2xl font-semibold text-slate-800">{title as string}</h3>
              <ul className="mt-4 space-y-3 text-sm text-muted">
                {(items as string[]).map((item) => (
                  <li key={item}>✦ {item}</li>
                ))}
              </ul>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <section className="relative z-10 section-padding">
        <div className="container-wrap">
          <div className="glass relative overflow-hidden rounded-[32px] p-5">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 1 }}
              className="h-[450px] w-full rounded-[24px] bg-[linear-gradient(120deg,rgba(191,223,255,0.9),rgba(201,182,255,0.86),rgba(217,246,230,0.8))]"
            />
            <div className="glass absolute bottom-9 left-9 max-w-md rounded-2xl p-5">
              <p className="text-sm font-medium uppercase tracking-wider text-slate-500">Enterprise-grade data orchestration</p>
              <h3 className="mt-2 text-2xl font-semibold text-slate-800">Parallax-ready intelligence layer for AI and Salesforce operations</h3>
            </div>
          </div>
        </div>
      </section>

      <section id="case-studies" className="container-wrap relative z-10 section-padding">
        <AnimatedSection>
          <h2 className="text-4xl font-semibold text-slate-800">Case studies with measurable outcomes</h2>
        </AnimatedSection>
        <div className="mt-8 grid gap-6 lg:grid-cols-[2fr_1fr]">
          {[
            { title: 'Global Logistics AI Assistant', industry: 'Logistics', result: 48 },
            { title: 'Salesforce Revenue Cloud Revamp', industry: 'Fintech', result: 63 },
            { title: 'Unified Ops Modernization', industry: 'Healthcare', result: 52 }
          ].map((card, idx) => (
            <motion.article
              key={card.title}
              animate={{ opacity: activeCase === idx ? 1 : 0.45, scale: activeCase === idx ? 1 : 0.98 }}
              className="glass rounded-3xl p-7"
            >
              <p className="text-xs uppercase tracking-wider text-slate-500">{card.industry}</p>
              <h3 className="mt-2 text-2xl font-semibold text-slate-800">{card.title}</h3>
              <p className="mt-4 text-sm text-muted">Problem: legacy systems blocked velocity. Solution: AI workflow orchestration integrated with Salesforce and core data services.</p>
              <p className="mt-5 text-3xl font-semibold text-slate-800">
                <Counter value={card.result} suffix="%" />
                <span className="ml-2 text-base text-muted">efficiency gain</span>
              </p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="container-wrap relative z-10 section-padding">
        <div className="grid gap-6 md:grid-cols-3">
          {['Precision Engineering', 'Enterprise-Grade Security', 'Scalable Architecture'].map((item) => (
            <AnimatedSection key={item} className="glass rounded-3xl p-7 text-center">
              <h3 className="text-xl font-semibold text-slate-800">{item}</h3>
              <div className="mx-auto my-4 h-px w-20 bg-gradient-to-r from-transparent via-primary to-transparent" />
              <p className="text-sm text-muted">Built with structured governance, observability, and resilient systems for Fortune 500 operations.</p>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <section className="container-wrap relative z-10 section-padding">
        <h2 className="text-4xl font-semibold text-slate-800">Process designed for transformation at scale</h2>
        <div className="mt-10 space-y-4">
          {['Discovery', 'Architecture', 'Implementation', 'Optimization', 'Scale'].map((step, idx) => (
            <AnimatedSection key={step} delay={idx * 0.08} className="glass flex items-center justify-between rounded-2xl px-6 py-5">
              <p className="text-sm text-slate-500">0{idx + 1}</p>
              <h3 className="text-xl font-semibold text-slate-800">{step}</h3>
              <span className="h-2 w-2 rounded-full bg-primary" />
            </AnimatedSection>
          ))}
        </div>
      </section>

      <section className="container-wrap relative z-10 section-padding">
        <h2 className="text-4xl font-semibold text-slate-800">Client sentiment</h2>
        <motion.div
          key={activeCase}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass mt-8 rounded-3xl p-8"
        >
          <p className="text-lg text-slate-700">“AetherOps delivered a secure, AI-native operating model integrated with Salesforce in under 10 weeks.”</p>
          <div className="mt-4 flex items-center justify-between text-sm text-muted">
            <p>— VP Technology, Enterprise Retail Group</p>
            <p>★★★★★</p>
          </div>
        </motion.div>
      </section>

      <section id="insights" className="container-wrap relative z-10 section-padding">
        <h2 className="text-4xl font-semibold text-slate-800">Insights</h2>
        <div className="mt-5 flex flex-wrap gap-2">
          {['All', 'AI', 'Salesforce', 'Automation', 'Cloud'].map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`rounded-full px-4 py-2 text-sm transition ${
                filter === category ? 'bg-aurora text-slate-700 shadow-soft' : 'glass text-slate-500'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {filteredInsights.map((post) => (
            <motion.article key={post.title} whileHover={{ y: -6 }} className="glass rounded-3xl p-6">
              <p className="text-xs uppercase tracking-wide text-slate-500">{post.category}</p>
              <h3 className="mt-2 text-xl font-semibold text-slate-800">{post.title}</h3>
              <p className="mt-3 text-sm text-muted">Read how enterprise teams reduce complexity while increasing operational intelligence.</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="container-wrap relative z-10 pb-24">
        <div className="relative overflow-hidden rounded-[32px] bg-aurora p-12 text-center shadow-glow">
          <motion.div animate={{ y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 8 }} className="absolute -left-12 -top-10 h-36 w-36 rounded-full bg-white/30 blur-2xl" />
          <h2 className="text-4xl font-semibold text-slate-700">Ready to Build Intelligent Systems That Scale?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600">Start with a strategy session built around your AI, Salesforce, and transformation priorities.</p>
          <Link href="/contact" className="mt-7 inline-block rounded-full bg-white/80 px-6 py-3 font-semibold text-slate-700 transition hover:shadow-soft">
            Start Your Transformation
          </Link>
        </div>
      </section>
    </>
  );
}
