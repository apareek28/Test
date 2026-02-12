'use client';

import { useEffect, useState } from 'react';

const KEY = 'apex-cookie-consent';

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(KEY);
    if (!saved) setVisible(true);
  }, []);

  function save(value: 'accepted' | 'rejected') {
    localStorage.setItem(KEY, value);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-white p-4 shadow-soft">
      <div className="container-wrap flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <p className="text-xs text-slate-600">We use essential, analytics, and advertising cookies to improve experience and measure campaigns. You can update preferences any time in our Cookie Policy.</p>
        <div className="flex gap-2">
          <button className="btn-secondary" onClick={() => save('rejected')}>Reject non-essential</button>
          <button className="btn-primary" onClick={() => save('accepted')}>Accept all</button>
        </div>
      </div>
    </div>
  );
}
