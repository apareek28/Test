'use client';

import { FormEvent, useState } from 'react';

export function ContactForm() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ name: '', email: '', company: '', goals: '', budget: '' });
  const [message, setMessage] = useState('');

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage('Thanks — your request is queued. A strategist will respond within one business day.');
    setForm({ name: '', email: '', company: '', goals: '', budget: '' });
    setStep(1);
  }

  return (
    <form onSubmit={onSubmit} className="card space-y-4">
      <p className="text-xs font-semibold text-primary">Multi-step Inquiry Form • Step {step}/2</p>
      {step === 1 ? (
        <>
          <input className="w-full rounded-xl border border-border px-4 py-3" placeholder="Full Name" value={form.name} onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))} required />
          <input className="w-full rounded-xl border border-border px-4 py-3" type="email" placeholder="Work Email" value={form.email} onChange={(e) => setForm((s) => ({ ...s, email: e.target.value }))} required />
          <input className="w-full rounded-xl border border-border px-4 py-3" placeholder="Company" value={form.company} onChange={(e) => setForm((s) => ({ ...s, company: e.target.value }))} required />
          <button type="button" className="btn-primary" onClick={() => setStep(2)}>Continue</button>
        </>
      ) : (
        <>
          <textarea className="min-h-32 w-full rounded-xl border border-border px-4 py-3" placeholder="Primary revenue goals" value={form.goals} onChange={(e) => setForm((s) => ({ ...s, goals: e.target.value }))} required />
          <select className="w-full rounded-xl border border-border px-4 py-3" value={form.budget} onChange={(e) => setForm((s) => ({ ...s, budget: e.target.value }))} required>
            <option value="">Budget Range</option>
            <option value="50k-100k">$50K–$100K</option>
            <option value="100k-250k">$100K–$250K</option>
            <option value="250k+">$250K+</option>
          </select>
          <p className="text-xs text-slate-500">reCAPTCHA v3 placeholder: connect provider key in production.</p>
          <div className="flex gap-3">
            <button type="button" onClick={() => setStep(1)} className="btn-secondary">Back</button>
            <button type="submit" className="btn-primary">Request Strategy Session</button>
          </div>
        </>
      )}
      {message && <p className="text-sm text-primary">{message}</p>}
    </form>
  );
}
