import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

const DEPT_BG: Record<string, string> = {
  internal: "bg-blue-600/80",
  orthopedics: "bg-emerald-600/80",
  dermatology: "bg-purple-600/80",
  family: "bg-amber-600/80",
};

export function deptBadgeClass(category: string) {
  return cn(
    "inline-block rounded px-2 py-0.5 text-[11px] font-semibold text-white",
    DEPT_BG[category] ?? "bg-white/20"
  );
}
