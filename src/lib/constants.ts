import type { NavItem, SocialLink, QuickLink, TransportInfo } from "@/types";

export const NAV_ITEMS: NavItem[] = [
  { label: "진료과목", href: "/departments" },
  { label: "의료진", href: "/doctors" },
  { label: "오시는 길", href: "/location" },
  { label: "예약", href: "/reservation" },
];

export const QUICK_LINKS: QuickLink[] = [
  { label: "진료 예약", href: "/reservation", icon: "calendar" },
  { label: "진료과 안내", href: "/departments", icon: "stethoscope" },
  { label: "의료진 찾기", href: "/doctors", icon: "user" },
  { label: "오시는 길", href: "/location", icon: "map" },
];

export const TRANSPORT_INFO: TransportInfo[] = [
  {
    type: "subway",
    label: "지하철",
    icon: "subway",
    items: [
      "2호선 강남역 3번 출구 도보 5분",
      "신분당선 강남역 5번 출구 도보 3분",
    ],
  },
  {
    type: "bus",
    label: "버스",
    icon: "bus",
    items: [
      "간선버스: 140, 144, 145, 340, 420",
      "지선버스: 3412, 4412",
      "\"테헤란로\" 정류장 하차 후 도보 2분",
    ],
  },
  {
    type: "car",
    label: "자가용",
    icon: "car",
    items: [
      "강남대로에서 테헤란로 방면 우회전",
      "네비게이션 \"빈랩 병원 데모\" 검색",
    ],
  },
  {
    type: "parking",
    label: "주차 안내",
    icon: "parking",
    items: [
      "건물 지하 1~2층 주차장 이용",
      "진료 환자 최대 3시간 무료 주차",
      "주차 요금: 10분당 1,000원",
    ],
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: "Instagram",
    href: "#", // TODO: 실제 Instagram URL로 교체 필요
    icon: "instagram",
  },
  {
    label: "Blog",
    href: "#", // TODO: 실제 네이버 블로그 URL로 교체 필요
    icon: "blog",
  },
];

export const HOSPITAL = {
  name: "Hospital Demo",
  nameKo: "빈랩 병원 데모",
  phone: "010-4212-8243",
  phoneFull: "010-4212-8243",
  email: "dev.beeen@kakao.com",
  address: "서울특별시 강남구 테헤란로 123",
  tagline: "환자 중심의 신뢰받는 의료 서비스",
} as const;
