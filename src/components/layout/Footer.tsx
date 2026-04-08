import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";
import { HOSPITAL, SOCIAL_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-dark-bg text-white">
      <Container className="pt-16 pb-6">
        {/* Top row: 2 columns -- Logo left, Contact right */}
        <div className="flex flex-col gap-10 md:flex-row md:justify-between md:gap-8">
          {/* Left: Text Logo + Tagline + SNS */}
          <div>
            <Link href="/" className="relative inline-block h-8 w-28">
              <Image
                src="/images/logo-white.png"
                alt="Hospital Demo"
                fill
                className="object-contain object-left"
                sizes="112px"
              />
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-white/50">
              {HOSPITAL.tagline}
            </p>
            <div className="mt-5 flex items-center gap-3">
              {SOCIAL_LINKS.map((link) => (
                <span
                  key={link.label}
                  title="준비중"
                  className="flex h-11 w-11 cursor-default items-center justify-center rounded-full border border-white/15 text-white/30"
                  aria-label={`${link.label} (준비중)`}
                >
                  {link.icon === "instagram" ? (
                    <svg
                      className="h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  ) : (
                    <svg
                      className="h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M16.273 12.845 7.376 0H0v24h7.727V11.155L16.624 24H24V0h-7.727v12.845z" />
                    </svg>
                  )}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Contact -- right-aligned */}
          <div className="md:text-right">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.08em] text-white/40">
              Contact
            </h3>
            <address className="flex flex-col gap-3 not-italic text-sm text-white/70">
              {/* Main phone */}
              <a
                href={`tel:${HOSPITAL.phone.replace(/-/g, "")}`}
                className="transition-colors hover:text-white"
              >
                {HOSPITAL.phone}
              </a>

              {/* Email */}
              <a
                href={`mailto:${HOSPITAL.email}`}
                className="transition-colors hover:text-white"
              >
                {HOSPITAL.email}
              </a>

              {/* Address */}
              <p>{HOSPITAL.address}</p>
            </address>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-white/10 pt-6">
          <div className="flex flex-col items-center justify-between gap-3 md:flex-row">
            <p className="text-[13px] text-white/30">
              &copy; 2026 beeenLAB. All rights reserved.
            </p>
            <a
              href="https://beeen.kr"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-1.5 transition-all"
            >
              <span className="text-[13px] text-white transition-colors group-hover:text-[#0064FF]">
                Powered by
              </span>
              <span className="relative h-4 w-auto">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/logos/beeenlab-pro.png"
                  alt="beeenLAB Logo"
                  className="h-4 w-auto object-contain transition-opacity duration-200 group-hover:opacity-0"
                />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/logos/beeenlab-pro-hover.png"
                  alt="beeenLAB Logo Hover"
                  className="absolute inset-0 h-4 w-auto object-contain opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                />
              </span>
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
