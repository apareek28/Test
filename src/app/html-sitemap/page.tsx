import Link from 'next/link';

const links = ['/', '/services', '/industries', '/case-studies', '/about', '/blog', '/contact', '/book-strategy-call', '/resources', '/faq', '/careers', '/privacy-policy', '/terms-and-conditions', '/cookie-policy', '/gdpr-compliance', '/ccpa-notice', '/disclaimer'];

export default function HTMLSiteMapPage() {
  return (
    <div className="container-wrap section-padding">
      <h1 className="headline-lg">HTML Sitemap</h1>
      <ul className="mt-8 space-y-2">
        {links.map((href) => (
          <li key={href}><Link className="text-primary hover:underline" href={href}>{href}</Link></li>
        ))}
      </ul>
    </div>
  );
}
