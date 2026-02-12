import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { StickyCTA } from '@/components/sticky-cta';

export const metadata: Metadata = {
  title: 'Axiom Automation | Enterprise AI & Workflow Architecture',
  description:
    'Axiom Automation designs secure, scalable enterprise automation systems across AI agents, RPA, and workflow orchestration.',
  keywords: ['enterprise automation', 'AI agents', 'RPA', 'workflow optimization', 'operations transformation']
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
