import {
  Building2,
  Heart,
  Star,
  Zap,
  ArrowRight,
  Mail,
  Phone,
  Loader2,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import vascoLogo from "@/assets/Logo/VascoSportsClub.png";
import skfLogo from "@/assets//Logo/SKF.png";
import hudleLogo from "@/assets/Logo/Hudle.png";
import burraLogo from "@/assets/Logo/Burraa.png";
import playoLogo from "@/assets/images/playo-logo.png";
import districtLogo from "@/assets/Logo/District.avif";
import bmsLogo from "@/assets/Logo/BMS.png";
import ifinishLogo from "@/assets/Logo/iFinish.png";
import originLogo from "@/assets/Logo/Origin.png";
import gatacaLogo from "@/assets/Logo/gataca.webp";
import usanaLogo from "@/assets/Logo/Usana.png";
import sport1919Logo from "@/assets/Logo/Sport.jpg";
import zanduLogo from "@/assets/Logo/zando-logo.jpeg";
import fastAndUpLogo from "@/assets/Logo/Fast-up.png";
import victorHospitalLogo from "@/assets/Logo/VictorHospital.png";
import timingLogo from "@/assets/Logo/timing.png";
import AddCityLogo from "@/assets/Logo/Ad-City.png";
import royalAquvaGlobalLogo from "@/assets/Logo/RoyalAquaGlobal.jpg";
import teachersLogo from "@/assets/Logo/Teachers.png";
import goaBrewingLogo from "@/assets/Logo/Goa-Brewing-Co.png";
import curamosLogo from "@/assets/Logo/Curamos.png";
import AWMMLogo from "@/assets/Logo/Abbot-World-Marathon.png";
import AIMSLogo from "@/assets/Logo/AIMS.png";
import GoaTorisumLogo from "@/assets/Logo/Goa-Tourism.png";
import GCCILogo from "@/assets/Logo/GCCI.png";
import RotaryLogo from "@/assets/Logo/Rotary.png";

import { useEmailStore } from "@/store/emailStore";

const EnhancedSponsorsSection = () => {
  const { toast } = useToast();
  const [sponsorForm, setSponsorForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const { sendEmail } = useEmailStore();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const realSponsors = {
    title: [
      {
        name: "SKF",
        logo: skfLogo,
        tier: "Title Sponsor",
        description:
          "Global technology leader in bearings and industrial solutions",
        website: "https://www.skf.com",
        isImage: true,
      },
    ],
    featured: [
      {
        name: "Zandu",
        logo: zanduLogo,
        tier: "Pain Relief Partner",
        description: "Trusted healthcare and pain management solutions",
        website: "https://zanducare.com/",
        isImage: true,
      },
      {
        name: "1919 Sportz",
        logo: sport1919Logo,
        tier: "Sports Partner",
        description: "Premium sports equipment and athletic gear",
        website: "#",
        isImage: true,
      },
    ],
    platinum: [
      {
        name: "Fast & Up",
        logo: fastAndUpLogo,
        tier: "Energy Partner",
        description: "Premium sports nutrition and wellness brand",
      },
      {
        name: "Victor Hospital",
        logo: victorHospitalLogo,
        tier: "Medical Partner",
        description: "Leading healthcare provider ensuring runner safety",
      },
      {
        name: "Timing Technologies",
        logo: timingLogo,
        tier: "Timing Partner",
        description: "Professional race timing and chip technology",
      },
    ],
    gold: [
      {
        name: "Ad City",
        logo: AddCityLogo,
        tier: "Outdoor Media Partner",
        description: "Creative advertising and media solutions",
      },
      {
        name: "Royal Aqua Global",
        logo: royalAquvaGlobalLogo,
        tier: "Hydration Partner",
        description: "Premium water solutions for hydration stations",
      },
      {
        name: "Teachers",
        logo: teachersLogo,
        tier: "Official Water Partner",
        description: "Premium packaged drinking water",
      },
      {
        name: "Goa Brewing Co.",
        logo: goaBrewingLogo,
        tier: "Beverage Partner",
        description: "Local craft brewery for post-race celebrations",
      },
    ],
    registration: [
      {
        name: "IFinish",
        logo: ifinishLogo,
        tier: "Registration Partner",
        description: "Marathon timing and event management services",
        website: "https://www.ifinish.in",
        isImage: true,
      },
      {
        name: "Burraa",
        logo: burraLogo,
        tier: "Celebration Partner",
        description: "Running and fitness community platform",
        website: "https://www.burraa.com/",
        isImage: true,
      },
      {
        name: "Hudle",
        logo: hudleLogo,
        tier: "Technology Partner",
        description: "Athletic performance and training platform",
        website: "https://www.hudle.in/",
        isImage: true,
      },
      {
        name: "Playo",
        logo: playoLogo,
        tier: "Platform Partner",
        description: "Sports venue booking and community platform",
        website: "https://www.playo.co",
        isImage: true,
      },
      {
        name: "Book My Show",
        logo: bmsLogo,
        tier: "Going Out Partner",
        description: "Event ticketing and registration platform",
        website: "https://in.bookmyshow.com",
        isImage: true,
      },
      {
        name: "District by Zomato",
        logo: districtLogo,
        tier: "Engagement Partner",
        description: "Social dining and entertainment experiences",
        website: "https://www.district.in/",
        isImage: true,
      },
    ],
    wellness: [
      {
        name: "Origin",
        logo: originLogo,
        tier: "Wellness Sponsor",
        description: "Health and wellness products",
        website: "https://originwellnessco.co/",
        isImage: true,
      },
      {
        name: "Gataca",
        logo: gatacaLogo,
        tier: "Nutrition Sponsor",
        description: "Sports nutrition and supplements",
        website: "https://gataca.in/",
        isImage: true,
      },
      {
        name: "Usana",
        logo: usanaLogo,
        tier: "Performance Nutrition Partner",
        description: "Premium nutritional supplements and wellness products",
        website: "https://www.usana.com",
        isImage: true,
      },
      {
        name: "Curamos",
        logo: curamosLogo,
        tier: "Physiotherapy Partners",
        description: "Professional physiotherapy and sports recovery",
        website: "#",
      },
    ],
    institutional: [
      {
        name: "Abbott World Marathon Majors",
        logo: AWMMLogo,
        tier: "International Marathon Alliance Partner",
        description: "Global marathon series partnership",
        website: "#",
      },
      {
        name: "AIMS",
        logo: AIMSLogo,
        tier: "Accreditation Partner",
        description:
          "Association of International Marathons and Distance Races",
        website: "#",
      },
      {
        name: "Goa Tourism",
        logo: GoaTorisumLogo,
        tier: "Tourism Partner",
        description: "Official tourism promotion partner",
        website: "#",
      },
      {
        name: "GCCI",
        logo: GCCILogo,
        tier: "Industry Partner",
        description: "Goa Chamber of Commerce & Industry",
        website: "#",
      },
      {
        name: "Rotary Club of Vasco Port Town",
        logo: RotaryLogo,
        tier: "Community Partner",
        description: "Local community service organization",
        website: "#",
      },
      {
        name: "Vasco Sports Club",
        logo: vascoLogo,
        tier: "Sports Partner",
        description: "Premier local sports facility and community hub",
        website: "#",
        isImage: true,
      },
    ],
  };
  const formatEmailBody = () => {
    return `New Partnership Inquiry - SKF Goa River Marathon

Contact Information:
- Name: ${sponsorForm.name}
- Email: ${sponsorForm.email}
- Company/Organization: ${sponsorForm.company}

Message:
${sponsorForm.message || "No additional message provided."}

---
This email was automatically generated from the SKF Goa River Marathon partnership form.`;
  };

  const handleSponsorSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Prepare email data
      const emailData = {
        client_email:
          import.meta.env.VITE_DEFAULT_EMAIL ||
          "support@skfgoarivermarathon.com",
        subject: `Partnership Inquiry from ${sponsorForm.company} - ${sponsorForm.name}`,
        body: formatEmailBody(),
      };

      // Send email using your email store
      const result = await sendEmail(emailData);

      if (result) {
        toast({
          title: "Sponsorship Inquiry Submitted!",
          description:
            "Thank you for your interest. Our partnerships team will contact you within 24 hours.",
        });

        // Reset form
        setSponsorForm({ name: "", email: "", company: "", message: "" });
      } else {
        throw new Error("Failed to submit inquiry");
      }
    } catch (error) {
      console.error("Partnership inquiry submission error:", error);
      // toast({
      //   title: "Submission Failed",
      //   description:
      //     "There was an error submitting your inquiry. Please try again or contact us directly.",
      //   variant: "destructive",
      // });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="sponsors" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full mb-6">
            <Heart className="w-4 h-4" />
            <span className="text-sm font-medium">Powered By</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Official Sponsors
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Visionary partners making India's most innovative marathon possible.
          </p>
        </div>

        {/* Title Sponsor */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
            Title Sponsor
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-8 max-w-4xl mx-auto">
            {realSponsors.title.map((sponsor, index) => (
              <a
                href={sponsor.website}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
                className="bg-card p-8 rounded-xl border-2 border-primary/20 shadow-strong hover:shadow-elegant transition-smooth text-center group"
              >
                <div className="mb-4 group-hover:scale-110 transition-transform">
                  {sponsor.isImage ? (
                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      className="w-48 mx-auto object-contain rounded-lg"
                    />
                  ) : (
                    <div className="text-6xl">{sponsor.logo}</div>
                  )}
                </div>
                <h4 className="text-2xl font-bold text-foreground mb-2">
                  {sponsor.name}
                </h4>
                <p className="text-sm text-muted-foreground mb-3">
                  {sponsor.description}
                </p>
                <div className="inline-flex items-center gap-1 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold">
                  <Star className="w-3 h-3" />
                  {sponsor.tier}
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Featured Partners */}

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
            Featured Partners
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {realSponsors.featured.map((sponsor, index) => (
              <a
                href={sponsor.website}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
                className="bg-card p-8 rounded-xl border border-primary/20 shadow-medium hover:shadow-strong transition-smooth text-center group flex flex-col items-center justify-between min-h-[320px]"
              >
                <div className="flex-1 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {sponsor.isImage ? (
                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      className="w-40 h-32 object-contain rounded-lg"
                    />
                  ) : (
                    <div className="text-6xl">{sponsor.logo}</div>
                  )}
                </div>
                <div className="flex-shrink-0 space-y-3">
                  <h4 className="text-xl font-bold text-foreground">
                    {sponsor.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {sponsor.description}
                  </p>
                  <div className="inline-flex items-center gap-1 bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-semibold">
                    <Star className="w-3 h-3" />
                    {sponsor.tier}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Platinum Sponsors */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-center mb-8 text-foreground">
            Platinum Partners
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {realSponsors.platinum.map((sponsor, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-xl border border-border shadow-soft hover:shadow-medium transition-smooth text-center group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="w-32 mx-auto object-contain rounded-lg"
                  />
                </div>
                <h4 className="text-lg font-bold text-foreground mb-2">
                  {sponsor.name}
                </h4>
                <p className="text-xs text-muted-foreground mb-3">
                  {sponsor.description}
                </p>
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
            {realSponsors.gold.map((sponsor, index) => (
              <div
                key={index}
                className="bg-card p-4 rounded-lg border border-border shadow-soft hover:shadow-medium transition-smooth text-center group"
              >
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="w-32 mx-auto object-contain rounded-lg"
                  />
                </div>
                <h4 className="text-sm font-semibold text-foreground mb-1">
                  {sponsor.name}
                </h4>
                <p className="text-xs text-muted-foreground mb-2">
                  {sponsor.description}
                </p>
                <div className="text-xs text-muted-foreground">
                  {sponsor.tier}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Registration & Platform Partners */}
        <div className="mb-16">
          <h3 className="text-lg font-bold text-center mb-8 text-foreground">
            Registration & Platform Partners
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {realSponsors.registration.map((sponsor, index) => (
              <a
                href={sponsor.website}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
                className="bg-card p-4 rounded-lg border border-border shadow-soft hover:shadow-medium transition-smooth text-center group"
              >
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="w-12 mx-auto object-contain rounded-lg"
                  />
                </div>
                <h4 className="text-sm font-semibold text-foreground mb-1">
                  {sponsor.name}
                </h4>
                <p className="text-xs text-muted-foreground mb-2">
                  {sponsor.description}
                </p>
                <div className="text-xs text-muted-foreground">
                  {sponsor.tier}
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Wellness Partners */}
        <div className="mb-16">
          <h3 className="text-lg font-bold text-center mb-8 text-foreground">
            Wellness & Nutrition Partners
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {realSponsors.wellness.map((sponsor, index) => (
              <a
                href={sponsor.website}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
                className="bg-card p-4 rounded-lg border border-border shadow-soft hover:shadow-medium transition-smooth text-center group"
              >
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="w-12 mx-auto object-contain rounded-lg"
                  />
                </div>
                <h4 className="text-sm font-semibold text-foreground mb-1">
                  {sponsor.name}
                </h4>
                <p className="text-xs text-muted-foreground mb-2">
                  {sponsor.description}
                </p>
                <div className="text-xs text-muted-foreground">
                  {sponsor.tier}
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Institutional Partners */}
        <div className="mb-16">
          <h3 className="text-lg font-bold text-center mb-8 text-foreground">
            Institutional & Community Partners
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {realSponsors.institutional.map((sponsor, index) => (
              <a
                href={sponsor.website}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
                className="bg-card p-4 rounded-lg border border-border shadow-soft hover:shadow-medium transition-smooth text-center group"
              >
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="w-12 mx-auto object-contain rounded-lg"
                  />
                </div>
                <h4 className="text-sm font-semibold text-foreground mb-1">
                  {sponsor.name}
                </h4>
                <p className="text-xs text-muted-foreground mb-2">
                  {sponsor.description}
                </p>
                <div className="text-xs text-muted-foreground">
                  {sponsor.tier}
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Why Partner With Us */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">
            Why Partner With SKF Goa River Marathon?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">30K+</div>
              <div className="text-sm text-muted-foreground">Total Reach</div>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">14+</div>
              <div className="text-sm text-muted-foreground">
                Years Experience
              </div>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">42+</div>
              <div className="text-sm text-muted-foreground">Countries</div>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">
                ROI Guaranteed
              </div>
            </Card>
          </div>
        </div>

        {/* Sponsorship Packages */}
        {/* <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">
            Partnership Packages
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sponsorshipBenefits.map((package_, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-medium transition-smooth"
              >
                <div className="text-center mb-6">
                  <h4 className="text-xl font-bold text-foreground mb-2">
                    {package_.category}
                  </h4>
                  <div className="text-2xl font-bold text-primary">
                    {package_.price}
                  </div>
                </div>
                <ul className="space-y-2">
                  {package_.benefits.map((benefit, benefitIndex) => (
                    <li
                      key={benefitIndex}
                      className="flex items-start gap-2 text-sm"
                    >
                      <ArrowRight className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div> */}

        {/* Partnership Inquiry Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-6">Become a Partner</h3>
            <p className="text-muted-foreground mb-6">
              India's most scenic and fun focused marathon experience. Join us
              for an unforgettable journey along the beautiful ZUARI River .
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <span>info@goarivermarathon.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <span>+91 7020142370</span>
              </div>
            </div>
          </div>

          <Card className="p-6">
            <form onSubmit={handleSponsorSubmit} className="space-y-4">
              <div>
                <Label htmlFor="sponsor-name">Full Name</Label>
                <Input
                  id="sponsor-name"
                  value={sponsorForm.name}
                  onChange={(e) =>
                    setSponsorForm((prev) => ({
                      ...prev,
                      name: e.target.value,
                    }))
                  }
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <Label htmlFor="sponsor-email">Email</Label>
                <Input
                  id="sponsor-email"
                  type="email"
                  value={sponsorForm.email}
                  onChange={(e) =>
                    setSponsorForm((prev) => ({
                      ...prev,
                      email: e.target.value,
                    }))
                  }
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <Label htmlFor="sponsor-company">Company/Organization</Label>
                <Input
                  id="sponsor-company"
                  value={sponsorForm.company}
                  onChange={(e) =>
                    setSponsorForm((prev) => ({
                      ...prev,
                      company: e.target.value,
                    }))
                  }
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <Label htmlFor="sponsor-message">Message</Label>
                <Textarea
                  id="sponsor-message"
                  value={sponsorForm.message}
                  onChange={(e) =>
                    setSponsorForm((prev) => ({
                      ...prev,
                      message: e.target.value,
                    }))
                  }
                  rows={3}
                  placeholder="Tell us about your sponsorship interests..."
                  disabled={isSubmitting}
                />
              </div>
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Send Partnership Inquiry"
                )}
              </Button>
            </form>
          </Card>
        </div>

        {/* Partnership CTA */}
        <div className="bg-gradient-ocean p-8 rounded-2xl shadow-strong text-center">
          <Building2 className="w-12 h-12 text-primary-foreground mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-primary-foreground mb-4">
            Ready to Make an Impact?
          </h3>
          <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
            Partner with us to reach 50,000+ engaged participants, boost brand
            visibility, and be part of India's most innovative marathon
            experience.
          </p>
          <Button variant="secondary" size="lg">
            Download Partnership Brochure
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EnhancedSponsorsSection;
