'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const links = [
  { href: '/#home', label: 'Home' },
  { href: '/#solutions', label: 'Solutions' },
  { href: '/#salesforce-solutions', label: 'Salesforce' },
  { href: '/#ai-automation', label: 'AI Automation' },
  { href: '/#case-studies', label: 'Case Studies' },
  { href: '/about', label: 'About' },
  { href: '/#insights', label: 'Insights' },
  { href: '/contact', label: 'Contact' }
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -22, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`sticky top-0 z-50 transition-all duration-700 ${
        scrolled ? 'mx-4 mt-3 rounded-2xl glass shadow-soft' : 'bg-transparent'
      }`}
    >
      <nav className="container-wrap flex h-16 items-center justify-between">
        <Link href="/" className="font-semibold tracking-wide text-slate-700">
          Aether<span className="text-primary">Ops</span>
        </Link>
        <ul className="hidden items-center gap-5 lg:flex">
          {links.map((link) => {
            const active = link.href.startsWith('/#') ? pathname === '/' : pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-sm transition-colors duration-500 ${
                    active ? 'text-slate-800' : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
        <Link
          href="/contact"
          className="rounded-full bg-aurora px-4 py-2 text-sm font-semibold text-slate-700 shadow-glow transition duration-500 hover:-translate-y-0.5"
        >
          Book a Strategy Call
        </Link>
      </nav>
    </motion.header>
  );
}
