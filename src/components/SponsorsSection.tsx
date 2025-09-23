import { Building2, Heart, Star, Zap } from "lucide-react";

const SponsorsSection = () => {
  const sponsors = {
    title: [
      { name: "TechCorp Solutions", logo: "🏢", tier: "Title Sponsor" },
      { name: "Goa Tourism Board", logo: "🏝️", tier: "Presenting Partner" },
    ],
    platinum: [
      { name: "RunTech India", logo: "🏃", tier: "Technology Partner" },
      { name: "SportGear Pro", logo: "👟", tier: "Official Gear Partner" },
      { name: "HealthFirst Medical", logo: "🏥", tier: "Medical Partner" },
    ],
    gold: [
      { name: "Energy Plus", logo: "⚡", tier: "Nutrition Partner" },
      { name: "Hydrate Now", logo: "💧", tier: "Hydration Partner" },
      { name: "FitTrack Wearables", logo: "⌚", tier: "Wearables Partner" },
      { name: "GoaLocal Foods", logo: "🥥", tier: "Local Partner" },
    ],
  };

  return (
    <section id="sponsors" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full mb-6">
            <Heart className="w-4 h-4" />
            <span className="text-sm font-medium">Powered By</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our Amazing
            <span className="bg-gradient-sunset bg-clip-text text-transparent">
              {" "}
              Partners
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet the visionary organizations making the tech revolution in
            marathon running possible.
          </p>
        </div>

        {/* Title Sponsors */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
            Title Sponsors
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {sponsors.title.map((sponsor, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-xl border-2 border-primary/20 shadow-strong hover:shadow-elegant transition-smooth text-center group"
              >
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">
                  {sponsor.logo}
                </div>
                <h4 className="text-2xl font-bold text-foreground mb-2">
                  {sponsor.name}
                </h4>
                <div className="inline-flex items-center gap-1 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold">
                  <Star className="w-3 h-3" />
                  {sponsor.tier}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Platinum Sponsors */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-center mb-8 text-foreground">
            Platinum Partners
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sponsors.platinum.map((sponsor, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-xl border border-border shadow-soft hover:shadow-medium transition-smooth text-center group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                  {sponsor.logo}
                </div>
                <h4 className="text-lg font-bold text-foreground mb-2">
                  {sponsor.name}
                </h4>
                <div className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full">
                  {sponsor.tier}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Gold Sponsors */}
        <div className="mb-16">
          <h3 className="text-lg font-bold text-center mb-8 text-foreground">
            Gold Partners
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {sponsors.gold.map((sponsor, index) => (
              <div
                key={index}
                className="bg-card p-4 rounded-lg border border-border shadow-soft hover:shadow-medium transition-smooth text-center group"
              >
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">
                  {sponsor.logo}
                </div>
                <h4 className="text-sm font-semibold text-foreground mb-1">
                  {sponsor.name}
                </h4>
                <div className="text-xs text-muted-foreground">
                  {sponsor.tier}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Partnership CTA */}
        <div className="bg-gradient-ocean p-8 rounded-2xl shadow-strong text-center">
          <Building2 className="w-12 h-12 text-primary-foreground mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-primary-foreground mb-4">
            Become a Partner
          </h3>
          <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
            Join India's most innovative marathon and reach thousands of
            health-conscious, tech-savvy participants while supporting a
            sustainable future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:partnerships@goarivermarathon.com"
              className="bg-background text-foreground px-6 py-3 rounded-lg font-semibold hover:bg-background/90 transition-colors"
            >
              Partnership Opportunities
            </a>
            <a
              href="tel:+91-9876543210"
              className="border border-primary-foreground/20 text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary-foreground/10 transition-colors"
            >
              Call: +91-9876543210
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
