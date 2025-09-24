import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  Users,
  MapPin,
  Camera,
  Heart,
  TrendingUp,
} from "lucide-react";

const MemoriesSection = () => {
  const yearlyData = [
    {
      year: 2024,
      theme: "Tech Revolution",
      participants: 8500,
      image: "/placeholder.svg",
      highlights: [
        "First RFID timing",
        "Live streaming",
        "Mobile app launch",
        "GPS tracking",
      ],
      memories: 1250,
      socialPosts: 3400,
    },
    {
      year: 2023,
      theme: "Green Marathon",
      participants: 7200,
      image: "/placeholder.svg",
      highlights: [
        "Zero waste initiative",
        "Eco medals",
        "Plant-a-tree program",
        "Solar powered stations",
      ],
      memories: 980,
      socialPosts: 2800,
    },
    {
      year: 2022,
      theme: "Unity Run",
      participants: 6800,
      image: "/placeholder.svg",
      highlights: [
        "International runners",
        "Virtual participation",
        "Charity partnerships",
        "COVID protocols",
      ],
      memories: 850,
      socialPosts: 2200,
    },
    {
      year: 2021,
      theme: "Resilience Run",
      participants: 5500,
      image: "/placeholder.svg",
      highlights: [
        "COVID protocols",
        "Health screening",
        "Safe distancing",
        "Virtual medals",
      ],
      memories: 720,
      socialPosts: 1900,
    },
    {
      year: 2020,
      theme: "Virtual Connect",
      participants: 4200,
      image: "/placeholder.svg",
      highlights: [
        "First virtual marathon",
        "Mobile timing app",
        "Home celebrations",
        "Digital medals",
      ],
      memories: 650,
      socialPosts: 1500,
    },
    {
      year: 2019,
      theme: "Decade Complete",
      participants: 6500,
      image: "/placeholder.svg",
      highlights: [
        "10th anniversary",
        "International participation",
        "New 20K category",
        "Live tracking",
      ],
      memories: 890,
      socialPosts: 2100,
    },
    {
      year: 2018,
      theme: "Innovation Drive",
      participants: 5800,
      image: "/placeholder.svg",
      highlights: [
        "Digital registration",
        "Chip timing",
        "Photo finish",
        "Online results",
      ],
      memories: 750,
      socialPosts: 1800,
    },
    {
      year: 2017,
      theme: "River Heritage",
      participants: 5200,
      image: "/placeholder.svg",
      highlights: [
        "Heritage route",
        "Cultural performances",
        "Local food festival",
        "Community engagement",
      ],
      memories: 680,
      socialPosts: 1400,
    },
    {
      year: 2016,
      theme: "Fitness Focus",
      participants: 4800,
      image: "/placeholder.svg",
      highlights: [
        "Health checkups",
        "Nutrition workshops",
        "Fitness expo",
        "Training programs",
      ],
      memories: 590,
      socialPosts: 1200,
    },
    {
      year: 2015,
      theme: "Youth Power",
      participants: 4200,
      image: "/placeholder.svg",
      highlights: [
        "School participation",
        "Youth categories",
        "Scholarship program",
        "Student volunteers",
      ],
      memories: 520,
      socialPosts: 980,
    },
    {
      year: 2014,
      theme: "Community Spirit",
      participants: 3800,
      image: "/placeholder.svg",
      highlights: [
        "Local business support",
        "Village participation",
        "Cultural showcase",
        "Regional media",
      ],
      memories: 450,
      socialPosts: 750,
    },
    {
      year: 2013,
      theme: "Growth Path",
      participants: 3200,
      image: "/placeholder.svg",
      highlights: [
        "Increased categories",
        "Better organization",
        "Sponsor partnerships",
        "Media coverage",
      ],
      memories: 380,
      socialPosts: 600,
    },
    {
      year: 2012,
      theme: "Building Momentum",
      participants: 2800,
      image: "/placeholder.svg",
      highlights: [
        "Professional timing",
        "Medal ceremonies",
        "Hydration stations",
        "Safety protocols",
      ],
      memories: 320,
      socialPosts: 450,
    },
    {
      year: 2011,
      theme: "Foundation Strength",
      participants: 2200,
      image: "/placeholder.svg",
      highlights: [
        "Route optimization",
        "Volunteer training",
        "Local partnerships",
        "Basic timing",
      ],
      memories: 250,
      socialPosts: 300,
    },
    {
      year: 2010,
      theme: "The Beginning",
      participants: 1500,
      image: "/placeholder.svg",
      highlights: [
        "First marathon",
        "Vasco Sports Club initiative",
        "River route established",
        "Community support",
      ],
      memories: 180,
      socialPosts: 150,
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto px-4">
        {/* Yearly Timeline */}
        <div className="space-y-12 mb-16">
          {Array.from(
            { length: Math.ceil(yearlyData.length / 5) },
            (_, rowIndex) => (
              <div
                key={rowIndex}
                className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4"
              >
                {yearlyData
                  .slice(rowIndex * 5, (rowIndex + 1) * 5)
                  .map((year, index) => (
                    <Card
                      key={year.year}
                      className="group hover:shadow-medium transition-all duration-300 overflow-hidden"
                    >
                      <div className="relative">
                        <img
                          src={year.image}
                          alt={`${year.year} Marathon`}
                          className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-2 left-2">
                          <Badge className="bg-primary text-primary-foreground font-bold text-sm px-2 py-1">
                            {year.year}
                          </Badge>
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <h3 className="text-lg font-bold mb-1">{year.theme}</h3>
                        <div className="text-xs text-muted-foreground mb-2">
                          {year.participants.toLocaleString()} runners
                        </div>
                        <div className="space-y-1 mb-3">
                          {year.highlights.slice(0, 2).map((highlight, idx) => (
                            <Badge
                              key={idx}
                              variant="outline"
                              className="text-xs mr-1"
                            >
                              {highlight}
                            </Badge>
                          ))}
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full text-xs"
                        >
                          View Gallery
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            )
          )}
        </div>

        {/* Memory Upload CTA */}
        <div className="text-center">
          <Card className="inline-block p-8 bg-gradient-ocean shadow-glow">
            <CardContent className="p-0">
              <Camera className="w-12 h-12 text-white mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">
                Share Your Marathon Memories
              </h3>
              <p className="text-white/90 mb-6 max-w-md">
                Upload photos, videos, and stories from your marathon
                experience. Help us build the ultimate memory collection!
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button variant="secondary" size="lg">
                  Upload Memories
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-primary"
                >
                  Browse Gallery
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MemoriesSection;
