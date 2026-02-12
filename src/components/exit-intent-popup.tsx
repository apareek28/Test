'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const SEEN_KEY = 'apex-exit-intent-seen';

export function ExitIntentPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(SEEN_KEY)) return;
    const onLeave = (event: MouseEvent) => {
      if (event.clientY <= 0) {
        sessionStorage.setItem(SEEN_KEY, '1');
        setOpen(true);
      }
    };
    document.addEventListener('mouseleave', onLeave);
    return () => document.removeEventListener('mouseleave', onLeave);
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink/50 p-4">
      <div className="w-full max-w-lg rounded-2xl bg-white p-8 shadow-hover">
        <p className="eyebrow">Before you go</p>
        <h3 className="mt-2 text-2xl font-semibold">Get the Salesforce Revenue Audit Checklist</h3>
        <p className="mt-3 text-sm text-slate-600">Includes architecture, automation, data governance, and CRO checkpoints used in enterprise workshops.</p>
        <div className="mt-6 flex gap-3">
          <Link href="/resources" className="btn-primary">Download Checklist</Link>
          <button onClick={() => setOpen(false)} className="btn-secondary">Close</button>
        </div>
      </div>
    </div>
  );
}
