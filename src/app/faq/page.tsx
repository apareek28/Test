import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'FAQ', description: 'Frequently asked questions about Salesforce consulting and AI automation programs.' };

export default function FAQPage() {
  return <div className="container-wrap section-padding"><h1 className="headline-lg">FAQ</h1><p className="mt-4 body-lg">Use this page for expanded schema-ready FAQ content and pre-sales objections handling.</p></div>;
}
