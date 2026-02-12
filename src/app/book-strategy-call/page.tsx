import type { Metadata } from 'next';
import { StrategyCallBooker } from '@/components/strategy-call-booker';

export const metadata: Metadata = {
  title: 'Book Strategy Call',
  description: 'Schedule a Salesforce and AI strategy call with ApexRevenue AI.'
};

export default function BookPage() {
  return (
    <div className="container-wrap section-padding max-w-4xl">
      <p className="eyebrow">Book Strategy Call</p>
      <h1 className="headline-lg mt-4">Meet directly with a senior Salesforce growth strategist</h1>
      <p className="mt-5 body-lg">Choose a convenient time, share priorities, and receive a focused 90-day revenue roadmap after the call.</p>
      <StrategyCallBooker />
    </div>
  );
}
