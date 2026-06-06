// src =  "https://www.google.com/maps/d/embed?mid=19zpso9toitORxUXrjYfA-ZvHjEVjakc&ehbc=2E312F";
import { Bus, Hotel, Plane, Train, Car, MapPin, Sparkles } from "lucide-react";

const GettingThere = () => {
  const shuttleRouteHotels = [
    "The HQ",
    "Hotel La Paz Gardens",
    "Hotel Supreme",
    "Regenta Place, Vasco",
    "The Flora Grand",
    "Royal Altis",
  ];

  const hotels = {
    featured: [
      {
        name: "Planet Hollywood",
        content: (
          <>
            Write to{" "}
            <a
              href="mailto:ados@planethollywoodgoa.com"
              style={{ color: "#2E8FD8", fontWeight: 600 }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.textDecoration = "underline")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.textDecoration = "none")
              }
            >
              ados@planethollywoodgoa.com
            </a>{" "}
            for exciting deals during your stay in Goa
          </>
        ),
      },
      {
        name: "The Fern Kesarval Hotel",
        content: (
          <>
            Please call{" "}
            <a
              href="tel:+917796633402"
              style={{ color: "#2E8FD8", fontWeight: 600 }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.textDecoration = "underline")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.textDecoration = "none")
              }
            >
              +91-7796633402
            </a>{" "}
            or write to{" "}
            <a
              href="mailto:sales.fr.kesarval@fernhotels.com"
              style={{ color: "#2E8FD8", fontWeight: 600 }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.textDecoration = "underline")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.textDecoration = "none")
              }
            >
              sales.fr.kesarval@fernhotels.com
            </a>{" "}
            for exciting offers
          </>
        ),
      },
      {
        name: "TELES WESTEND HOTEL, VASCO DA GAMA",
        content: (
          <>
            Please call{" "}
            <a
              href="tel:+919158101122"
              style={{ color: "#2E8FD8", fontWeight: 600 }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.textDecoration = "underline")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.textDecoration = "none")
              }
            >
              +919158101122
            </a>{" "}
            for exciting offers
          </>
        ),
      },
    ],
    within5km: [
      "The HQ",
      "Hotel La Paz Gardens",
      "Vasco Residency",
      "Hotel Supreme",
      "The Tato Hotel",
      "Regenta Place, Vasco",
      "The Flora Grand",
      "Royal Altis",
      "Sanman Hotels",
      "TELES WESTEND HOTEL",
    ],
    within10km: [
      "Mushrooms, Goa",
      "Bogmalo Beach Resort",
      "Coconut Creek Resort",
      "Mariaariose",
      "Athi Resorts",
      "Stone Water's Eco Resort",
      "Devasthali",
    ],
    within20km: ["ITC Grand Goa", "Grand Hyatt Goa"],
  };

  const isOnShuttleRoute = (hotelName) =>
    shuttleRouteHotels.some(
      (shuttle) =>
        hotelName.toLowerCase().includes(shuttle.toLowerCase()) ||
        shuttle.toLowerCase().includes(hotelName.toLowerCase()),
    );

  const transportCards = [
    {
      icon: Plane,
      title: "By Air",
      iconColor: "#5BB8F5",
      lines: [
        <>
          <strong style={{ color: "#FFFFFF" }}>Dabolim Airport (GOI)</strong> is
          only 5 km from Chicalim — the nearest airport to the venue.
        </>,
        <>
          Regular flights connect Goa to all major Indian cities including
          Mumbai, Bengaluru, Delhi, and Hyderabad.
        </>,
        <>
          From the airport, reach the venue in{" "}
          <strong style={{ color: "#FFFFFF" }}>10–15 minutes</strong> by taxi or
          shuttle.
        </>,
      ],
    },
    {
      icon: Train,
      title: "By Rail",
      iconColor: "#5BB8F5",
      lines: [
        <>
          <strong style={{ color: "#FFFFFF" }}>
            Vasco da Gama Station (VSG)
          </strong>{" "}
          is about 3 km from the venue — the closest railway station.
        </>,
        <>
          Alternatively,{" "}
          <strong style={{ color: "#FFFFFF" }}>Madgaon Junction (MAO)</strong> —
          Goa's main rail hub — is 25 km away with trains from across India.
        </>,
      ],
    },
    {
      icon: Car,
      title: "By Road",
      iconColor: "#5BB8F5",
      lines: [
        <>
          Chicalim is well connected via{" "}
          <strong style={{ color: "#FFFFFF" }}>NH66</strong> and{" "}
          <strong style={{ color: "#FFFFFF" }}>NH748</strong>.
        </>,
        <>
          Buses, cabs, and self-drive rentals are available from Panjim (30 km),
          Margao (25 km), and North Goa.
        </>,
        <>
          Parking and drop-off zones are designated near the start line for easy
          access on race day.
        </>,
      ],
    },
  ];

  const hotelSections = [
    { title: "Within 5 kms of the Start Point", list: hotels.within5km },
    { title: "Within 10 kms of the Start Point", list: hotels.within10km },
    { title: "Within 20 kms of the Start Point", list: hotels.within20km },
  ];

  return (
    <div
      className="min-h-screen mt-32"
      style={{
        backgroundColor: "#0B1E3D",
        fontFamily: "Open Sans, sans-serif",
      }}
    >
      <div className="container mx-auto px-4 text-center">
        <h1
          className="text-5xl md:text-6xl font-black mb-6"
          style={{ fontFamily: "Montserrat, sans-serif", color: "#FFFFFF" }}
        >
          Getting <span className="text-[#F47B20]">There</span>
        </h1>
        <p
          className="text-lg max-w-3xl mx-auto"
          style={{ color: "rgba(255,255,255,0.75)", fontWeight: 300 }}
        >
          The Goa River Marathon is held in Chicalim, Vasco da Gama, located in
          South Goa — just minutes from the airport and easily accessible by
          road and rail.
        </p>
      </div>

      {/* Transportation Options */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {transportCards.map(({ icon: Icon, title, iconColor, lines }) => (
              <div
                key={title}
                className="rounded-2xl border overflow-hidden transition-all duration-300"
                style={{
                  backgroundColor: "#122B55",
                  borderColor: "#1A3A6B",
                  boxShadow: "0 2px 16px rgba(11,30,61,0.20)",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.boxShadow =
                    "0 20px 40px rgba(11,30,61,0.35)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.boxShadow =
                    "0 2px 16px rgba(11,30,61,0.20)")
                }
              >
                {/* Card Header */}
                <div
                  className="px-6 py-5 flex items-center gap-3"
                  style={{
                    backgroundColor: "#1A3A6B",
                    borderBottom: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <Icon className="h-7 w-7" style={{ color: iconColor }} />
                  <h2
                    className="text-2xl font-black"
                    style={{
                      fontFamily: "Montserrat, sans-serif",
                      color: "#FFFFFF",
                    }}
                  >
                    {title}
                  </h2>
                </div>
                <div className="p-6 space-y-3">
                  {lines.map((line, i) => (
                    <p
                      key={i}
                      style={{
                        color: "rgba(255,255,255,0.70)",
                        lineHeight: "1.7",
                      }}
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Free Shuttle Bus */}
          <div
            className="rounded-2xl border overflow-hidden mb-12"
            style={{
              backgroundColor: "#122B55",
              borderColor: "#1A3A6B",
              boxShadow: "0 4px 24px rgba(11,30,61,0.25)",
            }}
          >
            <div
              className="px-6 py-5 flex items-center gap-3"
              style={{
                backgroundColor: "#1A3A6B",
                borderBottom: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <Bus className="h-8 w-8" style={{ color: "#F47B20" }} />
              <h2
                className="text-3xl font-black"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  color: "#FFFFFF",
                }}
              >
                Free Shuttle Bus Service
              </h2>
            </div>
            <div className="p-6">
              <p
                className="text-lg mb-6"
                style={{ color: "rgba(255,255,255,0.75)", fontWeight: 300 }}
              >
                Take advantage of our complimentary shuttle bus service
                connecting key locations along the marathon route.
              </p>
              <div
                className="w-full h-[500px] rounded-xl overflow-hidden border-2"
                style={{ borderColor: "#1A3A6B" }}
              >
                <iframe
                  src="https://www.google.com/maps/d/embed?mid=19zpso9toitORxUXrjYfA-ZvHjEVjakc&ehbc=2E312F"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Shuttle Bus Route Map"
                />
              </div>
            </div>
          </div>

          {/* Hotels Section */}
          <div
            className="rounded-2xl border overflow-hidden"
            style={{
              backgroundColor: "#122B55",
              borderColor: "#1A3A6B",
              boxShadow: "0 4px 24px rgba(11,30,61,0.25)",
            }}
          >
            <div
              className="px-6 py-5 flex items-center gap-3"
              style={{
                backgroundColor: "#1A3A6B",
                borderBottom: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <Hotel className="h-8 w-8" style={{ color: "#F47B20" }} />
              <h2
                className="text-3xl font-black"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  color: "#FFFFFF",
                }}
              >
                Places to Stay
              </h2>
            </div>
            <div className="p-6">
              <p
                className="text-lg mb-8"
                style={{ color: "rgba(255,255,255,0.75)", fontWeight: 300 }}
              >
                Convenient accommodation options at various distances from the
                start point.
              </p>

              {/* Featured Hotels */}
              <div className="mb-10">
                <h3
                  className="text-2xl font-bold mb-6 flex items-center gap-2"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    color: "#FFFFFF",
                  }}
                >
                  <Sparkles className="h-6 w-6" style={{ color: "#FF9748" }} />
                  Featured Hotels
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {hotels.featured.map((hotel, index) => (
                    <div
                      key={index}
                      className="p-6 rounded-xl border transition-all duration-200"
                      style={{
                        backgroundColor: "#1A3A6B",
                        borderColor: "rgba(255,255,255,0.12)",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.borderColor = "#2E8FD8")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.borderColor =
                          "rgba(255,255,255,0.12)")
                      }
                    >
                      <p
                        className="font-black text-xl mb-3"
                        style={{
                          fontFamily: "Montserrat, sans-serif",
                          color: "#5BB8F5",
                        }}
                      >
                        {hotel.name}
                      </p>
                      <p
                        style={{
                          color: "rgba(255,255,255,0.70)",
                          lineHeight: "1.7",
                        }}
                      >
                        {hotel.content}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Distance Sections */}
              {hotelSections.map(({ title, list }) => (
                <div key={title} className="mb-10">
                  <h3
                    className="text-2xl font-bold mb-6 flex items-center gap-2"
                    style={{
                      fontFamily: "Montserrat, sans-serif",
                      color: "#FFFFFF",
                    }}
                  >
                    <MapPin className="h-6 w-6" style={{ color: "#5BB8F5" }} />
                    {title}
                  </h3>
                  <div
                    className={`grid grid-cols-1 md:grid-cols-2 ${list.length > 2 ? "lg:grid-cols-3" : ""} gap-4`}
                  >
                    {list.map((hotel, index) => (
                      <div
                        key={index}
                        className="p-4 rounded-xl border flex items-center gap-2 transition-all duration-200"
                        style={{
                          backgroundColor: "#1A3A6B",
                          borderColor: "rgba(255,255,255,0.10)",
                        }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.borderColor = "#1A6FB4")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.borderColor =
                            "rgba(255,255,255,0.10)")
                        }
                      >
                        <p
                          className="font-semibold flex-1"
                          style={{
                            color: "#FFFFFF",
                            fontFamily: "Open Sans, sans-serif",
                          }}
                        >
                          {hotel}
                        </p>
                        {isOnShuttleRoute(hotel) && (
                          <Bus
                            className="h-4 w-4 flex-shrink-0"
                            style={{ color: "#F47B20" }}
                          />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              {/* Legend */}
              <div
                className="mb-6 p-4 rounded-xl border flex items-center gap-2"
                style={{
                  backgroundColor: "rgba(244,123,32,0.08)",
                  borderColor: "rgba(244,123,32,0.25)",
                }}
              >
                <Bus className="h-4 w-4" style={{ color: "#F47B20" }} />
                <span
                  className="text-sm font-semibold"
                  style={{ color: "rgba(255,255,255,0.80)" }}
                >
                  Hotel on the free shuttle pickup route
                </span>
              </div>

              {/* Disclaimer */}
              <div
                className="p-4 rounded-xl border"
                style={{
                  backgroundColor: "rgba(255,255,255,0.04)",
                  borderColor: "rgba(255,255,255,0.10)",
                }}
              >
                <p
                  className="text-sm italic"
                  style={{ color: "rgba(255,255,255,0.45)", lineHeight: "1.7" }}
                >
                  <strong style={{ color: "rgba(255,255,255,0.65)" }}>
                    Disclaimer:
                  </strong>{" "}
                  The hotels listed are provided for the convenience of
                  participants and are not affiliated with or endorsed by the
                  organizers of the SKF Goa River Marathon. Participants are
                  advised to verify details such as rates, availability,
                  amenities, and cancellation policies directly with the
                  respective hotels before making any bookings. The organizers
                  do not assume responsibility for any issues, disputes, or
                  inconveniences arising from such arrangements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GettingThere;
