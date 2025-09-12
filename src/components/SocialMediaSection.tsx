import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Instagram, Facebook, Twitter, Youtube, Share2, Camera, Hash } from "lucide-react";

const SocialMediaSection = () => {
  const socialPlatforms = [
    {
      name: "Instagram",
      handle: "@goarivermarathon",
      followers: "45.2K",
      icon: Instagram,
      color: "bg-gradient-to-r from-purple-500 to-pink-500",
      description: "Daily training tips, behind-the-scenes content"
    },
    {
      name: "Facebook", 
      handle: "@GoaRiverMarathon",
      followers: "38.9K",
      icon: Facebook,
      color: "bg-blue-600",
      description: "Event updates, community discussions"
    },
    {
      name: "Twitter",
      handle: "@GoaMarathon",
      followers: "12.1K", 
      icon: Twitter,
      color: "bg-sky-500",
      description: "Live updates, race day coverage"
    },
    {
      name: "YouTube",
      handle: "Goa River Marathon",
      followers: "8.7K",
      icon: Youtube,
      color: "bg-red-600",
      description: "Training videos, race highlights"
    }
  ];

  const trendingHashtags = [
    "#GoaRiverMarathon2025",
    "#RunWithCraco", 
    "#TechMarathon",
    "#GoaRunning",
    "#MarathonMemories",
    "#FutureOfRunning"
  ];

  const contentIdeas = [
    {
      type: "Training Tips",
      frequency: "Daily",
      platforms: ["Instagram", "Facebook"],
      engagement: "High"
    },
    {
      type: "Runner Spotlights", 
      frequency: "Weekly",
      platforms: ["Instagram", "YouTube"],
      engagement: "Very High"
    },
    {
      type: "Tech Features",
      frequency: "Bi-weekly", 
      platforms: ["Twitter", "LinkedIn"],
      engagement: "Medium"
    },
    {
      type: "Behind the Scenes",
      frequency: "Weekly",
      platforms: ["Instagram Stories", "YouTube"],
      engagement: "High"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            <Share2 className="w-4 h-4 mr-2" />
            Social Community
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Join the Conversation
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Connect with runners worldwide, share your journey, and stay updated with the latest marathon news and training tips.
          </p>
        </div>

        {/* Social Platforms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {socialPlatforms.map((platform, index) => {
            const IconComponent = platform.icon;
            return (
              <Card key={index} className="group hover:shadow-glow transition-all duration-300 overflow-hidden">
                <CardContent className="p-0">
                  <div className={`${platform.color} p-6 text-white`}>
                    <div className="flex items-center justify-between mb-4">
                      <IconComponent className="w-8 h-8" />
                      <Badge variant="secondary" className="text-xs">
                        {platform.followers}
                      </Badge>
                    </div>
                    <h3 className="font-bold text-lg mb-1">{platform.name}</h3>
                    <p className="text-white/90 text-sm">{platform.handle}</p>
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-muted-foreground mb-4">
                      {platform.description}
                    </p>
                    <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      Follow
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Trending Hashtags */}
        <Card className="mb-16 shadow-medium">
          <CardContent className="p-8">
            <div className="flex items-center gap-2 mb-6">
              <Hash className="w-5 h-5 text-primary" />
              <h3 className="text-2xl font-bold">Trending Hashtags</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {trendingHashtags.map((hashtag, index) => (
                <Badge 
                  key={index} 
                  variant="secondary" 
                  className="text-base px-4 py-2 hover:bg-primary hover:text-primary-foreground cursor-pointer transition-colors"
                >
                  {hashtag}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Share Your Story CTA */}
        <Card className="shadow-medium bg-gradient-ocean mb-16">
          <CardContent className="p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Share Your Marathon Journey</h3>
            <p className="text-white/90 mb-6">
              Tag us and use #RunWithCraco to be featured on our social media!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                Upload Your Story
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                Download Hashtags
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Social Proof */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-6">Join 100,000+ Marathon Enthusiasts</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="shadow-soft">
              Follow All Platforms
            </Button>
            <Button variant="outline" size="lg">
              Download Media Kit
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaSection;