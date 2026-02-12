import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Careers', description: 'Careers at ApexRevenue AI for consultants, architects, and growth operators.' };

export default function CareersPage() {
  return <div className="container-wrap section-padding"><h1 className="headline-lg">Careers</h1><p className="mt-4 body-lg">Hiring high-caliber consultants in Salesforce architecture, AI productization, and revenue operations.</p></div>;
}
