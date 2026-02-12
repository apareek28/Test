'use client';

import { useMemo, useState } from 'react';

export function RoiCalculator() {
  const [hours, setHours] = useState(320);
  const [cost, setCost] = useState(70);
  const [efficiencyGain, setEfficiencyGain] = useState(42);

  const annualSavings = useMemo(() => Math.round(hours * cost * (efficiencyGain / 100) * 12), [hours, cost, efficiencyGain]);
  const paybackMonths = useMemo(() => Math.max(1, Math.round(180000 / (annualSavings / 12))), [annualSavings]);

  return (
    <div className="glass-card rounded-2xl p-6">
      <p className="text-sm uppercase tracking-[0.16em] text-accent">Interactive ROI Calculator</p>
      <div className="mt-5 grid gap-4 md:grid-cols-3">
        <label className="text-sm text-slate-300">Manual Hours / Month
          <input type="range" min={80} max={1000} value={hours} onChange={(e) => setHours(Number(e.target.value))} className="mt-2 w-full" />
          <span className="text-white">{hours} hrs</span>
        </label>
        <label className="text-sm text-slate-300">Average Hourly Cost
          <input type="range" min={30} max={200} value={cost} onChange={(e) => setCost(Number(e.target.value))} className="mt-2 w-full" />
          <span className="text-white">${cost}/hr</span>
        </label>
        <label className="text-sm text-slate-300">Estimated Efficiency Gain
          <input type="range" min={10} max={85} value={efficiencyGain} onChange={(e) => setEfficiencyGain(Number(e.target.value))} className="mt-2 w-full" />
          <span className="text-white">{efficiencyGain}%</span>
        </label>
      </div>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-white/10 bg-black/20 p-4">
          <p className="text-xs text-slate-400">Projected Annual Savings</p>
          <p className="mt-2 text-3xl font-semibold text-white">${annualSavings.toLocaleString()}</p>
        </div>
        <div className="rounded-xl border border-white/10 bg-black/20 p-4">
          <p className="text-xs text-slate-400">Estimated Payback Window</p>
          <p className="mt-2 text-3xl font-semibold text-white">{paybackMonths} months</p>
        </div>
      </div>
    </div>
  );
}
