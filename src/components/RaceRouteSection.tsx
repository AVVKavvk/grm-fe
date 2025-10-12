import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, Flag, TreePine, Waves, Award } from "lucide-react";
import raceRouteImage from "@/assets/map.png";
import startLineImage from "@/assets/race-start-vasco-port.jpg";
import coastalImage from "@/assets/race-coastal-highway.jpg";
import villageImage from "@/assets/race-village-route.jpg";
import finishImage from "@/assets/race-finish-bogmalo.jpg";

const RaceRouteSection = () => {
  const routeDetails = [
    {
      phase: "Start - Port Heritage",
      location: "Vasco da Gama Sports Complex",
      distance: "0-5 KM",
      time: "4:00 AM Start",
      description: "Historic port views with maritime atmosphere",
      icon: <Flag className="w-5 h-5" />,
      image: startLineImage,
      highlights: ["Historic port", "Maritime heritage", "Dawn start"],
    },
    {
      phase: "Village Trail",
      location: "Traditional Goan Villages",
      distance: "5-15 KM",
      time: "Sunrise Run",
      description: "Portuguese colonial architecture & local culture",
      icon: <TreePine className="w-5 h-5" />,
      image: villageImage,
      highlights: [
        "Colonial architecture",
        "Local communities",
        "Cultural immersion",
      ],
    },
    {
      phase: "Coastal Highway",
      location: "Arabian Sea Coastline",
      distance: "15-35 KM",
      time: "Morning Light",
      description: "Panoramic ocean views with refreshing sea breeze",
      icon: <Waves className="w-5 h-5" />,
      image: coastalImage,
      highlights: ["Ocean panoramas", "Sea breeze", "Scenic highways"],
    },
  ];

  const courseSpecs = [
    {
      label: "Total Distance",
      value: "42.2 KM",
      icon: <Award className="w-4 h-4" />,
    },
    {
      label: "Start Time",
      value: "4:00 AM",
      icon: <Clock className="w-4 h-4" />,
    },
    {
      label: "Cut-off Time",
      value: "5 Hours",
      icon: <Clock className="w-4 h-4" />,
    },
    // {
    //   label: "Elevation Gain",
    //   value: "150m",
    //   icon: <MapPin className="w-4 h-4" />,
    // },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Scenic Marathon Route + What Awaits You
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            42.2km journey from historic Vasco port to pristine Bogmalo Beach
          </p>
        </div> */}

        {/* Course Specifications */}
        {/* <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          {courseSpecs.map((spec, index) => (
            <div
              key={index}
              className="bg-card p-4 rounded-lg text-center border"
            >
              <div className="text-primary mb-2 flex justify-center">
                {spec.icon}
              </div>
              <div className="font-bold text-foreground">{spec.value}</div>
              <div className="text-sm text-muted-foreground">{spec.label}</div>
            </div>
          ))}
        </div> */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {routeDetails.map((phase, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-medium transition-all group"
            >
              <div className="relative">
                <img
                  src={phase.image}
                  alt={phase.phase}
                  className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2 left-2">
                  <div className="bg-primary text-primary-foreground p-1.5 rounded-full">
                    {phase.icon}
                  </div>
                </div>
                <div className="absolute top-2 right-2">
                  <div className="bg-background/90 text-foreground px-2 py-1 rounded text-xs font-bold">
                    {phase.distance}
                  </div>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-sm mb-1">{phase.phase}</h3>
                <p className="text-primary text-xs font-semibold mb-1">
                  {phase.location}
                </p>
                <p className="text-muted-foreground text-xs mb-3">
                  {phase.description}
                </p>
                <div className="flex flex-wrap gap-1">
                  {phase.highlights.map((highlight, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-accent/10 text-accent px-1.5 py-0.5 rounded"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-10">
          <a
            href="https://www.google.com/maps/d/u/0/viewer?mid=1nVQQTK0cUgL-puPU3SHTGs8m4ArJbYE&ll=15.396277154068239%2C73.88005525&z=14"
            target="_blank"
            rel="noopener noreferrer"
            className="block relative group"
          >
            <img
              src="https://skfgoarivermarathon.com/images/42-Km-Route-map.jpg?v=0"
              alt="SKF Goa River Marathon Route Map"
              className="w-full  object-cover rounded group-hover:shadow-glow transition-smooth"
            />
            {/* Overlay with "View Interactive Map" */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-smooth rounded-xl flex items-center justify-center">
              <div className="text-white text-center">
                <svg
                  className="w-12 h-12 mx-auto mb-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                  />
                </svg>
                <span className="text-lg font-semibold">
                  View Interactive Map
                </span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default RaceRouteSection;
