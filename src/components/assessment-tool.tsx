'use client';

import { useState } from 'react';

export function AssessmentTool() {
  const [score, setScore] = useState(0);

  function answer(value: number) {
    setScore((s) => s + value);
  }

  return (
    <div className="card">
      <h3 className="text-2xl font-semibold">Interactive Salesforce Maturity Assessment</h3>
      <p className="mt-2 text-sm text-slate-600">Answer quick questions to benchmark your revenue systems maturity.</p>
      <div className="mt-4 space-y-3 text-sm">
        <p>1) Is pipeline attribution trusted by leadership?</p>
        <div className="flex gap-2"><button className="btn-secondary" onClick={() => answer(1)}>No</button><button className="btn-secondary" onClick={() => answer(3)}>Partially</button><button className="btn-secondary" onClick={() => answer(5)}>Yes</button></div>
        <p>2) Are sales tasks automated across lifecycle stages?</p>
        <div className="flex gap-2"><button className="btn-secondary" onClick={() => answer(1)}>No</button><button className="btn-secondary" onClick={() => answer(3)}>Partially</button><button className="btn-secondary" onClick={() => answer(5)}>Yes</button></div>
      </div>
      <p className="mt-4 text-sm">Current score: <span className="font-semibold text-primary">{score}</span>/10</p>
    </div>
  );
}
