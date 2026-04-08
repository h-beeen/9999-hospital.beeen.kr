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
  department: string;
}

export interface DoctorDetail extends Doctor {
  education: string[];
  career: string[];
  specialties: string[];
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

export interface DepartmentDetail extends Department {
  fullDescription: string;
  specialtyAreas: string[];
  diseases: Disease[];
  doctorIds: number[];
  colorTheme: string;
}

export interface Disease {
  name: string;
  description: string;
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

export interface QuickLink {
  label: string;
  href: string;
  icon: string;
}

export interface TransportInfo {
  type: "subway" | "bus" | "car" | "parking";
  label: string;
  icon: string;
  items: string[];
}
