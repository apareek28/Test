'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { fadeUp } from '@/lib/motion';

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function AnimatedSection({ children, className, delay = 0 }: Props) {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        ...fadeUp,
        visible: {
          ...fadeUp.visible,
          transition: { ...fadeUp.visible.transition, delay }
        }
      }}
      className={className}
    >
      {children}
    </motion.section>
  );
}
