import Link from 'next/link';

const columns = [
  {
    title: 'Company',
    links: ['About', 'Careers', 'Case Studies', 'Contact']
  },
  {
    title: 'Services',
    links: ['AI Automation', 'Salesforce', 'Architecture', 'Transformation']
  },
  {
    title: 'Resources',
    links: ['Insights', 'Webinars', 'Playbooks', 'Events']
  },
  {
    title: 'Legal',
    links: ['Privacy', 'Security', 'Terms', 'Accessibility']
  }
];

export function Footer() {
  return (
    <footer className="border-t border-white/70 py-14">
      <div className="container-wrap grid gap-10 md:grid-cols-[1.3fr_repeat(4,1fr)]">
        <div>
          <p className="text-lg font-semibold text-slate-700">AetherOps Consulting</p>
          <p className="mt-2 text-sm text-muted">Engineering intelligent systems for enterprise growth.</p>
          <div className="mt-4 flex gap-3 text-sm text-muted">
            <span className="rounded-full glass px-3 py-1">LinkedIn</span>
            <span className="rounded-full glass px-3 py-1">X</span>
            <span className="rounded-full glass px-3 py-1">YouTube</span>
          </div>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-600">{col.title}</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              {col.links.map((link) => (
                <li key={link}>
                  <Link href="/" className="transition hover:text-slate-700">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="container-wrap mt-10 flex flex-col items-start justify-between gap-4 border-t border-white/70 pt-6 text-sm text-muted md:flex-row md:items-center">
        <p>© {new Date().getFullYear()} AetherOps. Built for Fortune-grade transformation.</p>
        <label className="glass flex items-center gap-2 rounded-full px-3 py-1.5">
          <input
            type="email"
            placeholder="Newsletter email"
            className="w-44 bg-transparent text-sm text-slate-600 outline-none placeholder:text-slate-400"
          />
          <button className="rounded-full bg-aurora px-3 py-1 text-xs font-medium text-slate-700">Join</button>
        </label>
      </div>
    </footer>
  );
}
