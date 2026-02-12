export default function PrivacyPolicyPage() {
  return <PolicyLayout title="Privacy Policy" />;
}

function PolicyLayout({ title }: { title: string }) {
  return (
    <div className="container-wrap section-padding"><h1 className="text-4xl font-semibold">{title}</h1><div className="mt-6 card p-8 space-y-4 text-sm text-slate-300"><p>We process personal data lawfully, transparently, and for explicitly stated purposes.</p><p>Data is stored with strict access controls, encryption in transit, and retention governance.</p></div></div>
  );
}
