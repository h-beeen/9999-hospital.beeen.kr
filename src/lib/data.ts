import type { Department, Doctor, Stat, ProcessStep, FAQ, TimeSlot } from "@/types";

export const DEPARTMENTS: Department[] = [
  {
    number: "01",
    titleEn: "INTERNAL MEDICINE",
    titleKo: "내과",
    category: "internal",
    description:
      "내과 전반의 질환에 대한 정확한 진단과\n체계적인 치료를 제공합니다.",
    icon: "stethoscope",
    image: "/images/dept-internal.jpg",
  },
  {
    number: "02",
    titleEn: "ORTHOPEDICS",
    titleKo: "정형외과",
    category: "orthopedics",
    description:
      "근골격계 질환의 비수술적 치료부터\n수술적 치료까지 종합적으로 진료합니다.",
    icon: "bone",
    image: "/images/dept-orthopedics.jpg",
  },
  {
    number: "03",
    titleEn: "DERMATOLOGY",
    titleKo: "피부과",
    category: "dermatology",
    description:
      "최신 레이저 장비와 전문 의료진이\n피부 건강과 아름다움을 함께 케어합니다.",
    icon: "skin",
    image: "/images/dept-dermatology.jpg",
  },
  {
    number: "04",
    titleEn: "FAMILY MEDICINE",
    titleKo: "가정의학과",
    category: "family",
    description:
      "건강검진부터 만성질환 관리까지\n온 가족의 건강을 책임집니다.",
    icon: "family",
    image: "/images/dept-family.jpg",
  },
];

export const DOCTORS: Doctor[] = [
  {
    id: 1,
    name: "김민수",
    title: "원장",
    specialty: "내과 전문의",
    description: "서울대학교 의과대학 졸업\n내과 전문의 취득\n전) 서울대학교병원 내과 전임의",
    image: "/images/doctor-01.jpg",
  },
  {
    id: 2,
    name: "이지영",
    title: "부원장",
    specialty: "정형외과 전문의",
    description: "연세대학교 의과대학 졸업\n정형외과 전문의 취득\n전) 세브란스병원 정형외과 전임의",
    image: "/images/doctor-02.jpg",
  },
  {
    id: 3,
    name: "박서현",
    title: "과장",
    specialty: "피부과 전문의",
    description: "고려대학교 의과대학 졸업\n피부과 전문의 취득\n전) 고려대학교병원 피부과 전임의",
    image: "/images/doctor-03.jpg",
  },
  {
    id: 4,
    name: "정우진",
    title: "과장",
    specialty: "가정의학과 전문의",
    description: "성균관대학교 의과대학 졸업\n가정의학과 전문의 취득\n전) 삼성서울병원 가정의학과 전임의",
    image: "/images/doctor-04.jpg",
  },
];

export const STATS: Stat[] = [
  { value: 20, suffix: "+", label: "진료 경력 (년)" },
  { value: 50000, suffix: "+", label: "연간 진료 환자" },
  { value: 99, suffix: "%", label: "환자 만족도" },
  { value: 4, suffix: "개", label: "전문 진료과목" },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "온라인 예약",
    description: "웹사이트 또는 전화로\n편리하게 예약합니다.",
  },
  {
    number: "02",
    title: "접수 & 문진",
    description: "내원 후 접수 및\n사전 문진을 진행합니다.",
  },
  {
    number: "03",
    title: "진료 & 검사",
    description: "전문의 진료 및\n필요 시 정밀검사를 시행합니다.",
  },
  {
    number: "04",
    title: "치료 & 관리",
    description: "맞춤 치료 계획 수립 및\n사후 관리를 제공합니다.",
  },
];

export const OPERATING_HOURS: TimeSlot[] = [
  { day: "평일", hours: "09:00 - 18:00" },
  { day: "토요일", hours: "09:00 - 13:00" },
  { day: "일요일 / 공휴일", hours: "휴진" },
  { day: "점심시간", hours: "13:00 - 14:00" },
];

export const FAQS: FAQ[] = [
  {
    question: "예약 없이 방문 진료가 가능한가요?",
    answer: "네, 예약 없이 방문하셔도 진료를 받으실 수 있습니다. 다만, 예약 환자가 우선이므로 대기 시간이 발생할 수 있습니다.",
  },
  {
    question: "주차장이 있나요?",
    answer: "건물 지하 1-2층에 무료 주차장이 마련되어 있습니다. 진료 시 최대 3시간까지 무료 주차가 가능합니다.",
  },
  {
    question: "건강검진은 어떻게 예약하나요?",
    answer: "온라인 예약 또는 전화(02-1234-5678)로 건강검진을 예약하실 수 있습니다. 검진 전 주의사항은 예약 시 안내드립니다.",
  },
  {
    question: "진료비 수납은 어떤 방법으로 가능한가요?",
    answer: "현금, 신용카드, 체크카드 모두 결제 가능합니다. 실손보험 청구를 위한 서류도 즉시 발급해 드립니다.",
  },
];
