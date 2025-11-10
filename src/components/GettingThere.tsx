// src =  "https://www.google.com/maps/d/embed?mid=19zpso9toitORxUXrjYfA-ZvHjEVjakc&ehbc=2E312F";
import { Bus, Hotel, Plane, Train, Car, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const GettingThere = () => {
  // Hotels on shuttle route
  const shuttleRouteHotels = [
    "The HQ",
    "Hotel La Paz Gardens",
    "Hotel Supreme",
    "Regenta Place, Vasco",
    "The Flora Grand",
    "Royal Altis",
  ];

  const hotels = {
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

  const isOnShuttleRoute = (hotelName) => {
    return shuttleRouteHotels.some(
      (shuttle) =>
        hotelName.toLowerCase().includes(shuttle.toLowerCase()) ||
        shuttle.toLowerCase().includes(hotelName.toLowerCase())
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-accent/5">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Getting There
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              The Goa River Marathon is held in Chicalim, Vasco da Gama, located
              in South Goa — just minutes from the airport and easily accessible
              by road and rail.
            </p>
          </div>
        </div>
      </section>

      {/* Transportation Options */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {/* By Air */}
            <Card className="overflow-hidden border-primary/20 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="bg-gradient-to-br from-blue-500/10 to-blue-600/10">
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Plane className="h-7 w-7 text-blue-600" />
                  By Air
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4">
                  The nearest airport is <strong>Dabolim Airport (GOI)</strong>,
                  only 5 km from Chicalim.
                </p>
                <p className="text-muted-foreground mb-4">
                  Regular flights connect Goa to all major Indian cities
                  including Mumbai, Bengaluru, Delhi, and Hyderabad.
                </p>
                <p className="text-muted-foreground">
                  From the airport, you can reach the venue in{" "}
                  <strong>10–15 minutes</strong> by taxi or shuttle.
                </p>
              </CardContent>
            </Card>

            {/* By Rail */}
            <Card className="overflow-hidden border-primary/20 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="bg-gradient-to-br from-green-500/10 to-green-600/10">
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Train className="h-7 w-7 text-green-600" />
                  By Rail
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4">
                  The closest railway station is{" "}
                  <strong>Vasco da Gama Station (VSG)</strong>, about 3 km from
                  the venue.
                </p>
                <p className="text-muted-foreground">
                  Alternatively, <strong>Madgaon Junction (MAO)</strong>—Goa's
                  main rail hub—is 25 km away, with trains from across India.
                </p>
              </CardContent>
            </Card>

            {/* By Road */}
            <Card className="overflow-hidden border-primary/20 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="bg-gradient-to-br from-orange-500/10 to-orange-600/10">
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Car className="h-7 w-7 text-orange-600" />
                  By Road
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4">
                  Chicalim is well connected by road via <strong>NH66</strong>{" "}
                  and <strong>NH748</strong>.
                </p>
                <p className="text-muted-foreground mb-4">
                  Buses, cabs, and self-drive rentals are available from Panjim
                  (30 km), Margao (25 km), and North Goa.
                </p>
                <p className="text-muted-foreground">
                  Parking and drop-off zones are designated near the start line
                  for easy access on race day.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Free Shuttle Bus Section */}
          <Card className="mb-12 overflow-hidden border-primary/20 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-secondary/10">
              <CardTitle className="flex items-center gap-3 text-3xl">
                <Bus className="h-8 w-8 text-primary" />
                Free Shuttle Bus Service
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-muted-foreground mb-6 text-lg">
                Take advantage of our complimentary shuttle bus service
                connecting key locations along the marathon route.
              </p>
              <div className="w-full h-[500px] rounded-lg overflow-hidden border-2 border-border shadow-md">
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
            </CardContent>
          </Card>

          {/* Hotels Section */}
          <Card className="overflow-hidden border-primary/20 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-secondary/10">
              <CardTitle className="flex items-center gap-3 text-3xl">
                <Hotel className="h-8 w-8 text-primary" />
                Places to Stay
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-muted-foreground mb-8 text-lg">
                Convenient accommodation options at various distances from the
                start point
              </p>

              {/* Within 5 kms */}
              <div className="mb-10">
                <h3 className="text-2xl font-semibold mb-6 text-primary flex items-center gap-2">
                  <MapPin className="h-6 w-6" />
                  Within 5 kms of the Start Point
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {hotels.within5km.map((hotel, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-lg bg-accent/30 border border-border hover:border-primary/50 transition-all hover:shadow-md"
                    >
                      <p className="font-medium flex items-center gap-2">
                        {hotel}
                        {isOnShuttleRoute(hotel) && (
                          <Bus className="h-4 w-4 text-primary flex-shrink-0" />
                        )}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Within 10 kms */}
              <div className="mb-10">
                <h3 className="text-2xl font-semibold mb-6 text-primary flex items-center gap-2">
                  <MapPin className="h-6 w-6" />
                  Within 10 kms of the Start Point
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {hotels.within10km.map((hotel, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-lg bg-accent/30 border border-border hover:border-primary/50 transition-all hover:shadow-md"
                    >
                      <p className="font-medium flex items-center gap-2">
                        {hotel}
                        {isOnShuttleRoute(hotel) && (
                          <Bus className="h-4 w-4 text-primary flex-shrink-0" />
                        )}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Within 20 kms */}
              <div className="mb-10">
                <h3 className="text-2xl font-semibold mb-6 text-primary flex items-center gap-2">
                  <MapPin className="h-6 w-6" />
                  Within 20 kms of the Start Point
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {hotels.within20km.map((hotel, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-lg bg-accent/30 border border-border hover:border-primary/50 transition-all hover:shadow-md"
                    >
                      <p className="font-medium flex items-center gap-2">
                        {hotel}
                        {isOnShuttleRoute(hotel) && (
                          <Bus className="h-4 w-4 text-primary flex-shrink-0" />
                        )}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Legend */}
              <div className="mb-8 p-4 rounded-lg bg-primary/5 border border-primary/20">
                <div className="flex items-center gap-2 text-sm">
                  <Bus className="h-4 w-4 text-primary" />
                  <span className="font-medium">
                    Hotel on the free shuttle pickup route
                  </span>
                </div>
              </div>

              {/* Disclaimer */}
              <div className="p-4 rounded-lg bg-muted/50 border border-border">
                <p className="text-sm text-muted-foreground italic">
                  <strong>Disclaimer:</strong> The hotels listed are provided
                  for the convenience of participants and are not affiliated
                  with or endorsed by the organizers of the SKF Goa River
                  Marathon. Participants are advised to verify details such as
                  rates, availability, amenities, and cancellation policies
                  directly with the respective hotels before making any
                  bookings. The organizers do not assume responsibility for any
                  issues, disputes, or inconveniences arising from such
                  arrangements.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default GettingThere;
