import Link from 'next/link';
import { AnimatedSection } from '@/components/animated-section';
import { ROICalculator } from '@/components/roi-calculator';
import { DiscoveryForm } from '@/components/discovery-form';
import { ExitIntentPopup } from '@/components/exit-intent-popup';

const solutions = [
  'AI Agent Systems',
  'n8n Workflow Automation',
  'Enterprise Automation Systems',
  'API Integrations',
  'AI Data Pipelines',
  'Custom GPT/LLM Systems'
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-line">
        <div className="absolute inset-0 bg-grid bg-[size:36px_36px] opacity-10" />
        <div className="container-wrap section-padding relative grid items-center gap-12 lg:grid-cols-2">
          <AnimatedSection className="space-y-7">
            <p className="inline-flex rounded-full border border-accent/40 bg-accent/10 px-4 py-1 text-sm text-accent">Enterprise AI Automation Partner</p>
            <h1 className="text-5xl font-semibold leading-tight md:text-6xl heading-gradient">We Design Intelligent Systems That Run Your Business.</h1>
            <p className="text-lg text-muted">AetherAutomate engineers production-grade AI and automation architecture for scaling teams. From n8n orchestration to LLM systems, we modernize enterprise workflows end-to-end.</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/book-call" className="rounded-full bg-accent px-6 py-3 font-semibold text-white shadow-glow">Book Discovery Call</Link>
              <Link href="/case-studies" className="rounded-full border border-line px-6 py-3 font-semibold">View Case Studies</Link>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1} className="card p-7">
            <p className="text-xs uppercase tracking-[0.2em] text-accent">Workflow Architecture Preview</p>
            <div className="mt-5 space-y-3 text-sm">
              {['CRM Trigger', 'AI Qualification Agent', 'ERP Sync & Risk Check', 'Slack Approval', 'BI Dashboard Update'].map((item) => (
                <div key={item} className="rounded-lg border border-line bg-bg/70 px-4 py-3 transition hover:border-accent/70 hover:shadow-glow">{item}</div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <AnimatedSection className="container-wrap section-padding grid gap-8 lg:grid-cols-2">
        <div className="card p-8">
          <h2 className="text-3xl font-semibold">The Problem</h2>
          <p className="mt-4 text-muted">Manual handoffs, disconnected tooling, and inconsistent data create invisible operational debt. Teams lose velocity, leadership loses visibility, and growth stalls.</p>
        </div>
        <div className="card p-8">
          <h2 className="text-3xl font-semibold">The Opportunity</h2>
          <p className="mt-4 text-muted">With AI-powered automation architecture, businesses can compress cycle time, improve service quality, and unlock scalable operating leverage.</p>
        </div>
      </AnimatedSection>

      <section className="section-padding border-y border-line">
        <div className="container-wrap">
          <h2 className="text-center text-3xl font-semibold">Core Solutions</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map((solution) => (
              <div key={solution} className="card p-6 transition hover:-translate-y-1 hover:border-accent/60">
                <p className="text-lg font-medium">{solution}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-wrap section-padding grid gap-8 lg:grid-cols-2">
        <ROICalculator />
        <DiscoveryForm />
      </section>

      <section className="section-padding border-y border-line">
        <div className="container-wrap">
          <h2 className="text-3xl font-semibold">Case Study Preview</h2>
          <div className="mt-8 space-y-4">
            {[['B2B SaaS RevOps Modernization', '41% faster lead qualification · 27% lift in meetings booked'], ['Healthcare Ops Automation', '62% reduction in manual routing time · 99.2% SLA compliance'], ['Fintech AI Support Stack', '53% faster resolution time · 31% lower support cost']].map(([title, metric]) => (
              <details key={title} className="card p-5">
                <summary className="cursor-pointer list-none text-lg font-medium">{title}</summary>
                <p className="mt-3 text-sm text-muted">{metric}. Full architecture included API orchestration, AI enrichment layers, and governance checkpoints.</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="container-wrap section-padding grid gap-6 md:grid-cols-5">
        {['Discover', 'Architect', 'Build', 'Deploy', 'Optimize'].map((step, idx) => (
          <div key={step} className="card p-5 text-center">
            <p className="text-xs text-accent">0{idx + 1}</p>
            <p className="mt-2 font-medium">{step}</p>
          </div>
        ))}
      </section>

      <section className="section-padding border-y border-line">
        <div className="container-wrap grid gap-6 md:grid-cols-3">
          {['OpenAI · Anthropic · Cohere', 'n8n · Temporal · Node.js', 'AWS · GCP · Azure'].map((tech) => (
            <div key={tech} className="card p-6 text-sm text-slate-300">{tech}</div>
          ))}
        </div>
      </section>

      <section className="container-wrap section-padding">
        <div className="card p-10 text-center">
          <p className="text-sm text-accent">Security & Compliance</p>
          <p className="mt-2 text-3xl font-semibold">GDPR/CCPA-aligned, secure-by-design architecture with audit-ready controls.</p>
          <Link href="/security" className="mt-6 inline-block rounded-full border border-line px-6 py-3">Review Security Posture</Link>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'AetherAutomate',
            url: 'https://www.aetherautomate.com',
            slogan: 'We Design Intelligent Systems That Run Your Business',
            sameAs: ['https://www.linkedin.com/company/aetherautomate']
          })
        }}
      />
      <ExitIntentPopup />
    </>
  );
}
