import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'integrations Service',
  description: 'Specialized Salesforce consulting engagement for integrations with measurable revenue outcomes.'
};

export default function Page() {
  return (
    <div className="container-wrap section-padding max-w-4xl">
      <p className="eyebrow">Service Detail</p>
      <h1 className="headline-lg mt-4 capitalize">integrations for enterprise revenue teams</h1>
      <p className="mt-6 body-lg">This practice combines architecture, execution, change management, and analytics to ensure adoption and ROI. Typical program cadence includes discovery, blueprinting, sprint delivery, QA, enablement, and optimization loops.</p>
      <ul className="mt-8 list-disc space-y-2 pl-6 text-slate-600">
        <li>Executive workshop and KPI alignment</li>
        <li>Process design, automation, and governance setup</li>
        <li>Cross-system integration and reporting architecture</li>
        <li>Enablement playbooks and continuous optimization</li>
      </ul>
      <Link href="/book-strategy-call" className="btn-primary mt-8">Discuss integrations strategy</Link>
    </div>
  );
}
