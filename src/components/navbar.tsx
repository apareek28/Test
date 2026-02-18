'use client';

import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

type MenuItem = {
  label: string;
  href?: string;
  children?: { label: string; href: string }[];
};

const menuItems: MenuItem[] = [
  {
    label: 'Services',
    children: [
      { label: 'Salesforce Consulting', href: '#services' },
      { label: 'Cloud Transformation', href: '#services' },
      { label: 'Managed Services', href: '#services' }
    ]
  },
  {
    label: 'Solutions',
    children: [
      { label: 'Customer 360', href: '#case-studies' },
      { label: 'Revenue Operations', href: '#industry-expertise' },
      { label: 'AI + Automation', href: '#services' }
    ]
  },
  {
    label: 'Industries',
    href: '#industry-expertise'
  },
  {
    label: 'Insights',
    href: '#blog'
  }
];

export function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur transition-shadow ${
        scrolled ? 'shadow-header' : 'shadow-none'
      }`}
    >
      <nav className="container-wrap flex h-20 items-center justify-between">
        <Link href="/" className="text-xl font-bold text-primary" aria-label="BluePeak Consulting home">
          BluePeak <span className="text-secondary">Consulting</span>
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {menuItems.map((item) => (
            <li
              key={item.label}
              className="relative"
              onMouseEnter={() => item.children && setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                href={item.href ?? '#'}
                className="flex items-center gap-1 text-sm font-medium text-slate-700 transition-colors hover:text-primary"
              >
                {item.label}
                {item.children && <span aria-hidden>▾</span>}
              </Link>
              <AnimatePresence>
                {item.children && openDropdown === item.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 top-8 w-60 rounded-xl border border-slate-200 bg-white p-2 shadow-soft"
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block rounded-lg px-3 py-2 text-sm text-slate-700 transition hover:bg-slate-100 hover:text-primary"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 lg:flex">
          <Link
            href="#contact"
            className="rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-secondary"
          >
            Book Consultation
          </Link>
        </div>

        <button
          type="button"
          className="rounded-lg border border-slate-300 p-2 text-primary lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Open mobile menu"
          aria-expanded={mobileOpen}
        >
          ☰
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="border-t border-slate-200 bg-white lg:hidden"
          >
            <div className="container-wrap space-y-2 py-4">
              {menuItems.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 p-3">
                  <Link
                    href={item.href ?? '#'}
                    className="block text-sm font-semibold text-slate-800"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="mt-2 space-y-1 border-t border-slate-100 pt-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block text-sm text-slate-600"
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link
                href="#contact"
                className="mt-2 block rounded-lg bg-primary px-5 py-3 text-center text-sm font-semibold text-white"
                onClick={() => setMobileOpen(false)}
              >
                Book Consultation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
