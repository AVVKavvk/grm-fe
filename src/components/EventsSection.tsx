import { Button } from "@/components/ui/button";
import {
  Clock,
  MapPin,
  Users,
  Medal,
  Calendar,
  CheckCircle,
  Trophy,
  Utensils,
  ChevronDown,
  AlertTriangle,
  Waypoints,
} from "lucide-react";
import carbLoading from "@/assets/carb-loading.jpeg";
import { GetRegisterButtonForEvent } from "@/lib/localstorage";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const EventsSection = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const heroEvents = [
    {
      name: "The Marathon Experience",
      description: "5 distances to choose from",
      date: "Dec 13, 2026",
      icon: Trophy,
      gradient: "from-blue-500 to-purple-600",
      link: "#marathon",
    },
    // {
    //   name: "Carb Loading Fiesta",
    //   description: "Pre-race celebration & feast",
    //   date: "Dec 12, 2026",
    //   icon: Utensils,
    //   gradient: "from-orange-500 to-red-600",
    //   link: "#carb-loading",
    // },
  ];

  const marathonEvents = [
    {
      name: "Full Marathon",
      distance: "42 KM",
      startTime: "04:00 AM",
      cutOffTime: "6 Hours",
      price: "₹4,000", // Updated Costing
      // nextPrice: "₹4,000",
      nextPrice: null as string | null,
      participants: "18+ years",
      description: "The ultimate challenge along Goa's most scenic route",
      isOpen: false,
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
      disclaimer: (
        <div>
          Participants must provide proof of a Full Marathon finish time of{" "}
          <strong>6 hours or less</strong> or a Half Marathon finish time of{" "}
          <strong>2 hours 45 minutes or less</strong> from a recognized event.
        </div>
      ),
    },
    {
      name: "20 Miler",
      distance: "32 KM",
      startTime: "04:30 AM",
      cutOffTime: "5 Hours",
      price: "₹3,500", // Updated Costing
      // nextPrice: "₹3,500",
      nextPrice: null as string | null,
      participants: "18+ years",
      description:
        "A challenging distance for experienced runners on most scenic route",
      isOpen: false,
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
      price: "₹3,000", // Updated Costing
      // nextPrice: "₹3,000",
      nextPrice: null as string | null,
      participants: "18+ years",
      description: "Perfect for intermediate runners seeking a challenge",
      isOpen: false,
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
      price: "₹2,000", // Updated Costing
      // nextPrice: "₹2,000",
      nextPrice: null as string | null,
      participants: "16+ years",
      description: "Ideal for beginners and fitness enthusiasts",
      isOpen: false,
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
      price: "₹1000", // Updated Costing
      nextPrice: null as string | null,
      participants: "Open for all",
      description: "Family-friendly run with stunning coastal views",
      isOpen: true,
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

  const scrollToSection = (id: string) => {
    const sectionId = id.replace("#", "");

    if (location.pathname === "/") {
      // Already on home page — just scroll
      const element = document.querySelector(id);
      element?.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      // Navigate to home with hash
      navigate(`/categories#${sectionId}`);
    }
  };
  const handleImageClick = (image: string) => {
    window.open(image, "_blank", "noopener,noreferrer");
  };

  useEffect(() => {
    if (location.hash) {
      const id = location.hash; // e.g. "#marathon"
      // Small delay to let the page render first
      setTimeout(() => {
        const element = document.querySelector(id);
        element?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  }, [location.hash]);

  return (
    <section id="events" className="font-['Open_Sans']">
      {/* ── REGISTRATION UPDATE ── #0B1E3D navy */}
      <div className="bg-[#0B1E3D] pt-28 md:pt-36 mb-10 px-[5vw] text-center">
        <div className="inline-flex items-center gap-2 bg-[#F47B20]/15 text-[#FF9748] px-5 py-2 rounded-full mb-6 border border-[#F47B20]/30">
          <AlertTriangle className="w-4 h-4" />
          <span className="font-['Montserrat'] font-bold text-xs tracking-[0.18em] uppercase">
            Registration Update
          </span>
        </div>

        <h2 className="font-['Montserrat'] font-extrabold text-4xl md:text-5xl text-white mb-5">
          Thank You, <span className="text-[#F47B20]">Runners!</span> 🙌
        </h2>

        <p className="text-white/75 text-lg max-w-2xl mx-auto mb-4 leading-relaxed">
          A big thank you to all our participants for the overwhelming response
          to Goa River Marathon 2026!
        </p>

        <p className="text-white/90 text-lg max-w-2xl mx-auto mb-4 leading-relaxed">
          Registrations for all competitive categories – 10K, 21K, 32K and 42K –
          are now <strong className="text-[#FF6B6B]">CLOSED</strong>!
        </p>

        <p className="text-white/90 text-lg max-w-2xl mx-auto mb-4 leading-relaxed">
          The <strong>5K Fun Run/Walk</strong> is still{" "}
          <strong className="text-[#4ADE80]">OPEN</strong>. Grab your spot and
          be part of the excitement!
        </p>

        <p className="font-['Montserrat'] font-bold text-sm tracking-[0.08em] uppercase text-[#F47B20] mb-2">
          See you at the starting line on December 13th!
        </p>

        {/* Countdown Timer Section Removed completely based on instructions */}
      </div>

      {/* ── TWO EPIC EVENTS ── NAVY MID (Reordered in heroEvents array) */}
      <div className=" py-10 px-[5vw]">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-1 gap-6 max-w-4xl mx-auto">
            {heroEvents.map((event, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(event.link)}
                className="group bg-[#1A3A6B] border border-white/10 rounded-2xl p-10 text-center cursor-pointer hover:border-[#2E8FD8] hover:bg-[#1A3A6B]/80 hover:-translate-y-1 transition-all duration-300 w-full"
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

      {/* ── MARATHON EXPERIENCE ── white (Moved Top) */}
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
                className="bg-white border border-[#1A6FB4]/15 rounded-2xl p-8 shadow-[0_4px_16px_rgba(11,30,61,0.06)] hover:shadow-[0_20px_40px_rgba(11,30,61,0.10)] transition-shadow duration-300 relative overflow-hidden flex flex-col h-full"
              >
                {/* Decorative circle */}
                <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-[#1A6FB4]/05 pointer-events-none" />

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
                    <div className="flex flex-col items-end">
                      <div className="font-['Montserrat'] font-black text-2xl text-[#F47B20] text-right">
                        {event.price}
                      </div>
                      <div className="font-['Montserrat'] font-black text-2xl text-[#F47B20] text-right">
                        {event.nextPrice && (
                          <span className="font-head text-[1rem] font-semibold text-[#8899aa] line-through">
                            {event.nextPrice}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-500 text-sm leading-relaxed mb-6 h-10">
                    {event.description}
                  </p>

                  {/* Meta - time/participants only */}
                  <div className="grid grid-cols-2 gap-2 mb-4 text-sm text-gray-500">
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
                  </div>

                  {/* Location + Route — pinned together, always same position */}
                  <div className="flex flex-col gap-2 mb-6">
                    <a
                      href="https://maps.app.goo.gl/GyFPPhbDonhNZRaD9"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 bg-[#0B1E3D] border border-[#1A6FB4]/30 hover:border-[#0B1E4D] hover:bg-[#0B1E4D] text-white  px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                    >
                      <MapPin className="w-4 h-4 flex-shrink-0" />
                      <span>Chicalim Panchayat Ground</span>
                    </a>

                    <a
                      href={(event?.googleMapRoute as string) || "#"}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 bg-[#F47B20]/10 border border-[#F47B20]/30 hover:border-[#F47B20] hover:bg-[#F47B20]/20 text-[#FF9748] hover:text-white px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 w-full justify-center"
                    >
                      <Waypoints className="w-4 h-4 flex-shrink-0" />
                      View Route
                    </a>
                  </div>

                  {/* Features — pushed to bottom */}
                  <div className="mt-auto mb-6">
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

                {/* Grouped Button and Disclaimer at the bottom */}
                <div className="mt-auto flex flex-col gap-4">
                  {event.disclaimer && (
                    <div className="relative group flex items-center gap-2 ">
                      <span className="text-gray-500 italic">Disclaimer</span>
                      <AlertTriangle className="w-4 h-4 text-[#F47B20] cursor-help flex-shrink-0" />
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 bg-[#1A3A6B] border border-[#F47B20]/30 rounded-lg px-3 py-2.5 text-xs text-white/80 leading-relaxed shadow-xl opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 z-10">
                        <div className="flex gap-2 items-start">
                          <AlertTriangle className="w-3 h-3 text-[#F47B20] flex-shrink-0 mt-0.5" />

                          <span>{event.disclaimer}</span>
                        </div>
                        {/* Arrow */}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#F47B20]/30" />
                      </div>
                    </div>
                  )}
                  <div>
                    {event.isOpen ? (
                      GetRegisterButtonForEvent(event.name as string)
                    ) : (
                      <button
                        type="button"
                        disabled
                        className="w-full py-3 rounded-lg bg-[#8899aa]/20 text-[#8899aa] font-['Montserrat'] font-bold text-sm tracking-[0.08em] uppercase cursor-not-allowed"
                      >
                        Registration Closed
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
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

// The commented-out "Limited Seats CTA" and "Carb Loading Fiesta" blocks from
// the original file can be pasted back here unchanged if you still want them.

export default EventsSection;
