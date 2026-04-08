import type { NavItem, SocialLink } from "@/types";

export const NAV_ITEMS: NavItem[] = [
  { label: "진료과목", href: "#departments" },
  { label: "의료진", href: "#doctors" },
  { label: "오시는 길", href: "#location" },
  { label: "예약", href: "/reservation" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/hospital-demo/",
    icon: "instagram",
  },
  {
    label: "Blog",
    href: "https://blog.naver.com/hospital-demo",
    icon: "blog",
  },
];

export const HOSPITAL = {
  name: "Hospital Demo",
  nameKo: "빈랩 병원 데모",
  phone: "02-1234-5678",
  phoneFull: "02-1234-5678",
  email: "info@hospital.beeen.kr",
  address: "서울특별시 강남구 테헤란로 123",
  tagline: "환자 중심의 신뢰받는 의료 서비스",
} as const;
