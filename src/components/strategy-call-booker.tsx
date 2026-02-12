'use client';

import { FormEvent, useMemo, useState } from 'react';

const slots = ['Mon 9:00 AM ET', 'Mon 1:00 PM ET', 'Tue 11:00 AM ET', 'Wed 3:00 PM ET', 'Thu 10:00 AM ET'];

export function StrategyCallBooker() {
  const [selectedSlot, setSelectedSlot] = useState(slots[0]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState('');
  const [loading, setLoading] = useState(false);

  const canSubmit = useMemo(() => name.trim() && email.trim() && selectedSlot, [name, email, selectedSlot]);

  async function submit(event: FormEvent) {
    event.preventDefault();
    if (!canSubmit) return;
    setLoading(true);
    setSubmitted('');

    const response = await fetch('/api/leads', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        email,
        company: 'Strategy Call Lead',
        goals: `Requested slot: ${selectedSlot}`,
        budget: 'to-be-confirmed',
        source: 'strategy-call-booker'
      })
    });

    if (response.ok) {
      setSubmitted(`Booked! We have reserved ${selectedSlot} and sent a confirmation email.`);
      setName('');
      setEmail('');
    } else {
      setSubmitted('Unable to confirm right now. Please try another slot or contact our team.');
    }

    setLoading(false);
  }

  return (
    <form onSubmit={submit} className="card mt-8 space-y-4">
      <p className="text-sm font-semibold">Select a timeslot</p>
      <div className="grid gap-2 md:grid-cols-2">
        {slots.map((slot) => (
          <button key={slot} type="button" className={`rounded-xl border px-4 py-3 text-left text-sm ${selectedSlot === slot ? 'border-primary bg-primary/5' : 'border-border'}`} onClick={() => setSelectedSlot(slot)}>
            {slot}
          </button>
        ))}
      </div>
      <div className="grid gap-3 md:grid-cols-2">
        <input className="rounded-xl border border-border px-4 py-3" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <input className="rounded-xl border border-border px-4 py-3" placeholder="Work Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <button className="btn-primary" disabled={!canSubmit || loading}>{loading ? 'Confirming...' : 'Confirm Strategy Call'}</button>
      {submitted && <p className="text-sm text-primary">{submitted}</p>}
    </form>
  );
}
