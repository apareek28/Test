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

const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
const ga4Id = process.env.NEXT_PUBLIC_GA4_ID;
const linkedInId = process.env.NEXT_PUBLIC_LINKEDIN_ID;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Script id="data-layer" strategy="afterInteractive">{`window.dataLayer=window.dataLayer||[];`}</Script>
        {ga4Id ? (
          <>
            <Script id="ga4-lib" strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${ga4Id}`} />
            <Script id="ga4-init" strategy="afterInteractive">{`function gtag(){dataLayer.push(arguments)};gtag('js',new Date());gtag('config','${ga4Id}');`}</Script>
          </>
        ) : null}
        {gtmId ? <Script id="gtm-init" strategy="afterInteractive">{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${gtmId}');`}</Script> : null}
        {linkedInId ? <Script id="linkedin-init" strategy="afterInteractive">{`window._linkedin_partner_id='${linkedInId}';`}</Script> : null}
        <Navbar />
        <main>{children}</main>
        <Footer />
        <StickyCTA />
        <CookieBanner />
      </body>
    </html>
  );
}
