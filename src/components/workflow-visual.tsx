'use client';

import { motion } from 'framer-motion';

export function WorkflowVisual() {
  return (
    <div className="relative h-[320px] rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent p-6">
      <motion.div animate={{ y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 4 }} className="absolute left-8 top-10 w-48 rounded-xl border border-accent/40 bg-panel/90 p-4">
        <p className="text-xs text-slate-400">Input Systems</p>
        <p className="mt-2 font-medium">CRM + ERP + Support</p>
      </motion.div>
      <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 4.5 }} className="absolute right-8 top-24 w-48 rounded-xl border border-accent/40 bg-panel/90 p-4">
        <p className="text-xs text-slate-400">AI Orchestration</p>
        <p className="mt-2 font-medium">Agent-based workflows</p>
      </motion.div>
      <motion.div animate={{ y: [0, -6, 0] }} transition={{ repeat: Infinity, duration: 5 }} className="absolute bottom-10 left-1/2 w-52 -translate-x-1/2 rounded-xl border border-accent/40 bg-panel/90 p-4">
        <p className="text-xs text-slate-400">Output Layer</p>
        <p className="mt-2 font-medium">Automated operations dashboard</p>
      </motion.div>
      <div className="absolute inset-0 bg-grid bg-[size:30px_30px] opacity-20" />
    </div>
  );
}
