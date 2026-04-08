"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import { DOCTORS } from "@/lib/data";

/* ------------------------------------------------------------------ */
/*  Title badge color map                                              */
/* ------------------------------------------------------------------ */

const TITLE_STYLE: Record<string, string> = {
  원장: "bg-accent-light text-accent",
  부원장: "bg-accent-light text-accent",
  과장: "bg-accent-light text-accent",
};

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function DoctorsSection() {
  return (
    <section id="doctors" className="py-16 md:py-24 lg:py-[120px]">
      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10 md:mb-14"
        >
          <SectionLabel text="MEDICAL TEAM" />
          <h2 className="mt-3 text-[clamp(1.5rem,4vw,2.5rem)] font-bold leading-[1.3] text-primary">
            전문 의료진 소개
          </h2>
        </motion.div>

        {/* Grid — 4 columns */}
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-5">
          {DOCTORS.map((doctor, i) => (
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
              className="group overflow-hidden rounded-xl bg-white shadow-[var(--shadow-card)] transition-shadow duration-300 hover:shadow-[var(--shadow-card-hover)]"
            >
              {/* Profile image placeholder with gradient and initials */}
              <div className="relative flex h-[240px] items-center justify-center bg-gradient-to-b from-accent/20 to-accent/5 md:h-[280px]">
                {/* Initials */}
                <span className="select-none text-[64px] font-bold leading-none text-accent/30 md:text-[80px]">
                  {doctor.name.charAt(0)}
                </span>

                {/* Subtle decorative circle */}
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
                    className={
                      "inline-block rounded px-2 py-0.5 text-xs font-medium " +
                      (TITLE_STYLE[doctor.title] ?? "bg-accent-light text-accent")
                    }
                  >
                    {doctor.title}
                  </span>
                </div>

                {/* Specialty */}
                <p className="mt-1 text-sm text-secondary">{doctor.specialty}</p>

                {/* Description (multi-line career history) */}
                <p className="mt-2 whitespace-pre-line text-xs leading-relaxed text-secondary/80">
                  {doctor.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
