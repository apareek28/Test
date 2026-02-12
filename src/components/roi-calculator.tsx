'use client';

import { useMemo, useState } from 'react';

export function ROICalculator() {
  const [hours, setHours] = useState(140);
  const [rate, setRate] = useState(60);
  const [efficiency, setEfficiency] = useState(45);

  const monthly = useMemo(() => Math.round(hours * rate * (efficiency / 100)), [hours, rate, efficiency]);

  return (
    <div className="card p-6">
      <h3 className="text-xl font-semibold">Automation ROI Calculator</h3>
      <p className="mt-2 text-sm text-muted">Estimate monthly savings from replacing repetitive manual workflows.</p>
      <div className="mt-5 grid gap-4 md:grid-cols-3">
        {[
          ['Manual hours / month', hours, setHours],
          ['Loaded hourly cost ($)', rate, setRate],
          ['Efficiency gain (%)', efficiency, setEfficiency]
        ].map(([label, value, setValue]) => (
          <label key={label as string} className="text-sm">
            <span className="mb-2 block text-slate-300">{label as string}</span>
            <input
              type="number"
              value={value as number}
              onChange={(event) => (setValue as (value: number) => void)(Number(event.target.value))}
              className="w-full rounded-lg border border-line bg-bg px-3 py-2"
            />
          </label>
        ))}
      </div>
      <p className="mt-5 text-sm text-slate-300">Estimated monthly savings</p>
      <p className="text-3xl font-semibold text-accent">${monthly.toLocaleString()}</p>
    </div>
  );
}
