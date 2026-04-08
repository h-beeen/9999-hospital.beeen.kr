"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { HOSPITAL } from "@/lib/constants";

export default function CTASection() {
  return (
    <section
      id="contact"
      className="relative bg-primary py-20 md:py-24 lg:py-[120px]"
    >
      <Container className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-3 text-sm font-medium text-accent md:text-base">
            지금 바로 예약하세요
          </p>

          <h2 className="text-[clamp(1.5rem,4vw,2.5rem)] font-extrabold leading-[1.3] text-white">
            건강한 삶을 위한
            <br />
            첫걸음을 시작하세요
          </h2>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4 md:mt-10">
            <Button
              href="/reservation"
              variant="dark-secondary-inverted"
              size="lg"
              className="w-full sm:w-auto"
            >
              온라인 예약
            </Button>
            <a
              href={`tel:${HOSPITAL.phone.replace(/-/g, "")}`}
              className="inline-flex h-[52px] min-h-[44px] w-full items-center justify-center gap-2 rounded-[var(--radius-sm)] border border-white/30 px-8 text-base font-semibold text-white/80 transition-all duration-300 hover:border-accent hover:bg-accent hover:text-white sm:w-auto"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
              {HOSPITAL.phone}
            </a>
          </div>

        </motion.div>

        <p className="mt-12 text-[11px] leading-relaxed text-white/40 md:mt-16">
          본 웹 사이트의 모든 디자인 및 산출물에 대한 저작권은 beeenLAB에 있습니다.
          <br />
          계약 체결 전 본 사이트의 지적 재산을 무단으로 복제, 배포 또는 재사용할 경우
          <br />
          관련 법령에 따라 민·형사상 책임을 질 수 있습니다.
          <br />
          <br />
          &copy; 2026 beeenLAB. All rights <b>Restrictly</b> Reserved.
        </p>
      </Container>
    </section>
  );
}
