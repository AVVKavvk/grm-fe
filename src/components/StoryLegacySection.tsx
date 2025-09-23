import { Clock, Globe, Award, Users } from "lucide-react";

const StoryLegacySection = () => {
  const milestones = [
    {
      year: "2010",
      title: "Humble Beginnings",
      description: "Started as a local community run by Vasco Sports Club",
    },
    {
      year: "2018",
      title: "International Recognition",
      description: "AIMS certification and first international participants",
    },
    {
      year: "2023",
      title: "Global Attraction",
      description: "Runners from 42 countries joined the celebration",
    },
    {
      year: "2025",
      title: "Sports Festival Evolution",
      description: "Expanding into a full-scale sports festival experience",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Story & Legacy
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
        </div>

        {/* Split Screen Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Side - Archive Story */}
          <div className="space-y-8">
            <div className="relative">
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-accent rounded-full"></div>
              <div className="pl-8">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-6 h-6 text-primary" />
                  <span className="text-sm font-medium text-primary uppercase tracking-wide">
                    Heritage
                  </span>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  "Born from humble beginnings, the Goa River Marathon started
                  as a local community run organised by the Vasco Sports Club, a
                  name synonymous with nurturing grassroots football in Goa.
                  Over the years, it has grown into a world-class running
                  festival, attracting athletes from 42 countries and thousands
                  of passionate fitness lovers."
                </p>
              </div>
            </div>

            {/* Timeline */}
            <div className="space-y-6">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <span className="text-sm font-bold text-primary">
                      {milestone.year}
                    </span>
                  </div>
                  <div className="flex-1 pt-2">
                    <h4 className="font-semibold text-foreground mb-1">
                      {milestone.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Modern Festival Energy */}
          <div className="space-y-8">
            <div className="relative">
              <div className="absolute -right-4 top-0 bottom-0 w-1 bg-gradient-to-b from-accent to-primary rounded-full"></div>
              <div className="pr-8">
                <div className="flex items-center gap-3 mb-4 justify-end">
                  <span className="text-sm font-medium text-accent uppercase tracking-wide">
                    Evolution
                  </span>
                  <Globe className="w-6 h-6 text-accent" />
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed text-right">
                  "The route across the Zuari River isn't just a race - it's a
                  journey through time, culture, and Goa's vibrant spirit. This
                  year marks a revolutionary chapter: we're expanding into a
                  full-scale sports festival, with experiences designed to
                  enhance every aspect of your running journey."
                </p>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-card border border-border rounded-xl hover-scale transition-all duration-300">
                <Users className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-2xl font-bold text-foreground">42</div>
                <div className="text-sm text-muted-foreground">Countries</div>
              </div>
              <div className="text-center p-6 bg-card border border-border rounded-xl hover-scale transition-all duration-300">
                <Award className="w-8 h-8 text-accent mx-auto mb-3" />
                <div className="text-2xl font-bold text-foreground">14</div>
                <div className="text-sm text-muted-foreground">
                  Years Strong
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoryLegacySection;
