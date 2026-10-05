import { motion, useReducedMotion } from "framer-motion";
import type { PropsWithChildren } from "react";

export const revealTransition = {
  duration: 0.55,
  ease: [0.22, 1, 0.36, 1],
} as const;

export default function Reveal({ children, className }: PropsWithChildren<{ className?: string }>) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={revealTransition}
    >
      {children}
    </motion.div>
  );
}
