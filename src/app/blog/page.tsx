import Link from 'next/link';
import { blogPosts } from '@/lib/site-data';

export default function BlogPage() {
  return (
    <div className="container-wrap section-padding">
      <h1 className="text-4xl font-semibold">Automation & AI Insights</h1>
      <p className="mt-4 text-muted">Pillar + cluster content for enterprise automation leaders.</p>
      <div className="mt-8 space-y-4">
        {blogPosts.map((post) => (
          <article key={post.slug} className="card p-6">
            <h2 className="text-2xl font-semibold">{post.title}</h2>
            <p className="mt-2 text-sm text-muted">{post.description}</p>
            <Link className="mt-4 inline-block text-sm text-accent" href={`/blog/${post.slug}`}>
              Read article →
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
