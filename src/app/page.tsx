import HeroSection from "@/components/sections/HeroSection";
import QuickLinksSection from "@/components/sections/QuickLinksSection";
import AboutSection from "@/components/sections/AboutSection";
import DepartmentsSection from "@/components/sections/DepartmentsSection";
import DoctorsSection from "@/components/sections/DoctorsSection";
import ProcessSection from "@/components/sections/ProcessSection";
import HoursSection from "@/components/sections/HoursSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <QuickLinksSection />
      <AboutSection />
      <DepartmentsSection />
      <DoctorsSection />
      <ProcessSection />
      <HoursSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
