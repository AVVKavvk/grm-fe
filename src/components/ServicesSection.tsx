import { Bus, Hotel } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ServicesSection = () => {
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

  return (
    <section className="py-20 bg-gradient-to-b from-background to-accent/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We've arranged convenient services to make your marathon experience
            smooth and enjoyable
          </p>
        </div>

        {/* Free Shuttle Bus Section */}
        <Card className="mb-8 overflow-hidden border-primary/20 shadow-lg">
          <CardHeader className="bg-gradient-to-r from-primary/10 to-secondary/10">
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Bus className="h-6 w-6 text-primary" />
              Free Shuttle Bus Service
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <p className="text-muted-foreground mb-4">
              Take advantage of our complimentary shuttle bus service connecting
              key locations along the marathon route.
            </p>
            <div className="w-full h-[500px] rounded-lg overflow-hidden border-2 border-border">
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
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Hotel className="h-6 w-6 text-primary" />
              Places to Stay
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <p className="text-muted-foreground mb-6">
              Convenient accommodation options at various distances from the
              start point
            </p>

            {/* Within 5 kms */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-primary">
                Within 5 kms of the Start Point
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {hotels.within5km.map((hotel, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-lg bg-accent/30 border border-border hover:border-primary/50 transition-colors"
                  >
                    <p className="font-medium">{hotel}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Within 10 kms */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-primary">
                Within 10 kms of the Start Point
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {hotels.within10km.map((hotel, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-lg bg-accent/30 border border-border hover:border-primary/50 transition-colors"
                  >
                    <p className="font-medium">{hotel}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Within 20 kms */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-primary">
                Within 20 kms of the Start Point
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {hotels.within20km.map((hotel, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-lg bg-accent/30 border border-border hover:border-primary/50 transition-colors"
                  >
                    <p className="font-medium">{hotel}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Disclaimer */}
            <div className="mt-8 p-4 rounded-lg bg-muted/50 border border-border">
              <p className="text-sm text-muted-foreground italic">
                <strong>Disclaimer:</strong> The hotels listed are provided for
                the convenience of participants and are not affiliated with or
                endorsed by the organizers of the SKF Goa River Marathon.
                Participants are advised to verify details such as rates,
                availability, amenities, and cancellation policies directly with
                the respective hotels before making any bookings. The organizers
                do not assume responsibility for any issues, disputes, or
                inconveniences arising from such arrangements.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ServicesSection;
