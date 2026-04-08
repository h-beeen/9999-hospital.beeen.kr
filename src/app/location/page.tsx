"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import { HOSPITAL, TRANSPORT_INFO } from "@/lib/constants";
import { OPERATING_HOURS } from "@/lib/data";
import { cn } from "@/lib/utils";

const TABS = TRANSPORT_INFO.map((t) => ({ type: t.type, label: t.label }));

export default function LocationPage() {
  const [activeTab, setActiveTab] = useState<string>(TABS[0].type);

  const activeTransport = TRANSPORT_INFO.find((t) => t.type === activeTab)!;

  return (
    <main className="pb-24">
      {/* ── Header ───────────────────────────────────────── */}
      <section className="pt-[calc(56px+40px)] lg:pt-[calc(72px+60px)]">
        <Container>
          <SectionLabel text="LOCATION" />

          <h1 className="mt-3 text-[clamp(1.75rem,4vw,2.75rem)] font-bold leading-[1.3] text-primary">
            오시는 길
          </h1>

          <p className="mt-4 text-[clamp(0.9375rem,1.2vw,1.125rem)] leading-[1.8] text-secondary">
            {HOSPITAL.address}
          </p>

          <a
            href={`tel:${HOSPITAL.phone.replace(/-/g, "")}`}
            className="mt-1 inline-block text-[clamp(0.9375rem,1.2vw,1.125rem)] font-medium text-accent transition-colors hover:text-accent/80"
          >
            {HOSPITAL.phone}
          </a>
        </Container>
      </section>

      {/* ── Map Section ──────────────────────────────────── */}
      <section className="mt-10 md:mt-14">
        <Container>
          <div className="relative h-[300px] w-full overflow-hidden rounded-xl bg-surface md:h-[400px]">
            <iframe
              src={`https://map.kakao.com/?q=${encodeURIComponent(HOSPITAL.address)}`}
              className="h-full w-full border-0"
              title="병원 위치 - 카카오맵"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          {/* External map links */}
          <div className="mt-4 flex gap-3">
            <a
              href={`https://map.naver.com/v5/search/${encodeURIComponent(HOSPITAL.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2.5 text-sm font-medium text-primary transition-colors hover:bg-surface"
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
                  d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
              네이버 지도
            </a>

            <a
              href={`https://map.kakao.com/?q=${encodeURIComponent(HOSPITAL.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2.5 text-sm font-medium text-primary transition-colors hover:bg-surface"
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
                  d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
              카카오맵
            </a>
          </div>
        </Container>
      </section>

      {/* ── Transport Tabs ───────────────────────────────── */}
      <section className="mt-14 md:mt-20">
        <Container>
          {/* Tab bar */}
          <div className="flex border-b border-border">
            {TABS.map((tab) => (
              <button
                key={tab.type}
                onClick={() => setActiveTab(tab.type)}
                className={cn(
                  "relative px-4 py-3 text-sm font-medium transition-colors md:px-6 md:text-base",
                  activeTab === tab.type
                    ? "text-accent"
                    : "text-secondary hover:text-primary"
                )}
              >
                {tab.label}
                {activeTab === tab.type && (
                  <span className="absolute bottom-0 left-0 h-0.5 w-full bg-accent" />
                )}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div className="mt-6 rounded-xl bg-surface p-6">
            <ul className="space-y-3">
              {activeTransport.items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-primary">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                  <span className="text-[clamp(0.875rem,1.1vw,1rem)] leading-[1.7]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* ── Hospital Info Card ───────────────────────────── */}
      <section className="mt-14 md:mt-20">
        <Container>
          <div className="rounded-2xl bg-surface p-6 shadow-[var(--shadow-card)] md:p-8">
            <div className="grid gap-8 md:grid-cols-2 md:gap-12">
              {/* Left -- Contact */}
              <div className="space-y-5">
                <h3 className="text-lg font-bold text-primary">병원 정보</h3>

                {/* Address */}
                <div className="flex items-start gap-3">
                  <svg
                    className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                    />
                  </svg>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-secondary">주소</p>
                    <p className="mt-0.5 text-primary">{HOSPITAL.address}</p>
                  </div>
                  <button
                    onClick={() =>
                      navigator.clipboard.writeText(HOSPITAL.address)
                    }
                    className="flex-shrink-0 rounded-md p-1.5 text-secondary transition-colors hover:bg-border/50 hover:text-primary"
                    aria-label="주소 복사"
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
                        d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9.75a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184"
                      />
                    </svg>
                  </button>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3">
                  <svg
                    className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                    />
                  </svg>
                  <div>
                    <p className="text-sm font-medium text-secondary">전화</p>
                    <a
                      href={`tel:${HOSPITAL.phone.replace(/-/g, "")}`}
                      className="mt-0.5 inline-block text-primary transition-colors hover:text-accent"
                    >
                      {HOSPITAL.phone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <svg
                    className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  </svg>
                  <div>
                    <p className="text-sm font-medium text-secondary">이메일</p>
                    <a
                      href={`mailto:${HOSPITAL.email}`}
                      className="mt-0.5 inline-block text-primary transition-colors hover:text-accent"
                    >
                      {HOSPITAL.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Right -- Operating Hours */}
              <div>
                <h3 className="text-lg font-bold text-primary">진료 시간</h3>

                <div className="mt-5 divide-y divide-border/50">
                  {OPERATING_HOURS.map((slot, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between py-3 first:pt-0 last:pb-0"
                    >
                      <span className="font-medium text-primary">
                        {slot.day}
                      </span>
                      <span
                        className={cn(
                          "text-sm",
                          slot.hours === "휴진"
                            ? "font-medium text-red-500"
                            : "text-secondary"
                        )}
                      >
                        {slot.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
