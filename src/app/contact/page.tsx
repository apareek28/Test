import type { Metadata } from 'next';
import { ContactForm } from '@/components/contact-form';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact ApexRevenue AI for Salesforce consulting, AI automation, and RevOps strategy.'
};

export default function ContactPage() {
  return (
    <div className="container-wrap section-padding grid gap-8 lg:grid-cols-2">
      <div>
        <p className="eyebrow">Contact</p>
        <h1 className="headline-lg mt-4">Talk with a senior Salesforce strategist</h1>
        <p className="mt-5 body-lg">Share your goals and we will provide a practical roadmap with timeline, investment bands, and expected ROI.</p>
      </div>
      <ContactForm />
    </div>
  );
}
