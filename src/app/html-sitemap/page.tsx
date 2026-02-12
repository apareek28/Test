import Link from 'next/link';
import { allSiteLinks } from '@/lib/site-data';

export default function HtmlSitemapPage() {
  return (
    <div className="container-wrap section-padding">
      <h1 className="text-4xl font-semibold">HTML Sitemap</h1>
      <div className="mt-6 grid gap-2 text-sm text-slate-300 md:grid-cols-2">
        {allSiteLinks.map((href) => (
          <Link key={href} href={href} className="card px-4 py-3 hover:text-white">
            {href}
          </Link>
        ))}
      </div>
    </div>
  );
}
