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
} from "lucide-react";
import { lazy, Suspense, useState } from "react";
import CountdownTimer from "./CountdownTimer";
import getLastDateOfMonth from "@/lib/getDate";
import recoveryRave from "@/assets/recovery-rave.jpeg";
import carbLoading from "@/assets/carb-loading.jpeg";
import finishLine from "@/assets/finish-line.jpeg";
import {
  GetRegisterButton,
  GetRegisterButtonForCarbLoadingFiesta,
  GetRegisterButtonForEvent,
  GetRegisterButtonForPackageDeal,
  GetRegisterButtonForRecoveryRave,
} from "@/lib/localstorage";
import FestiveEventsBanner from "./FestiveEventsBanner";
const Festival = lazy(() => import("@/components/FestivalSection"));

const EventsSection = () => {
  // const { date, day, month, year } = getLastDateOfMonth();
  const date = "2026-12-13T23:59:59";

  const RouteDropdown = ({ routes }) => {
    const [selectedRoute, setSelectedRoute] = useState("");

    const handleRouteChange = (e) => {
      const routeType = e.target.value;
      setSelectedRoute(routeType);
      if (routeType && routes[routeType]) {
        window.open(routes[routeType], "_blank");
      }
    };

    return (
      <div className="mb-4">
        <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
          <MapPin className="w-4 h-4 text-blue-600" />
          View Route
        </label>
        <div className="relative">
          <select
            value={selectedRoute}
            onChange={handleRouteChange}
            className="w-full px-4 py-2 bg-white border-2 border-gray-200 rounded-lg appearance-none cursor-pointer hover:border-blue-400 focus:border-blue-600 focus:outline-none transition-colors text-sm"
          >
            <option value="">Select a route view...</option>
            <option value="live">Live Route</option>
            <option value="google">Google Route</option>
            <option value="interactive">Interactive Route</option>
          </select>
          <ExternalLink className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
        </div>
      </div>
    );
  };

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
    // {
    //   name: "Recovery Rave",
    //   description: "Post-race celebration party",
    //   date: "Dec 14, 2025",
    //   icon: Music,
    //   gradient: "from-green-500 to-teal-600",
    //   link: "#recovery-rave",
    // },
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
    <section id="events" className="">
      {/* Pricing Urgency Timer */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-red-500/10 text-red-600 px-4 py-2 rounded-full mb-6">
          <AlertTriangle className="w-4 h-4" />
          <span className="text-sm font-medium">Festival Ends Soon!</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Secure Your
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            {" "}
            Spot Today
          </span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
          Join the tech revolution in marathon running. Festival offer pricing
          ends soon – don’t miss out on this incredible opportunity.
        </p>

        {/* Pricing Urgency Timer */}
        <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20 p-6 rounded-xl border border-red-200 dark:border-red-800 max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Clock className="w-5 h-5 text-red-600" />
            <span className="text-lg font-bold text-red-600">
              Festival Ends In:
            </span>
          </div>
          <CountdownTimer targetDate={date} />
          {/* <div className="mt-4 text-sm text-red-600/80">
            Prices increase by ₹300–900 after {day}/{month}/{year}
          </div> */}
        </div>
      </div>
      {/* Hero Section - 3 Epic Events */}
      <div className="container mx-auto px-4 mb-24">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Two
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              {" "}
              Epic Events
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A complete marathon weekend celebration combining world-class racing
            with unforgettable Goan experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {heroEvents.map((event, index) => (
            <button
              key={index}
              onClick={() => scrollToSection(event.link)}
              className="group relative overflow-hidden rounded-2xl bg-card border border-border p-8 hover:shadow-strong transition-all duration-300 text-center cursor-pointer"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${event.gradient} opacity-5 group-hover:opacity-10 transition-opacity`}
              ></div>
              <div className="relative">
                <event.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-2xl font-bold mb-2">{event.name}</h3>
                <p className="text-muted-foreground mb-2">
                  {event.description}
                </p>
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-4">
                  <Calendar className="w-4 h-4" />
                  <span>{event.date}</span>
                </div>
                <ChevronDown className="w-5 h-5 mx-auto text-primary animate-bounce" />
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* Carb Loading Fiesta Section */}
        <div id="carb-loading" className="mb-24  scroll-mt-20">
          <div className="bg-card p-8 rounded-xl border border-border shadow-soft">
            <div className="flex items-start gap-4 mb-6">
              <div className="text-4xl">🍝</div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-foreground mb-2">
                  Carb Loading Fiesta
                </h2>
                <div className="space-y-1 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>December 12, 2026</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>6:00 PM - 9:00 PM</span>
                  </div>
                  {/* <a
                    href="https://maps.app.goo.gl/XbfczAwVL6tRzrN56"
                    target="_blank"
                    title="Location"
                  >
                    <div className="flex items-center gap-2 hover:text-blue-500">
                      <MapPin className="w-4 h-4" />
                      <span>Hotel HQ, Vasco</span>
                    </div>
                  </a> */}
                </div>
              </div>

              {/* <div className="text-right">
                <div className="text-2xl font-bold text-accent">₹750</div>
                <div className="text-xs text-muted-foreground">per person</div>
              </div> */}
            </div>

            <div className="mb-6 flex flex-col md:flex-row justify-center gap-7">
              <img
                src={carbLoading}
                onClick={() => handleImageClick(carbLoading)}
                alt="Carb Loading Fiesta"
                className="h-[300px] object-contain p-2 md:p-0 cursor-pointer rounded-md mb-4"
              />

              <div className="flex flex-col">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Kick off your marathon weekend with a feast designed to power
                  your run. The Carb-Loading Fiesta brings together Goa's top
                  chefs, artisanal bakers, and nutrition experts, serving up
                  hearty pastas, wood-fired breads, fresh salads, and
                  high-energy dishes crafted for performance.
                </p>
                <div className="mb-6">
                  <div className="text-sm font-semibold text-foreground mb-3">
                    Event Highlights:
                  </div>
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
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>
                  {/* <div className="flex items-start gap-2 mt-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground flex items-center gap-1">
                      Cash-free event* (Purchase card required)
                      <span
                        className="inline-flex items-center justify-center w-4 h-4 text-xs bg-primary/20 text-primary rounded-full cursor-help"
                        title="Includes ₹400 redeemable credits, additional purchase by reloading card/band at top-up counters."
                      >
                        i
                      </span>
                    </span>
                  </div> */}
                </div>
              </div>
            </div>

            <GetRegisterButtonForCarbLoadingFiesta />
          </div>
        </div>

        {/* Marathon Experience Section */}
        <div id="marathon" className="mb-24 scroll-mt-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full mb-6">
              <Medal className="w-4 h-4" />
              <span className="text-sm font-medium">Multiple Categories</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              The Marathon
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                {" "}
                Experience
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From seasoned marathoners to first-time runners, we have the
              perfect distance for every fitness level and running goal.
            </p>
          </div>

          {/* Marathon Events Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {marathonEvents.map((event, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-xl border border-border shadow-soft hover:shadow-medium transition-smooth group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-primary/5 rounded-full -translate-y-16 translate-x-16"></div>

                <div className="relative">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        {event.name}
                      </h3>
                      <div className="text-3xl font-bold text-primary">
                        {event.distance}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-accent">
                        {event.price}
                      </div>
                      {/* <div className="text-sm text-muted-foreground line-through">
                        {event.originalPrice}
                      </div> */}
                      {/* <div className="text-xs text-red-600 font-medium">
                        Next: {event.nextPrice} (After {day}/{month}/{year})
                      </div> */}
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {event.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-primary" />
                      <span className="text-sm">Start: {event.startTime}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-primary" />
                      <span className="text-sm">
                        Cut-off: {event.cutOffTime}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 col-span-2">
                      <Users className="w-4 h-4 text-primary" />
                      <span className="text-sm">{event.participants}</span>
                    </div>
                    <div className="flex items-center gap-2 col-span-2">
                      <a
                        href="https://maps.app.goo.gl/GyFPPhbDonhNZRaD9"
                        target="_blank"
                        title="Location"
                      >
                        <div className="flex items-center gap-2 hover:text-blue-500">
                          <MapPin className="w-4 h-4 text-primary" />
                          <span className="text-sm">
                            Chicalim Panchayat Ground
                          </span>
                        </div>
                      </a>
                    </div>
                    <div className="flex items-center gap-2 col-span-2">
                      <a
                        href={(event?.googleMapRoute as string) || "#"}
                        target="_blank"
                        title="View Route"
                      >
                        <div className="flex items-center gap-2 hover:text-blue-500">
                          <Waypoints className="w-4 h-4 text-primary" />
                          <span className="text-sm">View Route</span>
                        </div>
                      </a>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="text-sm font-semibold text-foreground mb-2">
                      What's Included:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {event.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  {/* <RouteDropdown routes={event.routes} /> */}

                  {GetRegisterButtonForEvent(event.name as string)}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recovery Rave Section */}
        <div id="recovery-rave" className="mb-16 scroll-mt-20">
          {/* <div className="bg-card p-8 rounded-xl border border-border shadow-soft">
            <div className="flex items-start gap-4 mb-6">
              <div className="text-4xl">🎉</div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-foreground mb-2">
                  Recovery Rave
                </h2>
                <div className="space-y-1 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>December 14, 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>4:00 PM - 10:00 PM</span>
                  </div>
                  <a
                    href="https://maps.app.goo.gl/qtVUskjrbXwtTNsE8"
                    title="Location"
                    target="_blank"
                  >
                    <div className="flex items-center gap-2 hover:text-blue-500">
                      <MapPin className="w-4 h-4" />
                      <span>Jubilate Outdoor Community Hall</span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-accent">₹1,500</div>
                <div className="text-xs text-muted-foreground">per person</div>
              </div>
            </div>
            <div className="mb-6 flex flex-col md:flex-row justify-center gap-7">
              <img
                src={recoveryRave}
                onClick={() => handleImageClick(recoveryRave)}
                alt="Recovery Rave"
                className="h-[300px] object-contain p-2 md:p-0 cursor-pointer rounded-md mb-4"
              />

              <div className="flex flex-col">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  When the run is done, it's time to let loose. The Recovery
                  Rave is where music meets wellness — with live DJs, dance
                  floors under the Goan sky, and a buzzing community vibe. Step
                  into the Ice Bath Zone for a cool plunge, unwind with massage
                  therapists, or stretch it out at dedicated recovery corners.
                </p>

                <div className="mb-6">
                  <div className="text-sm font-semibold text-foreground mb-3">
                    Event Highlights:
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {[
                      "International & local DJs",
                      "Professional massage stations",
                      "Recovery smoothie bar",
                      "Flavorful Cocktails",
                      "Ice Bath Zone",
                      "Food from best chefs",
                    ].map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-start gap-2 mt-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground flex items-center gap-1">
                      Cash-free event* (Purchase card required)
                      <span
                        className="inline-flex items-center justify-center w-4 h-4 text-xs bg-primary/20 text-primary rounded-full cursor-help"
                        title="Includes ₹700 redeemable credits, additional purchase by reloading card/band at top-up counters."
                      >
                        i
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <GetRegisterButtonForRecoveryRave />
          </div> */}
          <FestiveEventsBanner />

          <section className="mt-16 bg-gradient-to-t from-primary/30 to-primary/20 text-foreground py-12 px-6 rounded-2xl text-center border border-primary/30">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Limited Seats Available!
              </h3>
              <p className="text-lg md:text-xl mb-6 text-muted-foreground leading-relaxed">
                The{" "}
                <span className="font-semibold text-primary">
                  Carb-Loading Fiesta
                </span>{" "}
                have limited capacity. With{" "}
                <span className="font-bold text-red-500">7,500 </span> runners
                expected this year, we can only accommodate{" "}
                <span className="font-bold text-red-500">1,500 </span> at these
                exclusive events. Book your festival pass now to secure your
                spot and make the most of your marathon weekend.
              </p>
              <GetRegisterButton />
            </div>
          </section>

          {/* Party Combo Package */}
          {/* <div className="bg-gradient-ocean p-8 rounded-2xl shadow-strong text-center mt-8">
            <div className="max-w-4xl mx-auto">
              <h4 className="text-3xl font-bold text-primary-foreground mb-4">
                🎊 Party Package Deal 🎊
              </h4>
              <p className="text-primary-foreground/90 text-lg mb-6">
                Join celebrations: Carb Loading Fiesta
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 max-w-2xl mx-auto">
                <div className="bg-primary-foreground/10 p-6 rounded-lg">
                  <div className="text-lg font-bold text-primary-foreground">
                    Individual Price
                  </div>
                  <div className="text-primary-foreground/80 text-sm mb-2">
                    Both Events Separately
                  </div>
                  <div className="text-3xl font-bold text-primary-foreground line-through">
                    ₹2,250
                  </div>
                </div>
                <div className="bg-primary-foreground/20 p-6 rounded-lg border-2 border-primary-foreground/30">
                  <div className="text-lg font-bold text-primary-foreground">
                    Combo Price
                  </div>
                  <div className="text-primary-foreground/80 text-sm mb-2">
                    Save ₹200!
                  </div>
                  <div className="text-4xl font-bold text-primary-foreground">
                    ₹2,050
                  </div>
                </div>
              </div>
              <GetRegisterButtonForPackageDeal />
              <p className="text-primary-foreground/70 text-sm mt-4">
                Perfect for the complete marathon weekend experience
              </p>
            </div>
          </div> */}
        </div>

        {/* Additional Info */}
        <div className="bg-muted/50 p-8 rounded-xl border border-border mb-8">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">Important Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-muted-foreground">
              <div>
                <div className="font-semibold text-foreground mb-2">
                  Age Requirements
                </div>
                <div>
                  42K, 32K, 21K: 18+ years
                  <br />
                  10K: 16+ years
                  <br />
                  5K: All ages (under 12 needs adult supervision)
                </div>
              </div>
              <div>
                <div className="font-semibold text-foreground mb-2">
                  Start & Finish Location
                </div>
                <div>
                  All races start and end at
                  <br />
                  Chicalim Panchayat Ground
                  <br />
                  Easy access with parking facilities
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Suspense fallback={<div>Loading...</div>}>
        <Festival />
      </Suspense> */}
    </section>
  );
};

export default EventsSection;
