export default function TechnologyStackPage() {
  return (
    <div className="container-wrap section-padding space-y-6">
      <h1 className="text-4xl font-semibold">Technology Stack</h1>
      <div className="grid gap-4 md:grid-cols-4">
        {['n8n', 'OpenAI', 'Anthropic', 'Pinecone', 'Postgres', 'Supabase', 'Node.js', 'AWS'].map((tech) => (
          <div className="card p-5" key={tech}>{tech}</div>
        ))}
      </div>
    </div>
  );
}
