'use client';

import { useEffect, useState } from 'react';

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!window.localStorage.getItem('cookie-consent')) setVisible(true);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-line bg-bg/95 p-4 backdrop-blur">
      <div className="container-wrap flex flex-wrap items-center justify-between gap-4">
        <p className="text-sm text-slate-300">We use cookies for analytics and personalization. Manage preferences any time.</p>
        <div className="flex gap-2 text-sm">
          <button onClick={() => { localStorage.setItem('cookie-consent', 'essential'); setVisible(false); }} className="rounded-full border border-line px-4 py-2">Essential only</button>
          <button onClick={() => { localStorage.setItem('cookie-consent', 'all'); setVisible(false); }} className="rounded-full bg-accent px-4 py-2 font-semibold text-white">Accept all</button>
        </div>
      </div>
    </div>
  );
}
