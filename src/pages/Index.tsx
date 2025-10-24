import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import MascotSection from "@/components/MascotSection";
import RaceRouteSection from "@/components/RaceRouteSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import SocialMediaSection from "@/components/SocialMediaSection";
// import AnalyticsSection from "@/components/AnalyticsSection";
import MemorySection from "@/components/MemoriesSection";
import FestivalHighlights from "@/components/FestivalHighlights";
import { Link } from "react-router-dom";
import Sponsorship from "@/components/Sponsorship";
import { Button } from "@/components/ui/button";
import { GetRegisterButton } from "@/lib/localstorage";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <FestivalHighlights />
      <AboutSection />
      <MascotSection />
      {/* <RaceRouteSection /> */}
      {/* <MemorySection /> */}
      <TestimonialsSection />
      {/* <AnalyticsSection /> */}
      <SocialMediaSection />
      <Sponsorship />
    </div>
  );
};

export default Index;
