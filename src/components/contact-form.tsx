'use client';

import { FormEvent, useState } from 'react';

type FormShape = {
  name: string;
  email: string;
  company: string;
  goals: string;
  budget: string;
};

const initialState: FormShape = { name: '', email: '', company: '', goals: '', budget: '' };

export function ContactForm() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<FormShape>(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  function canContinue() {
    return form.name.trim() && form.email.trim() && form.company.trim();
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError('');
    setSuccess('');
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, source: 'contact-form' })
      });
      const data = (await response.json()) as { ok: boolean; message: string };

      if (!response.ok || !data.ok) {
        setError(data.message || 'Unable to submit request. Please try again.');
      } else {
        setSuccess(data.message);
        setForm(initialState);
        setStep(1);
      }
    } catch {
      setError('Network error. Please try again in a moment.');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="card space-y-4" noValidate>
      <p className="text-xs font-semibold text-primary">Multi-step Inquiry Form • Step {step}/2</p>
      {step === 1 ? (
        <>
          <label className="text-sm font-medium">Full Name<input className="mt-2 w-full rounded-xl border border-border px-4 py-3" value={form.name} onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))} required /></label>
          <label className="text-sm font-medium">Work Email<input className="mt-2 w-full rounded-xl border border-border px-4 py-3" type="email" value={form.email} onChange={(e) => setForm((s) => ({ ...s, email: e.target.value }))} required /></label>
          <label className="text-sm font-medium">Company<input className="mt-2 w-full rounded-xl border border-border px-4 py-3" value={form.company} onChange={(e) => setForm((s) => ({ ...s, company: e.target.value }))} required /></label>
          <button type="button" className="btn-primary" disabled={!canContinue()} onClick={() => setStep(2)}>
            Continue
          </button>
        </>
      ) : (
        <>
          <label className="text-sm font-medium">Primary revenue goals<textarea className="mt-2 min-h-32 w-full rounded-xl border border-border px-4 py-3" value={form.goals} onChange={(e) => setForm((s) => ({ ...s, goals: e.target.value }))} required /></label>
          <label className="text-sm font-medium">Budget Range<select className="mt-2 w-full rounded-xl border border-border px-4 py-3" value={form.budget} onChange={(e) => setForm((s) => ({ ...s, budget: e.target.value }))} required>
            <option value="">Select budget</option>
            <option value="50k-100k">$50K–$100K</option>
            <option value="100k-250k">$100K–$250K</option>
            <option value="250k+">$250K+</option>
          </select></label>
          <p className="text-xs text-slate-500">Protected by reCAPTCHA and governed by our privacy policy.</p>
          <div className="flex gap-3">
            <button type="button" onClick={() => setStep(1)} className="btn-secondary">Back</button>
            <button type="submit" className="btn-primary" disabled={isSubmitting}>{isSubmitting ? 'Submitting...' : 'Request Strategy Session'}</button>
          </div>
        </>
      )}
      {error && <p className="text-sm text-red-600">{error}</p>}
      {success && <p className="text-sm text-primary">{success}</p>}
    </form>
  );
}
