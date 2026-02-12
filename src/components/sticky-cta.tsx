import Link from 'next/link';

export function StickyCTA() {
  return (
    <div className="fixed bottom-5 right-5 z-40">
      <Link href="/book-strategy-call" className="btn-primary shadow-hover">
        Book Strategy Call
      </Link>
    </div>
  );
}
