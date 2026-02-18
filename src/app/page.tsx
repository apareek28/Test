import Link from 'next/link';
import { AnimatedSection } from '@/components/animated-section';
import { TestimonialsSlider } from '@/components/testimonials-slider';

const services = [
  { icon: '☁️', title: 'Cloud Transformation', body: 'Migrate and modernize workloads across AWS, Azure, and Google Cloud with security-first architecture.' },
  { icon: '⚙️', title: 'Salesforce Implementation', body: 'Implement CRM, CPQ, and Service Cloud programs that improve funnel velocity and customer experiences.' },
  { icon: '📊', title: 'Data & Analytics', body: 'Build executive dashboards and unified reporting layers for actionable decision-making.' },
  { icon: '🤖', title: 'Automation & AI', body: 'Deploy workflow automation and AI copilots that reduce operational effort and increase productivity.' },
  { icon: '🔐', title: 'Security & Compliance', body: 'Align platforms with enterprise security standards, governance controls, and compliance requirements.' },
  { icon: '🛠️', title: 'Managed Services', body: 'Provide proactive optimization, release management, and 24/7 support for mission-critical systems.' }
];

const industries = ['Financial Services', 'Healthcare', 'Manufacturing', 'Technology', 'Retail', 'Public Sector'];

const posts = [
  {
    title: 'How Enterprise Teams Scale Salesforce Without Technical Debt',
    body: 'A practical framework for balancing rapid releases and long-term platform governance.',
    date: 'Jan 16, 2026'
  },
  {
    title: 'Cloud Cost Optimization for Regulated Industries',
    body: 'Five strategies to reduce infrastructure spend while maintaining compliance controls.',
    date: 'Jan 4, 2026'
  },
  {
    title: 'Executive KPIs for Digital Transformation Programs',
    body: 'Measure impact beyond delivery milestones with conversion, retention, and CX metrics.',
    date: 'Dec 20, 2025'
  }
];

export default function HomePage() {
  return (
    <>
      <section className="section-padding overflow-hidden bg-white">
        <div className="container-wrap grid items-center gap-12 lg:grid-cols-2">
          <AnimatedSection className="space-y-6">
            <p className="inline-flex rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">Trusted enterprise transformation partner</p>
            <h1 className="text-4xl font-bold leading-tight text-primary md:text-6xl">
              Transform Salesforce and Cloud Operations for Enterprise Growth
            </h1>
            <p className="max-w-xl text-lg text-muted">
              We help enterprise organizations modernize customer platforms, accelerate delivery, and drive measurable business outcomes.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="#contact" className="rounded-lg bg-primary px-6 py-3 font-semibold text-white transition hover:bg-secondary">
                Schedule a Strategy Call
              </Link>
              <Link href="#case-studies" className="rounded-lg border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:border-primary hover:text-primary">
                View Case Studies
              </Link>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15} className="relative">
            <div className="rounded-2xl bg-blue-gradient p-1 shadow-soft">
              <div className="rounded-[11px] bg-white p-7">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl bg-section p-5">
                    <p className="text-sm text-muted">Programs Delivered</p>
                    <p className="mt-1 text-2xl font-bold text-primary">450+</p>
                  </div>
                  <div className="rounded-xl bg-section p-5">
                    <p className="text-sm text-muted">Global Consultants</p>
                    <p className="mt-1 text-2xl font-bold text-primary">220</p>
                  </div>
                  <div className="rounded-xl bg-section p-5 sm:col-span-2">
                    <p className="text-sm text-muted">Average Time-to-Value Improvement</p>
                    <p className="mt-1 text-2xl font-bold text-primary">38%</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-section py-10">
        <div className="container-wrap flex flex-wrap items-center justify-center gap-8 text-sm font-semibold uppercase tracking-[0.18em] text-slate-400 md:justify-between">
          {['NovaBank', 'Aster Health', 'VertexTech', 'PublicGrid', 'Zenith Capital'].map((logo) => (
            <span key={logo}>{logo}</span>
          ))}
        </div>
      </section>

      <section id="services" className="section-padding bg-white">
        <AnimatedSection className="container-wrap">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-primary md:text-4xl">End-to-End Consulting Services</h2>
            <p className="mt-3 text-muted">
              Strategic advisory and implementation services designed for enterprise complexity, scale, and long-term ROI.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <article key={service.title} className="enterprise-card rounded-xl p-6 transition duration-300 hover:-translate-y-1.5 hover:shadow-header">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-xl">{service.icon}</div>
                <h3 className="text-xl font-semibold text-slate-900">{service.title}</h3>
                <p className="mt-2 text-sm text-muted">{service.body}</p>
              </article>
            ))}
          </div>
        </AnimatedSection>
      </section>

      <section id="case-studies" className="section-padding bg-section">
        <div className="container-wrap space-y-10">
          {[1, 2].map((item) => (
            <AnimatedSection key={item} className="grid items-center gap-8 rounded-2xl bg-white p-7 shadow-soft md:grid-cols-2">
              <div className={item % 2 === 0 ? 'md:order-2' : ''}>
                <div className="h-56 rounded-xl bg-gradient-to-br from-primary to-sky" />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">Case Study 0{item}</p>
                <h3 className="mt-2 text-2xl font-bold text-primary">Enterprise modernization for multi-region operations</h3>
                <p className="mt-3 text-muted">
                  Re-architected CRM and integration workflows, reducing cycle times and enabling executive reporting across global business units.
                </p>
                <Link href="#" className="mt-4 inline-block font-semibold text-secondary hover:text-primary">
                  Read full story →
                </Link>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <section id="industry-expertise" className="section-padding bg-white">
        <AnimatedSection className="container-wrap">
          <h2 className="text-3xl font-bold text-primary md:text-4xl">Industry Expertise</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {industries.map((industry) => (
              <button
                type="button"
                key={industry}
                className="enterprise-card flex items-center gap-3 rounded-xl p-5 text-left transition hover:-translate-y-1 hover:border-primary"
              >
                <span className="text-2xl">◆</span>
                <span className="font-medium text-slate-800">{industry}</span>
              </button>
            ))}
          </div>
        </AnimatedSection>
      </section>

      <section className="section-padding bg-section">
        <div className="container-wrap">
          <h2 className="mb-10 text-center text-3xl font-bold text-primary md:text-4xl">What Enterprise Leaders Say</h2>
          <TestimonialsSlider />
        </div>
      </section>

      <section id="blog" className="section-padding bg-white">
        <AnimatedSection className="container-wrap">
          <div className="mb-8 flex items-end justify-between gap-4">
            <h2 className="text-3xl font-bold text-primary md:text-4xl">Latest Insights</h2>
            <Link href="#" className="text-sm font-semibold text-secondary hover:text-primary">
              View all articles
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {posts.map((post) => (
              <article key={post.title} className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-soft">
                <div className="h-44 bg-gradient-to-r from-primary to-sky transition duration-300 group-hover:scale-105" />
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-wide text-secondary">{post.date}</p>
                  <h3 className="mt-2 text-xl font-semibold text-slate-900">{post.title}</h3>
                  <p className="mt-2 text-sm text-muted">{post.body}</p>
                </div>
              </article>
            ))}
          </div>
        </AnimatedSection>
      </section>

      <section className="section-padding bg-primary">
        <div className="container-wrap rounded-2xl bg-blue-gradient p-10 text-center text-white shadow-header">
          <h2 className="text-3xl font-bold md:text-4xl">Ready to accelerate your digital transformation?</h2>
          <p className="mx-auto mt-3 max-w-3xl text-slate-100">
            Partner with BluePeak Consulting to modernize your enterprise systems and unlock sustainable, measurable growth.
          </p>
          <Link href="#contact" className="mt-7 inline-block rounded-lg bg-white px-7 py-3 font-semibold text-primary transition hover:bg-slate-100">
            Start Your Transformation
          </Link>
        </div>
      </section>
    </>
  );
}
