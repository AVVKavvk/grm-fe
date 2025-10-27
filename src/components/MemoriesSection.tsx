import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState, useMemo, useCallback } from "react";
import { Camera, X, ChevronLeft, ChevronRight, Loader2 } from "lucide-react";
import { useGalleryStore } from "@/store/galleryStore";

const MemoriesSection = () => {
  const [selectedYear, setSelectedYear] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [lastFetchTime, setLastFetchTime] = useState(null);
  const { allImages, getAllImages } = useGalleryStore();

  const fetchImages = useCallback(async () => {
    const now = Date.now();
    const fifteenMinutes = 15 * 60 * 1000;

    // Check if we need to fetch (no last fetch or more than 15 minutes passed)
    if (!lastFetchTime || now - lastFetchTime > fifteenMinutes) {
      setLoading(true);
      await getAllImages();
      setLastFetchTime(now);
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, [lastFetchTime, getAllImages]);

  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

  const yearlyData = [
    {
      year: 2024,
      theme: "Tech Revolution",
      participants: 8500,
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

  // Memoize images by year to avoid recalculation
  const imagesByYear = useMemo(() => {
    if (!allImages) return {};

    const grouped = {};
    allImages.forEach((img) => {
      const year = img.year;
      if (!grouped[year]) {
        grouped[year] = [];
      }
      grouped[year].push(img.metadata.url);
    });

    return grouped;
  }, [allImages]);

  // Merge yearly data with backend images - memoized
  const mergedYearlyData = useMemo(() => {
    return yearlyData.map((year) => ({
      ...year,
      images: imagesByYear[year.year.toString()] || [],
    }));
  }, [imagesByYear]);

  const openGallery = (year) => {
    setSelectedYear(year);
    setCurrentImageIndex(0);
  };

  const closeGallery = () => {
    setSelectedYear(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedYear && selectedYear.images.length > 0) {
      setCurrentImageIndex((prev) =>
        prev === selectedYear.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedYear && selectedYear.images.length > 0) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedYear.images.length - 1 : prev - 1
      );
    }
  };

  if (loading) {
    return (
      <section className="py-24 bg-gradient-to-b from-background to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="text-center">
              <Loader2 className="w-12 h-12 animate-spin text-primary mx-auto mb-4" />
              <p className="text-muted-foreground">Loading memories...</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Marathon Memories
            </span>
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            Relive the incredible moments from 15 years of the Goa River
            Marathon
          </p>
        </div>

        {/* Yearly Timeline */}
        <div className="space-y-12 mb-16">
          {Array.from(
            { length: Math.ceil(mergedYearlyData.length / 5) },
            (_, rowIndex) => (
              <div
                key={rowIndex}
                className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4"
              >
                {mergedYearlyData
                  .slice(rowIndex * 5, (rowIndex + 1) * 5)
                  .map((year) => (
                    <Card
                      key={year.year}
                      className="group hover:shadow-lg transition-all duration-300 overflow-hidden"
                    >
                      <div className="relative">
                        <img
                          src={
                            year.images.length > 0
                              ? year.images[0]
                              : "/placeholder.svg"
                          }
                          alt={`${year.year} Marathon`}
                          className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-2 left-2">
                          <Badge className="bg-primary text-primary-foreground font-bold text-sm px-2 py-1">
                            {year.year}
                          </Badge>
                        </div>
                        {year.images.length > 0 && (
                          <div className="absolute top-2 right-2">
                            <Badge variant="secondary" className="text-xs">
                              {year.images.length} photos
                            </Badge>
                          </div>
                        )}
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
                          onClick={() => openGallery(year)}
                          disabled={year.images.length === 0}
                        >
                          {year.images.length > 0
                            ? "View Gallery"
                            : "Coming Soon"}
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
          <Card className="inline-block p-8 bg-gradient-to-br from-blue-600 to-cyan-500 shadow-xl">
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

      {/* Image Gallery Modal */}
      {selectedYear && selectedYear.images.length > 0 && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 text-white hover:bg-white/20"
            onClick={closeGallery}
          >
            <X className="w-6 h-6" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 text-white hover:bg-white/20"
            onClick={prevImage}
          >
            <ChevronLeft className="w-8 h-8" />
          </Button>

          <div className="max-w-5xl w-full">
            <div className="text-center mb-4">
              <h3 className="text-2xl font-bold text-white mb-2">
                {selectedYear.year} - {selectedYear.theme}
              </h3>
              <p className="text-white/80">
                Photo {currentImageIndex + 1} of {selectedYear.images.length}
              </p>
            </div>

            <img
              src={selectedYear.images[currentImageIndex]}
              alt={`${selectedYear.year} Marathon Memory ${
                currentImageIndex + 1
              }`}
              className="w-full h-auto max-h-[70vh] object-contain rounded-lg"
            />

            {/* Thumbnail Strip */}
            <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
              {selectedYear.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`flex-shrink-0 w-20 h-20 rounded border-2 overflow-hidden ${
                    idx === currentImageIndex
                      ? "border-white"
                      : "border-transparent opacity-60"
                  }`}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 text-white hover:bg-white/20"
            onClick={nextImage}
          >
            <ChevronRight className="w-8 h-8" />
          </Button>
        </div>
      )}
    </section>
  );
};

export default MemoriesSection;
