import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogPosts } from '@/lib/site-data';

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) return {};
  return { title: post.title, description: post.description };
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) notFound();

  return (
    <article className="container-wrap section-padding max-w-4xl">
      <p className="text-xs uppercase tracking-[0.2em] text-accent">Article</p>
      <h1 className="mt-2 text-4xl font-semibold">{post.title}</h1>
      <p className="mt-4 text-muted">{post.description}</p>
      <div className="mt-8 space-y-5 text-slate-200">
        {post.content.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <div className="mt-10 card p-6">
        <p className="text-lg font-semibold">Ready to operationalize this playbook?</p>
        <Link href="/book-call" className="mt-3 inline-block rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white">Book a Discovery Call</Link>
      </div>
    </article>
  );
}
