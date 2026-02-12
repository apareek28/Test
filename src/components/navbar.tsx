'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { navLinks, brand } from '@/content/site';

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-white/90 backdrop-blur">
      <nav className="container-wrap flex items-center justify-between py-4">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          {brand.name}
        </Link>
        <button className="rounded-md border border-border px-3 py-2 text-sm lg:hidden" onClick={() => setOpen((v) => !v)}>
          Menu
        </button>
        <ul className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className={`text-sm ${pathname.startsWith(link.href) ? 'text-primary' : 'text-slate-600 hover:text-ink'}`}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/book-strategy-call" className="hidden btn-primary lg:inline-flex">
          Book Free Strategy Call
        </Link>
      </nav>
      {open ? (
        <div className="container-wrap space-y-2 border-t border-border py-3 lg:hidden">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="block text-sm text-slate-700" onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
          <Link href="/book-strategy-call" className="btn-primary w-full" onClick={() => setOpen(false)}>
            Book Free Strategy Call
          </Link>
        </div>
      ) : null}
    </header>
  );
}
