import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import MascotSection from "@/components/MascotSection";
import RaceRouteSection from "@/components/RaceRouteSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import SocialMediaSection from "@/components/SocialMediaSection";
import AnalyticsSection from "@/components/AnalyticsSection";
import MemorySection from "@/components/MemoriesSection";
import FestivalHighlights from "@/components/FestivalHighlights";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <FestivalHighlights />
      <AboutSection />
      <MascotSection />
      <RaceRouteSection />
      <MemorySection />
      <TestimonialsSection />
      <AnalyticsSection />
      <SocialMediaSection />
    </div>
  );
};

export default Index;
