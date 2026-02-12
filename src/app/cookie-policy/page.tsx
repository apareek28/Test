import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'Cookie categories, purposes, and consent controls used on ApexRevenue AI.'
};

export default function CookiePolicyPage() {
  return (
    <div className="container-wrap section-padding max-w-4xl">
      <h1 className="headline-lg">Cookie Policy</h1>
      <div className="mt-6 space-y-4 text-slate-600">
        <p>We use essential cookies for security and session integrity, analytics cookies for performance insights, and marketing cookies for campaign attribution.</p>
        <p>Non-essential cookies are activated only after consent. You can reject non-essential categories via the banner and update preferences in your browser settings.</p>
        <p>Third-party tools may include Google Analytics, tag managers, and ad attribution platforms configured through your consent choices.</p>
      </div>
    </div>
  );
}
