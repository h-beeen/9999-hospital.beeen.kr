import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import { getDoctorById, DEPARTMENTS, DOCTORS } from "@/lib/data";

/* ------------------------------------------------------------------ */
/*  Static params & metadata                                            */
/* ------------------------------------------------------------------ */

export function generateStaticParams() {
  return DOCTORS.map((doctor) => ({ id: String(doctor.id) }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const doctor = getDoctorById(Number(id));
  if (!doctor) return { title: "의료진 소개 | Hospital Demo" };

  return {
    title: `${doctor.name} ${doctor.title} | Hospital Demo`,
    description: `${doctor.specialty} - ${doctor.name} ${doctor.title}의 진료 안내`,
  };
}

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

export default async function DoctorDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const doctor = getDoctorById(Number(id));

  if (!doctor) notFound();

  const department = DEPARTMENTS.find((d) => d.category === doctor.department);
  const sameDeptDoctors = DOCTORS.filter(
    (d) => d.department === doctor.department && d.id !== doctor.id
  );

  return (
    <main className="pt-[calc(56px+20px)] pb-24 lg:pt-[calc(72px+40px)]">
      <Container>
        {/* -------------------------------------------------------- */}
        {/*  Breadcrumb                                               */}
        {/* -------------------------------------------------------- */}
        <nav className="mb-8 flex items-center gap-2 text-sm text-secondary">
          <Link
            href="/"
            className="transition-colors hover:text-accent"
          >
            홈
          </Link>
          <span className="text-border">/</span>
          <Link
            href="/doctors"
            className="transition-colors hover:text-accent"
          >
            의료진
          </Link>
          <span className="text-border">/</span>
          <span className="text-primary font-medium">{doctor.name}</span>
        </nav>

        {/* -------------------------------------------------------- */}
        {/*  Profile section (2-column)                               */}
        {/* -------------------------------------------------------- */}
        <section className="mb-16 grid gap-8 md:grid-cols-2 md:gap-12">
          {/* Left — doctor profile photo */}
          <div className="relative h-[300px] overflow-hidden rounded-2xl bg-gradient-to-b from-accent/10 to-accent/5 md:h-[400px]">
            <Image
              src={doctor.image}
              alt={`${doctor.name} ${doctor.title}`}
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>

          {/* Right — info */}
          <div className="flex flex-col justify-center">
            <div className="mb-4 flex items-center gap-3">
              <h1 className="text-[clamp(1.5rem,4vw,2.5rem)] font-bold leading-[1.3] text-primary">
                {doctor.name}
              </h1>
              <span
                className={
                  "inline-block rounded px-3 py-1 text-sm font-medium " +
                  (TITLE_STYLE[doctor.title] ?? "bg-accent-light text-accent")
                }
              >
                {doctor.title}
              </span>
            </div>

            <p className="mb-2 text-lg font-medium text-primary">
              {doctor.specialty}
            </p>

            {department && (
              <Link
                href={`/departments/${department.category}`}
                className="mb-6 inline-flex items-center gap-1.5 text-sm text-secondary transition-colors hover:text-accent"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 7.5h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
                  />
                </svg>
                {department.titleKo} ({department.titleEn})
              </Link>
            )}

            <Button href="/reservation" variant="primary" size="lg">
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                />
              </svg>
              진료 예약
            </Button>
          </div>
        </section>

        {/* -------------------------------------------------------- */}
        {/*  Education & Career timeline                              */}
        {/* -------------------------------------------------------- */}
        <section className="mb-16">
          <SectionLabel text="EDUCATION & CAREER" />
          <h2 className="mt-3 mb-8 text-[clamp(1.25rem,3vw,1.75rem)] font-bold leading-[1.3] text-primary">
            학력 및 경력
          </h2>

          <div className="relative pl-8">
            {/* Vertical dotted line */}
            <div className="absolute top-2 left-[11px] bottom-2 w-px border-l-2 border-dotted border-border" />

            {/* Education items */}
            {doctor.education.map((item, i) => (
              <div key={`edu-${i}`} className="relative mb-6 last:mb-8">
                {/* Circle marker */}
                <div className="absolute -left-8 top-1.5 flex h-[22px] w-[22px] items-center justify-center rounded-full border-2 border-accent bg-white">
                  <div className="h-2 w-2 rounded-full bg-accent" />
                </div>
                <p className="text-[15px] leading-relaxed text-primary">
                  {item}
                </p>
              </div>
            ))}

            {/* Divider label */}
            <div className="relative mb-6">
              <div className="absolute -left-8 top-0.5 flex h-[22px] w-[22px] items-center justify-center rounded-full bg-accent">
                <svg
                  className="h-3 w-3 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider text-secondary">
                CAREER
              </span>
            </div>

            {/* Career items */}
            {doctor.career.map((item, i) => (
              <div key={`career-${i}`} className="relative mb-6 last:mb-0">
                {/* Circle marker */}
                <div className="absolute -left-8 top-1.5 flex h-[22px] w-[22px] items-center justify-center rounded-full border-2 border-accent bg-white">
                  <div className="h-2 w-2 rounded-full bg-accent" />
                </div>
                <p className="text-[15px] leading-relaxed text-primary">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* -------------------------------------------------------- */}
        {/*  Specialty tags                                            */}
        {/* -------------------------------------------------------- */}
        <section className="mb-16">
          <SectionLabel text="SPECIALTIES" />
          <h2 className="mt-3 mb-8 text-[clamp(1.25rem,3vw,1.75rem)] font-bold leading-[1.3] text-primary">
            전문 진료 분야
          </h2>

          <div className="flex flex-wrap gap-3">
            {doctor.specialties.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-accent-light px-4 py-2 text-sm font-medium text-accent"
              >
                {tag}
              </span>
            ))}
          </div>
        </section>

        {/* -------------------------------------------------------- */}
        {/*  Same department doctors                                   */}
        {/* -------------------------------------------------------- */}
        {sameDeptDoctors.length > 0 && (
          <section>
            <SectionLabel text="SAME DEPARTMENT" />
            <h2 className="mt-3 mb-8 text-[clamp(1.25rem,3vw,1.75rem)] font-bold leading-[1.3] text-primary">
              같은 진료과 의료진
            </h2>

            <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar md:grid md:grid-cols-3 md:gap-5 md:overflow-visible md:pb-0">
              {sameDeptDoctors.map((d) => (
                <Link
                  key={d.id}
                  href={`/doctors/${d.id}`}
                  className="group block w-[200px] shrink-0 overflow-hidden rounded-xl bg-white shadow-[var(--shadow-card)] transition-shadow duration-300 hover:shadow-[var(--shadow-card-hover)] md:w-auto"
                >
                  {/* Mini profile photo */}
                  <div className="relative h-[160px] overflow-hidden bg-gradient-to-b from-accent/10 to-accent/5">
                    <Image
                      src={d.image}
                      alt={`${d.name} ${d.title}`}
                      fill
                      className="object-cover object-top"
                      sizes="200px"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-3">
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm font-bold text-primary">
                        {d.name}
                      </h3>
                      <span
                        className={
                          "inline-block rounded px-1.5 py-0.5 text-[11px] font-medium " +
                          (TITLE_STYLE[d.title] ?? "bg-accent-light text-accent")
                        }
                      >
                        {d.title}
                      </span>
                    </div>
                    <p className="mt-0.5 text-xs text-secondary">
                      {d.specialty}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </Container>
    </main>
  );
}
