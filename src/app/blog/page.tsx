import type { Metadata } from 'next';
import Link from 'next/link';
import { blogPosts } from '@/content/site';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Long-form Salesforce and AI growth insights with pillar-cluster SEO architecture.'
};

export default function BlogPage() {
  return (
    <div className="container-wrap section-padding">
      <h1 className="headline-lg">Insights for revenue, RevOps, and Salesforce leaders</h1>
      <p className="mt-4 body-lg">Pillar + cluster SEO model with internal links to services, case studies, and conversion pages.</p>
      <div className="mt-10 space-y-4">
        {blogPosts.map((post) => (
          <article key={post.slug} className="card">
            <h2 className="text-2xl font-semibold"><Link href={`/blog/${post.slug}`}>{post.title}</Link></h2>
            <p className="mt-2 text-slate-600">{post.description}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
