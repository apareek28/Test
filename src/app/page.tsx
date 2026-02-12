import Link from 'next/link';
import Script from 'next/script';
import { AssessmentTool } from '@/components/assessment-tool';
import { ExitIntentPopup } from '@/components/exit-intent-popup';
import { ROICalculator } from '@/components/roi-calculator';
import { brand, servicePages } from '@/content/site';

const faqs = [
  { q: 'How fast can we see measurable outcomes?', a: 'Most enterprise programs see measurable KPI movement in 45-90 days depending on data readiness.' },
  { q: 'Do you work with startups and enterprise teams?', a: 'Yes. We provide right-sized pods for startup velocity and enterprise governance depth.' },
  { q: 'Can you support global rollouts?', a: 'Yes. We provide multilingual, multi-region architecture with governance and change management support.' }
];

export default function HomePage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } }))
  };

  return (
    <>
      <Script id="org-schema" type="application/ld+json">{JSON.stringify({ '@context': 'https://schema.org', '@type': 'Organization', name: brand.name, url: brand.url })}</Script>
      <Script id="faq-schema" type="application/ld+json">{JSON.stringify(faqSchema)}</Script>
      <ExitIntentPopup />
      <section className="bg-hero-gradient border-b border-border">
        <div className="container-wrap section-padding grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Revenue-focused Salesforce & AI consulting experts</p>
            <h1 className="headline-xl mt-4">Transform Salesforce Into a Revenue Engine.</h1>
            <p className="body-lg mt-6">We combine McKinsey-grade strategy, modern SaaS design, and AI-enabled execution to accelerate pipeline, improve sales productivity, and increase win rates.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/book-strategy-call" className="btn-primary">Book Free Strategy Call</Link>
              <Link href="/resources" className="btn-secondary">Download Salesforce Audit Checklist</Link>
            </div>
          </div>
          <div className="card bg-white">
            <p className="text-sm text-slate-500">Revenue Command Dashboard</p>
            <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-xl bg-mist p-4"><p>Pipeline Velocity</p><p className="text-2xl font-semibold text-primary">+34%</p></div>
              <div className="rounded-xl bg-mist p-4"><p>Rep Productivity</p><p className="text-2xl font-semibold text-primary">+21%</p></div>
              <div className="rounded-xl bg-mist p-4"><p>Forecast Accuracy</p><p className="text-2xl font-semibold text-primary">92%</p></div>
              <div className="rounded-xl bg-mist p-4"><p>Cycle Time</p><p className="text-2xl font-semibold text-primary">-18%</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding container-wrap">
        <div className="grid gap-6 lg:grid-cols-3">
          {['Fragmented CRM workflows suppress growth.', 'Revenue operations lacks trusted data.', 'AI adoption is tactical, not strategic.'].map((text) => (
            <div key={text} className="card"><p className="font-medium">{text}</p></div>
          ))}
        </div>
      </section>

      <section className="section-padding bg-mist/70 border-y border-border">
        <div className="container-wrap">
          <h2 className="headline-lg">Services engineered for conversion and scale</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {servicePages.map((s) => (
              <Link href={s.href} key={s.href} className="card transition hover:-translate-y-1 hover:shadow-hover"><h3 className="text-xl font-semibold">{s.label}</h3><p className="mt-3 text-sm text-slate-600">Enterprise-grade delivery model with measurable outcomes.</p></Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding container-wrap grid gap-6 lg:grid-cols-2">
        <ROICalculator />
        <AssessmentTool />
      </section>

      <section className="section-padding bg-mist/70 border-y border-border">
        <div className="container-wrap">
          <h2 className="headline-lg">Proof from enterprise engagements</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              'Global SaaS company: +41% SQL-to-opportunity conversion in 2 quarters.',
              'Healthcare enterprise: 19 hours/week saved through AI case routing and triage.',
              'Fintech scale-up: Reduced quote-to-cash cycle by 27% with integrated Salesforce CPQ.'
            ].map((c) => <div key={c} className="card text-sm">{c}</div>)}
          </div>
        </div>
      </section>

      <section className="section-padding container-wrap">
        <h2 className="headline-lg">Frequently asked questions</h2>
        <div className="mt-8 space-y-4">
          {faqs.map((f) => <div key={f.q} className="card"><p className="font-semibold">{f.q}</p><p className="mt-2 text-sm text-slate-600">{f.a}</p></div>)}
        </div>
      </section>

      <section className="section-padding container-wrap">
        <div className="rounded-3xl bg-navy p-10 text-white">
          <p className="eyebrow text-white/80">Final CTA</p>
          <h2 className="mt-3 text-4xl font-semibold">Ready to unlock enterprise revenue performance?</h2>
          <p className="mt-4 max-w-2xl text-slate-200">Book a strategy call, get a custom roadmap, and prioritize the highest-ROI Salesforce and AI initiatives for the next 90 days.</p>
          <Link href="/book-strategy-call" className="btn-primary mt-6 bg-white text-navy hover:bg-slate-100">Book Strategy Call</Link>
        </div>
      </section>
    </>
  );
}
