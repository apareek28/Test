import Link from 'next/link';
import { brand } from '@/content/site';

const legal = [
  ['/privacy-policy', 'Privacy'],
  ['/terms-and-conditions', 'Terms'],
  ['/cookie-policy', 'Cookies'],
  ['/gdpr-compliance', 'GDPR'],
  ['/ccpa-notice', 'CCPA'],
  ['/disclaimer', 'Disclaimer'],
  ['/html-sitemap', 'HTML Sitemap']
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-mist/40">
      <div className="container-wrap grid gap-10 py-12 md:grid-cols-3">
        <div>
          <p className="text-lg font-semibold">{brand.name}</p>
          <p className="mt-3 text-sm text-slate-600">{brand.tagline}</p>
          <p className="mt-4 text-xs text-slate-500">© {new Date().getFullYear()} {brand.name}. All rights reserved.</p>
        </div>
        <div>
          <p className="text-sm font-semibold">Solutions</p>
          <div className="mt-4 space-y-2 text-sm text-slate-600">
            <Link className="block hover:text-primary" href="/services">Salesforce Services</Link>
            <Link className="block hover:text-primary" href="/industries">Industry Playbooks</Link>
            <Link className="block hover:text-primary" href="/case-studies">Case Studies</Link>
            <Link className="block hover:text-primary" href="/resources">Resources</Link>
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold">Legal & Compliance</p>
          <div className="mt-4 grid grid-cols-2 gap-2 text-sm text-slate-600">
            {legal.map(([href, label]) => (
              <Link key={href} className="hover:text-primary" href={href}>
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
