import Link from 'next/link';

export function Footer() {
  return (
    <footer id="contact" className="bg-slate-950 py-14 text-slate-300">
      <div className="container-wrap grid gap-10 md:grid-cols-4">
        <div>
          <p className="text-xl font-semibold text-white">BluePeak Consulting</p>
          <p className="mt-3 text-sm text-slate-400">
            Enterprise Salesforce and cloud consulting focused on scalable digital transformation.
          </p>
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-200">Services</p>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="#services" className="hover:text-white">
                Salesforce Implementation
              </Link>
            </li>
            <li>
              <Link href="#services" className="hover:text-white">
                Cloud Migration
              </Link>
            </li>
            <li>
              <Link href="#services" className="hover:text-white">
                Managed Support
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-200">Company</p>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="#case-studies" className="hover:text-white">
                Case Studies
              </Link>
            </li>
            <li>
              <Link href="#blog" className="hover:text-white">
                Insights
              </Link>
            </li>
            <li>
              <Link href="#industry-expertise" className="hover:text-white">
                Industries
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-200">Contact</p>
          <ul className="space-y-2 text-sm text-slate-400">
            <li>+1 (415) 555-0148</li>
            <li>hello@bluepeakconsulting.com</li>
            <li>535 Mission St, San Francisco, CA</li>
          </ul>
        </div>
      </div>
      <div className="container-wrap mt-10 border-t border-slate-800 pt-6 text-sm text-slate-500">
        © {new Date().getFullYear()} BluePeak Consulting. All rights reserved.
      </div>
    </footer>
  );
}
