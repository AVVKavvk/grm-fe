import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, Flag, TreePine, Waves, Award } from "lucide-react";
import raceRouteImage from "@/assets/race-route-phases.jpg";
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
    {
      label: "Elevation Gain",
      value: "150m",
      icon: <MapPin className="w-4 h-4" />,
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Scenic Marathon Route + What Awaits You
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            42.2km journey from historic Vasco port to pristine Bogmalo Beach
          </p>
        </div>

        {/* Course Specifications */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
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
        </div>

        <div className="mb-10">
          <img
            src={raceRouteImage}
            alt="SKF Goa River Marathon Route Map"
            className="w-full h-64 object-cover rounded-xl shadow-strong"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
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
      </div>
      <section className="relative py-16 bg-gradient-to-b from-blue-50 via-white to-blue-100">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              The Scenic Route –{" "}
              <span className="text-blue-600">A Run Like No Other</span>
            </h2>
            <p className="mt-6 text-lg text-gray-700 leading-relaxed">
              Recognised as one of the most scenic marathon routes in India, the
              Goa River Marathon winds along the Zuari River, where breathtaking
              views meet the rhythm of Goa’s culture. Every step takes you past
              riverscapes, villages, and cheering crowds that make the journey
              as rewarding as the finish.
            </p>
            <p className="mt-4 text-lg text-gray-700 leading-relaxed">
              Choose your challenge: the{" "}
              <span className="font-semibold">42K Full Marathon</span>, the
              <span className="font-semibold">
                {" "}
                32K “in-between” distance
              </span>{" "}
              — perfectly balanced between endurance and speed, the{" "}
              <span className="font-semibold">21K Half Marathon</span>, the
              <span className="font-semibold">10K Run</span>, or the{" "}
              <span className="font-semibold">5K Fun Walk</span>. Whatever your
              pace, the experience will stay with you long after you cross the
              line.
            </p>
          </div>

          {/* Festival Add-ons */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-gray-900 text-center">
              Festival Add-ons
            </h3>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {/* Card 1 */}
              <div className="flex flex-col items-center bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">
                <span className="text-4xl">🍝</span>
                <h4 className="mt-3 text-lg font-semibold text-gray-800">
                  Carb-Loading Fiesta
                </h4>
              </div>
              {/* Card 2 */}
              <div className="flex flex-col items-center bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">
                <span className="text-4xl">🎶</span>
                <h4 className="mt-3 text-lg font-semibold text-gray-800">
                  Recovery Rave
                </h4>
              </div>
              {/* Card 3 */}
              <div className="flex flex-col items-center bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">
                <span className="text-4xl">❄️</span>
                <h4 className="mt-3 text-lg font-semibold text-gray-800">
                  Ice Bath
                </h4>
              </div>
              {/* Card 4 */}
              <div className="flex flex-col items-center bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">
                <span className="text-4xl">🥁</span>
                <h4 className="mt-3 text-lg font-semibold text-gray-800">
                  Cheering Zones
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default RaceRouteSection;
