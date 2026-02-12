'use client';

import { FormEvent, useState } from 'react';

const steps = ['Company', 'Objectives', 'Timeline'];

export function DiscoveryForm() {
  const [step, setStep] = useState(0);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ company: '', email: '', objective: '', stack: '', timeline: '', budget: '' });

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    if (step < steps.length - 1) {
      setStep((current) => current + 1);
      return;
    }
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} className="card p-6">
      <p className="text-xs uppercase tracking-[0.2em] text-accent">Step {step + 1} / {steps.length}</p>
      <h3 className="mt-2 text-xl font-semibold">{steps[step]}</h3>
      <div className="mt-4 space-y-3 text-sm">
        {step === 0 && (
          <>
            <input required placeholder="Company name" className="w-full rounded-lg border border-line bg-bg px-3 py-2" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} />
            <input required type="email" placeholder="Work email" className="w-full rounded-lg border border-line bg-bg px-3 py-2" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
          </>
        )}
        {step === 1 && (
          <>
            <textarea required placeholder="Core automation objective" className="min-h-28 w-full rounded-lg border border-line bg-bg px-3 py-2" value={form.objective} onChange={(e) => setForm({ ...form, objective: e.target.value })} />
            <input placeholder="Current stack (CRM/ERP/Data)" className="w-full rounded-lg border border-line bg-bg px-3 py-2" value={form.stack} onChange={(e) => setForm({ ...form, stack: e.target.value })} />
          </>
        )}
        {step === 2 && (
          <>
            <select required className="w-full rounded-lg border border-line bg-bg px-3 py-2" value={form.timeline} onChange={(e) => setForm({ ...form, timeline: e.target.value })}>
              <option value="">Target timeline</option>
              <option>0-30 days</option>
              <option>1-2 months</option>
              <option>Quarterly roadmap</option>
            </select>
            <select className="w-full rounded-lg border border-line bg-bg px-3 py-2" value={form.budget} onChange={(e) => setForm({ ...form, budget: e.target.value })}>
              <option value="">Approximate budget</option>
              <option>$15k-$35k</option>
              <option>$35k-$75k</option>
              <option>$75k+</option>
            </select>
          </>
        )}
      </div>
      <button className="mt-4 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white" type="submit">
        {step < steps.length - 1 ? 'Continue' : 'Submit Assessment'}
      </button>
      {sent && <p className="mt-3 text-sm text-emerald-300">Submitted. A strategist will reach out within one business day.</p>}
    </form>
  );
}
