import { Navigation } from "@/components/landing/navigation";
import { HeroSection } from "@/components/landing/hero-section";
import { ProblemSection } from "@/components/landing/problem-section";
import { HowItWorks } from "@/components/landing/how-it-works";
import { AIAssistantSection } from "@/components/landing/ai-assistant-section";
import { CalendarPreviewSection } from "@/components/landing/calendar-preview-section";
import { FeaturesSection } from "@/components/landing/features-section";
import { WaitlistSection } from "@/components/landing/waitlist-section";
import { Footer } from "@/components/landing/footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <ProblemSection />
        <HowItWorks />
        <AIAssistantSection />
        <CalendarPreviewSection />
        <FeaturesSection />
        <WaitlistSection />
      </main>
      <Footer />
    </>
  );
}
