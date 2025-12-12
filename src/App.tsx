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
import AnnouncementBanner from "@/components/AnnouncementBanner";

const Technology = lazy(() => import("@/components/TechnologySection"));
const Events = lazy(() => import("@/components/EventsSection"));
const Memories = lazy(() => import("@/components/MemoriesSection"));
const Registration = lazy(() => import("@/components/RegistrationSection"));
const EnhancedSponsors = lazy(
  () => import("@/components/EnhancedSponsorsSection")
);
const Shop = lazy(() => import("@/components/ShopSection"));
const FAQ = lazy(() => import("@/components/FAQ"));
const ContactForms = lazy(() => import("@/components/ContactFormsSection"));
const Register = lazy(() => import("@/components/Register"));
const Footer = lazy(() => import("@/components/Footer"));
const ChatBot = lazy(() => import("@/components/ChatBot"));
const PricingFooter = lazy(() => import("@/components/PricingFooter"));
const TermsConditions = lazy(() => import("@/components/TermsConditions"));
const GettingThere = lazy(() => import("@/components/GettingThere"));
const Photos = lazy(() => import("@/components/Photos"));
const Feedback = lazy(() => import("@/components/Feedback"));

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
      <AnnouncementBanner />
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
            path="/events"
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
            path="/getting-there"
            element={
              <Suspense fallback={<Loader />}>
                <GettingThere />
              </Suspense>
            }
          />
          <Route
            path="/sponsors"
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
          <ChatBot />
        </Suspense>
      )}

      {!location.pathname.startsWith("/registration") && (
        <Suspense fallback={<Loader />}>
          <PricingFooter />
        </Suspense>
      )}
    </TooltipProvider>
  );
};
export default App;
