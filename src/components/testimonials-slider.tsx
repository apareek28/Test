'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const testimonials = [
  {
    quote:
      'BluePeak modernized our Salesforce ecosystem in 90 days, improving pipeline visibility and reducing manual reporting by 45%.',
    name: 'VP of Revenue Operations',
    company: 'FinTech Enterprise'
  },
  {
    quote:
      'Their cloud architecture strategy gave us enterprise-grade resilience and reduced incident response time by 52%.',
    name: 'CIO',
    company: 'Global Healthcare Group'
  },
  {
    quote:
      'From strategy to delivery, the team brought deep technical expertise and executive-level communication.',
    name: 'COO',
    company: 'Manufacturing Technology Leader'
  }
];

export function TestimonialsSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="enterprise-card mx-auto max-w-4xl p-8 md:p-10">
      <AnimatePresence mode="wait">
        <motion.blockquote
          key={index}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -14 }}
          transition={{ duration: 0.35 }}
          className="text-center"
        >
          <p className="text-lg leading-relaxed text-slate-800 md:text-xl">“{testimonials[index].quote}”</p>
          <footer className="mt-5">
            <p className="font-semibold text-primary">{testimonials[index].name}</p>
            <p className="text-sm text-muted">{testimonials[index].company}</p>
          </footer>
        </motion.blockquote>
      </AnimatePresence>
      <div className="mt-6 flex justify-center gap-2">
        {testimonials.map((item, dotIndex) => (
          <button
            key={item.name}
            type="button"
            onClick={() => setIndex(dotIndex)}
            className={`h-2.5 w-7 rounded-full transition ${dotIndex === index ? 'bg-primary' : 'bg-slate-300'}`}
            aria-label={`View testimonial ${dotIndex + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
