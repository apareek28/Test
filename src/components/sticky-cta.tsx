'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export function StickyCTA() {
  return (
    <motion.div
      initial={{ y: 90, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed bottom-5 right-5 z-50"
    >
      <Link
        href="/contact"
        className="glass inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-slate-700 transition-all duration-500 hover:-translate-y-0.5 hover:shadow-glow"
      >
        <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
        Start Your Transformation
      </Link>
    </motion.div>
  );
}
