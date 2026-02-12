import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { StickyCTA } from '@/components/sticky-cta';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'LumenTech | AI-Powered Tech Growth Partner',
  description:
    'LumenTech helps high-growth teams modernize products, automate operations, and accelerate revenue with intelligent technology solutions.',
  keywords: ['tech company', 'automation', 'product engineering', 'AI solutions', 'lead generation'],
  openGraph: {
    title: 'LumenTech | AI-Powered Tech Growth Partner',
    description: 'Book a demo to improve your conversion funnel, product delivery speed, and revenue operations.',
    type: 'website'
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <StickyCTA />
      </body>
    </html>
  );
}
