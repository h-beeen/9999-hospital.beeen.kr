import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import { DEPARTMENTS } from "@/lib/data";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "진료과목 | Hospital Demo",
};

/* ------------------------------------------------------------------ */
/*  Department icon SVGs (static — no client hooks)                    */
/* ------------------------------------------------------------------ */

const ICON_MAP: Record<string, React.ReactNode> = {
  stethoscope: (
    <svg
      className="h-12 w-12 text-white md:h-14 md:w-14"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2v6m0 0a4 4 0 004 4h1a3 3 0 013 3v1a3 3 0 01-3 3 3 3 0 01-3-3v-1a3 3 0 013-3h1a4 4 0 004-4V2" />
      <path d="M8 2v4a4 4 0 004 4" />
    </svg>
  ),
  bone: (
    <svg
      className="h-12 w-12 text-white md:h-14 md:w-14"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18.5 5.5a2.12 2.12 0 01-3 3L9 15l-1.5 1.5" />
      <path d="M5.5 18.5a2.12 2.12 0 003-3L15 9l1.5-1.5" />
      <circle cx="19" cy="5" r="2" />
      <circle cx="5" cy="19" r="2" />
    </svg>
  ),
  skin: (
    <svg
      className="h-12 w-12 text-white md:h-14 md:w-14"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3l1.5 3.2L17 7.5l-2.5 2.8.4 3.7L12 12.5 9.1 14l.4-3.7L7 7.5l3.5-1.3L12 3z" />
      <path d="M5 16l1 2.2L8.5 19l-1.8 1.8.3 2.7L5 22l-2 1.5.3-2.7L1.5 19 4 18.2 5 16z" />
      <path d="M19 16l1 2.2 2.5.8-1.8 1.8.3 2.7L19 22l-2 1.5.3-2.7-1.8-1.8 2.5-.8L19 16z" />
    </svg>
  ),
  family: (
    <svg
      className="h-12 w-12 text-white md:h-14 md:w-14"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 000-7.78z" />
      <circle cx="9" cy="13" r="1.25" />
      <circle cx="15" cy="13" r="1.25" />
      <circle cx="12" cy="10" r="1" />
    </svg>
  ),
};

/* ------------------------------------------------------------------ */
/*  Gradient backgrounds per category                                  */
/* ------------------------------------------------------------------ */

const GRADIENT_MAP: Record<string, string> = {
  internal: "from-blue-500 to-blue-700",
  orthopedics: "from-emerald-500 to-emerald-700",
  dermatology: "from-purple-500 to-purple-700",
  family: "from-amber-500 to-amber-700",
};

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function DepartmentsPage() {
  return (
    <section className="py-24 pt-[calc(var(--gnb-h-mobile)+40px)] lg:py-[120px] lg:pt-[calc(var(--gnb-h-desktop)+60px)]">
      <Container>
        {/* Header */}
        <div className="mb-10 md:mb-14">
          <SectionLabel text="DEPARTMENTS" />
          <h1 className="mt-3 text-[clamp(1.5rem,4vw,2.5rem)] font-bold leading-[1.3] text-primary">
            전문 진료과목
          </h1>
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-secondary">
            각 분야 전문 의료진이 정확한 진단과 체계적인 치료로
            환자분의 건강을 책임집니다.
          </p>
        </div>

        {/* Grid — 4 columns */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {DEPARTMENTS.map((dept) => (
            <Link
              key={dept.number}
              href={`/departments/${dept.category}`}
              className="group overflow-hidden rounded-2xl bg-white shadow-[var(--shadow-card)] transition-shadow duration-300 hover:shadow-[var(--shadow-card-hover)]"
            >
              {/* Icon area with gradient */}
              <div
                className={cn(
                  "relative flex h-[160px] items-center justify-center bg-gradient-to-br md:h-[180px]",
                  GRADIENT_MAP[dept.category] ?? "from-accent to-accent-dark",
                )}
              >
                {/* Background pattern dots */}
                <div className="absolute inset-0 opacity-10">
                  <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern
                        id={`dots-list-${dept.category}`}
                        x="0"
                        y="0"
                        width="20"
                        height="20"
                        patternUnits="userSpaceOnUse"
                      >
                        <circle cx="2" cy="2" r="1.5" fill="white" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill={`url(#dots-list-${dept.category})`} />
                  </svg>
                </div>

                {/* Icon */}
                <div className="relative transition-transform duration-300 group-hover:scale-110">
                  {ICON_MAP[dept.icon] ?? ICON_MAP.stethoscope}
                </div>

                {/* English label overlay */}
                <span className="absolute bottom-3 left-4 text-xs font-medium uppercase tracking-[0.08em] text-white/60">
                  {dept.titleEn}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <span className="text-[48px] font-extrabold leading-none text-border">
                  {dept.number}
                </span>
                <h2 className="mt-2 text-sm font-bold text-primary md:text-base">
                  {dept.titleKo}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-secondary">
                  {dept.description.split("\n").map((line, j) => (
                    <span key={j}>
                      {j > 0 && <br />}
                      {line}
                    </span>
                  ))}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors group-hover:text-accent">
                  자세히 보기
                  <svg
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
