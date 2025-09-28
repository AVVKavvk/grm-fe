import { Button } from "@/components/ui/button";
import {
  Clock,
  MapPin,
  Users,
  Medal,
  Calendar,
  CheckCircle,
} from "lucide-react";
import { lazy, Suspense } from "react";
const Festival = lazy(() => import("@/components/FestivalSection"));
const EventsSection = () => {
  const marathonEvents = [
    {
      name: "Full Marathon",
      distance: "42 KM",
      startTime: "04:00 AM",
      cutOffTime: "6 Hours",
      price: "₹2,676",
      originalPrice: "₹2,973",
      participants: "Open for all",
      description: "The ultimate challenge along Goa's most scenic route",
      features: [
        "Finisher Medal",
        "Tech T-Shirt",
        "Digital Certificate",
        "GPS Tracking",
      ],
    },
    {
      name: "20 Miler",
      distance: "32 KM",
      startTime: "04:30 AM",
      cutOffTime: "5 Hours",
      price: "₹2,556",
      originalPrice: "₹2,840",
      participants: "Open for all",
      description: "A challenging distance for experienced runners",
      features: [
        "Finisher Medal",
        "Tech T-Shirt",
        "Digital Certificate",
        "GPS Tracking",
      ],
    },
    {
      name: "Half Marathon",
      distance: "21 KM",
      startTime: "05:30 AM",
      cutOffTime: "3.5 Hours",
      price: "₹2,155",
      originalPrice: "₹2,395",
      participants: "Open for all",
      description: "Perfect for intermediate runners seeking a challenge",
      features: [
        "Finisher Medal",
        "Tech T-Shirt",
        "Digital Certificate",
        "Live Analytics",
      ],
    },
    {
      name: "10K Run",
      distance: "10 KM",
      startTime: "06:15 AM",
      cutOffTime: "90 Minutes",
      price: "₹1,491",
      originalPrice: "₹1,657",
      participants: "Open for all",
      description: "Ideal for beginners and fitness enthusiasts",
      features: ["Finisher Medal", "Event T-Shirt", "Digital Certificate"],
    },
    {
      name: "5K Fun Run",
      distance: "5 KM",
      startTime: "08:00 AM",
      cutOffTime: "60 Minutes",
      price: "₹630",
      originalPrice: "₹700",
      participants: "Open for all",
      description: "Family-friendly run with stunning coastal views",
      features: ["Participation Medal", "Event T-Shirt", "Digital Certificate"],
    },
  ];

  const specialEvents = [
    {
      name: "Carb Loading Party",
      date: "December 14, 2024",
      time: "7:00 PM - 11:00 PM",
      location: "TBD - Beachfront Venue, North Goa",
      price: "₹1,500",
      description:
        "The ultimate pre-race celebration with traditional Goan feast and pasta party",
      highlights: [
        "Gourmet pasta station with 8 varieties",
        "Traditional Goan carb-rich dishes",
        "Nutritionist-approved menu",
        "Live DJ & entertainment",
        "Meet fellow runners",
        "Race day briefing by experts",
        "Craco's nutrition workshop",
      ],
      icon: "🍝",
    },
    {
      name: "Recovery Rave",
      date: "December 15, 2024",
      time: "8:00 PM - 2:00 AM",
      location: "TBD - Beach Club, Anjuna",
      price: "₹1,500",
      description:
        "Epic post-marathon celebration with world-class DJs and recovery treatments",
      highlights: [
        "International & local DJs",
        "Professional massage stations",
        "Recovery smoothie bar",
        "Celebration cocktails",
        "Dance floor on the beach",
        "Winner recognition ceremony",
        "Exclusive marathon finisher perks",
      ],
      icon: "🎉",
    },
  ];

  return (
    <section id="events" className="py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full mb-6">
            <Medal className="w-4 h-4" />
            <span className="text-sm font-medium">Multiple Categories</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Choose Your
            <span className="bg-gradient-sunset bg-clip-text text-transparent">
              {" "}
              Challenge
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From seasoned marathoners to first-time runners, we have the perfect
            distance for every fitness level and running goal.
          </p>
        </div>

        {/* Marathon Events Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {marathonEvents.map((event, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-xl border border-border shadow-soft hover:shadow-medium transition-smooth group relative overflow-hidden"
            >
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-primary/5 rounded-full -translate-y-16 translate-x-16"></div>

              <div className="relative">
                {/* Header */}
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
                    <div className="text-sm text-muted-foreground line-through">
                      {event.originalPrice}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {event.description}
                </p>

                {/* Event Details */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary" />
                    <span className="text-sm">Start: {event.startTime}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary" />
                    <span className="text-sm">Cut-off: {event.cutOffTime}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-primary" />
                    <span className="text-sm">{event.participants}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span className="text-sm">Chicalim Start</span>
                  </div>
                </div>

                {/* Features */}
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

                {/* CTA */}
                <Button
                  variant={index === 0 ? "hero" : "default"}
                  className="w-full group-hover:scale-[1.02] transition-transform"
                >
                  Register for {event.name}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Special Events */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              Revolutionary Marathon
              <span className="bg-gradient-sunset bg-clip-text text-transparent">
                {" "}
                Experience
              </span>
            </h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We're not just hosting a marathon - we're creating a 3-day
              celebration of running, technology, and Goan culture that will
              transform how you experience racing.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {specialEvents.map((event, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-xl border border-border shadow-soft hover:shadow-medium transition-smooth group relative overflow-hidden"
              >
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-primary/5 rounded-full -translate-y-12 translate-x-12"></div>

                <div className="relative">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="text-4xl">{event.icon}</div>
                    <div className="flex-1">
                      <h4 className="text-2xl font-bold text-foreground mb-2">
                        {event.name}
                      </h4>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-accent">
                        {event.price}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        per person
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {event.description}
                  </p>

                  {/* Highlights */}
                  <div className="mb-6">
                    <div className="text-sm font-semibold text-foreground mb-3">
                      Event Highlights:
                    </div>
                    <div className="grid grid-cols-1 gap-2">
                      {event.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-xs text-muted-foreground">
                            {highlight}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <Button
                    variant="default"
                    className="w-full group-hover:scale-[1.02] transition-transform"
                  >
                    Register for {event.name}
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Party Combo Package */}
          <div className="bg-gradient-ocean p-8 rounded-2xl shadow-strong text-center">
            <div className="max-w-4xl mx-auto">
              <h4 className="text-3xl font-bold text-primary-foreground mb-4">
                🎊 Party Package Deal 🎊
              </h4>
              <p className="text-primary-foreground/90 text-lg mb-6">
                Join both celebrations: Carb Loading Party + Recovery Rave
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="bg-primary-foreground/10 p-4 rounded-lg">
                  <div className="text-lg font-bold text-primary-foreground">
                    Individual Price
                  </div>
                  <div className="text-primary-foreground/80 text-sm">
                    Both Events Separately
                  </div>
                  <div className="text-2xl font-bold text-primary-foreground line-through">
                    ₹3,000
                  </div>
                </div>
                <div className="bg-primary-foreground/20 p-4 rounded-lg border-2 border-primary-foreground/30">
                  <div className="text-lg font-bold text-primary-foreground">
                    Combo Price
                  </div>
                  <div className="text-primary-foreground/80 text-sm">
                    Save ₹850!
                  </div>
                  <div className="text-3xl font-bold text-primary-foreground">
                    ₹2,150
                  </div>
                </div>
                <div className="bg-primary-foreground/10 p-4 rounded-lg">
                  <div className="text-lg font-bold text-primary-foreground">
                    Early Bird
                  </div>
                  <div className="text-primary-foreground/80 text-sm">
                    Until Nov 15th
                  </div>
                  <div className="text-2xl font-bold text-primary-foreground">
                    ₹1,800
                  </div>
                </div>
              </div>
              <Button
                variant="hero"
                size="lg"
                className="bg-background text-foreground hover:bg-background/90"
              >
                Get Party Package Deal
              </Button>
              <p className="text-primary-foreground/70 text-sm mt-4">
                Perfect for the complete marathon weekend experience
              </p>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="bg-muted/50 p-8 rounded-xl border border-border">
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
      <Suspense fallback={<div>Loading...</div>}>
        <Festival />
      </Suspense>
    </section>
  );
};

export default EventsSection;
