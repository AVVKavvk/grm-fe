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
      <section className="bg-gradient-to-t from-red-300 to-red-200 text-red-400 py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Don’t Miss Out!
          </h2>
          <p className="text-lg md:text-xl mb-6">
            Limited slots available! We can accommodate only{" "}
            <span className="font-semibold">1,500</span> of the{" "}
            <span className="font-semibold">10,000</span> runners expected this
            year. Secure your spot now and be part of this unforgettable
            experience.
          </p>
          <GetRegisterButton />
        </div>
      </section>
    </div>
  );
};

export default Index;
