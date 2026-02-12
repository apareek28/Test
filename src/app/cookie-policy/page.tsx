import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookie policy',
  description: 'Cookie policy for ApexRevenue AI website users and prospects.'
};

export default function Page() {
  return (
    <div className="container-wrap section-padding max-w-4xl">
      <h1 className="headline-lg capitalize">cookie policy</h1>
      <div className="mt-6 space-y-4 text-slate-600">
        <p>This policy explains what data we collect, why we process it, and how users can exercise rights under applicable regulations.</p>
        <p>We disclose third-party processors, retention schedules, lawful basis, and contact channels for privacy requests.</p>
        <p>For enterprise clients, a DPA, SCCs, and security controls documentation are available on request.</p>
      </div>
    </div>
  );
}
