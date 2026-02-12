'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export function ExitIntentPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onLeave = (event: MouseEvent) => {
      if (event.clientY < 5) {
        setOpen(true);
      }
    };
    document.addEventListener('mouseleave', onLeave);
    return () => document.removeEventListener('mouseleave', onLeave);
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4">
      <div className="card max-w-md p-6">
        <p className="text-xs uppercase tracking-[0.2em] text-accent">Before you go</p>
        <h3 className="mt-2 text-2xl font-semibold">Get the Enterprise Automation Blueprint</h3>
        <p className="mt-3 text-sm text-muted">Download our process map template and 90-day AI modernization checklist.</p>
        <div className="mt-5 flex gap-3">
          <Link href="/resources" className="rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white">Download</Link>
          <button onClick={() => setOpen(false)} className="rounded-full border border-line px-4 py-2 text-sm">Close</button>
        </div>
      </div>
    </div>
  );
}
