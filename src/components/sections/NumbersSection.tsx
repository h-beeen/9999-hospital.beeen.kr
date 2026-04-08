"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { STATS } from "@/lib/data";
import { useCountUp } from "@/hooks/useCountUp";
import { cn } from "@/lib/utils";

function StatItem({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) {
  const { ref, count } = useCountUp(value, 1500);

  const displayValue = value >= 1000 ? count.toLocaleString() : count;

  return (
    <div ref={ref} className="text-center">
      <div className="text-[clamp(2.5rem,5vw,4rem)] font-extrabold leading-none text-accent">
        {displayValue}
        {suffix}
      </div>
      <p className="mt-2 text-sm text-secondary md:mt-3">{label}</p>
    </div>
  );
}

export default function NumbersSection() {
  return (
    <section className="bg-surface py-16 md:py-20 lg:py-[100px]">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-0"
        >
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className={cn(
                i < STATS.length - 1 && "lg:border-r lg:border-border"
              )}
            >
              <StatItem {...stat} />
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
