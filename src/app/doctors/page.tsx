"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import { DOCTORS, DEPARTMENTS } from "@/lib/data";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/*  Filter tab config                                                   */
/* ------------------------------------------------------------------ */

const FILTER_TABS = [
  { key: "all", label: "전체" },
  ...DEPARTMENTS.map((dept) => ({
    key: dept.category,
    label: dept.titleKo,
  })),
];

/* ------------------------------------------------------------------ */
/*  Title badge style                                                   */
/* ------------------------------------------------------------------ */

const TITLE_STYLE: Record<string, string> = {
  원장: "bg-accent-light text-accent",
  부원장: "bg-accent-light text-accent",
  과장: "bg-accent-light text-accent",
};

/* ------------------------------------------------------------------ */
/*  Page Component                                                      */
/* ------------------------------------------------------------------ */

export default function DoctorsPage() {
  const [active, setActive] = useState("all");

  const filtered =
    active === "all"
      ? DOCTORS
      : DOCTORS.filter((d) => d.department === active);

  return (
    <main className="pt-[calc(56px+40px)] pb-24 lg:pt-[calc(72px+60px)]">
      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 md:mb-12"
        >
          <SectionLabel text="MEDICAL TEAM" />
          <h1 className="mt-3 text-[clamp(1.5rem,4vw,2.5rem)] font-bold leading-[1.3] text-primary">
            전문 의료진 소개
          </h1>
        </motion.div>

        {/* Filter tabs */}
        <div className="mb-8 flex gap-2 overflow-x-auto pb-2 no-scrollbar md:gap-6 md:pb-0">
          {FILTER_TABS.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActive(tab.key)}
              className={cn(
                "relative shrink-0 px-3 py-2 text-[15px] font-medium transition-colors md:px-1",
                active === tab.key
                  ? "text-primary"
                  : "text-secondary hover:text-primary-light"
              )}
            >
              {tab.label}
              {active === tab.key && (
                <motion.div
                  layoutId="doctor-tab-underline"
                  className="absolute bottom-0 left-0 h-[2px] w-full bg-accent"
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Doctor cards grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-5"
          >
            {filtered.map((doctor, i) => (
              <motion.div
                key={doctor.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <Link
                  href={`/doctors/${doctor.id}`}
                  className="group block overflow-hidden rounded-xl bg-white shadow-[var(--shadow-card)] transition-shadow duration-300 hover:shadow-[var(--shadow-card-hover)]"
                >
                  {/* Profile image placeholder with gradient and initial */}
                  <div className="relative flex h-[240px] items-center justify-center bg-gradient-to-b from-accent/20 to-accent/5 md:h-[280px]">
                    <span className="select-none text-[64px] font-bold leading-none text-accent/30 md:text-[80px]">
                      {doctor.name.charAt(0)}
                    </span>
                    <div className="absolute bottom-4 right-4 h-16 w-16 rounded-full border-2 border-accent/10" />
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    {/* Name and title */}
                    <div className="flex items-center gap-2">
                      <h3 className="text-base font-bold text-primary md:text-lg">
                        {doctor.name}
                      </h3>
                      <span
                        className={cn(
                          "inline-block rounded px-2 py-0.5 text-xs font-medium",
                          TITLE_STYLE[doctor.title] ?? "bg-accent-light text-accent"
                        )}
                      >
                        {doctor.title}
                      </span>
                    </div>

                    {/* Specialty */}
                    <p className="mt-1 text-sm text-secondary">
                      {doctor.specialty}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </Container>
    </main>
  );
}
