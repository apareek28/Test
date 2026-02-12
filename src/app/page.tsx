import Link from 'next/link';
import { AnimatedSection } from '@/components/animated-section';

const features = [
  'Revenue-focused product strategy and execution',
  'AI-powered automation to reduce operational drag',
  'Scalable cloud architecture for growth stages',
  'Conversion-first design system and UX optimization'
];

const steps = [
  {
    title: 'Audit & Opportunity Mapping',
    body: 'We identify growth blockers and prioritize high-impact wins across product, marketing, and operations.'
  },
  {
    title: 'Rapid Build Sprints',
    body: 'Cross-functional squads design, prototype, and launch production-ready initiatives quickly.'
  },
  {
    title: 'Optimization & Scale',
    body: 'We continuously test, measure, and improve key metrics like activation, retention, and demo conversion.'
  }
];

const faqs = [
  {
    q: 'How quickly can we launch?',
    a: 'Most clients launch their first high-impact initiative in 14 to 21 days.'
  },
  {
    q: 'Do you work with in-house teams?',
    a: 'Yes. We embed with your internal team and transfer knowledge as we build.'
  },
  {
    q: 'Can you integrate with our existing tools?',
    a: 'Absolutely. We specialize in clean integrations across CRMs, analytics, and product stacks.'
  }
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(245,197,66,0.2),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(245,197,66,0.12),transparent_28%)]" />
        <div className="absolute inset-0 bg-grid bg-[size:38px_38px] opacity-10" />
        <div className="container-wrap relative section-padding">
          <AnimatedSection className="max-w-3xl space-y-7">
            <p className="inline-flex rounded-full border border-accent/40 bg-accent/10 px-4 py-1 text-sm text-accent">
              Trusted by high-growth B2B teams
            </p>
            <h1 className="text-4xl font-semibold leading-tight text-white md:text-6xl">
              Build Faster. Convert Better. Scale Smarter.
            </h1>
            <p className="text-lg text-muted">
              LumenTech helps ambitious companies turn product friction into predictable pipeline with modern engineering and CRO-driven UX.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-accent px-6 py-3 font-semibold text-black transition-all hover:shadow-glow"
              >
                Book a Demo
              </Link>
              <Link
                href="/services"
                className="rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:border-accent hover:text-accent"
              >
                Explore Services
              </Link>
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
          <p className="text-lg text-white">
            73% of SaaS companies lose qualified leads due to weak onboarding flows and disconnected systems.
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-padding border-y border-white/10 bg-black/10">
        <div className="container-wrap grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold">Our Solution</h2>
            <p className="mt-4 text-muted">
              We unify strategy, product engineering, and CRO into one execution system that increases conversion and speeds delivery.
            </p>
          </div>
          <div className="grid gap-4">
            {features.map((feature) => (
              <div key={feature} className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-slate-100">
                <span className="mr-2 text-accent">◆</span>
                {feature}
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <section className="section-padding container-wrap">
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
      </section>

      <section className="section-padding border-y border-white/10 bg-black/10">
        <div className="container-wrap">
          <h2 className="text-center text-3xl font-semibold">Client Outcomes</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              '"Demo conversions increased 41% in two months." — RevOps Lead, AtlasCloud',
              '"We replaced manual workflows and saved 18+ hours weekly." — COO, NovaHealth',
              '"Launch velocity doubled without increasing team size." — VP Product, StackForge'
            ].map((quote) => (
              <div key={quote} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-slate-200">
                {quote}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding container-wrap">
        <h2 className="text-3xl font-semibold">FAQ</h2>
        <div className="mt-8 space-y-4">
          {faqs.map((item) => (
            <div key={item.q} className="rounded-xl border border-white/10 bg-white/5 p-5">
              <p className="font-medium text-white">{item.q}</p>
              <p className="mt-2 text-sm text-muted">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-padding border-t border-white/10">
        <div className="container-wrap rounded-3xl border border-accent/40 bg-accent/10 p-10 text-center">
          <h2 className="text-3xl font-semibold text-white">Ready to turn your website into a growth engine?</h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted">
            Get a tailored roadmap to increase qualified demos, improve user experience, and modernize your tech stack.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-block rounded-full bg-accent px-6 py-3 font-semibold text-black transition-all hover:shadow-glow"
          >
            Schedule Your Demo
          </Link>
        </div>
      </section>
    </>
  );
}
