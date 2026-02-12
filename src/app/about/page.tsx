import type { Metadata } from 'next';
import { AnimatedSection } from '@/components/animated-section';

export const metadata: Metadata = {
  title: 'About | LumenTech',
  description: 'Learn how LumenTech blends product engineering, AI, and CRO to help teams scale with confidence.'
};

export default function AboutPage() {
  return (
    <div className="container-wrap section-padding">
      <AnimatedSection className="max-w-3xl">
        <p className="text-sm uppercase tracking-[0.2em] text-accent">About LumenTech</p>
        <h1 className="mt-4 text-4xl font-semibold">Your growth-focused tech partner.</h1>
        <p className="mt-6 text-muted">
          We are a team of senior engineers, strategists, and conversion specialists helping companies close the gap between product excellence and revenue growth.
        </p>
      </AnimatedSection>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {[
          { title: 'Mission', body: 'Ship elegant technology that drives measurable business outcomes.' },
          { title: 'Approach', body: 'Lean teams, rapid experimentation, and transparent collaboration.' },
          { title: 'Values', body: 'Craft, accountability, speed, and long-term client impact.' }
        ].map((item, idx) => (
          <AnimatedSection key={item.title} delay={idx * 0.07} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold">{item.title}</h2>
            <p className="mt-3 text-sm text-muted">{item.body}</p>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
}
