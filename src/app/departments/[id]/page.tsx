import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import { getDepartmentByCategory, DEPARTMENT_DETAILS, DOCTOR_DETAILS } from "@/lib/data";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/*  Static generation                                                  */
/* ------------------------------------------------------------------ */

export function generateStaticParams() {
  return DEPARTMENT_DETAILS.map((dept) => ({ id: dept.category }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const dept = getDepartmentByCategory(id);
  if (!dept) {
    return { title: "진료과목 | Hospital Demo" };
  }
  return {
    title: `${dept.titleKo} | Hospital Demo`,
    description: dept.fullDescription,
  };
}

/* ------------------------------------------------------------------ */
/*  Icon SVGs                                                          */
/* ------------------------------------------------------------------ */

const ICON_MAP: Record<string, React.ReactNode> = {
  stethoscope: (
    <svg
      className="h-16 w-16 text-white md:h-20 md:w-20"
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
      className="h-16 w-16 text-white md:h-20 md:w-20"
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
      className="h-16 w-16 text-white md:h-20 md:w-20"
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
      className="h-16 w-16 text-white md:h-20 md:w-20"
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
/*  Gradient + color maps                                              */
/* ------------------------------------------------------------------ */

const GRADIENT_MAP: Record<string, string> = {
  blue: "from-blue-500 to-blue-700",
  emerald: "from-emerald-500 to-emerald-700",
  purple: "from-purple-500 to-purple-700",
  amber: "from-amber-500 to-amber-700",
};

const COLOR_BG_LIGHT: Record<string, string> = {
  blue: "bg-blue-50",
  emerald: "bg-emerald-50",
  purple: "bg-purple-50",
  amber: "bg-amber-50",
};

const COLOR_TEXT: Record<string, string> = {
  blue: "text-blue-600",
  emerald: "text-emerald-600",
  purple: "text-purple-600",
  amber: "text-amber-600",
};

const COLOR_BORDER: Record<string, string> = {
  blue: "border-blue-200",
  emerald: "border-emerald-200",
  purple: "border-purple-200",
  amber: "border-amber-200",
};

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default async function DepartmentDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const dept = getDepartmentByCategory(id);
  if (!dept) notFound();

  const assignedDoctors = DOCTOR_DETAILS.filter((doc) =>
    dept.doctorIds.includes(doc.id),
  );

  return (
    <div className="pt-[calc(var(--gnb-h-mobile)+20px)] lg:pt-[calc(var(--gnb-h-desktop)+40px)]">
      {/* ── Breadcrumb ── */}
      <Container>
        <nav className="py-4 text-sm text-secondary" aria-label="Breadcrumb">
          <ol className="flex items-center gap-1.5">
            <li>
              <Link href="/" className="transition-colors hover:text-accent">
                홈
              </Link>
            </li>
            <li aria-hidden="true">
              <svg className="h-3.5 w-3.5 text-border" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </li>
            <li>
              <Link href="/departments" className="transition-colors hover:text-accent">
                진료과목
              </Link>
            </li>
            <li aria-hidden="true">
              <svg className="h-3.5 w-3.5 text-border" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </li>
            <li className="font-medium text-primary">{dept.titleKo}</li>
          </ol>
        </nav>
      </Container>

      {/* ── Hero Banner ── */}
      <section
        className={cn(
          "relative overflow-hidden bg-gradient-to-br py-16 md:py-24",
          GRADIENT_MAP[dept.colorTheme] ?? "from-accent to-accent-dark",
        )}
      >
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="hero-dots"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="2" cy="2" r="1.5" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-dots)" />
          </svg>
        </div>

        <Container className="relative">
          <div className="flex flex-col items-center text-center">
            {/* Icon */}
            <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm md:h-28 md:w-28">
              {ICON_MAP[dept.icon] ?? ICON_MAP.stethoscope}
            </div>

            {/* Department name */}
            <h1 className="text-[clamp(1.75rem,5vw,3rem)] font-bold leading-tight text-white">
              {dept.titleKo}
            </h1>
            <p className="mt-2 text-sm font-medium uppercase tracking-[0.1em] text-white/60 md:text-base">
              {dept.titleEn}
            </p>
          </div>
        </Container>
      </section>

      {/* ── Department Introduction ── */}
      <section className="py-16 md:py-24 lg:py-[120px]">
        <Container>
          <SectionLabel text="ABOUT" />
          <h2 className="mt-3 text-[clamp(1.25rem,3vw,2rem)] font-bold leading-[1.4] text-primary">
            진료과 소개
          </h2>
          <p className="mt-6 max-w-3xl text-[15px] leading-[1.8] text-secondary md:text-base">
            {dept.fullDescription}
          </p>
        </Container>
      </section>

      {/* ── Specialty Areas ── */}
      <section className="bg-surface py-16 md:py-24 lg:py-[120px]">
        <Container>
          <SectionLabel text="SPECIALTIES" />
          <h2 className="mt-3 text-[clamp(1.25rem,3vw,2rem)] font-bold leading-[1.4] text-primary">
            전문 진료 분야
          </h2>

          <ul className="mt-8 grid gap-3 md:grid-cols-2 lg:gap-4">
            {dept.specialtyAreas.map((area) => (
              <li
                key={area}
                className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-[var(--shadow-card)] md:p-5"
              >
                {/* Check icon */}
                <span
                  className={cn(
                    "mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full",
                    COLOR_BG_LIGHT[dept.colorTheme] ?? "bg-accent-light",
                  )}
                >
                  <svg
                    className={cn("h-3.5 w-3.5", COLOR_TEXT[dept.colorTheme] ?? "text-accent")}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-[15px] font-medium text-primary">{area}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* ── Diseases ── */}
      <section className="py-16 md:py-24 lg:py-[120px]">
        <Container>
          <SectionLabel text="DISEASES" />
          <h2 className="mt-3 text-[clamp(1.25rem,3vw,2rem)] font-bold leading-[1.4] text-primary">
            주요 진료 질환
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {dept.diseases.map((disease) => (
              <div
                key={disease.name}
                className={cn(
                  "rounded-xl border bg-white p-5 transition-shadow duration-300 hover:shadow-[var(--shadow-card)] md:p-6",
                  COLOR_BORDER[dept.colorTheme] ?? "border-border",
                )}
              >
                <h3 className="flex items-center gap-2 text-base font-bold text-primary md:text-lg">
                  <span
                    className={cn(
                      "inline-block h-2 w-2 rounded-full",
                      dept.colorTheme === "blue" && "bg-blue-500",
                      dept.colorTheme === "emerald" && "bg-emerald-500",
                      dept.colorTheme === "purple" && "bg-purple-500",
                      dept.colorTheme === "amber" && "bg-amber-500",
                    )}
                  />
                  {disease.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-secondary">
                  {disease.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Assigned Doctors ── */}
      {assignedDoctors.length > 0 && (
        <section className="bg-surface py-16 md:py-24 lg:py-[120px]">
          <Container>
            <SectionLabel text="MEDICAL TEAM" />
            <h2 className="mt-3 text-[clamp(1.25rem,3vw,2rem)] font-bold leading-[1.4] text-primary">
              담당 의료진
            </h2>

            <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {assignedDoctors.map((doctor) => (
                <Link
                  key={doctor.id}
                  href={`/doctors/${doctor.id}`}
                  className="group overflow-hidden rounded-xl bg-white shadow-[var(--shadow-card)] transition-shadow duration-300 hover:shadow-[var(--shadow-card-hover)]"
                >
                  {/* Profile image */}
                  <div className="relative h-[200px] overflow-hidden bg-gradient-to-b from-accent/10 to-accent/5 md:h-[240px]">
                    <Image
                      src={doctor.image}
                      alt={`${doctor.name} ${doctor.title}`}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <div className="flex items-center gap-2">
                      <h3 className="text-base font-bold text-primary md:text-lg">
                        {doctor.name}
                      </h3>
                      <span className="inline-block rounded bg-accent-light px-2 py-0.5 text-xs font-medium text-accent">
                        {doctor.title}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-secondary">{doctor.specialty}</p>

                    {/* Specialties tags */}
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {doctor.specialties.slice(0, 3).map((spec) => (
                        <span
                          key={spec}
                          className="rounded-full bg-surface px-2.5 py-1 text-xs text-secondary"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>

                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors group-hover:text-accent">
                      프로필 보기
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
      )}

      {/* ── CTA ── */}
      <section className="py-16 md:py-24 lg:py-[120px]">
        <Container>
          <div className="flex flex-col items-center rounded-2xl bg-gradient-to-br from-dark-bg to-primary px-6 py-12 text-center md:px-12 md:py-16">
            <h2 className="text-[clamp(1.25rem,3vw,2rem)] font-bold leading-[1.4] text-white">
              {dept.titleKo} 진료가 필요하신가요?
            </h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-white/70 md:text-[15px]">
              전문 의료진의 정확한 진단과 체계적인 치료를 경험하세요.
              온라인으로 간편하게 진료를 예약하실 수 있습니다.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/reservation" variant="dark-primary" size="lg">
                진료 예약하기
              </Button>
              <Button href="/departments" variant="dark-secondary" size="lg">
                다른 진료과 보기
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
