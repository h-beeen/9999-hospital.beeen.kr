"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { NAV_ITEMS, SOCIAL_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function GNB() {
  const scrollY = useScrollPosition();
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const scrolled = !isHome || scrollY > 50;

  // 메뉴 열림 시 스크롤 잠금
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // 라우트 변경 시 메뉴 닫기
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      setMenuOpen(false);
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 z-50 w-full transition-all duration-300",
          menuOpen
            ? "bg-transparent"
            : scrolled
              ? "bg-white/95 backdrop-blur-xl border-b border-border shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
              : "bg-transparent"
        )}
      >
        <nav
          className={cn(
            "mx-auto flex w-full max-w-[1080px] items-center justify-between px-5 transition-all duration-300 md:px-10",
            scrolled ? "h-[60px]" : "h-14 lg:h-[72px]"
          )}
        >
          {/* Text Logo */}
          <Link
            href="/"
            className={cn(
              "relative z-[80] shrink-0 text-xl font-bold tracking-tight transition-colors duration-300",
              menuOpen
                ? "text-white"
                : scrolled
                  ? "text-primary"
                  : "text-white"
            )}
          >
            Hospital Demo
          </Link>

          {/* Desktop Menu — right-aligned */}
          <ul className="ml-auto hidden items-center gap-8 lg:flex">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                {item.href.startsWith("#") ? (
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={cn(
                      "text-[15px] font-medium transition-colors",
                      scrolled
                        ? "text-primary-light hover:text-accent"
                        : "text-white/80 hover:text-white"
                    )}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    className={cn(
                      "text-[15px] font-medium transition-colors",
                      scrolled
                        ? "text-primary-light hover:text-accent"
                        : "text-white/80 hover:text-white"
                    )}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative z-[80] flex h-11 w-11 items-center justify-center lg:hidden"
            aria-label={menuOpen ? "메뉴 닫기" : "메뉴 열기"}
          >
            <div className="flex w-5 flex-col gap-[5px]">
              <span
                className={cn(
                  "block h-[1.5px] w-full transition-all duration-300 origin-center",
                  menuOpen
                    ? "rotate-45 translate-y-[6.5px] bg-white"
                    : scrolled
                      ? "bg-primary"
                      : "bg-white"
                )}
              />
              <span
                className={cn(
                  "block h-[1.5px] w-full transition-all duration-300",
                  menuOpen
                    ? "opacity-0 scale-x-0"
                    : scrolled
                      ? "bg-primary"
                      : "bg-white"
                )}
              />
              <span
                className={cn(
                  "block h-[1.5px] w-full transition-all duration-300 origin-center",
                  menuOpen
                    ? "-rotate-45 -translate-y-[6.5px] bg-white"
                    : scrolled
                      ? "bg-primary"
                      : "bg-white"
                )}
              />
            </div>
          </button>
        </nav>
      </header>

      {/* Fullscreen Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-[70] flex flex-col bg-dark-bg/95 backdrop-blur-xl transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] lg:hidden",
          menuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        )}
      >
        {/* Top bar spacer */}
        <div className="flex h-14 shrink-0 items-center justify-between px-5">
          <div className="h-8 w-28" />
        </div>

        {/* Menu Items — centered */}
        <nav className="flex flex-1 flex-col items-center justify-center gap-8 px-6">
          {NAV_ITEMS.map((item, i) =>
            item.href.startsWith("#") ? (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={cn(
                  "text-3xl font-black tracking-tight text-white/90 transition-all duration-300 hover:scale-110 hover:text-white",
                  menuOpen
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                )}
                style={{
                  transitionDelay: menuOpen ? `${100 + i * 60}ms` : "0ms",
                }}
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={cn(
                  "text-3xl font-black tracking-tight transition-all duration-300 hover:scale-110",
                  pathname === item.href
                    ? "text-accent"
                    : "text-white/90 hover:text-white",
                  menuOpen
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                )}
                style={{
                  transitionDelay: menuOpen ? `${100 + i * 60}ms` : "0ms",
                }}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* Bottom — SNS + CTA */}
        <div
          className={cn(
            "shrink-0 border-t border-white/10 px-6 py-6 transition-all duration-500",
            menuOpen
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          )}
          style={{
            transitionDelay: menuOpen
              ? `${100 + NAV_ITEMS.length * 60}ms`
              : "0ms",
          }}
        >
          <div className="mb-4 flex items-center justify-center gap-4">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
                aria-label={link.label}
              >
                {link.icon === "instagram" ? (
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                ) : (
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M16.273 12.845 7.376 0H0v24h7.727V11.155L16.624 24H24V0h-7.727v12.845z" />
                  </svg>
                )}
              </a>
            ))}
          </div>
          <a
            href="#reservation"
            onClick={(e) => handleNavClick(e, "#reservation")}
            className="flex h-[52px] w-full items-center justify-center gap-2 rounded-[var(--radius-sm)] bg-accent font-semibold text-white transition-colors active:bg-accent-dark"
          >
            {/* Calendar Icon */}
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
              />
            </svg>
            진료 예약하기
          </a>
        </div>
      </div>
    </>
  );
}
