import type { Metadata, Viewport } from "next";
import "./globals.css";
import GNB from "@/components/layout/GNB";
import Footer from "@/components/layout/Footer";
import FloatingCTA from "@/components/layout/FloatingCTA";
import ScrollToTop from "@/components/layout/ScrollToTop";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#2D8CF0",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://9999-hospital.beeen.kr"),
  title: "Hospital Demo | 내과, 정형외과, 피부과, 가정의학과",
  description:
    "환자 중심의 정확한 진단과 따뜻한 치료로 신뢰받는 의료 서비스를 제공합니다. 내과, 정형외과, 피부과, 가정의학과 전문 진료.",
  keywords: [
    "병원",
    "내과",
    "정형외과",
    "피부과",
    "가정의학과",
    "진료 예약",
    "건강검진",
    "강남 병원",
    "Hospital Demo",
    "빈랩",
  ],
  icons: {
    icon: [
      { url: "/favicons/favicon.ico", sizes: "any" },
      { url: "/favicons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/favicons/apple-touch-icon.png", sizes: "180x180" },
    ],
  },
  manifest: "/favicons/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://9999-hospital.beeen.kr",
    siteName: "Hospital Demo",
    title: "Hospital Demo — 내과·정형외과·피부과·가정의학과",
    description:
      "환자 중심의 정확한 진단과 따뜻한 치료로 신뢰받는 의료 서비스를 제공합니다.",
    images: [
      {
        url: "/assets/og-image.png",
        width: 1200,
        height: 630,
        alt: "Hospital Demo — 환자 중심의 신뢰받는 의료 서비스",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hospital Demo — 환자 중심의 신뢰받는 의료 서비스",
    description:
      "내과, 정형외과, 피부과, 가정의학과 전문 진료",
    images: ["/assets/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://9999-hospital.beeen.kr",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "@id": "https://9999-hospital.beeen.kr",
  name: "Hospital Demo",
  alternateName: "빈랩 병원 데모",
  url: "https://9999-hospital.beeen.kr",
  description:
    "내과, 정형외과, 피부과, 가정의학과 전문 진료를 제공하는 병원 웹사이트 데모",
  address: {
    "@type": "PostalAddress",
    streetAddress: "테헤란로 123",
    addressLocality: "강남구",
    addressRegion: "서울특별시",
    addressCountry: "KR",
  },
  telephone: "010-4212-8243",
  email: "dev.beeen@kakao.com",
  medicalSpecialty: [
    "Internal Medicine",
    "Orthopedics",
    "Dermatology",
    "Family Medicine",
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "13:00",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="preconnect"
          href="https://cdn.jsdelivr.net"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <GNB />
        {children}
        <FloatingCTA />
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  );
}
