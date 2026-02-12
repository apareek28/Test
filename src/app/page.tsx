import Link from 'next/link';
import Script from 'next/script';
import { AssessmentTool } from '@/components/assessment-tool';
import { ExitIntentPopup } from '@/components/exit-intent-popup';
import { ROICalculator } from '@/components/roi-calculator';
import { brand, servicePages } from '@/content/site';

const faqs = [
  { q: 'How quickly do engagements start?', a: 'Discovery begins within 5 business days. Most clients see first measurable outcomes in the first 45-90 days.' },
  { q: 'Do you support enterprise governance and security reviews?', a: 'Yes. We align architecture and delivery standards with InfoSec, legal, and procurement requirements.' },
  { q: 'Can you collaborate with our in-house admins and RevOps team?', a: 'Absolutely. Our model is co-delivery with enablement, documentation, and operational handoff.' }
];

const process = [
  ['Diagnose', 'Map funnel leakage, automation debt, and system-level blockers.'],
  ['Design', 'Build a KPI-linked blueprint for Salesforce architecture and GTM workflows.'],
  ['Deploy', 'Execute sprint releases with QA, enablement, and executive reporting.'],
  ['Scale', 'Run optimization loops to compound productivity and revenue outcomes.']
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
            <p className="eyebrow">Revenue-Focused Salesforce & AI Consulting Experts</p>
            <h1 className="headline-xl mt-4">Transform Salesforce Into a Revenue Engine.</h1>
            <p className="body-lg mt-6">We help startup, SMB, and enterprise teams turn fragmented Salesforce operations into a high-performance revenue system with measurable commercial impact.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/book-strategy-call" className="btn-primary">Book Free Strategy Call</Link>
              <Link href="/resources" className="btn-secondary">Download Salesforce Audit Checklist</Link>
            </div>
            <p className="mt-6 text-xs uppercase tracking-[0.18em] text-slate-500">Trusted by RevOps and GTM leaders</p>
            <div className="mt-3 flex flex-wrap gap-3 text-sm text-slate-500">
              {['NexaCloud', 'Meridian Health', 'ForgePay', 'Altura Systems'].map((logo) => <span key={logo} className="rounded-full border border-border px-3 py-1">{logo}</span>)}
            </div>
          </div>
          <div className="card bg-white">
            <p className="text-sm text-slate-500">Revenue Command Dashboard Snapshot</p>
            <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-xl bg-mist p-4"><p>Pipeline Velocity</p><p className="text-2xl font-semibold text-primary">+34%</p></div>
              <div className="rounded-xl bg-mist p-4"><p>Rep Productivity</p><p className="text-2xl font-semibold text-primary">+21%</p></div>
              <div className="rounded-xl bg-mist p-4"><p>Forecast Accuracy</p><p className="text-2xl font-semibold text-primary">92%</p></div>
              <div className="rounded-xl bg-mist p-4"><p>Cycle Time</p><p className="text-2xl font-semibold text-primary">-18%</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding container-wrap grid gap-6 lg:grid-cols-3">
        {['Disconnected data hides real funnel risk.', 'Manual processes reduce seller focus time.', 'Tactical AI pilots fail to scale without governance.'].map((text) => (
          <div key={text} className="card"><p className="font-medium">{text}</p></div>
        ))}
      </section>

      <section className="section-padding bg-mist/70 border-y border-border">
        <div className="container-wrap">
          <h2 className="headline-lg">Enterprise services designed for predictable growth</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {servicePages.map((s) => (
              <Link href={s.href} key={s.href} className="card transition hover:-translate-y-1 hover:shadow-hover"><h3 className="text-xl font-semibold">{s.label}</h3><p className="mt-3 text-sm text-slate-600">Strategy, architecture, implementation, and optimization in one accountable delivery model.</p></Link>
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
          <h2 className="headline-lg">Proven business outcomes</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              'Global SaaS platform: +41% SQL-to-opportunity conversion in 2 quarters.',
              'Healthcare enterprise: 19 hours/week saved through AI case triage orchestration.',
              'Fintech scale-up: 27% faster quote-to-cash with Salesforce + ERP integrations.'
            ].map((c) => <div key={c} className="card text-sm">{c}</div>)}
          </div>
        </div>
      </section>

      <section className="section-padding container-wrap">
        <h2 className="headline-lg">Our operating model</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {process.map(([title, body], idx) => (
            <div key={title} className="card">
              <p className="text-xs font-semibold text-primary">Phase {idx + 1}</p>
              <h3 className="mt-2 text-xl font-semibold">{title}</h3>
              <p className="mt-3 text-sm text-slate-600">{body}</p>
            </div>
          ))}
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
          <p className="eyebrow text-white/80">Next Step</p>
          <h2 className="mt-3 text-4xl font-semibold">Let’s design your revenue transformation roadmap</h2>
          <p className="mt-4 max-w-2xl text-slate-200">Book a strategy call to get a tailored 90-day plan with prioritized initiatives, investment ranges, and expected impact by KPI.</p>
          <Link href="/book-strategy-call" className="btn-primary mt-6 bg-white text-navy hover:bg-slate-100">Book Strategy Call</Link>
        </div>
      </section>
    </>
  );
}
