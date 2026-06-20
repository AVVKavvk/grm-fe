import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Header from "@/components/Header";
import { lazy, Suspense, useEffect, useState } from "react";
import Loader from "./components/Loader";
import ScrollToTop from "./components/ScrollToTop";
import { initGA, logPageView } from "@/lib/analytics";

const Technology = lazy(() => import("@/components/TechnologySection"));
const Events = lazy(() => import("@/components/EventsSection"));
const Memories = lazy(() => import("@/components/MemoriesSection"));
const Registration = lazy(() => import("@/components/RegistrationSection"));
const EnhancedSponsors = lazy(
  () => import("@/components/EnhancedSponsorsSection"),
);
const Shop = lazy(() => import("@/components/ShopSection"));
const FAQ = lazy(() => import("@/components/FAQ"));
const ContactForms = lazy(() => import("@/components/ContactFormsSection"));
const Register = lazy(() => import("@/components/Register"));
const Footer = lazy(() => import("@/components/Footer"));
// const ChatBot = lazy(() => import("@/components/ChatBot"));
const TermsConditions = lazy(() => import("@/components/TermsConditions"));
const GettingThere = lazy(() => import("@/components/GettingThere"));
const Photos = lazy(() => import("@/components/Photos"));
const Feedback = lazy(() => import("@/components/Feedback"));
const Prizes = lazy(() => import("@/components/Prizes"));
const Results = lazy(() => import("@/pages/Results"));

const App = () => {
  const [showPersistentComponents, setShowPersistentComponents] =
    useState(false);
  const location = useLocation();

  useEffect(() => {
    setShowPersistentComponents(false);

    const timer = setTimeout(() => {
      setShowPersistentComponents(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, [location.pathname]);
  useEffect(() => {
    // Initialize GA4 with your Measurement ID
    initGA("'G-H6YR6HD36E");
  }, []);
  useEffect(() => {
    // Track page views on route change
    logPageView();
  }, [location]);

  return (
    <TooltipProvider>
      <ScrollToTop />
      <Toaster />
      <Sonner />
      {/* <AnnouncementBanner /> */}
      <Header />
      <div className="">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route
            path="/technology"
            element={
              <Suspense fallback={<Loader />}>
                <Technology />
              </Suspense>
            }
          />
          <Route
            path="/categories"
            element={
              <Suspense fallback={<Loader />}>
                <Events />
              </Suspense>
            }
          />
          <Route
            path="/photos"
            element={
              <Suspense fallback={<Loader />}>
                <Photos />
              </Suspense>
            }
          />
          <Route
            path="/feedback"
            element={
              <Suspense fallback={<Loader />}>
                <Feedback />
              </Suspense>
            }
          />
          <Route
            path="/prizes"
            element={
              <Suspense fallback={<Loader />}>
                <Prizes />
              </Suspense>
            }
          />
          <Route
            path="/results"
            element={
              <Suspense fallback={<Loader />}>
                <Results />
              </Suspense>
            }
          />
          <Route
            path="/getting-there"
            element={
              <Suspense fallback={<Loader />}>
                <GettingThere />
              </Suspense>
            }
          />
          <Route
            path="/partners"
            element={
              <Suspense fallback={<Loader />}>
                <EnhancedSponsors />
              </Suspense>
            }
          />
          <Route
            path="/shop"
            element={
              <Suspense fallback={<Loader />}>
                <Shop />
              </Suspense>
            }
          />
          <Route
            path="/memories"
            element={
              <Suspense fallback={<Loader />}>
                <Memories />
              </Suspense>
            }
          />
          <Route
            path="/register"
            element={
              <Suspense fallback={<Loader />}>
                <Register />
              </Suspense>
            }
          />
          <Route
            path="/faq"
            element={
              <Suspense fallback={<Loader />}>
                <FAQ />
              </Suspense>
            }
          />
          <Route
            path="/registration"
            element={
              <Suspense fallback={<Loader />}>
                <Registration />
              </Suspense>
            }
          />
          <Route
            path="/contact-us"
            element={
              <Suspense fallback={<Loader />}>
                <ContactForms />
              </Suspense>
            }
          />
          <Route
            path="/term-and-conditions"
            element={
              <Suspense fallback={<Loader />}>
                <TermsConditions />
              </Suspense>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

      {showPersistentComponents && (
        <Suspense fallback={<Loader />}>
          <Footer />
          {/* <ChatBot /> */}
        </Suspense>
      )}

      {/* Fixed Bottom Mobile Register Button (Hidden on Desktop) */}
      <div className="fixed lg:hidden bottom-0 left-0 right-0 z-[500] bg-[rgba(11,30,61,0.96)] backdrop-blur-[20px] border-t border-white/10 px-[5vw] py-4 pb-6">
        <a
          href="https://ifinish.in/running/SKF_2026"
          target="_blank"
          rel="noreferrer"
          className="flex w-full items-center justify-center bg-[#F47B20] text-[0.95rem] font-bold tracking-[0.06em] uppercase px-[1.8rem] py-[1rem] rounded-[8px] text-white hover:bg-[#F47B20]/90 transition-all duration-150 shadow-[0_0_20px_rgba(244,123,32,0.3)]"
        >
          Register Now
        </a>
      </div>

      {/* {!location.pathname.startsWith("/registration") && (
        <Suspense fallback={<Loader />}>
          <PricingFooter />
        </Suspense>
      )} */}
    </TooltipProvider>
  );
};
export default App;
