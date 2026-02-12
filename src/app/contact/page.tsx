import type { Metadata } from 'next';
import { AnimatedSection } from '@/components/animated-section';
import { ContactForm } from '@/components/contact-form';

export const metadata: Metadata = {
  title: 'Contact | LumenTech',
  description: 'Book a demo with LumenTech and discuss your product, automation, and conversion goals.'
};

export default function ContactPage() {
  return (
    <div className="container-wrap section-padding grid gap-10 md:grid-cols-2">
      <AnimatedSection>
        <p className="text-sm uppercase tracking-[0.2em] text-accent">Contact</p>
        <h1 className="mt-4 text-4xl font-semibold">Let&apos;s grow your pipeline.</h1>
        <p className="mt-5 text-muted">
          Tell us where your team is stuck, and we&apos;ll propose a practical roadmap to improve delivery speed and demo conversions.
        </p>
        <ul className="mt-8 space-y-3 text-sm text-slate-200">
          <li>
            <span className="text-accent">◆</span> Typical response time: under 24 hours
          </li>
          <li>
            <span className="text-accent">◆</span> Free growth + UX discovery call
          </li>
          <li>
            <span className="text-accent">◆</span> Clear next steps and implementation timeline
          </li>
        </ul>
      </AnimatedSection>
      <AnimatedSection delay={0.08}>
        <ContactForm />
      </AnimatedSection>
    </div>
  );
}
