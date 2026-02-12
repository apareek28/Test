import type { Metadata } from 'next';
import { DiscoveryForm } from '@/components/discovery-form';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Start a conversation about your AI automation modernization roadmap.'
};

export default function ContactPage() {
  return (
    <div className="container-wrap section-padding grid gap-8 lg:grid-cols-2">
      <section className="card p-8">
        <h1 className="text-4xl font-semibold">Talk to the architecture team.</h1>
        <p className="mt-4 text-muted">Share your current systems, priorities, and constraints. We will return a practical roadmap with delivery phases and ROI targets.</p>
        <ul className="mt-5 space-y-2 text-sm text-slate-300">
          <li>• Response in under one business day</li>
          <li>• Security and compliance readiness review</li>
          <li>• Executive summary + technical implementation scope</li>
        </ul>
      </section>
      <DiscoveryForm />
    </div>
  );
}
