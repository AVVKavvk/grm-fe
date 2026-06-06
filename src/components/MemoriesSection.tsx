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
      year: 2025,
      theme: "Fitness Festival",
      participants: 10000,
      highlights: ["Cultural performances", "Nutrition workshops"],
      memories: 1500,
      socialPosts: 3800,
    },
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
        prev === selectedYear.images.length - 1 ? 0 : prev + 1,
      );
    }
  };

  const prevImage = () => {
    if (selectedYear && selectedYear.images.length > 0) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedYear.images.length - 1 : prev - 1,
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
    <section
      className="py-24 mt-16 md:py-16"
      style={{ backgroundColor: "#0B1E3D" }}
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2
            className="text-4xl md:text-5xl font-black mb-6"
            style={{ fontFamily: "Montserrat, sans-serif", color: "#FFFFFF" }}
          >
            Marathon <span className="text-[#F47B20]">Memories</span>
          </h2>
          <p
            className="max-w-2xl mx-auto"
            style={{
              color: "rgba(255,255,255,0.75)",
              fontFamily: "Open Sans, sans-serif",
              fontWeight: 300,
            }}
          >
            Relive the incredible moments from 15 years of the Goa River
            Marathon
          </p>
        </div>

        {/* Info Card + CTA */}
        <div className="text-center mb-16">
          <div
            className="max-w-md mx-auto rounded-2xl p-8 border mb-6"
            style={{
              backgroundColor: "#122B55",
              borderColor: "#1A3A6B",
              boxShadow: "0 4px 24px rgba(11,30,61,0.25)",
            }}
          >
            <div
              className="flex items-center justify-center gap-3 mb-4"
              style={{ color: "#5BB8F5" }}
            >
              <Camera className="w-6 h-6" />
              <span
                className="font-bold text-lg"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  color: "#FFFFFF",
                }}
              >
                How to Find Your Photos
              </span>
            </div>
            <ol
              className="text-left leading-relaxed space-y-2 list-decimal list-inside"
              style={{
                color: "rgba(255,255,255,0.75)",
                fontFamily: "Open Sans, sans-serif",
                fontWeight: 300,
              }}
            >
              <li>Click the button below to visit the photo portal</li>
              <li>
                Select{" "}
                <strong style={{ color: "#FFFFFF", fontWeight: 600 }}>
                  SKF Goa River Marathon 2025
                </strong>
              </li>
              <li>
                Search by your{" "}
                <strong style={{ color: "#FFFFFF", fontWeight: 600 }}>
                  Bib Number
                </strong>{" "}
                or upload a{" "}
                <strong style={{ color: "#FFFFFF", fontWeight: 600 }}>
                  selfie
                </strong>
              </li>
              <li>View and purchase your race photos</li>
            </ol>
          </div>

          {/* CTA Button */}
          <a
            href="https://ifinish.in/photos/searchPhotos"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-bold text-lg px-8 py-4 rounded-full transition-all duration-200 hover:scale-105"
            style={{
              fontFamily: "Montserrat, sans-serif",
              backgroundColor: "#F47B20",
              color: "#FFFFFF",
              boxShadow: "0 4px 18px rgba(244,123,32,0.40)",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#FF9748")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#F47B20")
            }
          >
            View Your Photos
          </a>
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
                    <div
                      key={year.year}
                      // Added flex, flex-col, and h-full here
                      className="group rounded-xl border overflow-hidden transition-all duration-300 flex flex-col h-full"
                      style={{
                        backgroundColor: "#122B55",
                        borderColor: "#1A3A6B",
                        boxShadow: "0 2px 12px rgba(11,30,61,0.15)",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.boxShadow =
                          "0 20px 40px rgba(11,30,61,0.35)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.boxShadow =
                          "0 2px 12px rgba(11,30,61,0.15)")
                      }
                    >
                      {/* Image */}
                      <div className="relative overflow-hidden">
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
                          <span
                            className="text-xs font-black px-2 py-1 rounded"
                            style={{
                              fontFamily: "Montserrat, sans-serif",
                              backgroundColor: "#F47B20",
                              color: "#FFFFFF",
                            }}
                          >
                            {year.year}
                          </span>
                        </div>
                        {year.images.length > 0 && (
                          <div className="absolute top-2 right-2">
                            <span
                              className="text-xs px-2 py-1 rounded"
                              style={{
                                backgroundColor: "rgba(11,30,61,0.70)",
                                color: "rgba(255,255,255,0.85)",
                              }}
                            >
                              {year.images.length} photos
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Card Content */}
                      {/* Added flex, flex-col, and flex-grow here */}
                      <div className="p-4 flex flex-col flex-grow">
                        <h3
                          className="text-base font-bold mb-1"
                          style={{
                            fontFamily: "Montserrat, sans-serif",
                            color: "#FFFFFF",
                          }}
                        >
                          {year.theme}
                        </h3>
                        <div
                          className="text-xs mb-2"
                          style={{
                            color: "rgba(255,255,255,0.45)",
                            fontFamily: "Open Sans, sans-serif",
                          }}
                        >
                          {year.participants.toLocaleString()} runners
                        </div>
                        <div className="flex flex-wrap gap-1 mb-3">
                          {year.highlights.slice(0, 2).map((highlight, idx) => (
                            <span
                              key={idx}
                              className="text-xs px-2 py-0.5 rounded-full border"
                              style={{
                                borderColor: "#1A6FB4",
                                color: "#5BB8F5",
                                fontFamily: "Open Sans, sans-serif",
                              }}
                            >
                              {highlight}
                            </span>
                          ))}
                        </div>

                        {/* Added mt-auto to push the button down */}
                        <button
                          className="w-full text-xs py-2 px-3 rounded-lg font-semibold border transition-all duration-200 disabled:opacity-40 mt-auto"
                          onClick={() => openGallery(year)}
                          disabled={year.images.length === 0}
                          style={{
                            fontFamily: "Montserrat, sans-serif",
                            backgroundColor:
                              year.images.length > 0
                                ? "#F47B20"
                                : "transparent",
                            borderColor:
                              year.images.length > 0
                                ? "#F47B20"
                                : "rgba(255,255,255,0.20)",
                            color: "#FFFFFF",
                          }}
                          onMouseEnter={(e) => {
                            if (year.images.length > 0)
                              e.currentTarget.style.backgroundColor = "#FF9748";
                          }}
                          onMouseLeave={(e) => {
                            if (year.images.length > 0)
                              e.currentTarget.style.backgroundColor = "#F47B20";
                          }}
                        >
                          {year.images.length > 0
                            ? "View Gallery"
                            : "Coming Soon"}
                        </button>
                      </div>
                    </div>
                  ))}
              </div>
            ),
          )}
        </div>
      </div>

      {/* Image Gallery Modal */}
      {selectedYear && selectedYear.images.length > 0 && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: "rgba(0,0,0,0.92)" }}
        >
          {/* Close */}
          <button
            className="absolute top-28 right-4 p-2 rounded-full transition-colors"
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.20)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.10)")
            }
            onClick={closeGallery}
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev */}
          <button
            className="absolute left-4 p-2 rounded-full transition-colors"
            style={{
              color: "#FFFFFF",
              backgroundColor: "rgba(255,255,255,0.10)",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.20)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.10)")
            }
            onClick={prevImage}
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <div className="max-w-5xl w-full">
            <div className="text-center mb-4">
              <h3
                className="text-2xl font-black mb-2"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  color: "#FFFFFF",
                }}
              >
                {selectedYear.year} — {selectedYear.theme}
              </h3>
              <p
                style={{
                  color: "rgba(255,255,255,0.60)",
                  fontFamily: "Open Sans, sans-serif",
                }}
              >
                Photo {currentImageIndex + 1} of {selectedYear.images.length}
              </p>
            </div>

            <img
              src={selectedYear.images[currentImageIndex]}
              alt={`${selectedYear.year} Marathon Memory ${currentImageIndex + 1}`}
              className="w-full h-auto max-h-[70vh] object-contain rounded-xl"
            />

            {/* Thumbnail Strip */}
            <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
              {selectedYear.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className="flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-150"
                  style={{
                    borderColor:
                      idx === currentImageIndex ? "#F47B20" : "transparent",
                    opacity: idx === currentImageIndex ? 1 : 0.55,
                  }}
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

          {/* Next */}
          <button
            className="absolute right-4 p-2 rounded-full transition-colors"
            style={{
              color: "#FFFFFF",
              backgroundColor: "rgba(255,255,255,0.10)",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.20)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.10)")
            }
            onClick={nextImage}
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>
      )}
    </section>
  );
};

export default MemoriesSection;
