import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'Meet the senior Salesforce and AI consultants behind ApexRevenue AI.'
};

export default function AboutPage() {
  return (
    <div className="container-wrap section-padding">
      <p className="eyebrow">About</p>
      <h1 className="headline-lg mt-4">Strategists, architects, and builders focused on revenue outcomes</h1>
      <p className="body-lg mt-6 max-w-3xl">Our team blends enterprise transformation consulting, full-stack Salesforce engineering, and CRO science. We partner with GTM leaders to convert CRM complexity into operational clarity and profitable growth.</p>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {['Revenue Accountability', 'Design-Led Execution', 'Compliance by Default'].map((item) => (
          <div key={item} className="card"><h2 className="text-xl font-semibold">{item}</h2></div>
        ))}
      </div>
    </div>
  );
}
