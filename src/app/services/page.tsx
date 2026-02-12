import type { Metadata } from 'next';
import Link from 'next/link';
import { AnimatedSection } from '@/components/animated-section';

export const metadata: Metadata = {
  title: 'Services | LumenTech',
  description: 'Discover product engineering, AI automation, CRO optimization, and growth support services by LumenTech.'
};

const services = [
  {
    title: 'Product Engineering',
    body: 'Build scalable web applications and digital products with modern architecture and fast iteration cycles.'
  },
  {
    title: 'AI & Automation',
    body: 'Design automations that reduce manual operations and improve customer response speed.'
  },
  {
    title: 'UX & Conversion Optimization',
    body: 'Improve activation and demo-booking rates with user-centered design and continuous experimentation.'
  },
  {
    title: 'Growth Analytics',
    body: 'Create reliable data pipelines and dashboards for confident product and marketing decisions.'
  }
];

export default function ServicesPage() {
  return (
    <div className="container-wrap section-padding">
      <AnimatedSection className="max-w-3xl">
        <p className="text-sm uppercase tracking-[0.2em] text-accent">Services</p>
        <h1 className="mt-4 text-4xl font-semibold">Built to accelerate your growth metrics.</h1>
        <p className="mt-6 text-muted">Every engagement is structured around one goal: generating measurable impact quickly.</p>
      </AnimatedSection>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {services.map((service, idx) => (
          <AnimatedSection
            key={service.title}
            delay={idx * 0.08}
            className="rounded-2xl border border-white/10 bg-white/5 p-7 transition-all hover:-translate-y-1 hover:border-accent/40"
          >
            <h2 className="text-2xl font-semibold">{service.title}</h2>
            <p className="mt-3 text-sm text-muted">{service.body}</p>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection className="mt-12 rounded-2xl border border-accent/40 bg-accent/10 p-8">
        <h2 className="text-2xl font-semibold">Need a tailored engagement model?</h2>
        <p className="mt-3 text-muted">Book a strategy call and we&apos;ll map a plan aligned to your product and revenue targets.</p>
        <Link
          href="/contact"
          className="mt-5 inline-block rounded-full bg-accent px-5 py-3 text-sm font-semibold text-black transition-all hover:shadow-glow"
        >
          Talk to Us
        </Link>
      </AnimatedSection>
    </div>
  );
}
