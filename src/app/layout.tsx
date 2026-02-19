import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { StickyCTA } from '@/components/sticky-cta';

export const metadata: Metadata = {
  title: 'AetherOps | AI Automation & Salesforce Transformation',
  description:
    'AetherOps is a premium consulting firm delivering AI automation, Salesforce implementation, and enterprise digital transformation for global organizations.',
  keywords: ['AI automation solutions', 'Salesforce consulting', 'enterprise digital transformation', 'Fortune 500 consulting']
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <StickyCTA />
      </body>
    </html>
  );
}
