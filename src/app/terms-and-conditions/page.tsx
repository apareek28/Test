import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms and Conditions',
  description: 'Website terms and conditions for ApexRevenue AI.'
};

export default function TermsPage() {
  return (
    <div className="container-wrap section-padding max-w-4xl">
      <h1 className="headline-lg">Terms and Conditions</h1>
      <div className="mt-6 space-y-4 text-slate-600">
        <p>By accessing this website, you agree to lawful use of content and acknowledge that service details may change without prior notice.</p>
        <p>All materials are protected by intellectual property law. Reproduction without written consent is prohibited.</p>
        <p>Professional advice is provided through formal engagement agreements only. Liability is limited as permitted by applicable law.</p>
      </div>
    </div>
  );
}
