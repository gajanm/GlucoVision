"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  initial?: any;
  animate?: any;
  whileInView?: any;
  viewport?: any;
  transition?: any;
  whileHover?: any;
}

export function AnimatedSection({
  children,
  className,
  initial,
  animate,
  whileInView,
  viewport,
  transition,
  whileHover,
}: AnimatedSectionProps) {
  return (
    <motion.div
      className={className}
      initial={initial}
      animate={animate}
      whileInView={whileInView}
      viewport={viewport}
      transition={transition}
      whileHover={whileHover}
    >
      {children}
    </motion.div>
  );
} 