import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  TrendingUp,
  Users,
  Globe,
  Trophy,
  Share2,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";

const AnalyticsSection = () => {
  const liveStats = [
    {
      label: "2026 Registrations",
      value: "3,247",
      trend: "+23%",
      color: "text-green-500",
    },
    {
      label: "Countries Represented",
      value: "18",
      trend: "+15%",
      color: "text-blue-500",
    },
    {
      label: "Social Media Reach",
      value: "2.4M",
      trend: "+45%",
      color: "text-purple-500",
    },
    {
      label: "Early Bird Savings",
      value: "₹1,200",
      trend: "Limited",
      color: "text-orange-500",
    },
  ];

  const socialMetrics = [
    {
      platform: "Instagram",
      followers: "45.2K",
      engagement: "8.7%",
      icon: Instagram,
      color: "text-pink-500",
    },
    {
      platform: "Facebook",
      followers: "38.9K",
      engagement: "6.2%",
      icon: Facebook,
      color: "text-blue-600",
    },
    {
      platform: "Twitter",
      followers: "12.1K",
      engagement: "4.8%",
      icon: Twitter,
      color: "text-sky-500",
    },
  ];

  const yearOverYearGrowth = [
    { year: "2021", participants: 5500, satisfaction: 4.2 },
    { year: "2022", participants: 6800, satisfaction: 4.5 },
    { year: "2023", participants: 7200, satisfaction: 4.7 },
    { year: "2024", participants: 8500, satisfaction: 4.8 },
    { year: "2025", participants: 10000, satisfaction: 4.9, projected: true },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-secondary/10 to-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            <TrendingUp className="w-4 h-4 mr-2" />
            Live Analytics
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-tech bg-clip-text text-transparent">
              Data-Driven Excellence
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real-time insights powering India's most innovative marathon
            experience. Track our growth, engage with our community.
          </p>
        </div>

        {/* Live Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {liveStats.map((stat, index) => (
            <Card
              key={index}
              className="text-center p-6 shadow-soft hover:shadow-medium transition-all border-2 hover:border-primary/20"
            >
              <CardContent className="p-0">
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground mb-2">
                  {stat.label}
                </div>
                <Badge
                  variant="secondary"
                  className={`${stat.color} font-semibold`}
                >
                  {stat.trend}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Growth Chart Simulation */}
        <Card className="mb-16 shadow-medium">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="w-5 h-5 text-primary" />
              5-Year Growth Trajectory
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-5 gap-4">
              {yearOverYearGrowth.map((data, index) => (
                <div key={data.year} className="text-center">
                  <div
                    className={`relative bg-gradient-primary rounded-lg mb-3 ${
                      data.projected
                        ? "opacity-70 border-2 border-dashed border-primary"
                        : ""
                    }`}
                  >
                    <div
                      className="bg-primary rounded-lg transition-all duration-1000"
                      style={{
                        height: `${(data.participants / 10000) * 120}px`,
                      }}
                    ></div>
                  </div>
                  <div className="font-bold text-lg">{data.year}</div>
                  <div className="text-sm text-muted-foreground">
                    {data.participants.toLocaleString()}
                  </div>
                  <div className="text-xs text-primary">
                    ⭐ {data.satisfaction}/5.0
                  </div>
                  {data.projected && (
                    <Badge variant="outline" className="mt-2 text-xs">
                      Projected
                    </Badge>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Social Media Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Share2 className="w-5 h-5 text-primary" />
                Social Media Impact
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {socialMetrics.map((metric, index) => {
                  const IconComponent = metric.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 rounded-lg bg-secondary/20"
                    >
                      <div className="flex items-center gap-3">
                        <IconComponent className={`w-6 h-6 ${metric.color}`} />
                        <div>
                          <div className="font-semibold">{metric.platform}</div>
                          <div className="text-sm text-muted-foreground">
                            {metric.followers} followers
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-lg">
                          {metric.engagement}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          engagement
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-primary" />
                Global Reach 2025
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 rounded-lg bg-gradient-ocean">
                    <div className="text-2xl font-bold text-white">67%</div>
                    <div className="text-white/90 text-sm">
                      Indian Participants
                    </div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-gradient-sunset">
                    <div className="text-2xl font-bold text-white">33%</div>
                    <div className="text-white/90 text-sm">
                      International Runners
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Top Countries</span>
                    <span>Registration %</span>
                  </div>
                  {[
                    { country: "India", percentage: "67%" },
                    { country: "UAE", percentage: "8%" },
                    { country: "UK", percentage: "5%" },
                    { country: "USA", percentage: "4%" },
                    { country: "Others", percentage: "16%" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center py-2 border-b border-border/20"
                    >
                      <span className="font-medium">{item.country}</span>
                      <Badge variant="outline">{item.percentage}</Badge>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AnalyticsSection;
