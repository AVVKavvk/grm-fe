import Hero from "@/components/Hero";
// import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import SocialMediaSection from "@/components/SocialMediaSection";
// import FestivalHighlights from "@/components/FestivalHighlights";
// import Sponsorship from "@/components/Sponsorship";
import RaceRouteSection from "@/components/RaceRouteSection";
import StoryLegacySection from "@/components/StoryLegacySection";
import ExperienceStrip from "@/components/ExperienceStrip";
import HomePrizesSection from "@/components/HomePrizesSection";
// import RaceDayTimeline from "@/components/RaceDayTimeline";
// import HomeFAQSection from "@/components/HomeFAQSection";
import { TrustBar } from "@/components/TrustBar";
import RaceCategories from "@/components/RaceCategories";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-['Montserrat']">
      <Hero />
      <TrustBar />
      <RaceCategories />
      <RaceRouteSection />
      <HomePrizesSection />
      {/*  <FestivalHighlights /> */}
      {/* <AboutSection /> */}
      <ExperienceStrip />
      <TestimonialsSection />
      {/* <AnalyticsSection /> */}
      <SocialMediaSection />
      {/* <RaceDayTimeline /> */}
      {/* <HomeFAQSection /> */}
      <StoryLegacySection />
      {/* <Sponsorship /> */}
    </div>
  );
};

export default Index;
