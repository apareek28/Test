import Link from 'next/link';
import { AnimatedSection } from '@/components/animated-section';

const featureCards = [
  {
    title: 'Full-Stack Product Delivery',
    body: 'From UX strategy to production deployment, we deliver modern digital products at startup speed with enterprise reliability.'
  },
  {
    title: 'AI Workflow Automation',
    body: 'Eliminate repetitive work and reduce cycle time with AI-assisted workflows integrated into your existing stack.'
  },
  {
    title: 'Conversion Optimization',
    body: 'Improve trial-to-demo and lead-to-close rates with CRO-led audits, rapid experiments, and measurable UX improvements.'
  }
];

const steps = [
  {
    title: 'Discover',
    body: 'We map growth blockers across journey, product, and operations, then prioritize based on revenue impact.'
  },
  {
    title: 'Build',
    body: 'Our team launches high-leverage product and automation initiatives in rapid sprints with weekly delivery.'
  },
  {
    title: 'Scale',
    body: 'We optimize performance continuously with analytics, testing, and strategic roadmap updates.'
  }
];

const faqs = [
  {
    q: 'How quickly can we launch?',
    a: 'Most clients launch their first high-impact initiative in 2 to 3 weeks.'
  },
  {
    q: 'Will this work with our in-house team?',
    a: 'Yes. We collaborate closely with internal stakeholders and support knowledge transfer from day one.'
  },
  {
    q: 'Can you integrate with our CRM and analytics stack?',
    a: 'Absolutely. We support modern CRMs, data platforms, and custom integrations.'
  }
];

const particles = [...Array(8)].map((_, idx) => ({
  id: idx,
  size: 6 + (idx % 4) * 3,
  left: `${8 + idx * 12}%`,
  top: `${20 + (idx % 3) * 22}%`
}));

export default function HomePage() {
  return (
    <>
      <section className="hero-ambient relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-grid bg-[size:38px_38px] opacity-10" />
        {particles.map((particle) => (
          <div
            key={particle.id}
            style={{ width: particle.size, height: particle.size, left: particle.left, top: particle.top }}
            className="absolute animate-pulse rounded-full bg-accent/40 blur-[1px]"
          />
        ))}
        <div className="container-wrap relative section-padding">
          <AnimatedSection className="max-w-3xl space-y-7">
            <p className="inline-flex rounded-full border border-accent/40 bg-accent/10 px-4 py-1 text-sm text-accent">
              Trusted by high-growth B2B teams
            </p>
            <h1 className="text-4xl font-semibold leading-tight text-white md:text-6xl">
              We build high-performing tech experiences that generate more qualified demos.
            </h1>
            <p className="text-lg text-muted">
              LumenTech combines engineering, premium UX, and CRO strategy to turn product traffic into predictable pipeline.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="rounded-full bg-accent px-6 py-3 font-semibold text-black transition-all hover:shadow-glow">
                Book a Demo
              </Link>
              <Link
                href="/services"
                className="rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:border-accent hover:text-accent"
              >
                Explore Services
              </Link>
            </div>
            <div className="grid max-w-2xl grid-cols-1 gap-3 pt-4 text-sm text-slate-200 sm:grid-cols-3">
              <p>⚡ Fast sprint execution</p>
              <p>📈 CRO-first UX systems</p>
              <p>🔒 Enterprise-ready architecture</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <AnimatedSection className="section-padding container-wrap grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-semibold">The Problem</h2>
          <p className="mt-4 text-muted">
            Most teams struggle with fragmented tooling, slow release cycles, and low conversion rates. Growth stalls when product and revenue teams are disconnected.
          </p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <p className="text-lg text-white">73% of SaaS teams lose qualified opportunities due to poor UX handoffs and disconnected systems.</p>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-padding border-y border-white/10 bg-black/10">
        <div className="container-wrap grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold">Our Solution</h2>
            <p className="mt-4 text-muted">
              We unify growth strategy, product engineering, and conversion optimization into one execution engine focused on booked demos.
            </p>
          </div>
          <div className="rounded-2xl border border-accent/20 bg-white/5 p-6">
            <p className="text-sm text-slate-200">
              One integrated partner for roadmap, design, development, experimentation, and performance reporting.
            </p>
          </div>
        </div>
      </AnimatedSection>

      <section className="section-padding container-wrap">
        <h2 className="text-center text-3xl font-semibold">Features</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {featureCards.map((card, idx) => (
            <AnimatedSection
              key={card.title}
              delay={idx * 0.08}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 transition-all hover:-translate-y-1 hover:border-accent/40"
            >
              <p className="mb-3 text-sm text-accent">0{idx + 1}</p>
              <h3 className="text-xl font-semibold">{card.title}</h3>
              <p className="mt-3 text-sm text-muted">{card.body}</p>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <section className="section-padding border-y border-white/10 bg-black/10">
        <div className="container-wrap">
          <h2 className="text-center text-3xl font-semibold">How It Works</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {steps.map((step, idx) => (
              <AnimatedSection
                key={step.title}
                delay={idx * 0.08}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 transition-transform hover:-translate-y-1"
              >
                <p className="mb-3 text-sm text-accent">Step 0{idx + 1}</p>
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="mt-3 text-sm text-muted">{step.body}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding container-wrap">
        <h2 className="text-center text-3xl font-semibold">Testimonials</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {[
            '“Demo conversions increased 41% in eight weeks.” — RevOps Lead, AtlasCloud',
            '“We saved 18+ operational hours weekly after automation rollout.” — COO, NovaHealth',
            '“Launch velocity doubled without increasing team size.” — VP Product, StackForge'
          ].map((quote) => (
            <div key={quote} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-slate-200">
              {quote}
            </div>
          ))}
        </div>
      </section>

      <section className="section-padding border-y border-white/10 bg-black/10">
        <div className="container-wrap">
          <h2 className="text-3xl font-semibold">FAQ</h2>
          <div className="mt-8 space-y-4">
            {faqs.map((item) => (
              <div key={item.q} className="rounded-xl border border-white/10 bg-white/5 p-5">
                <p className="font-medium text-white">{item.q}</p>
                <p className="mt-2 text-sm text-muted">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding border-t border-white/10">
        <div className="container-wrap rounded-3xl border border-accent/40 bg-accent/10 p-10 text-center">
          <h2 className="text-3xl font-semibold text-white">Ready to turn your website into a growth engine?</h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted">
            Get a tailored roadmap to increase qualified demos, improve user experience, and modernize your tech stack.
          </p>
          <Link href="/contact" className="mt-6 inline-block rounded-full bg-accent px-6 py-3 font-semibold text-black transition-all hover:shadow-glow">
            Schedule Your Demo
          </Link>
        </div>
      </section>
    </>
  );
}
