import Link from 'next/link';
import { footerColumns } from '@/lib/site-data';

export function Footer() {
  return (
    <footer className="mt-24 border-t border-line py-14">
      <div className="container-wrap grid gap-10 md:grid-cols-4">
        <div>
          <p className="text-lg font-semibold">AetherAutomate</p>
          <p className="mt-3 text-sm text-muted">We design intelligent systems that run your business.</p>
          <form className="mt-5 space-y-2">
            <label className="text-xs text-slate-400">Enterprise insights newsletter</label>
            <div className="flex gap-2">
              <input className="w-full rounded-lg border border-line bg-panel px-3 py-2 text-sm" placeholder="Work email" />
              <button type="button" className="rounded-lg bg-accent px-3 text-sm font-semibold text-white">
                Join
              </button>
            </div>
          </form>
        </div>
        {footerColumns.map((column) => (
          <div key={column.title}>
            <p className="text-sm font-semibold text-white">{column.title}</p>
            <div className="mt-3 space-y-2 text-sm text-slate-300">
              {column.links.map(([href, label]) => (
                <Link key={href} href={href} className="block hover:text-white">
                  {label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="container-wrap mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6 text-xs text-slate-400">
        <p>© {new Date().getFullYear()} AetherAutomate. All rights reserved.</p>
        <p>ISO-aligned controls · GDPR/CCPA-ready workflows · SOC 2 roadmap support</p>
      </div>
    </footer>
  );
}
