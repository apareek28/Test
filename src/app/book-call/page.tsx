import { DiscoveryForm } from '@/components/discovery-form';

export default function BookCallPage() {
  return (
    <div className="container-wrap section-padding grid gap-8 lg:grid-cols-2">
      <section className="card p-8">
        <h1 className="text-4xl font-semibold">Book a Discovery Call</h1>
        <p className="mt-4 text-muted">Use the qualification form and our scheduling panel to align on your modernization goals.</p>
        <div className="mt-6 card p-5">
          <p className="text-sm text-slate-300">Embedded Calendar (Calendly / Chili Piper ready)</p>
          <div className="mt-3 rounded-lg border border-dashed border-line p-8 text-center text-sm text-slate-400">Calendar embed placeholder</div>
        </div>
      </section>
      <DiscoveryForm />
    </div>
  );
}
