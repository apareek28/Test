import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Case Studies',
  description: 'Detailed Salesforce case studies with ROI metrics and transformation outcomes.'
};

export default function CaseStudiesPage() {
  const studies = [
    ['SaaS Pipeline Acceleration', '+41% SQL-to-opportunity, +18% ACV in 6 months'],
    ['Healthcare Service Automation', '39% faster case resolution, 92% compliance SLA'],
    ['Fintech RevOps Redesign', '27% shorter sales cycle, 33% better forecast accuracy']
  ];
  return (
    <div className="container-wrap section-padding">
      <h1 className="headline-lg">Case studies with measurable ROI</h1>
      <div className="mt-8 space-y-5">
        {studies.map(([title, metric]) => <article key={title} className="card"><h2 className="text-2xl font-semibold">{title}</h2><p className="mt-2 text-slate-600">{metric}</p></article>)}
      </div>
    </div>
  );
}
