'use client';

import { useState } from 'react';

export function CookieBanner() {
  const [hidden, setHidden] = useState(false);
  if (hidden) return null;
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-white p-4 shadow-soft">
      <div className="container-wrap flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <p className="text-xs text-slate-600">We use analytics and advertising cookies with consent. Manage preferences per GDPR/CCPA requirements.</p>
        <div className="flex gap-2">
          <button className="btn-secondary" onClick={() => setHidden(true)}>Reject</button>
          <button className="btn-primary" onClick={() => setHidden(true)}>Accept</button>
        </div>
      </div>
    </div>
  );
}
