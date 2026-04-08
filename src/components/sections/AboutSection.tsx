"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 lg:py-[120px]">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
          {/* Image placeholder — left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <div className="relative overflow-hidden rounded-xl lg:rounded-2xl">
              <div className="relative h-[280px] w-full md:h-[400px] lg:h-[480px]">
                <Image
                  src="/images/facility.jpg"
                  alt="병원 내부 시설"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
              </div>

              {/* Subtle border */}
              <div className="absolute inset-0 rounded-xl border border-accent/10 lg:rounded-2xl" />
            </div>
          </motion.div>

          {/* Text — right */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <SectionLabel text="ABOUT US" />

            <h2 className="mt-3 text-[clamp(1.5rem,4vw,2.5rem)] font-bold leading-[1.3] text-primary">
              정확한 진단, 따뜻한 치료
              <br />
              환자 중심의 의료 서비스
            </h2>

            <p className="mt-5 text-[clamp(0.9375rem,1.2vw,1.125rem)] leading-[1.8] text-primary-light md:mt-6">
              환자 한 분 한 분에게 최선의 의료 서비스를 제공하기 위해 노력하는 병원입니다.
            </p>
            <p className="mt-5 text-[clamp(0.9375rem,1.2vw,1.125rem)] leading-[1.8] text-primary-light md:mt-6">
              최신 의료 장비와 풍부한 경험의 전문 의료진이 정확한 진단과 맞춤 치료를 제공합니다.
            </p>

            <div className="my-6 h-px w-12 bg-border md:my-8" />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
