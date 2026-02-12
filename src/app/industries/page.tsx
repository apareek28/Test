export default function IndustriesPage() {
  const industries = ['SaaS', 'Healthcare', 'Fintech', 'Ecommerce', 'Logistics', 'Professional Services'];
  return (
    <div className="container-wrap section-padding">
      <h1 className="text-4xl font-semibold">Industries We Modernize</h1>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {industries.map((industry) => (
          <div key={industry} className="card p-6">{industry}</div>
        ))}
      </div>
    </div>
  );
}
