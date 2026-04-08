import type { Department, DepartmentDetail, Doctor, DoctorDetail, Stat, ProcessStep, FAQ, TimeSlot } from "@/types";

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

export const DEPARTMENT_DETAILS: DepartmentDetail[] = [
  {
    ...DEPARTMENTS[0],
    fullDescription:
      "내과는 신체 내부 장기의 질환을 진단하고 치료하는 진료과입니다. 소화기, 호흡기, 순환기, 내분비 등 다양한 분야의 질환에 대해 체계적인 진료를 제공하며, 만성질환 관리와 건강검진을 통한 예방 의학에도 힘쓰고 있습니다.",
    specialtyAreas: [
      "소화기 내과 (위·대장 질환)",
      "호흡기 내과 (기관지·폐 질환)",
      "순환기 내과 (심장·혈관 질환)",
      "내분비 내과 (당뇨·갑상선)",
      "건강검진 및 예방 의학",
    ],
    diseases: [
      { name: "고혈압", description: "혈압을 적정 수준으로 관리하여 합병증을 예방합니다." },
      { name: "당뇨병", description: "혈당 조절과 생활습관 개선을 통한 체계적 관리를 제공합니다." },
      { name: "위장질환", description: "위염, 역류성 식도염 등 소화기 질환을 진단·치료합니다." },
      { name: "고지혈증", description: "혈중 콜레스테롤 관리로 심혈관 질환을 예방합니다." },
    ],
    doctorIds: [1],
    colorTheme: "blue",
  },
  {
    ...DEPARTMENTS[1],
    fullDescription:
      "정형외과는 뼈, 관절, 근육, 인대, 힘줄 등 근골격계 전반의 질환을 진료합니다. 비수술적 보존 치료부터 수술적 치료까지 환자 상태에 맞는 최적의 치료 방법을 제시하며, 스포츠 손상과 퇴행성 질환 모두를 전문적으로 다룹니다.",
    specialtyAreas: [
      "관절 질환 (무릎·어깨·고관절)",
      "척추 질환 (디스크·협착증)",
      "스포츠 손상 및 재활",
      "골절 및 외상 치료",
      "수부·족부 질환",
    ],
    diseases: [
      { name: "허리디스크", description: "추간판 탈출로 인한 통증을 비수술·수술적으로 치료합니다." },
      { name: "무릎 관절염", description: "퇴행성 관절 변화에 대한 단계적 치료를 제공합니다." },
      { name: "오십견", description: "어깨 관절 운동 제한과 통증을 체계적으로 치료합니다." },
      { name: "스포츠 손상", description: "인대 손상, 근육 파열 등 운동 관련 손상을 치료합니다." },
    ],
    doctorIds: [2],
    colorTheme: "emerald",
  },
  {
    ...DEPARTMENTS[2],
    fullDescription:
      "피부과는 피부, 모발, 손톱 등에 발생하는 다양한 질환을 진단하고 치료합니다. 최신 레이저 장비와 전문 의료진이 피부 질환 치료뿐 아니라 미용 피부 시술까지 제공하여 피부 건강과 아름다움을 함께 케어합니다.",
    specialtyAreas: [
      "일반 피부 질환 (습진·두드러기)",
      "여드름·흉터 치료",
      "아토피 피부염",
      "레이저 시술 (색소·혈관)",
      "탈모 진료 및 치료",
    ],
    diseases: [
      { name: "아토피 피부염", description: "만성적인 피부 염증에 대한 맞춤 치료를 제공합니다." },
      { name: "여드름", description: "원인 분석 후 약물·레이저 등 복합 치료를 시행합니다." },
      { name: "건선", description: "재발 방지를 위한 장기적 관리 프로그램을 운영합니다." },
      { name: "대상포진", description: "조기 진단과 신속한 치료로 후유증을 최소화합니다." },
    ],
    doctorIds: [3],
    colorTheme: "purple",
  },
  {
    ...DEPARTMENTS[3],
    fullDescription:
      "가정의학과는 나이와 성별에 관계없이 가족 구성원 모두의 건강을 포괄적으로 관리하는 진료과입니다. 건강검진, 만성질환 관리, 예방접종, 비만 관리 등 1차 의료의 중심 역할을 수행합니다.",
    specialtyAreas: [
      "종합 건강검진",
      "만성질환 통합 관리",
      "예방접종 및 건강상담",
      "비만·대사증후군 관리",
      "금연 클리닉",
    ],
    diseases: [
      { name: "비만", description: "체계적인 식이·운동 프로그램으로 건강한 체중 관리를 돕습니다." },
      { name: "만성피로", description: "원인을 정밀 분석하여 맞춤형 치료 계획을 수립합니다." },
      { name: "대사증후군", description: "복합적인 대사 이상을 통합적으로 관리합니다." },
      { name: "갱년기 증후군", description: "호르몬 변화에 따른 증상 완화 치료를 제공합니다." },
    ],
    doctorIds: [4],
    colorTheme: "amber",
  },
];

export function getDepartmentByCategory(category: string): DepartmentDetail | undefined {
  return DEPARTMENT_DETAILS.find((d) => d.category === category);
}

export const DOCTORS: Doctor[] = [
  {
    id: 1,
    name: "김민수",
    title: "원장",
    specialty: "내과 전문의",
    description: "서울대학교 의과대학 졸업\n내과 전문의 취득\n전) 서울대학교병원 내과 전임의",
    image: "/images/doctor-01.jpg",
    department: "internal",
  },
  {
    id: 2,
    name: "이지영",
    title: "부원장",
    specialty: "정형외과 전문의",
    description: "연세대학교 의과대학 졸업\n정형외과 전문의 취득\n전) 세브란스병원 정형외과 전임의",
    image: "/images/doctor-02.jpg",
    department: "orthopedics",
  },
  {
    id: 3,
    name: "박서현",
    title: "과장",
    specialty: "피부과 전문의",
    description: "고려대학교 의과대학 졸업\n피부과 전문의 취득\n전) 고려대학교병원 피부과 전임의",
    image: "/images/doctor-03.jpg",
    department: "dermatology",
  },
  {
    id: 4,
    name: "정우진",
    title: "과장",
    specialty: "가정의학과 전문의",
    description: "성균관대학교 의과대학 졸업\n가정의학과 전문의 취득\n전) 삼성서울병원 가정의학과 전임의",
    image: "/images/doctor-04.jpg",
    department: "family",
  },
];

export const DOCTOR_DETAILS: DoctorDetail[] = [
  {
    ...DOCTORS[0],
    education: ["서울대학교 의과대학 졸업", "서울대학교 대학원 내과학 석사"],
    career: ["서울대학교병원 내과 인턴", "서울대학교병원 내과 레지던트", "서울대학교병원 내과 전임의", "내과 전문의 취득", "현) 빈랩 병원 데모 원장"],
    specialties: ["고혈압", "당뇨병", "고지혈증", "위장질환", "건강검진"],
  },
  {
    ...DOCTORS[1],
    education: ["연세대학교 의과대학 졸업", "연세대학교 대학원 정형외과학 석사"],
    career: ["세브란스병원 정형외과 인턴", "세브란스병원 정형외과 레지던트", "세브란스병원 정형외과 전임의", "정형외과 전문의 취득", "현) 빈랩 병원 데모 부원장"],
    specialties: ["허리디스크", "무릎 관절염", "오십견", "스포츠 손상", "골절 치료"],
  },
  {
    ...DOCTORS[2],
    education: ["고려대학교 의과대학 졸업", "고려대학교 대학원 피부과학 석사"],
    career: ["고려대학교병원 피부과 인턴", "고려대학교병원 피부과 레지던트", "고려대학교병원 피부과 전임의", "피부과 전문의 취득", "현) 빈랩 병원 데모 과장"],
    specialties: ["아토피 피부염", "여드름", "건선", "레이저 시술", "탈모 치료"],
  },
  {
    ...DOCTORS[3],
    education: ["성균관대학교 의과대학 졸업", "성균관대학교 대학원 가정의학 석사"],
    career: ["삼성서울병원 가정의학과 인턴", "삼성서울병원 가정의학과 레지던트", "삼성서울병원 가정의학과 전임의", "가정의학과 전문의 취득", "현) 빈랩 병원 데모 과장"],
    specialties: ["건강검진", "만성피로", "비만", "대사증후군", "예방접종"],
  },
];

export function getDoctorById(id: number): DoctorDetail | undefined {
  return DOCTOR_DETAILS.find((d) => d.id === id);
}

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
