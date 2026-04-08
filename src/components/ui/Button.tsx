import { cn } from "@/lib/utils";
import Link from "next/link";

type Variant = "primary" | "secondary" | "ghost" | "dark-primary" | "dark-secondary" | "dark-secondary-inverted";
type Size = "sm" | "md" | "lg";

interface ButtonProps {
  variant?: Variant;
  size?: Size;
  href?: string;
  external?: boolean;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-accent text-white hover:bg-accent-dark",
  secondary:
    "bg-transparent text-primary border border-primary hover:bg-accent hover:text-white hover:border-accent",
  ghost:
    "bg-transparent text-secondary hover:text-primary hover:underline underline-offset-4",
  "dark-primary":
    "bg-accent text-white hover:bg-accent-dark",
  "dark-secondary":
    "bg-transparent text-white border border-white/30 hover:bg-white hover:text-primary",
  "dark-secondary-inverted":
    "bg-white text-primary border border-white hover:bg-accent hover:text-white hover:border-accent",
};

const sizeStyles: Record<Size, string> = {
  sm: "h-9 px-4 text-[13px]",
  md: "h-11 px-6 text-[15px]",
  lg: "h-[52px] px-8 text-base",
};

export default function Button({
  variant = "primary",
  size = "md",
  href,
  external,
  children,
  className,
  onClick,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-[var(--radius-sm)] font-semibold",
    "transition-all duration-300 ease-[var(--ease-out)]",
    "active:scale-[0.98] min-h-[44px] min-w-[44px]",
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
