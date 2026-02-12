import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { StickyCTA } from '@/components/sticky-cta';
import { CookieConsent } from '@/components/cookie-consent';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.aetherautomate.com'),
  title: {
    default: 'AetherAutomate | Enterprise AI Automation Agency',
    template: '%s | AetherAutomate'
  },
  description:
    'Enterprise AI automation agency specializing in n8n workflow orchestration, AI agents, LLM integrations, API modernization, and intelligent data systems.',
  keywords: [
    'n8n automation services',
    'AI workflow automation agency',
    'AI agent development',
    'enterprise AI integration',
    'business process automation'
  ],
  alternates: { canonical: '/' },
  openGraph: {
    title: 'AetherAutomate',
    description: 'We design intelligent systems that run your business.',
    url: 'https://www.aetherautomate.com',
    siteName: 'AetherAutomate',
    type: 'website'
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Script id="gtm" strategy="afterInteractive">{`window.dataLayer = window.dataLayer || [];`}</Script>
        <Script id="ga4" strategy="afterInteractive">{`window.gtag = function(){dataLayer.push(arguments)};`}</Script>
        <Script id="meta-pixel" strategy="afterInteractive">{`window.fbq = window.fbq || function(){}`}</Script>
        <Script id="linkedin" strategy="afterInteractive">{`window.lintrk = window.lintrk || function(){}`}</Script>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <StickyCTA />
        <CookieConsent />
      </body>
    </html>
  );
}
