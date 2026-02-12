import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GDPR Compliance',
  description: 'How ApexRevenue AI supports GDPR rights and data governance obligations.'
};

export default function GDPRPage() {
  return (
    <div className="container-wrap section-padding max-w-4xl">
      <h1 className="headline-lg">GDPR Compliance</h1>
      <div className="mt-6 space-y-4 text-slate-600">
        <p>EU/EEA users can exercise rights to access, rectify, erase, restrict, object, and request portability of personal data.</p>
        <p>Where required, we rely on SCCs and appropriate safeguards for cross-border transfers. Processing records and incident response controls are maintained under internal security policies.</p>
        <p>To submit a request, email privacy@apexrevenue.ai. We respond within statutory timelines.</p>
      </div>
    </div>
  );
}
