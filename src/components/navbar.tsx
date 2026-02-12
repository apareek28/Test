'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

const links = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'Why Us' },
  { href: '/contact', label: 'Contact' }
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45 }}
      className="sticky top-0 z-50 border-b border-white/10 bg-bg/80 backdrop-blur-xl"
    >
      <nav className="container-wrap flex h-16 items-center justify-between">
        <Link href="/" className="font-semibold tracking-wide text-white">
          AXIOM<span className="text-accent">AUTOMATION</span>
        </Link>
        <ul className="hidden items-center gap-7 md:flex">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link href={link.href} className={`text-sm transition-colors ${active ? 'text-accent' : 'text-slate-200 hover:text-accent'}`}>
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
        <Link href="/contact" className="rounded-full border border-accent/50 bg-accent/10 px-4 py-2 text-sm font-semibold text-accent transition-all hover:shadow-glow">
          Book a Strategy Call
        </Link>
      </nav>
    </motion.header>
  );
}
