'use client';

import { FormEvent, useState } from 'react';

type FormState = {
  name: string;
  company: string;
  role: string;
  email: string;
  size: string;
  needs: string;
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>({ name: '', company: '', role: '', email: '', size: '', needs: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  function validate(values: FormState) {
    if (!values.name.trim() || !values.company.trim() || !values.role.trim() || !values.email.trim() || !values.size.trim() || !values.needs.trim()) {
      return 'Please complete all fields.';
    }

    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!emailRegex.test(values.email)) {
      return 'Please use a valid email address.';
    }

    return '';
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError('');
    setSuccess('');

    const validationError = validate(form);
    if (validationError) {
      setError(validationError);
      return;
    }

    setTimeout(() => {
      setSuccess('Request submitted. We will share scheduling options within one business day.');
      setForm({ name: '', company: '', role: '', email: '', size: '', needs: '' });
    }, 200);
  }

  return (
    <form onSubmit={onSubmit} className="glass-card space-y-4 rounded-2xl p-6">
      {[['name', 'Name', 'Your full name'], ['company', 'Company', 'Your company'], ['role', 'Role', 'Head of Operations']].map(([key, label, placeholder]) => (
        <div key={key}>
          <label htmlFor={key} className="mb-2 block text-sm font-medium text-slate-200">{label}</label>
          <input
            id={key}
            value={form[key as keyof FormState]}
            onChange={(e) => setForm((current) => ({ ...current, [key]: e.target.value }))}
            className="w-full rounded-lg border border-white/15 bg-black/20 px-4 py-3 text-white outline-none transition focus:border-accent"
            placeholder={placeholder}
          />
        </div>
      ))}

      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-200">Email</label>
        <input
          id="email"
          type="email"
          value={form.email}
          onChange={(e) => setForm((current) => ({ ...current, email: e.target.value }))}
          className="w-full rounded-lg border border-white/15 bg-black/20 px-4 py-3 text-white outline-none transition focus:border-accent"
          placeholder="you@company.com"
        />
      </div>

      <div>
        <label htmlFor="size" className="mb-2 block text-sm font-medium text-slate-200">Company Size</label>
        <select
          id="size"
          value={form.size}
          onChange={(e) => setForm((current) => ({ ...current, size: e.target.value }))}
          className="w-full rounded-lg border border-white/15 bg-black/20 px-4 py-3 text-white outline-none transition focus:border-accent"
        >
          <option value="">Select size range</option>
          <option>1-50 employees</option>
          <option>51-250 employees</option>
          <option>251-1000 employees</option>
          <option>1000+ employees</option>
        </select>
      </div>

      <div>
        <label htmlFor="needs" className="mb-2 block text-sm font-medium text-slate-200">Automation Needs</label>
        <textarea
          id="needs"
          value={form.needs}
          onChange={(e) => setForm((current) => ({ ...current, needs: e.target.value }))}
          className="min-h-32 w-full rounded-lg border border-white/15 bg-black/20 px-4 py-3 text-white outline-none transition focus:border-accent"
          placeholder="Describe workflows, systems, or use cases we should prioritize"
        />
      </div>

      {error && <p className="text-sm text-red-400">{error}</p>}
      {success && <p className="text-sm text-accent">{success}</p>}

      <button type="submit" className="w-full rounded-full bg-accent px-6 py-3 font-semibold text-[#031220] transition hover:shadow-glow">
        Schedule Your Automation Audit
      </button>
      <p className="text-xs text-slate-400">Calendar integration: after submission, your team receives a secure scheduling link.</p>
    </form>
  );
}
