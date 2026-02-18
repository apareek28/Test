import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export const metadata: Metadata = {
  title: 'BluePeak Consulting | Enterprise Salesforce & Cloud Transformation',
  description:
    'BluePeak Consulting delivers enterprise Salesforce consulting, cloud transformation, and managed services with measurable business outcomes.',
  keywords: [
    'Salesforce consulting',
    'cloud consulting',
    'enterprise digital transformation',
    'managed services',
    'CRM implementation'
  ],
  openGraph: {
    title: 'BluePeak Consulting',
    description: 'Enterprise consulting for Salesforce, cloud modernization, and AI automation.',
    type: 'website'
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
