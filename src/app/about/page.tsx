import type { Metadata } from 'next';
import { AnimatedSection } from '@/components/animated-section';

export const metadata: Metadata = {
  title: 'Why Us | Axiom Automation',
  description: 'Meet Axiom Automation’s enterprise delivery model, governance standards, and ROI approach.'
};

export default function AboutPage() {
  return (
    <div className="container-wrap section-padding">
      <AnimatedSection className="max-w-3xl">
        <p className="text-sm uppercase tracking-[0.2em] text-accent">Why Axiom</p>
        <h1 className="mt-4 text-4xl font-semibold">Strategic automation experts built for complex organizations.</h1>
      </AnimatedSection>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {[
          { title: 'Security-First Delivery', body: 'Every implementation follows enterprise controls with auditable workflows.' },
          { title: 'Senior Architects', body: 'Dedicated specialists lead roadmap design, implementation, and optimization.' },
          { title: 'Measured ROI', body: 'We align every program to clear KPIs, executive dashboards, and business outcomes.' }
        ].map((item, idx) => (
          <AnimatedSection key={item.title} delay={idx * 0.07} className="glass-card rounded-2xl p-6">
            <h2 className="text-xl font-semibold">{item.title}</h2>
            <p className="mt-3 text-sm text-muted">{item.body}</p>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
}
