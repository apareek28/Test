'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export function StickyCTA() {
  return (
    <motion.div initial={{ y: 80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.6 }} className="fixed bottom-5 right-5 z-50">
      <Link href="/book-call" className="rounded-full border border-accent/60 bg-gradient px-5 py-3 text-sm font-semibold text-white shadow-glow">
        ROI Assessment
      </Link>
    </motion.div>
  );
}
