'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navLinks, brand } from '@/content/site';

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-white/90 backdrop-blur">
      <nav className="container-wrap flex h-18 items-center justify-between py-4">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          {brand.name.split(' ')[0]}
          <span className="text-primary"> {brand.name.split(' ')[1]} {brand.name.split(' ')[2]}</span>
        </Link>
        <ul className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-sm ${pathname.startsWith(link.href) ? 'text-primary' : 'text-slate-600 hover:text-ink'}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/book-strategy-call" className="btn-primary">
          Book Free Strategy Call
        </Link>
      </nav>
    </header>
  );
}
