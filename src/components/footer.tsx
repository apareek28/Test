import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="container-wrap flex flex-col gap-4 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} LumenTech. Built for scalable growth.</p>
        <div className="flex gap-4">
          <Link className="hover:text-accent" href="/about">
            About
          </Link>
          <Link className="hover:text-accent" href="/services">
            Services
          </Link>
          <Link className="hover:text-accent" href="/contact">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
