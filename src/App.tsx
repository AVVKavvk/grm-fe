import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Header from "@/components/Header";
import { lazy, Suspense, useEffect, useState } from "react";
import Loader from "./components/Loader";

const Technology = lazy(() => import("@/components/TechnologySection"));
const Events = lazy(() => import("@/components/EventsSection"));
const Memories = lazy(() => import("@/components/MemoriesSection"));
const Registration = lazy(() => import("@/components/RegistrationSection"));
const EnhancedSponsors = lazy(
  () => import("@/components/EnhancedSponsorsSection")
);
const Shop = lazy(() => import("@/components/ShopSection"));
const ContactForms = lazy(() => import("@/components/ContactFormsSection"));
const Footer = lazy(() => import("@/components/Footer"));
const ChatBot = lazy(() => import("@/components/ChatBot"));
const PricingFooter = lazy(() => import("@/components/PricingFooter"));

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

  return (
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Header />
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
          path="/memories"
          element={
            <Suspense fallback={<Loader />}>
              <Memories />
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
        <Route path="*" element={<NotFound />} />
      </Routes>

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
