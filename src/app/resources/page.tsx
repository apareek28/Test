import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resources',
  description: 'Lead magnets, guides, templates, and practical tools for Salesforce and AI revenue transformation.'
};

export default function ResourcesPage() {
  return (
    <div className="container-wrap section-padding">
      <h1 className="headline-lg">Resources & lead magnets</h1>
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <div className="card"><h2 className="text-xl font-semibold">Salesforce Revenue Audit Checklist</h2><p className="mt-2 text-sm text-slate-600">Primary downloadable magnet with email capture and nurture workflow.</p></div>
        <div className="card"><h2 className="text-xl font-semibold">Executive KPI Dashboard Blueprint</h2><p className="mt-2 text-sm text-slate-600">Template for board-ready reporting and pipeline governance.</p></div>
      </div>
      <div className="card mt-8"><p className="font-semibold">Newsletter Signup</p><p className="text-sm text-slate-600 mt-2">Connect to your ESP and tag subscribers by intent segment (strategy, operations, AI).</p></div>
    </div>
  );
}
