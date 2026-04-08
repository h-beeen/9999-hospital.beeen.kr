"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import { DEPARTMENTS, DOCTORS } from "@/lib/data";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/*  Constants                                                          */
/* ------------------------------------------------------------------ */

const STEPS = [
  { number: 1, label: "진료과 선택" },
  { number: 2, label: "의료진 선택" },
  { number: 3, label: "날짜/시간" },
  { number: 4, label: "정보 입력" },
];

const KOREAN_WEEKDAYS = ["일", "월", "화", "수", "목", "금", "토"];

const GRADIENT_MAP: Record<string, string> = {
  internal: "from-blue-500 to-blue-700",
  orthopedics: "from-emerald-500 to-emerald-700",
  dermatology: "from-purple-500 to-purple-700",
  family: "from-amber-500 to-amber-700",
};

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

interface DateOption {
  date: Date;
  dateStr: string;
  dayOfWeek: string;
  dayNumber: number;
  isSunday: boolean;
}

function generateDateOptions(): DateOption[] {
  const options: DateOption[] = [];
  const today = new Date();

  for (let i = 1; i <= 14; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const dayIndex = date.getDay();

    options.push({
      date,
      dateStr: `${year}-${month}-${day}`,
      dayOfWeek: KOREAN_WEEKDAYS[dayIndex],
      dayNumber: date.getDate(),
      isSunday: dayIndex === 0,
    });
  }

  return options;
}

function generateTimeSlots(isSaturday: boolean): string[] {
  const slots: string[] = [];
  const endHour = isSaturday ? 12 : 17;
  const endMinute = isSaturday ? 30 : 30;

  for (let h = 9; h <= endHour; h++) {
    for (const m of [0, 30]) {
      if (h === endHour && m > endMinute) break;
      if (h > endHour) break;
      const time = `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
      slots.push(time);
    }
  }

  return slots;
}

function isLunchTime(time: string): boolean {
  return time === "13:00" || time === "13:30";
}

function formatDisplayDate(dateStr: string): string {
  const [year, month, day] = dateStr.split("-");
  const date = new Date(Number(year), Number(month) - 1, Number(day));
  const weekday = KOREAN_WEEKDAYS[date.getDay()];
  return `${Number(year)}년 ${Number(month)}월 ${Number(day)}일 (${weekday})`;
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function ReservationPage() {
  const [step, setStep] = useState(1);
  const [selectedDept, setSelectedDept] = useState<string | null>(null);
  const [selectedDoctor, setSelectedDoctor] = useState<number | null>(null);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    symptoms: "",
    visitType: "first" as "first" | "return",
  });
  const [completed, setCompleted] = useState(false);

  /* Derived data */
  const dateOptions = generateDateOptions();
  const selectedDateObj = dateOptions.find((d) => d.dateStr === selectedDate);
  const isSaturday = selectedDateObj
    ? selectedDateObj.date.getDay() === 6
    : false;
  const timeSlots = generateTimeSlots(isSaturday);
  const filteredDoctors = DOCTORS.filter((d) => d.department === selectedDept);

  const selectedDeptData = DEPARTMENTS.find((d) => d.category === selectedDept);
  const selectedDoctorData = DOCTORS.find((d) => d.id === selectedDoctor);

  /* Step navigation */
  const goNext = () => setStep((s) => Math.min(s + 1, 4));
  const goPrev = () => setStep((s) => Math.max(s - 1, 1));

  const handleComplete = () => {
    setCompleted(true);
  };

  /* ---------------------------------------------------------------- */
  /*  Completion screen                                                */
  /* ---------------------------------------------------------------- */

  if (completed) {
    return (
      <div className="pt-[calc(56px+40px)] pb-24 lg:pt-[calc(72px+60px)]">
        <Container>
          <AnimatePresence mode="wait">
            <motion.div
              key="completed"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="mx-auto max-w-lg py-20 text-center"
            >
              {/* Check icon */}
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-accent-light">
                <svg
                  className="h-8 w-8 text-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </div>

              <h2 className="text-2xl font-bold text-primary">
                예약이 완료되었습니다
              </h2>
              <p className="mt-2 text-secondary">
                아래 예약 정보를 확인해 주세요.
              </p>

              {/* Summary card */}
              <div className="mt-8 rounded-xl border border-border/50 bg-white p-6 text-left shadow-sm">
                <div className="space-y-4">
                  <div className="flex justify-between border-b border-border/50 pb-3">
                    <span className="text-sm text-secondary">진료과</span>
                    <span className="text-sm font-semibold text-primary">
                      {selectedDeptData?.titleKo ?? "-"}
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-border/50 pb-3">
                    <span className="text-sm text-secondary">담당의</span>
                    <span className="text-sm font-semibold text-primary">
                      {selectedDoctorData
                        ? `${selectedDoctorData.name} ${selectedDoctorData.title}`
                        : "지정 없음"}
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-border/50 pb-3">
                    <span className="text-sm text-secondary">예약일시</span>
                    <span className="text-sm font-semibold text-primary">
                      {selectedDate ? formatDisplayDate(selectedDate) : "-"}{" "}
                      {selectedTime ?? ""}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-secondary">예약자</span>
                    <span className="text-sm font-semibold text-primary">
                      {formData.name}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Button href="/" size="lg">
                  홈으로 돌아가기
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>
        </Container>
      </div>
    );
  }

  /* ---------------------------------------------------------------- */
  /*  Main reservation form                                            */
  /* ---------------------------------------------------------------- */

  return (
    <div className="pt-[calc(56px+40px)] pb-24 lg:pt-[calc(72px+60px)]">
      <Container>
        {/* Header */}
        <div className="mb-10">
          <SectionLabel text="RESERVATION" />
          <h1 className="mt-3 text-[clamp(1.5rem,4vw,2.5rem)] font-bold leading-[1.3] text-primary">
            진료 예약
          </h1>
        </div>

        {/* -------------------------------------------------------- */}
        {/*  Progress stepper                                         */}
        {/* -------------------------------------------------------- */}
        <div className="mb-12">
          <div className="flex items-center justify-between">
            {STEPS.map((s, i) => (
              <div key={s.number} className="flex flex-1 items-center">
                {/* Step circle + label */}
                <div className="flex flex-col items-center gap-2">
                  <div
                    className={cn(
                      "flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold transition-colors",
                      step >= s.number
                        ? "bg-accent text-white"
                        : "bg-surface text-secondary"
                    )}
                  >
                    {step > s.number ? (
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    ) : (
                      s.number
                    )}
                  </div>
                  <span
                    className={cn(
                      "hidden text-xs font-medium sm:block",
                      step >= s.number ? "text-accent" : "text-secondary"
                    )}
                  >
                    {s.label}
                  </span>
                </div>

                {/* Connector line */}
                {i < STEPS.length - 1 && (
                  <div
                    className={cn(
                      "mx-2 h-[2px] flex-1 transition-colors",
                      step > s.number ? "bg-accent" : "bg-border"
                    )}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* -------------------------------------------------------- */}
        {/*  Step content                                              */}
        {/* -------------------------------------------------------- */}
        <AnimatePresence mode="wait">
          {/* ====================================================== */}
          {/*  Step 1: Department selection                            */}
          {/* ====================================================== */}
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="mb-6 text-lg font-bold text-primary">
                진료과를 선택해 주세요
              </h2>

              <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
                {DEPARTMENTS.map((dept) => (
                  <button
                    key={dept.category}
                    type="button"
                    onClick={() => setSelectedDept(dept.category)}
                    className={cn(
                      "group cursor-pointer overflow-hidden rounded-xl border bg-white text-left shadow-sm transition-all duration-200 hover:shadow-[var(--shadow-card)]",
                      selectedDept === dept.category
                        ? "ring-2 ring-accent border-accent bg-accent-light"
                        : "border-border/50"
                    )}
                  >
                    {/* Gradient icon area */}
                    <div
                      className={cn(
                        "flex h-[100px] items-center justify-center bg-gradient-to-br",
                        GRADIENT_MAP[dept.category] ?? "from-accent to-accent-dark"
                      )}
                    >
                      <span className="text-3xl font-bold text-white/80">
                        {dept.titleKo.charAt(0)}
                      </span>
                    </div>

                    {/* Name */}
                    <div className="p-4">
                      <h3 className="text-sm font-bold text-primary">
                        {dept.titleKo}
                      </h3>
                    </div>
                  </button>
                ))}
              </div>

              {/* Next button */}
              <div className="mt-8 flex justify-end">
                <Button
                  onClick={goNext}
                  className={cn(
                    !selectedDept && "pointer-events-none opacity-40"
                  )}
                >
                  다음
                </Button>
              </div>
            </motion.div>
          )}

          {/* ====================================================== */}
          {/*  Step 2: Doctor selection                                */}
          {/* ====================================================== */}
          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="mb-6 text-lg font-bold text-primary">
                의료진을 선택해 주세요
              </h2>

              <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
                {/* Filtered doctors */}
                {filteredDoctors.map((doctor) => (
                  <button
                    key={doctor.id}
                    type="button"
                    onClick={() => setSelectedDoctor(doctor.id)}
                    className={cn(
                      "group cursor-pointer overflow-hidden rounded-xl border bg-white text-left shadow-sm transition-all duration-200 hover:shadow-[var(--shadow-card)]",
                      selectedDoctor === doctor.id
                        ? "ring-2 ring-accent border-accent"
                        : "border-border/50"
                    )}
                  >
                    {/* Gradient placeholder with initial */}
                    <div className="flex h-[140px] items-center justify-center bg-gradient-to-b from-accent/20 to-accent/5">
                      <span className="select-none text-[48px] font-bold leading-none text-accent/30">
                        {doctor.name.charAt(0)}
                      </span>
                    </div>

                    {/* Info */}
                    <div className="p-4">
                      <h3 className="text-sm font-bold text-primary">
                        {doctor.name}
                      </h3>
                      <span className="mt-1 inline-block rounded bg-accent-light px-2 py-0.5 text-xs font-medium text-accent">
                        {doctor.title}
                      </span>
                      <p className="mt-2 text-xs text-secondary">
                        {doctor.specialty}
                      </p>
                    </div>
                  </button>
                ))}

                {/* "No preference" option */}
                <button
                  type="button"
                  onClick={() => setSelectedDoctor(-1)}
                  className={cn(
                    "flex cursor-pointer flex-col items-center justify-center rounded-xl border bg-white shadow-sm transition-all duration-200 hover:shadow-[var(--shadow-card)]",
                    selectedDoctor === -1
                      ? "ring-2 ring-accent border-accent"
                      : "border-border/50"
                  )}
                >
                  <div className="flex h-[140px] items-center justify-center">
                    <svg
                      className="h-10 w-10 text-secondary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                      />
                    </svg>
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="text-sm font-bold text-primary">
                      담당의 지정 없음
                    </h3>
                    <p className="mt-2 text-xs text-secondary">
                      배정된 의료진이 진료합니다
                    </p>
                  </div>
                </button>
              </div>

              {/* Navigation buttons */}
              <div className="mt-8 flex justify-between">
                <Button variant="secondary" onClick={goPrev}>
                  이전
                </Button>
                <Button
                  onClick={goNext}
                  className={cn(
                    selectedDoctor === null && "pointer-events-none opacity-40"
                  )}
                >
                  다음
                </Button>
              </div>
            </motion.div>
          )}

          {/* ====================================================== */}
          {/*  Step 3: Date & Time                                     */}
          {/* ====================================================== */}
          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="mb-6 text-lg font-bold text-primary">
                날짜와 시간을 선택해 주세요
              </h2>

              {/* Date picker — scrollable row */}
              <div className="mb-8">
                <h3 className="mb-3 text-sm font-semibold text-primary">
                  날짜 선택
                </h3>
                <div className="no-scrollbar flex gap-2 overflow-x-auto pb-2">
                  {dateOptions.map((opt) => (
                    <button
                      key={opt.dateStr}
                      type="button"
                      disabled={opt.isSunday}
                      onClick={() => {
                        setSelectedDate(opt.dateStr);
                        /* Reset time when date changes (Saturday has different slots) */
                        setSelectedTime(null);
                      }}
                      className={cn(
                        "flex min-w-[60px] shrink-0 cursor-pointer flex-col items-center gap-1 rounded-xl border px-3 py-3 transition-all duration-200",
                        opt.isSunday
                          ? "cursor-not-allowed border-border/30 bg-surface/50 text-secondary/40"
                          : selectedDate === opt.dateStr
                            ? "border-accent bg-accent text-white"
                            : "border-border/50 bg-white text-primary hover:border-accent/50 hover:shadow-sm"
                      )}
                    >
                      <span
                        className={cn(
                          "text-xs font-medium",
                          opt.isSunday
                            ? "text-secondary/40"
                            : selectedDate === opt.dateStr
                              ? "text-white/80"
                              : opt.dayOfWeek === "토"
                                ? "text-accent"
                                : "text-secondary"
                        )}
                      >
                        {opt.dayOfWeek}
                      </span>
                      <span className="text-lg font-bold">{opt.dayNumber}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Time slots */}
              {selectedDate && (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <h3 className="mb-3 text-sm font-semibold text-primary">
                    시간 선택
                    {isSaturday && (
                      <span className="ml-2 text-xs font-normal text-secondary">
                        (토요일 오전 진료)
                      </span>
                    )}
                  </h3>
                  <div className="grid grid-cols-4 gap-2 sm:grid-cols-6 lg:grid-cols-8">
                    {timeSlots.map((time) => {
                      const isLunch = isLunchTime(time);
                      return (
                        <button
                          key={time}
                          type="button"
                          disabled={isLunch}
                          onClick={() => setSelectedTime(time)}
                          className={cn(
                            "cursor-pointer rounded-lg border px-3 py-2.5 text-sm font-medium transition-all duration-200",
                            isLunch
                              ? "cursor-not-allowed border-border/30 bg-surface/50 text-secondary/40 line-through"
                              : selectedTime === time
                                ? "border-accent bg-accent text-white"
                                : "border-border/50 bg-white text-primary hover:border-accent/50 hover:shadow-sm"
                          )}
                        >
                          {time}
                        </button>
                      );
                    })}
                  </div>
                  {!isSaturday && (
                    <p className="mt-3 text-xs text-secondary">
                      * 13:00~14:00 점심시간
                    </p>
                  )}
                </motion.div>
              )}

              {/* Navigation buttons */}
              <div className="mt-8 flex justify-between">
                <Button variant="secondary" onClick={goPrev}>
                  이전
                </Button>
                <Button
                  onClick={goNext}
                  className={cn(
                    (!selectedDate || !selectedTime) &&
                      "pointer-events-none opacity-40"
                  )}
                >
                  다음
                </Button>
              </div>
            </motion.div>
          )}

          {/* ====================================================== */}
          {/*  Step 4: Patient info                                    */}
          {/* ====================================================== */}
          {step === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="mb-6 text-lg font-bold text-primary">
                예약자 정보를 입력해 주세요
              </h2>

              <div className="mx-auto max-w-lg space-y-5">
                {/* Name */}
                <div>
                  <label
                    htmlFor="res-name"
                    className="mb-1.5 block text-sm font-semibold text-primary"
                  >
                    이름 <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="res-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, name: e.target.value }))
                    }
                    className="h-12 w-full rounded-lg border border-border px-4 text-sm outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent"
                    placeholder="홍길동"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="res-phone"
                    className="mb-1.5 block text-sm font-semibold text-primary"
                  >
                    연락처 <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="res-phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        phone: e.target.value,
                      }))
                    }
                    className="h-12 w-full rounded-lg border border-border px-4 text-sm outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent"
                    placeholder="010-0000-0000"
                  />
                </div>

                {/* Symptoms */}
                <div>
                  <label
                    htmlFor="res-symptoms"
                    className="mb-1.5 block text-sm font-semibold text-primary"
                  >
                    증상 메모{" "}
                    <span className="text-xs font-normal text-secondary">
                      (선택)
                    </span>
                  </label>
                  <textarea
                    id="res-symptoms"
                    value={formData.symptoms}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        symptoms: e.target.value,
                      }))
                    }
                    rows={4}
                    className="w-full resize-none rounded-lg border border-border px-4 py-3 text-sm outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent"
                    placeholder="현재 증상이나 궁금하신 사항을 적어주세요."
                  />
                </div>

                {/* Visit type */}
                <div>
                  <span className="mb-2 block text-sm font-semibold text-primary">
                    방문 유형
                  </span>
                  <div className="flex gap-4">
                    <label
                      htmlFor="visit-first"
                      className="flex cursor-pointer items-center gap-2"
                    >
                      <input
                        id="visit-first"
                        type="radio"
                        name="visitType"
                        value="first"
                        checked={formData.visitType === "first"}
                        onChange={() =>
                          setFormData((prev) => ({
                            ...prev,
                            visitType: "first",
                          }))
                        }
                        className="h-4 w-4 accent-accent"
                      />
                      <span className="text-sm text-primary">초진</span>
                    </label>
                    <label
                      htmlFor="visit-return"
                      className="flex cursor-pointer items-center gap-2"
                    >
                      <input
                        id="visit-return"
                        type="radio"
                        name="visitType"
                        value="return"
                        checked={formData.visitType === "return"}
                        onChange={() =>
                          setFormData((prev) => ({
                            ...prev,
                            visitType: "return",
                          }))
                        }
                        className="h-4 w-4 accent-accent"
                      />
                      <span className="text-sm text-primary">재진</span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Navigation buttons */}
              <div className="mx-auto mt-8 flex max-w-lg justify-between">
                <Button variant="secondary" onClick={goPrev}>
                  이전
                </Button>
                <Button
                  onClick={handleComplete}
                  className={cn(
                    (!formData.name.trim() || !formData.phone.trim()) &&
                      "pointer-events-none opacity-40"
                  )}
                >
                  예약 완료
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </div>
  );
}
