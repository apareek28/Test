'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { navLinks } from '@/lib/site-data';

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`sticky top-0 z-50 border-b transition-all ${
        scrolled ? 'border-line bg-bg/95 backdrop-blur-xl' : 'border-transparent bg-transparent'
      }`}
    >
      <nav className="container-wrap flex h-20 items-center justify-between gap-6">
        <Link href="/" className="font-semibold tracking-tight text-white">
          Aether<span className="text-accent">Automate</span>
        </Link>
        <ul className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => {
            const active = pathname.startsWith(link.href.replace('/ai-agents', '')) && link.href !== '/';
            return (
              <li key={link.href}>
                <Link href={link.href} className={`text-sm ${active ? 'text-white' : 'text-slate-300 hover:text-white'}`}>
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
        <Link href="/book-call" className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-glow">
          Book Discovery Call
        </Link>
      </nav>
    </motion.header>
  );
}
