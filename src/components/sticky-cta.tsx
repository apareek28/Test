'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export function StickyCTA() {
  return (
    <motion.div
      initial={{ y: 90, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="fixed bottom-5 right-5 z-50"
    >
      <Link
        href="/contact"
        className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-black shadow-glow transition-all hover:scale-[1.02]"
      >
        <span className="h-2 w-2 animate-pulse rounded-full bg-black" />
        Get a Demo
      </Link>
    </motion.div>
  );
}
