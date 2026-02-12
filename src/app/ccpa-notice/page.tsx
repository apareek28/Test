import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CCPA Notice',
  description: 'California Consumer Privacy Act notice for ApexRevenue AI.'
};

export default function CCPA() {
  return (
    <div className="container-wrap section-padding max-w-4xl">
      <h1 className="headline-lg">CCPA Notice</h1>
      <div className="mt-6 space-y-4 text-slate-600">
        <p>California residents may request disclosure, deletion, and correction of personal information subject to lawful exceptions.</p>
        <p>We do not sell personal information. Requests can be submitted at privacy@apexrevenue.ai and are verified before fulfillment.</p>
        <p>You have the right not to receive discriminatory treatment for exercising CCPA rights.</p>
      </div>
    </div>
  );
}
