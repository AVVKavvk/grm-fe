import { Button } from "@/components/ui/button";
import {
  Clock,
  MapPin,
  Users,
  Medal,
  Calendar,
  CheckCircle,
  Trophy,
  Zap,
  Utensils,
  Music,
  ChevronDown,
  AlertTriangle,
  ExternalLink,
  Waypoints,
  Info,
} from "lucide-react";
import { lazy, Suspense, useState } from "react";
import CountdownTimer from "./CountdownTimer";
import carbLoading from "@/assets/carb-loading.jpeg";
import {
  GetRegisterButton,
  GetRegisterButtonForEvent,
} from "@/lib/localstorage";

const EventsSection = () => {
  // const { date, day, month, year } = getLastDateOfMonth();
  const date = "2026-12-13T23:59:59";

  const heroEvents = [
    {
      name: "Carb Loading Fiesta",
      description: "Pre-race celebration & feast",
      date: "Dec 12, 2026",
      icon: Utensils,
      gradient: "from-orange-500 to-red-600",
      link: "#carb-loading",
    },
    {
      name: "The Marathon Experience",
      description: "5 distances to choose from",
      date: "Dec 13, 2026",
      icon: Trophy,
      gradient: "from-blue-500 to-purple-600",
      link: "#marathon",
    },
  ];

  const marathonEvents = [
    {
      name: "Full Marathon",
      distance: "42 KM",
      startTime: "04:00 AM",
      cutOffTime: "6 Hours",
      price: "₹3,440",
      nextPrice: "₹3,510",
      participants: "18+ years",
      description: "The ultimate challenge along Goa's most scenic route",
      features: [
        "Finisher Medal",
        "Tech T-Shirt",
        "Digital Certificate",
        "Electronic Timing Chip",
        "Nourishment",
      ],
      googleMapRoute:
        "https://www.google.com/maps/d/u/0/viewer?mid=1nVQQTK0cUgL-puPU3SHTGs8m4ArJbYE&ll=15.396277154068239%2C73.88005525&z=14",
      routes: {
        live: "https://www.relive.com/view/vXOnkYEpj56/explore",
        google:
          "https://www.google.com/maps/d/u/0/viewer?mid=1nVQQTK0cUgL-puPU3SHTGs8m4ArJbYE&ll=15.396277154068239%2C73.88005525&z=14",
        interactive: "https://www.youtube.com/watch?v=gXYogR1xdT8",
      },
      disclaimer: "It needs previous running experience.",
    },
    {
      name: "20 Miler",
      distance: "32 KM",
      startTime: "04:30 AM",
      cutOffTime: "5 Hours",
      price: "₹3,170",

      nextPrice: "₹3,150",
      participants: "18+ years",
      description:
        "A challenging distance for experienced runners on most scenic route",
      features: [
        "Finisher Medal",
        "Tech T-Shirt",
        "Digital Certificate",
        "Electronic Timing Chip",
        "Nourishment",
      ],
      googleMapRoute:
        "https://www.google.com/maps/d/u/0/viewer?mid=1L-psiHymBmmVFVbHTen5zpMRUPcU33E&ll=15.396293653242111%2C73.880219&z=14",
      routes: {
        live: "https://www.relive.com/view/vXvLoVk4P1q/explore",
        google:
          "https://www.google.com/maps/d/u/0/viewer?mid=1L-psiHymBmmVFVbHTen5zpMRUPcU33E&ll=15.396293653242111%2C73.880219&z=14",
        interactive: "https://www.youtube.com/watch?v=byyMELsLt5I",
      },
      disclaimer: null,
    },
    {
      name: "Half Marathon",
      distance: "21 KM",
      startTime: "05:30 AM",
      cutOffTime: "3.5 Hours",
      price: "₹2,650",

      nextPrice: "₹2,610",
      participants: "18+ years",
      description: "Perfect for intermediate runners seeking a challenge",
      features: [
        "Finisher Medal",
        "Tech T-Shirt",
        "Digital Certificate",
        "Electronic Timing Chip",
        "Nourishment",
      ],
      googleMapRoute:
        "https://www.google.com/maps/d/u/0/viewer?mid=1bpKbKdIYLmpWemuFpnGHYBsqHHrJVXU&ll=15.396277154068239%2C73.88005525&z=14",
      routes: {
        live: "https://www.relive.com/view/v1vjYWzMZJq/explore",
        google:
          "https://www.google.com/maps/d/u/0/viewer?mid=1bpKbKdIYLmpWemuFpnGHYBsqHHrJVXU&ll=15.396277154068239%2C73.88005525&z=14",
        interactive: "https://www.youtube.com/watch?v=zgG2EMtSzkg",
      },
      disclaimer: null,
    },
    {
      name: "10K Run",
      distance: "10 KM",
      startTime: "06:15 AM",
      cutOffTime: "90 Minutes",
      price: "₹1,750",

      nextPrice: "₹1,665",
      participants: "16+ years",
      description: "Ideal for beginners and fitness enthusiasts",
      features: [
        "Finisher Medal",
        "Event T-Shirt",
        "Digital Certificate",
        "Electronic Timing Chip",
        "Nourishment",
      ],
      googleMapRoute:
        "https://www.google.com/maps/d/u/0/viewer?mid=1A_TQR5XbxyTLIklbS0qBXfoggiQIbBQ&ll=15.400010543611549%2C73.85704799999998&z=15",
      routes: {
        live: "https://www.relive.com/view/vrqDNVJLALO/explore",
        google:
          "https://www.google.com/maps/d/u/0/viewer?mid=1A_TQR5XbxyTLIklbS0qBXfoggiQIbBQ&ll=15.400010543611549%2C73.85704799999998&z=15",
        interactive: "https://www.youtube.com/watch?v=sfZmuPeRRRY",
      },
      disclaimer: null,
    },
    {
      name: "5K Fun Run",
      distance: "5 KM",
      startTime: "08:00 AM",
      cutOffTime: "60 Minutes",
      price: "₹750",

      nextPrice: "₹720",
      participants: "Open for all",
      description: "Family-friendly run with stunning coastal views",
      features: [
        "Participation Medal",
        "Event T-Shirt",
        "Digital Certificate",
        "Nourishment",
      ],
      googleMapRoute:
        "https://www.google.com/maps/d/u/0/viewer?mid=1h0quijIubF_ySNyBheS50udviL9tQJel&ll=15.398721335979129%2C73.85153924973754&z=16",
      routes: {
        live: "https://www.google.com/maps/d/u/0/viewer?mid=1h0quijIubF_ySNyBheS50udviL9tQJel&ll=15.398721335979129%2C73.85153924973754&z=16",
        google:
          "https://www.google.com/maps/d/u/0/viewer?mid=1h0quijIubF_ySNyBheS50udviL9tQJel&ll=15.398721335979129%2C73.85153924973754&z=16",
        interactive: "https://www.youtube.com/watch?v=KLipDTrRznw",
      },
      disclaimer: null,
    },
  ];

  const scrollToSection = (id) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  const handleImageClick = (image) => {
    window.open(image, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="events" className="font-['Open_Sans']">
      {/* ── SECURE YOUR SPOT ── #0B1E3D navy */}
      <div className="bg-[#0B1E3D] py-28 md:py-36 px-[5vw] text-center">
        <div className="inline-flex items-center gap-2 bg-[#F47B20]/15 text-[#FF9748] px-5 py-2 rounded-full mb-6 border border-[#F47B20]/30">
          <AlertTriangle className="w-4 h-4" />
          <span className="font-['Montserrat'] font-bold text-xs tracking-[0.18em] uppercase">
            Festival Ends Soon!
          </span>
        </div>

        <h2 className="font-['Montserrat'] font-extrabold text-4xl md:text-5xl text-white mb-5">
          Secure Your <span className="text-[#F47B20]">Spot Today</span>
        </h2>

        <p className="text-white/75 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
          Join the tech revolution in marathon running. Festival offer pricing
          ends soon – don't miss out on this incredible opportunity.
        </p>

        <div className=" border border-white/10 rounded-2xl p-6 max-w-xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Clock className="w-5 h-5 text-[#F47B20]" />
            <span className="font-['Montserrat'] font-bold text-[#F47B20] tracking-wide">
              Festival Ends In:
            </span>
          </div>
          <CountdownTimer targetDate={date} />
        </div>
      </div>

      {/* ── TWO EPIC EVENTS ── #122B55 navy-mid */}
      <div className=" py-10 px-[5vw]">
        <div className="max-w-[1200px] mx-auto">
          {/* <div className="text-center mb-12">
            <h1 className="font-['Montserrat'] font-black text-5xl md:text-6xl text-white mb-4">
              Two <span className="text-[#F47B20]">Epic Events</span>
            </h1>
            <p className="text-white/75 text-xl max-w-2xl mx-auto leading-relaxed">
              A complete marathon weekend celebration combining world-class
              racing with unforgettable Goan experiences
            </p>
          </div> */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {heroEvents.map((event, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(event.link)}
                className="group bg-[#1A3A6B] border border-white/10 rounded-2xl p-10 text-center cursor-pointer hover:border-[#2E8FD8] hover:bg-[#1A3A6B]/80 hover:-translate-y-1 transition-all duration-300"
              >
                <event.icon className="w-12 h-12 mx-auto mb-4 text-[#5BB8F5]" />
                <h3 className="font-['Montserrat'] font-bold text-2xl text-white mb-2">
                  {event.name}
                </h3>
                <p className="text-white/65 mb-2">{event.description}</p>
                <div className="flex items-center justify-center gap-2 text-sm text-white/50 mb-4">
                  <Calendar className="w-4 h-4" />
                  <span>{event.date}</span>
                </div>
                <ChevronDown className="w-5 h-5 mx-auto text-[#2E8FD8] animate-bounce" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── CARB LOADING FIESTA ── #122B55 navy-mid */}
      <div
        id="carb-loading"
        className="bg-[#122B55] py-20 px-[5vw] scroll-mt-20"
      >
        <div className="max-w-[1200px] mx-auto">
          <div className=" p-8 md:p-10">
            {/* Header */}
            <div className="flex items-start gap-4 mb-6">
              <span className="text-4xl">🍝</span>
              <div>
                <h2 className="font-['Montserrat'] font-extrabold text-3xl text-white mb-2">
                  Carb Loading Fiesta
                </h2>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2 text-white/45 text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>December 13, 2027</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/45 text-sm">
                    <Clock className="w-4 h-4" />
                    <span>6:00 PM – 9:00 PM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col md:flex-row gap-8 mb-8">
              <img
                src={carbLoading}
                onClick={() => handleImageClick(carbLoading)}
                alt="Carb Loading Fiesta"
                className="h-[280px] object-contain rounded-xl border border-white/10 cursor-pointer"
              />
              <div className="flex-1">
                <p className="text-white/75 leading-relaxed mb-6">
                  Kick off your marathon weekend with a feast designed to power
                  your run. The Carb-Loading Fiesta brings together Goa's top
                  chefs, artisanal bakers, and nutrition experts, serving up
                  hearty pastas, wood-fired breads, fresh salads, and
                  high-energy dishes crafted for performance.
                </p>
                <p className="font-['Montserrat'] font-bold text-[10px] tracking-[0.16em] uppercase text-[#5BB8F5] mb-3">
                  Event Highlights
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {[
                    "Gourmet pasta",
                    "Traditional Goan carb-rich dishes",
                    "Nutritionist-approved menu",
                    "Live DJ & entertainment",
                    "Meet fellow runners",
                    "Race day briefing by experts",
                    "Craco's nutrition workshop",
                  ].map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[#5BB8F5] mt-0.5 flex-shrink-0" />
                      <span className="text-white/75 text-sm">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Stay tuned pill */}
            <div className="text-center pt-2">
              <div className="inline-flex items-center gap-2 bg-[#F47B20]/10 border border-[#F47B20]/25 text-[#FF9748] rounded-full px-6 py-2.5 text-sm font-['Montserrat'] font-semibold">
                <span>✨</span>
                Stay tuned for more exciting events!
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── MARATHON EXPERIENCE ── white */}
      <div id="marathon" className="bg-white py-20 px-[5vw] scroll-mt-20">
        <div className="max-w-[1200px] mx-auto">
          {/* Section heading */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#1A6FB4]/10 text-[#1A6FB4] px-4 py-2 rounded-full mb-5 border border-[#1A6FB4]/20">
              <Medal className="w-4 h-4" />
              <span className="font-['Montserrat'] font-bold text-xs tracking-[0.16em] uppercase">
                Multiple Categories
              </span>
            </div>
            <h2 className="font-['Montserrat'] font-extrabold text-4xl md:text-5xl text-[#0B1E3D] mb-4">
              The Marathon <span className="text-[#F47B20]">Experience</span>
            </h2>
            <p className="text-gray-500 text-xl max-w-2xl mx-auto leading-relaxed">
              From seasoned marathoners to first-time runners, we have the
              perfect distance for every fitness level and running goal.
            </p>
          </div>

          {/* Marathon cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {marathonEvents.map((event, index) => (
              <div
                key={index}
                // Added flex, flex-col, and h-full to make the card a flex container
                className="bg-white border border-[#1A6FB4]/15 rounded-2xl p-8 shadow-[0_4px_16px_rgba(11,30,61,0.06)] hover:shadow-[0_20px_40px_rgba(11,30,61,0.10)] transition-shadow duration-300 relative overflow-hidden flex flex-col h-full"
              >
                {/* Decorative circle */}
                <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-[#1A6FB4]/05 pointer-events-none" />

                {/* Added flex-grow wrapper so this section takes up all available vertical space */}
                <div className="flex-grow">
                  {/* Name + price */}
                  <div className="flex justify-between items-start mb-6 relative">
                    <div>
                      <h3 className="font-['Montserrat'] font-bold text-xl text-[#0B1E3D] mb-1">
                        {event.name}
                      </h3>
                      <div className="font-['Montserrat'] font-black text-3xl text-[#1A6FB4]">
                        {event.distance}
                      </div>
                    </div>
                    <div className="font-['Montserrat'] font-black text-2xl text-[#F47B20] text-right">
                      {event.price}
                    </div>
                  </div>

                  <p className="text-gray-500 text-sm leading-relaxed mb-6">
                    {event.description}
                  </p>

                  {/* Meta */}
                  <div className="grid grid-cols-2 gap-2 mb-6 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[#1A6FB4]" />
                      <span>Start: {event.startTime}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[#1A6FB4]" />
                      <span>Cut-off: {event.cutOffTime}</span>
                    </div>
                    <div className="flex items-center gap-2 col-span-2">
                      <Users className="w-4 h-4 text-[#1A6FB4]" />
                      <span>{event.participants}</span>
                    </div>
                    <div className="col-span-2">
                      <a
                        href="https://maps.app.goo.gl/GyFPPhbDonhNZRaD9"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 hover:text-[#1A6FB4] transition-colors"
                      >
                        <MapPin className="w-4 h-4 text-[#1A6FB4]" />
                        <span>Chicalim Panchayat Ground</span>
                      </a>
                    </div>
                    <div className="col-span-2">
                      <a
                        href={(event?.googleMapRoute as string) || "#"}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 hover:text-[#1A6FB4] transition-colors"
                      >
                        <Waypoints className="w-4 h-4 text-[#1A6FB4]" />
                        <span>View Route</span>
                      </a>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <p className="font-['Montserrat'] font-bold text-[10px] tracking-[0.16em] uppercase text-[#0B1E3D] mb-2">
                      What's Included
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {event.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-[#1A6FB4]/10 text-[#1A6FB4] px-3 py-1 rounded-full border border-[#1A6FB4]/15 font-semibold"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Grouped Button and Disclaimer at the bottom with mt-auto */}
                <div className="mt-auto flex flex-col gap-4 pt-4">
                  {event.disclaimer && (
                    <div className="bg-[#F47B20]/05 border border-[#F47B20]/20 rounded-lg px-4 py-3 mb-5 flex gap-3 items-start">
                      <AlertTriangle className="w-4 h-4 text-[#F47B20] flex-shrink-0 mt-0.5" />
                      <div className="text-sm text-amber-900 leading-relaxed">
                        {event.disclaimer}
                      </div>
                    </div>
                  )}
                </div>
                <div>{GetRegisterButtonForEvent(event.name as string)}</div>
              </div>
            ))}
          </div>

          {/* ── LIMITED SEATS CTA ── navy inside white section */}
          <div id="recovery-rave" className="mt-16 scroll-mt-20">
            <section className="bg-[#0B1E3D] rounded-2xl py-14 px-8 text-center border border-[#1A3A6B]">
              <div className="max-w-2xl mx-auto">
                <h3 className="font-['Montserrat'] font-black text-3xl md:text-4xl text-white mb-4">
                  Limited Seats Available!
                </h3>
                <p className="text-white/75 text-lg leading-relaxed mb-8">
                  The{" "}
                  <span className="text-[#5BB8F5] font-semibold">
                    Carb-Loading Fiesta
                  </span>{" "}
                  has limited capacity. With{" "}
                  <span className="text-[#FF9748] font-bold">7,500</span>{" "}
                  runners expected this year, we can only accommodate{" "}
                  <span className="text-[#FF9748] font-bold">1,500</span> at
                  these exclusive events. Book your festival pass now to secure
                  your spot and make the most of your marathon weekend.
                </p>
                <GetRegisterButton />
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* ── IMPORTANT INFORMATION ── #0B1E3D navy */}
      <div className="bg-[#0B1E3D] py-16 px-[5vw]">
        <div className="max-w-[1200px] mx-auto">
          <div className="bg-[#122B55] border border-white/10 rounded-2xl p-8 md:p-10">
            <h3 className="font-['Montserrat'] font-bold text-lg text-white text-center tracking-wide mb-8">
              Important Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  label: "Age Requirements",
                  content: (
                    <>
                      42K, 32K, 21K: 18+ years
                      <br />
                      10K: 16+ years
                      <br />
                      5K: All ages (under 12 needs adult supervision)
                    </>
                  ),
                },
                {
                  label: "Start & Finish Location",
                  content: (
                    <>
                      All races start and end at
                      <br />
                      Chicalim Panchayat Ground
                      <br />
                      Easy access with parking facilities
                    </>
                  ),
                },
              ].map(({ label, content }, i) => (
                <div key={i}>
                  <p className="font-['Montserrat'] font-bold text-[10px] tracking-[0.16em] uppercase text-[#5BB8F5] mb-2">
                    {label}
                  </p>
                  <p className="text-white/65 text-sm leading-loose">
                    {content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
