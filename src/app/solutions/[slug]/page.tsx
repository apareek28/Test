import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { solutionPages } from '@/lib/site-data';

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const solution = solutionPages.find((item) => item.slug === slug);
  if (!solution) return {};
  return { title: solution.title, description: solution.description };
}

export function generateStaticParams() {
  return solutionPages.map((solution) => ({ slug: solution.slug }));
}

export default async function SolutionPage({ params }: Props) {
  const { slug } = await params;
  const solution = solutionPages.find((item) => item.slug === slug);
  if (!solution) notFound();

  return (
    <div className="container-wrap section-padding space-y-8">
      <section className="card p-8">
        <p className="text-xs uppercase tracking-[0.2em] text-accent">Solution</p>
        <h1 className="mt-3 text-4xl font-semibold">{solution.title}</h1>
        <p className="mt-4 text-muted">{solution.description}</p>
      </section>
      <section className="grid gap-4 md:grid-cols-3">
        {solution.bullets.map((bullet) => (
          <div key={bullet} className="card p-5 text-sm text-slate-200">{bullet}</div>
        ))}
      </section>
      <Link href="/book-call" className="inline-block rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white">
        Start a Discovery Call
      </Link>
    </div>
  );
}
