import { cn } from "@/lib/utils";

export default function SectionLabel({
  text,
  light,
}: {
  text: string;
  light?: boolean;
}) {
  return (
    <span
      className={cn(
        "inline-block text-xs font-medium uppercase tracking-[0.08em] md:text-sm",
        light ? "text-white/70" : "text-secondary"
      )}
    >
      {text}
    </span>
  );
}
