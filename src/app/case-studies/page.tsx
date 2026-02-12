export default function CaseStudiesPage() {
  const studies = [
    { title: 'RevOps Automation at Scale', metrics: '41% increase in meetings booked, 22% reduction in CAC' },
    { title: 'AI Support Agent Deployment', metrics: '53% faster first response time, 31% reduction in ticket backlog' },
    { title: 'ERP + CRM Orchestration', metrics: '99.1% sync reliability, 70% fewer manual reconciliation tasks' }
  ];
  return (
    <div className="container-wrap section-padding">
      <h1 className="text-4xl font-semibold">Case Studies</h1>
      <div className="mt-8 space-y-4">
        {studies.map((study) => (
          <div key={study.title} className="card p-6">
            <h2 className="text-xl font-semibold">{study.title}</h2>
            <p className="mt-2 text-sm text-muted">{study.metrics}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
