'use client';

import { FormEvent, useState } from 'react';

type FormState = {
  name: string;
  email: string;
  message: string;
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  function validate(values: FormState) {
    if (!values.name.trim() || !values.email.trim() || !values.message.trim()) {
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

    // Placeholder for future email API integration.
    setTimeout(() => {
      setSuccess('Message sent successfully. Our team will contact you soon.');
      setForm({ name: '', email: '', message: '' });
    }, 200);
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 rounded-2xl border border-white/10 bg-white/5 p-6">
      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-200">
          Name
        </label>
        <input
          id="name"
          required
          autoComplete="name"
          value={form.name}
          onChange={(e) => setForm((current) => ({ ...current, name: e.target.value }))}
          className="w-full rounded-lg border border-white/20 bg-black/20 px-4 py-3 text-white outline-none transition focus:border-accent"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-200">
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          autoComplete="email"
          value={form.email}
          onChange={(e) => setForm((current) => ({ ...current, email: e.target.value }))}
          className="w-full rounded-lg border border-white/20 bg-black/20 px-4 py-3 text-white outline-none transition focus:border-accent"
          placeholder="you@company.com"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-200">
          Message
        </label>
        <textarea
          id="message"
          required
          value={form.message}
          onChange={(e) => setForm((current) => ({ ...current, message: e.target.value }))}
          className="min-h-36 w-full rounded-lg border border-white/20 bg-black/20 px-4 py-3 text-white outline-none transition focus:border-accent"
          placeholder="What goals are you targeting this quarter?"
        />
      </div>

      {error && <p className="text-sm text-red-400">{error}</p>}
      {success && <p className="text-sm text-accent">{success}</p>}

      <button type="submit" className="w-full rounded-full bg-accent px-6 py-3 font-semibold text-black transition hover:shadow-glow">
        Send Message
      </button>
      <p className="text-xs text-slate-400">This form is ready to connect with your email API endpoint.</p>
    </form>
  );
}
