import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Industries',
  description: 'Salesforce consulting playbooks for SaaS, healthcare, fintech, manufacturing, and professional services.'
};

export default function IndustriesPage() {
  const industries = ['B2B SaaS', 'Healthcare & Life Sciences', 'Financial Services', 'Manufacturing', 'Professional Services'];
  return (
    <div className="container-wrap section-padding">
      <h1 className="headline-lg">Industry-specific Salesforce growth playbooks</h1>
      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {industries.map((item) => <div key={item} className="card"><h2 className="text-xl font-semibold">{item}</h2><p className="mt-2 text-sm text-slate-600">SEO cluster page with region-ready schema and localized proof points.</p></div>)}
      </div>
    </div>
  );
}
