import type { Metadata } from 'next';
import { AnimatedSection } from '@/components/animated-section';

export const metadata: Metadata = {
  title: 'Services | Axiom Automation',
  description: 'Enterprise AI automation, RPA, process optimization, and systems integration services.'
};

const services = [
  { title: 'AI Automation', body: 'Deploy secure agentic workflows to automate repetitive knowledge tasks at scale.' },
  { title: 'Workflow Automation', body: 'Orchestrate cross-functional operations with resilient, observable pipelines.' },
  { title: 'CRM & ERP Integration', body: 'Connect business-critical systems and synchronize decision-ready data flows.' },
  { title: 'RPA Implementation', body: 'Automate deterministic processes with robust controls and governance.' }
];

export default function ServicesPage() {
  return (
    <div className="container-wrap section-padding">
      <AnimatedSection className="max-w-3xl">
        <p className="text-sm uppercase tracking-[0.2em] text-accent">Services</p>
        <h1 className="mt-4 text-4xl font-semibold">Automation programs engineered for enterprise impact.</h1>
      </AnimatedSection>
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {services.map((service, idx) => (
          <AnimatedSection key={service.title} delay={idx * 0.07} className="glass-card rounded-2xl p-6">
            <h2 className="text-2xl font-semibold">{service.title}</h2>
            <p className="mt-3 text-sm text-muted">{service.body}</p>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
}
