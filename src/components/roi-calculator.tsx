'use client';

import { useMemo, useState } from 'react';

export function ROICalculator() {
  const [dealSize, setDealSize] = useState(25000);
  const [deals, setDeals] = useState(20);
  const [uplift, setUplift] = useState(12);

  const incremental = useMemo(() => Math.round((dealSize * deals * uplift) / 100), [dealSize, deals, uplift]);

  return (
    <div className="card">
      <h3 className="text-2xl font-semibold">Revenue ROI Calculator</h3>
      <p className="mt-2 text-sm text-slate-600">Estimate annualized revenue lift from Salesforce optimization and AI automation.</p>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <label className="text-sm">Average deal size<input type="number" value={dealSize} onChange={(e) => setDealSize(Number(e.target.value))} className="mt-2 w-full rounded-lg border border-border px-3 py-2" /></label>
        <label className="text-sm">Monthly closed deals<input type="number" value={deals} onChange={(e) => setDeals(Number(e.target.value))} className="mt-2 w-full rounded-lg border border-border px-3 py-2" /></label>
        <label className="text-sm">Expected uplift %<input type="number" value={uplift} onChange={(e) => setUplift(Number(e.target.value))} className="mt-2 w-full rounded-lg border border-border px-3 py-2" /></label>
      </div>
      <div className="mt-6 rounded-xl bg-mist p-5">
        <p className="text-sm text-slate-600">Estimated annual incremental revenue</p>
        <p className="text-3xl font-semibold text-primary">${(incremental * 12).toLocaleString()}</p>
      </div>
    </div>
  );
}
