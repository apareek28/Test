import Link from 'next/link';
import { AnimatedSection } from '@/components/animated-section';
import { WorkflowVisual } from '@/components/workflow-visual';
import { RoiCalculator } from '@/components/roi-calculator';
import { ContactForm } from '@/components/contact-form';

const services = [
  'AI Automation',
  'Workflow Automation',
  'CRM & ERP Integration',
  'RPA Implementation',
  'Custom AI Agents',
  'Process Optimization Consulting'
];

const process = ['Audit & Discovery', 'Automation Architecture', 'Implementation', 'Optimization & Scaling'];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-grid bg-[size:42px_42px] opacity-20" />
        <div className="container-wrap relative section-padding grid items-center gap-12 lg:grid-cols-2">
          <AnimatedSection className="space-y-6">
            <p className="inline-flex rounded-full border border-accent/40 bg-accent/10 px-4 py-1 text-sm text-accent">Enterprise Automation Agency</p>
            <h1 className="text-4xl font-semibold leading-tight text-white md:text-6xl">Automate Operations. Eliminate Bottlenecks. Scale Without Limits.</h1>
            <p className="max-w-xl text-lg text-muted">We build secure AI agents, RPA systems, and workflow architecture that help enterprise teams execute faster with measurable operational gains.</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="rounded-full bg-accent px-6 py-3 font-semibold text-[#031220] transition-all hover:shadow-glow">Book a Strategy Call</Link>
              <Link href="#case-studies" className="rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:border-accent hover:text-accent">See Case Studies</Link>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.08}>
            <WorkflowVisual />
          </AnimatedSection>
        </div>
      </section>

      <AnimatedSection className="container-wrap section-padding">
        <div className="grid gap-6 rounded-2xl border border-white/10 bg-black/20 p-6 md:grid-cols-3">
          <div>
            <p className="text-sm text-slate-400">Trusted by enterprise operators</p>
            <p className="mt-2 text-2xl font-semibold">Fortis • Helix • Northstar • Synapse</p>
          </div>
          <div className="rounded-xl border border-white/10 p-4 text-sm text-slate-300">Compliance badges: SOC 2 Type II • ISO 27001 • GDPR Ready</div>
          <div className="rounded-xl border border-white/10 p-4 text-sm text-slate-300">“Axiom reduced operating cycle times by 65% in 12 weeks.” — COO, Global Logistics Client</div>
        </div>
      </AnimatedSection>

      <section className="section-padding border-y border-white/10 bg-black/20">
        <div className="container-wrap">
          <h2 className="text-3xl font-semibold">Core Services</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <AnimatedSection key={service} className="glass-card rounded-2xl p-5 transition-all hover:-translate-y-1 hover:border-accent/40">
                <div className="mb-3 h-8 w-8 rounded-lg border border-accent/40 bg-accent/10" />
                <h3 className="text-xl font-semibold">{service}</h3>
                <p className="mt-2 text-sm text-slate-300">Designed for secure enterprise execution with full observability and governance.</p>
                <span className="mt-3 inline-block text-sm text-accent">Learn More →</span>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="container-wrap section-padding">
        <h2 className="text-3xl font-semibold">How It Works</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-4">
          {process.map((step, idx) => (
            <AnimatedSection key={step} delay={idx * 0.06} className="glass-card rounded-2xl p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-accent">Step {idx + 1}</p>
              <h3 className="mt-3 text-lg font-semibold">{step}</h3>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <section id="case-studies" className="section-padding border-y border-white/10 bg-black/20">
        <div className="container-wrap grid gap-6 lg:grid-cols-2">
          <AnimatedSection className="glass-card rounded-2xl p-6">
            <h3 className="text-2xl font-semibold">Global BPO Transformation</h3>
            <p className="mt-3 text-sm text-muted">Before: manual ticket routing and fragmented approvals. After: autonomous routing, SLA alerts, and unified workflow governance.</p>
            <div className="mt-5 grid grid-cols-3 gap-3 text-center">
              <div className="rounded-lg border border-white/10 p-3"><p className="text-2xl font-semibold text-accent">42%</p><p className="text-xs text-slate-400">Cost Reduction</p></div>
              <div className="rounded-lg border border-white/10 p-3"><p className="text-2xl font-semibold text-accent">65%</p><p className="text-xs text-slate-400">Faster Workflows</p></div>
              <div className="rounded-lg border border-white/10 p-3"><p className="text-2xl font-semibold text-accent">99.95%</p><p className="text-xs text-slate-400">Reliability</p></div>
            </div>
            <Link href="/contact" className="mt-5 inline-block text-sm font-medium text-accent">View Full Case Study →</Link>
          </AnimatedSection>
          <AnimatedSection delay={0.08}>
            <RoiCalculator />
          </AnimatedSection>
        </div>
      </section>

      <section className="container-wrap section-padding">
        <h2 className="text-3xl font-semibold">Technology Stack</h2>
        <div className="mt-7 grid grid-cols-2 gap-3 text-sm text-slate-400 md:grid-cols-4">
          {['OpenAI', 'Zapier', 'UiPath', 'Make', 'HubSpot', 'Salesforce', 'AWS', 'Azure'].map((tech) => (
            <div key={tech} className="rounded-xl border border-white/10 bg-white/[0.02] p-4 text-center transition hover:border-accent/50 hover:text-slate-200">{tech}</div>
          ))}
        </div>
      </section>

      <section className="section-padding border-y border-white/10 bg-black/20">
        <div className="container-wrap">
          <h2 className="text-3xl font-semibold">Why Choose Us</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {['Enterprise Security', 'Dedicated Automation Architects', 'ROI-Focused Delivery', 'Scalable Infrastructure', 'Ongoing Support', 'Executive Reporting'].map((item) => (
              <div key={item} className="glass-card rounded-2xl p-5 text-sm text-slate-200">{item}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-wrap section-padding">
        <div className="grid gap-8 rounded-3xl border border-accent/40 bg-gradient-to-r from-panel to-[#0a2033] p-8 lg:grid-cols-2">
          <div>
            <h2 className="text-4xl font-semibold">Ready to Transform Your Operations?</h2>
            <p className="mt-3 text-muted">Book a strategic automation audit with our enterprise architects and receive a roadmap tailored to your data, systems, and governance requirements.</p>
            <ul className="mt-6 space-y-2 text-sm text-slate-300">
              <li>• Security and compliance framework included</li>
              <li>• Trust signals and testimonials attached to every step</li>
              <li>• Executive-ready business case in under 10 days</li>
            </ul>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
