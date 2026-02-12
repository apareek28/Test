'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { useState } from 'react';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' }
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 border-b border-white/10 bg-bg/85 backdrop-blur"
    >
      <nav className="container-wrap flex h-16 items-center justify-between">
        <Link href="/" className="font-semibold tracking-wide text-white">
          Lumen<span className="text-accent">Tech</span>
        </Link>

        <button
          className="rounded-md border border-white/20 px-3 py-1 text-sm text-white md:hidden"
          onClick={() => setOpen((current) => !current)}
          aria-label="Toggle menu"
        >
          Menu
        </button>

        <ul className="hidden items-center gap-6 md:flex">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-sm transition-colors ${active ? 'text-accent' : 'text-slate-200 hover:text-accent'}`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <Link
          href="/contact"
          className="hidden rounded-full bg-accent px-4 py-2 text-sm font-semibold text-black transition-all hover:shadow-glow md:inline-flex"
        >
          Book Demo
        </Link>
      </nav>

      {open && (
        <div className="container-wrap pb-4 md:hidden">
          <ul className="space-y-3 rounded-xl border border-white/10 bg-white/5 p-4">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block text-sm ${pathname === link.href ? 'text-accent' : 'text-slate-100'}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex rounded-full bg-accent px-4 py-2 text-sm font-semibold text-black"
              >
                Book Demo
              </Link>
            </li>
          </ul>
        </div>
      )}
    </motion.header>
  );
}
