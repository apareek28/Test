import type { Metadata } from 'next';
import { AnimatedSection } from '@/components/animated-section';
import { ContactForm } from '@/components/contact-form';

export const metadata: Metadata = {
  title: 'Contact | Axiom Automation',
  description: 'Schedule an enterprise automation audit and implementation strategy call.'
};

export default function ContactPage() {
  return (
    <div className="container-wrap section-padding grid gap-10 lg:grid-cols-2">
      <AnimatedSection>
        <p className="text-sm uppercase tracking-[0.2em] text-accent">Schedule Your Audit</p>
        <h1 className="mt-4 text-4xl font-semibold">Tell us your operational constraints. We&apos;ll build the automation roadmap.</h1>
        <p className="mt-5 text-muted">Expect a structured response with architecture recommendations, delivery phases, and expected ROI ranges.</p>
      </AnimatedSection>
      <AnimatedSection delay={0.08}>
        <ContactForm />
      </AnimatedSection>
    </div>
  );
}
