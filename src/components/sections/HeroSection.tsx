"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { HOSPITAL } from "@/lib/constants";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.5 + i * 0.2, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex h-[600px] max-h-[600px] items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <Image
        src="/images/hero-bg.jpg"
        alt="Hospital exterior"
        fill
        className="object-cover"
        priority
        quality={85}
      />

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0F1923]/80 via-[#1A2332]/70 to-[#2D3A4A]/80" />

      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1080px] flex-col items-center px-5 text-center md:px-10">
        <motion.span
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mb-4 inline-block text-xs font-medium uppercase tracking-[0.12em] text-white/70 md:text-sm"
        >
          TRUSTED MEDICAL CARE
        </motion.span>

        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-[clamp(1.75rem,5vw,3.5rem)] font-extrabold leading-[1.2] text-white"
        >
          건강한 내일을
          <br />
          함께 만들어갑니다
        </motion.h1>

        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-4 max-w-lg text-[clamp(0.875rem,1.5vw,1.125rem)] leading-relaxed text-white/80 md:mt-5"
        >
          환자 중심의 정확한 진단과 따뜻한 치료로
          <br />
          신뢰받는 의료 서비스를 제공합니다
        </motion.p>

        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4 md:mt-10"
        >
          <Button href="/reservation" variant="dark-secondary-inverted" size="lg" className="w-full sm:w-auto">
            진료 예약하기
          </Button>
          <Button
            href={`tel:${HOSPITAL.phone.replace(/-/g, "")}`}
            variant="dark-secondary"
            size="lg"
            external
            className="w-full sm:w-auto"
          >
            전화 상담
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="animate-bounce-down"
        >
          <svg
            className="h-6 w-6 text-white/60"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
