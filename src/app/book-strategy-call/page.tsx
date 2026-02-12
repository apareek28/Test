import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Book Strategy Call',
  description: 'Schedule a Salesforce and AI strategy call with ApexRevenue AI.'
};

export default function BookPage() {
  return (
    <div className="container-wrap section-padding max-w-4xl">
      <p className="eyebrow">Book Strategy Call</p>
      <h1 className="headline-lg mt-4">Embedded scheduling system</h1>
      <p className="mt-5 body-lg">Embed your Calendly/HubSpot Meetings script in this section. Track submissions as primary conversions in GA4, GTM, Meta Pixel, and LinkedIn Insight.</p>
      <div className="card mt-8">
        <p className="text-sm text-slate-600">Scheduling embed placeholder (iframe container) with event callback hook for conversion tracking.</p>
      </div>
    </div>
  );
}
