import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'Meet the systems architects building enterprise-grade AI automation programs.'
};

export default function AboutPage() {
  return (
    <div className="container-wrap section-padding space-y-8">
      <section className="card p-8">
        <p className="text-xs uppercase tracking-[0.2em] text-accent">About</p>
        <h1 className="mt-3 text-4xl font-semibold">Enterprise systems architects for the AI era.</h1>
        <p className="mt-4 text-muted">We are senior automation engineers, AI architects, and product operators focused on one mission: transforming manual business operations into resilient intelligent systems.</p>
      </section>
      <section className="grid gap-5 md:grid-cols-3">
        {[
          ['Mission', 'Engineer trustworthy AI automation that compounds operational advantage.'],
          ['Principles', 'Observability first. Security by default. Conversion tied to business outcomes.'],
          ['Delivery Model', 'Cross-functional pods across architecture, implementation, and optimization.']
        ].map(([title, body]) => (
          <div key={title} className="card p-6">
            <h2 className="text-xl font-semibold">{title}</h2>
            <p className="mt-3 text-sm text-muted">{body}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
