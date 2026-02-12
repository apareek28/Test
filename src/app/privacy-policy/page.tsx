import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for ApexRevenue AI website visitors, leads, and clients.'
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container-wrap section-padding max-w-4xl">
      <h1 className="headline-lg">Privacy Policy</h1>
      <div className="mt-6 space-y-4 text-slate-600">
        <p>We collect contact details, professional identifiers, and usage analytics to respond to inquiries, deliver services, and improve website performance.</p>
        <p>Lawful bases include consent, legitimate interest, and contract performance. We do not sell personal information.</p>
        <p>We retain lead data for up to 24 months unless a longer retention period is legally required. You may request access, correction, deletion, or portability at privacy@apexrevenue.ai.</p>
        <p>For enterprise services, data processing terms, SCCs, and security documentation are available through our DPA package.</p>
      </div>
    </div>
  );
}
