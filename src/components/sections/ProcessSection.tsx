"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import { PROCESS_STEPS } from "@/lib/data";

const ICONS = [
  // 온라인 예약 — Calendar
  <svg
    key="calendar"
    className="h-10 w-10 md:h-12 md:w-12"
    fill="none"
    viewBox="0 0 48 48"
    stroke="currentColor"
    strokeWidth={1.5}
  >
    <rect x="6" y="10" width="36" height="32" rx="4" />
    <path strokeLinecap="round" d="M6 20h36" />
    <path strokeLinecap="round" d="M16 6v8M32 6v8" />
    <rect x="14" y="26" width="6" height="6" rx="1" fill="currentColor" opacity={0.2} />
    <rect x="21" y="26" width="6" height="6" rx="1" fill="currentColor" opacity={0.2} />
    <rect x="28" y="26" width="6" height="6" rx="1" fill="currentColor" opacity={0.2} />
    <rect x="14" y="34" width="6" height="4" rx="1" fill="currentColor" opacity={0.2} />
  </svg>,

  // 접수 & 문진 — Clipboard / Document
  <svg
    key="clipboard"
    className="h-10 w-10 md:h-12 md:w-12"
    fill="none"
    viewBox="0 0 48 48"
    stroke="currentColor"
    strokeWidth={1.5}
  >
    <rect x="10" y="6" width="28" height="38" rx="4" />
    <path strokeLinecap="round" d="M18 4h12v4a2 2 0 01-2 2H20a2 2 0 01-2-2V4z" />
    <path strokeLinecap="round" d="M18 20h12M18 26h12M18 32h8" />
  </svg>,

  // 진료 & 검사 — Stethoscope / Magnifier
  <svg
    key="stethoscope"
    className="h-10 w-10 md:h-12 md:w-12"
    fill="none"
    viewBox="0 0 48 48"
    stroke="currentColor"
    strokeWidth={1.5}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 8v12a12 12 0 0024 0v-2"
    />
    <path strokeLinecap="round" d="M8 8h8M32 8h8" />
    <circle cx="36" cy="18" r="4" />
    <path strokeLinecap="round" d="M36 22v6a8 8 0 01-8 8h-4" />
    <circle cx="24" cy="38" r="2.5" fill="currentColor" />
  </svg>,

  // 치료 & 관리 — Heart / Shield
  <svg
    key="heart-shield"
    className="h-10 w-10 md:h-12 md:w-12"
    fill="none"
    viewBox="0 0 48 48"
    stroke="currentColor"
    strokeWidth={1.5}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M24 42s-16-8.4-16-20V10l16-6 16 6v12c0 11.6-16 20-16 20z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M24 18c-1.5-2.5-5-3-7 0s-1 6.5 7 12c8-5.5 9-9 7-12s-5.5-2.5-7 0z"
    />
  </svg>,
];

export default function ProcessSection() {
  return (
    <section id="process" className="bg-surface py-16 md:py-24 lg:py-[120px]">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10 text-center md:mb-14"
        >
          <SectionLabel text="MEDICAL PROCESS" />
          <h2 className="mt-3 text-[clamp(1.5rem,4vw,2.5rem)] font-bold leading-[1.3] text-primary">
            진료 프로세스
          </h2>
          <p className="mt-3 text-[clamp(0.875rem,1.1vw,1rem)] text-secondary">
            체계적인 진료 과정으로 정확한 진단과 최적의 치료를 제공합니다
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative grid gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {/* Horizontal dashed connector (desktop only) */}
          <div className="absolute top-[72px] left-[15%] right-[15%] hidden h-px border-t border-dashed border-accent/40 lg:block" />

          {PROCESS_STEPS.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative rounded-2xl bg-white p-6 text-center shadow-[var(--shadow-card)] md:p-8"
            >
              {/* Step number badge */}
              <div className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-accent text-sm font-extrabold text-white">
                {step.number}
              </div>

              {/* Icon */}
              <div className="mx-auto mb-4 flex items-center justify-center text-primary">
                {ICONS[i]}
              </div>

              <h3 className="text-base font-bold text-primary md:text-lg">
                {step.title}
              </h3>
              <p className="mt-2 whitespace-pre-line text-sm leading-relaxed text-secondary">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
