import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { StickyCTA } from '@/components/sticky-cta';
import { CookieBanner } from '@/components/cookie-banner';
import { brand } from '@/content/site';

export const metadata: Metadata = {
  metadataBase: new URL(brand.url),
  title: {
    default: `${brand.name} | Salesforce & AI Consulting`,
    template: `%s | ${brand.name}`
  },
  description: 'Enterprise Salesforce and AI consulting firm focused on revenue growth, operational speed, and measurable ROI.',
  alternates: { canonical: '/' }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Script id="gtm" strategy="afterInteractive">{`window.dataLayer=window.dataLayer||[];`}</Script>
        <Script id="ga4" strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" />
        <Script id="ga4-init" strategy="afterInteractive">{`function gtag(){dataLayer.push(arguments)};gtag('js',new Date());gtag('config','G-XXXXXXXXXX');`}</Script>
        <Script id="meta-pixel" strategy="afterInteractive">{`window.fbq = window.fbq || function(){(window.fbq.q=window.fbq.q||[]).push(arguments)};`}</Script>
        <Script id="linkedin" strategy="afterInteractive">{`window._linkedin_partner_id='XXXXXX';`}</Script>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <StickyCTA />
        <CookieBanner />
      </body>
    </html>
  );
}
