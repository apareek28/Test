import Link from 'next/link';

const columns = {
  Services: ['AI Automation', 'RPA Implementation', 'CRM & ERP Integration'],
  Industries: ['Financial Services', 'Healthcare', 'SaaS'],
  Company: ['Case Studies', 'Blog', 'Careers']
};

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/20 py-12">
      <div className="container-wrap grid gap-10 md:grid-cols-4">
        <div>
          <p className="font-semibold text-white">AXIOM<span className="text-accent">AUTOMATION</span></p>
          <p className="mt-3 text-sm text-slate-400">Enterprise automation architecture for secure, scalable growth.</p>
        </div>
        {Object.entries(columns).map(([title, items]) => (
          <div key={title}>
            <p className="text-sm font-semibold text-slate-200">{title}</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-400">
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="container-wrap mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-slate-500">
        <p>© {new Date().getFullYear()} Axiom Automation. All rights reserved.</p>
        <div className="flex gap-4">
          <Link href="/contact" className="hover:text-accent">Contact</Link>
          <span>Privacy</span>
          <span>Terms</span>
        </div>
      </div>
    </footer>
  );
}
