import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Disclaimer',
  description: 'Important legal disclaimer regarding information published by ApexRevenue AI.'
};

export default function DisclaimerPage() {
  return (
    <div className="container-wrap section-padding max-w-4xl">
      <h1 className="headline-lg">Disclaimer</h1>
      <div className="mt-6 space-y-4 text-slate-600">
        <p>Website content is for informational purposes only and does not constitute legal, tax, accounting, or investment advice.</p>
        <p>Case study results are client-specific and do not guarantee identical outcomes for other organizations.</p>
        <p>We are not liable for third-party website content linked from this domain.</p>
      </div>
    </div>
  );
}
