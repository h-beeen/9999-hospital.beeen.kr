import type { Metadata } from "next";
import "./globals.css";
import GNB from "@/components/layout/GNB";
import Footer from "@/components/layout/Footer";
import FloatingCTA from "@/components/layout/FloatingCTA";
import ScrollToTop from "@/components/layout/ScrollToTop";

export const metadata: Metadata = {
  title: "Hospital Demo | 내과, 정형외과, 피부과, 가정의학과",
  description: "환자 중심의 정확한 진단과 따뜻한 치료로 신뢰받는 의료 서비스를 제공합니다.",
  openGraph: {
    title: "Hospital Demo | 병원 웹사이트 데모",
    description: "환자 중심의 정확한 진단과 따뜻한 치료로 신뢰받는 의료 서비스를 제공합니다.",
    type: "website",
  },
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
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
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
