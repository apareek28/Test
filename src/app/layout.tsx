import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { StickyCTA } from '@/components/sticky-cta';

export const metadata: Metadata = {
  title: 'LumenTech | AI-Powered Tech Growth Partner',
  description:
    'LumenTech helps high-growth teams modernize products, automate operations, and accelerate revenue with intelligent technology solutions.',
  keywords: ['tech company', 'automation', 'product engineering', 'AI solutions', 'lead generation']
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
