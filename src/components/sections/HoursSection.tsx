"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import { OPERATING_HOURS } from "@/lib/data";

export default function HoursSection() {
  return (
    <section id="hours" className="py-16 md:py-24 lg:py-[120px]">
      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-16">
          {/* Left — Label & Title */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <SectionLabel text="OPERATING HOURS" />

            <h2 className="mt-3 text-[clamp(1.5rem,4vw,2.5rem)] font-bold leading-[1.3] text-primary">
              진료 시간 안내
            </h2>

            <p className="mt-5 text-[clamp(0.9375rem,1.2vw,1.125rem)] leading-[1.8] text-primary-light md:mt-6">
              환자분들의 편의를 위해 평일과 주말 진료 시간을
              <br className="hidden md:block" />
              안내드립니다. 응급 상황 시 24시간 응급실을 이용해 주세요.
            </p>

            <div className="my-6 h-px w-12 bg-border md:my-8" />
          </motion.div>

          {/* Right — Hours table card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <div className="rounded-2xl bg-surface p-6 shadow-[var(--shadow-card)] md:p-8">
              <div className="divide-y divide-border/50">
                {OPERATING_HOURS.map((slot, index) => (
                  <div
                    key={index}
                    className="flex items-start justify-between py-4 first:pt-0 last:pb-0"
                  >
                    <span className="font-semibold text-primary">
                      {slot.day}
                    </span>

                    <div className="text-right">
                      <span className="text-secondary">{slot.hours}</span>

                      {slot.note && (
                        <div className="mt-1">
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-red-50 px-3 py-1 text-xs font-medium text-red-600">
                            <svg
                              className="h-3 w-3"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                              />
                            </svg>
                            {slot.note}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
