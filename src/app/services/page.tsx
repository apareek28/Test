import type { Metadata } from 'next';
import Link from 'next/link';
import { servicePages } from '@/content/site';

export const metadata: Metadata = {
  title: 'Salesforce Consulting Services',
  description: 'Implementation, optimization, AI automation, managed services, and integrations for Salesforce-led revenue teams.'
};

export default function ServicesPage() {
  return (
    <div className="container-wrap section-padding">
      <p className="eyebrow">Services</p>
      <h1 className="headline-lg mt-4">Enterprise Salesforce consulting capabilities</h1>
      <p className="body-lg mt-5 max-w-3xl">Each service line is structured with KPI targets, governance controls, and executive-level visibility.</p>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {servicePages.map((service) => (
          <Link href={service.href} key={service.href} className="card hover:shadow-hover transition">
            <h2 className="text-2xl font-semibold">{service.label}</h2>
            <p className="mt-3 text-sm text-slate-600">See methodology, deliverables, and outcome guarantees.</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
