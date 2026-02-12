import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Resources',
  description: 'Lead magnets, templates, and playbooks for Salesforce and AI revenue transformation.'
};

export default function ResourcesPage() {
  return (
    <div className="container-wrap section-padding">
      <h1 className="headline-lg">Resources and lead magnets</h1>
      <p className="body-lg mt-4 max-w-3xl">Practical assets for revenue leaders evaluating Salesforce transformation and AI operating models.</p>
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <div className="card"><h2 className="text-xl font-semibold">Salesforce Revenue Audit Checklist</h2><p className="mt-2 text-sm text-slate-600">A 23-point diagnostic covering data quality, automation, handoffs, and reporting integrity.</p><Link href="/contact" className="btn-primary mt-4">Request checklist</Link></div>
        <div className="card"><h2 className="text-xl font-semibold">Executive KPI Dashboard Blueprint</h2><p className="mt-2 text-sm text-slate-600">Board-friendly KPI framework with stage conversion, velocity, and forecast confidence views.</p><Link href="/contact" className="btn-primary mt-4">Get blueprint</Link></div>
      </div>
      <div className="card mt-8">
        <p className="font-semibold">Newsletter Signup</p>
        <p className="mt-2 text-sm text-slate-600">Join our monthly briefing on Salesforce strategy, RevOps architecture, and enterprise AI deployment patterns.</p>
      </div>
    </div>
  );
}
