import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Users, MapPin } from "lucide-react";
import {
  captureUTMParams,
  buildTrackingURL,
  logRegistrationClick,
} from "@/lib/tracking";

const Register = () => {
  const [searchParams] = useSearchParams();
  const source = searchParams.get("utm_source") || "direct";
  const [isRedirecting, setIsRedirecting] = useState(false);

  // Capture UTM parameters when component mounts
  useEffect(() => {
    captureUTMParams();
  }, []);

  const getSourceConfig = (source: string) => {
    switch (source.toLowerCase()) {
      case "zomato":
        return {
          name: "Zomato",
          color: "bg-red-500",
          redirectUrl: "https://www.ifinish.in/running/SKF2025",
          description: "Register through Zomato Events",
        };
      case "swiggy":
        return {
          name: "Swiggy",
          color: "bg-orange-500",
          redirectUrl: "https://www.ifinish.in/running/SKF2025",
          description: "Register through Swiggy Events",
        };
      case "playo":
        return {
          name: "Playo",
          color: "bg-green-500",
          redirectUrl: "https://www.ifinish.in/running/SKF2025",
          description: "Register through our mobile app",
        };
      case "district":
        return {
          name: "District",
          color: "bg-blue-500",
          redirectUrl: "https://www.ifinish.in/running/SKF2025",
          description: "Register through District",
        };
      default:
        return {
          name: "Direct",
          color: "bg-primary",
          redirectUrl: "https://www.ifinish.in/running/SKF2025",
          description: "Register directly on our website",
        };
    }
  };

  const sourceConfig = getSourceConfig(source);

  const handleRegister = () => {
    setIsRedirecting(true);

    // Build URL with UTM parameters
    const trackingUrl = buildTrackingURL(sourceConfig.redirectUrl, {
      referrer: "skf_website",
    });

    // Log the registration click
    logRegistrationClick(sourceConfig.name);

    setTimeout(() => {
      window.open(trackingUrl, "_blank");
      setIsRedirecting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20 flex items-center justify-center p-4">
      <Card className="w-full max-w-md mx-auto">
        <CardHeader className="text-center space-y-4">
          <div className="flex items-center justify-center gap-2">
            <Badge
              variant="secondary"
              className={`${sourceConfig.color} text-white`}
            >
              Referred from {sourceConfig.name}
            </Badge>
          </div>

          <CardTitle className="text-2xl font-bold">
            SKF Goa River Marathon
          </CardTitle>

          <CardDescription className="text-center">
            {sourceConfig.description}
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="bg-secondary/50 rounded-lg p-4 space-y-3">
            <div className="flex items-center gap-2 text-sm">
              <MapPin className="h-4 w-4 text-primary" />
              <span>December 13th and 14th, 2025 • Chicalim, Goa</span>
            </div>

            <div className="flex items-center gap-2 text-sm">
              <Users className="h-4 w-4 text-primary" />
              <span>Join runners from 42+ countries</span>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="font-semibold">Race Categories:</h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div className="bg-background rounded p-2 border">
                42K Marathon
              </div>
              <div className="bg-background rounded p-2 border">
                32K (20 Miler)
              </div>
              <div className="bg-background rounded p-2 border">
                21K Half Marathon
              </div>
              <div className="bg-background rounded p-2 border">10K Run</div>
              <div className="bg-background rounded p-2 border col-span-2 text-center">
                5K Fun Walk
              </div>
            </div>
          </div>

          <Button
            onClick={handleRegister}
            className="w-full"
            disabled={isRedirecting}
          >
            {isRedirecting ? (
              "Redirecting..."
            ) : (
              <>
                Continue Registration on {sourceConfig.name}
                <ExternalLink className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            You'll be redirected to {sourceConfig.name} to complete your
            registration
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Register;
