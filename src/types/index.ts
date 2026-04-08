export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}

export interface Doctor {
  id: number;
  name: string;
  title: string;
  specialty: string;
  description: string;
  image: string;
}

export interface Department {
  number: string;
  titleEn: string;
  titleKo: string;
  category: string;
  description: string;
  icon: string;
  image: string;
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface TimeSlot {
  day: string;
  hours: string;
  note?: string;
}
