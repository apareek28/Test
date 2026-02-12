import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { articles } from '@/content/blog';
import { blogPosts } from '@/content/site';

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = articles[slug];
  if (!article) return {};
  return { title: article.title, description: article.meta, alternates: { canonical: `/blog/${slug}` } };
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = articles[slug];
  if (!article) notFound();

  return (
    <article className="container-wrap section-padding max-w-4xl">
      <p className="eyebrow">Insight Article</p>
      <h1 className="headline-lg mt-4">{article.title}</h1>
      <p className="mt-4 text-slate-600">Meta description: {article.meta}</p>
      {article.sections.map((section) => (
        <section key={section.heading} className="mt-10">
          <h2 className="text-3xl font-semibold">{section.heading}</h2>
          <div className="mt-4 space-y-4 text-slate-700">
            {section.paragraphs.map((paragraph, idx) => <p key={idx}>{paragraph}</p>)}
          </div>
        </section>
      ))}
      <div className="card mt-10">
        <p className="text-sm text-slate-600">Internal linking suggestions: <Link href="/services" className="text-primary">Services</Link>, <Link href="/case-studies" className="text-primary">Case Studies</Link>, <Link href="/book-strategy-call" className="text-primary">Book Strategy Call</Link>.</p>
        <Link href="/book-strategy-call" className="btn-primary mt-4">Book a Strategy Session</Link>
      </div>
    </article>
  );
}
