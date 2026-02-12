export default function ResourcesPage() {
  return (
    <div className="container-wrap section-padding space-y-6">
      <h1 className="text-4xl font-semibold">Resources</h1>
      <div className="grid gap-4 md:grid-cols-2">
        {['Automation readiness assessment', 'AI governance checklist', 'Integration architecture scorecard', 'Executive KPI dashboard template'].map((item) => (
          <div key={item} className="card p-6">
            <h2 className="font-semibold">{item}</h2>
            <p className="mt-2 text-sm text-muted">Downloadable playbook with implementation guidance.</p>
          </div>
        ))}
      </div>
    </div>
  );
}
