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
import kingfisher from "@/assets/Logo/kingfisherLogo.jpeg";
import curamosLogo from "@/assets/Logo/Curamos.png";
import AWMMLogo from "@/assets/Logo/Abbot-World-Marathon.png";
import AIMSLogo from "@/assets/Logo/AIMS.png";
import GoaTorisumLogo from "@/assets/Logo/Goa-Tourism.png";
import GCCILogo from "@/assets/Logo/GCCI.png";
import RotaryLogo from "@/assets/Logo/Rotary.png";

import { useEmailStore } from "@/store/emailStore";

const trustItems = [
  { num: "16", label: "Years of Excellence" },
  { num: "7,500+", label: "Runners Annually" },
  { num: "AIMS", label: "Certified Course" },
  { num: "50000 ₹", label: "Equal Prize Money" },
];

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
      {
        name: "Goa Tourism",
        logo: GoaTorisumLogo,

        tier: "Tourism Partner",
        description: "Official tourism promotion partner",
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
        name: "Kingfisher",
        logo: kingfisher,
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
        isBigLogo: false,
        tier: "International Marathon Alliance Partner",
        description: "Global marathon series partnership",
        website: "#",
      },
      {
        name: "AIMS",
        logo: AIMSLogo,
        isBigLogo: false,
        tier: "Accreditation Partner",
        description:
          "Association of International Marathons and Distance Races",
        website: "#",
      },
      {
        name: "Goa Tourism",
        logo: GoaTorisumLogo,
        isBigLogo: false,
        tier: "Tourism Partner",
        description: "Official tourism promotion partner",
        website: "#",
      },
      {
        name: "GCCI",
        logo: GCCILogo,
        isBigLogo: false,
        tier: "Industry Partner",
        description: "Goa Chamber of Commerce & Industry",
        website: "#",
      },
      {
        name: "Rotary Club of Vasco Port Town",
        logo: RotaryLogo,
        isBigLogo: true,
        tier: "Community Partner",
        description: "Local community service organization",
        website: "#",
      },
      {
        name: "Vasco Sports Club",
        logo: vascoLogo,
        isBigLogo: false,
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
          import.meta.env.VITE_DEFAULT_EMAIL || "runnersingoa@gmail.com",
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
    <section
      id="sponsors"
      className="py-16"
      style={{ backgroundColor: "#0B1E3D" }}
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{
              backgroundColor: "rgba(244,123,32,0.15)",
              color: "#F47B20",
            }}
          >
            <Heart className="w-4 h-4" />
            <span
              className="text-sm font-semibold tracking-widest uppercase"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Powered By
            </span>
          </div>
          <h2
            className="text-3xl md:text-4xl font-black mb-4"
            style={{ fontFamily: "Montserrat, sans-serif", color: "#FFFFFF" }}
          >
            Official <span className="text-[#F47B20]">Sponsors</span>
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{
              color: "rgba(255,255,255,0.75)",
              fontFamily: "Open Sans, sans-serif",
              fontWeight: 300,
            }}
          >
            Visionary partners making India's most innovative marathon possible.
          </p>
        </div>

        {/* Title Sponsor */}
        <div className="mb-16">
          <h3
            className="text-2xl font-bold text-center mb-8 tracking-wide uppercase"
            style={{
              fontFamily: "Montserrat, sans-serif",
              color: "#5BB8F5",
              letterSpacing: "0.16em",
            }}
          >
            Title Sponsor
          </h3>
          <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
            {realSponsors.title.map((sponsor, index) => (
              <a
                href={sponsor.website}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
                className="p-8 rounded-2xl border-2 text-center group transition-all duration-300"
                style={{
                  backgroundColor: "#122B55",
                  borderColor: "#1A6FB4",
                  boxShadow: "0 4px 24px rgba(11,30,61,0.18)",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.boxShadow =
                    "0 20px 40px rgba(11,30,61,0.35)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.boxShadow =
                    "0 4px 24px rgba(11,30,61,0.18)")
                }
              >
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                  {sponsor.isImage ? (
                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      className="w-48 mx-auto object-contain rounded-xl"
                    />
                  ) : (
                    <div className="text-6xl">{sponsor.logo}</div>
                  )}
                </div>
                <h4
                  className="text-2xl font-black mb-2"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    color: "#FFFFFF",
                  }}
                >
                  {sponsor.name}
                </h4>
                <p
                  className="text-sm mb-3"
                  style={{
                    color: "rgba(255,255,255,0.75)",
                    fontFamily: "Open Sans, sans-serif",
                  }}
                >
                  {sponsor.description}
                </p>
                <div
                  className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-semibold"
                  style={{
                    backgroundColor: "rgba(244,123,32,0.15)",
                    color: "#FF9748",
                  }}
                >
                  <Star className="w-3 h-3" />
                  {sponsor.tier}
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Featured Partners */}
        <div className="mb-16">
          <h3
            className="text-2xl font-bold text-center mb-8 tracking-wide uppercase"
            style={{
              fontFamily: "Montserrat, sans-serif",
              color: "#5BB8F5",
              letterSpacing: "0.16em",
            }}
          >
            Featured Partners
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {realSponsors.featured.map((sponsor, index) => (
              <a
                href={sponsor.website}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
                className="p-8 rounded-2xl border text-center group flex flex-col items-center justify-between min-h-[320px] transition-all duration-300"
                style={{
                  backgroundColor: "#122B55",
                  borderColor: "#1A3A6B",
                  boxShadow: "0 4px 16px rgba(11,30,61,0.15)",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.boxShadow =
                    "0 20px 40px rgba(11,30,61,0.35)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.boxShadow =
                    "0 4px 16px rgba(11,30,61,0.15)")
                }
              >
                <div className="flex-1 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {sponsor.isImage ? (
                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      className="w-40 h-32 object-contain rounded-xl"
                    />
                  ) : (
                    <div className="text-6xl">{sponsor.logo}</div>
                  )}
                </div>
                <div className="flex-shrink-0 space-y-3">
                  <h4
                    className="text-xl font-black"
                    style={{
                      fontFamily: "Montserrat, sans-serif",
                      color: "#FFFFFF",
                    }}
                  >
                    {sponsor.name}
                  </h4>
                  <p
                    className="text-sm"
                    style={{
                      color: "rgba(255,255,255,0.75)",
                      fontFamily: "Open Sans, sans-serif",
                    }}
                  >
                    {sponsor.description}
                  </p>
                  <div
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-semibold"
                    style={{
                      backgroundColor: "rgba(244,123,32,0.15)",
                      color: "#FF9748",
                    }}
                  >
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
          <h3
            className="text-xl font-bold text-center mb-8 tracking-wide uppercase"
            style={{
              fontFamily: "Montserrat, sans-serif",
              color: "#5BB8F5",
              letterSpacing: "0.16em",
            }}
          >
            Platinum Partners
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {realSponsors.platinum.map((sponsor, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border text-center group transition-all duration-300"
                style={{
                  backgroundColor: "#1A3A6B",
                  borderColor: "rgba(255,255,255,0.10)",
                  boxShadow: "0 2px 12px rgba(11,30,61,0.12)",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.boxShadow =
                    "0 20px 40px rgba(11,30,61,0.30)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.boxShadow =
                    "0 2px 12px rgba(11,30,61,0.12)")
                }
              >
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="w-32 mx-auto object-contain rounded-lg"
                  />
                </div>
                <h4
                  className="text-lg font-bold mb-2"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    color: "#FFFFFF",
                  }}
                >
                  {sponsor.name}
                </h4>
                <p
                  className="text-xs mb-3"
                  style={{
                    color: "rgba(255,255,255,0.75)",
                    fontFamily: "Open Sans, sans-serif",
                  }}
                >
                  {sponsor.description}
                </p>
                <div
                  className="inline-block text-xs px-2 py-1 rounded-full"
                  style={{
                    backgroundColor: "rgba(244,123,32,0.15)",
                    color: "#FF9748",
                  }}
                >
                  {sponsor.tier}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Gold Sponsors */}
        <div className="mb-16">
          <h3
            className="text-lg font-bold text-center mb-8 tracking-wide uppercase"
            style={{
              fontFamily: "Montserrat, sans-serif",
              color: "#5BB8F5",
              letterSpacing: "0.16em",
            }}
          >
            Gold Partners
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {realSponsors.gold.map((sponsor, index) => (
              <div
                key={index}
                className="p-4 rounded-xl border text-center group transition-all duration-300"
                style={{
                  backgroundColor: "#1A3A6B",
                  borderColor: "rgba(255,255,255,0.10)",
                  boxShadow: "0 2px 8px rgba(11,30,61,0.10)",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.boxShadow =
                    "0 20px 40px rgba(11,30,61,0.25)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.boxShadow =
                    "0 2px 8px rgba(11,30,61,0.10)")
                }
              >
                <div className="mb-3 group-hover:scale-110 transition-transform duration-300">
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="w-32 mx-auto object-contain rounded-lg"
                  />
                </div>
                <h4
                  className="text-sm font-semibold mb-1"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    color: "#FFFFFF",
                  }}
                >
                  {sponsor.name}
                </h4>
                <p
                  className="text-xs mb-2"
                  style={{
                    color: "rgba(255,255,255,0.75)",
                    fontFamily: "Open Sans, sans-serif",
                  }}
                >
                  {sponsor.description}
                </p>
                <div
                  className="text-xs"
                  style={{ color: "rgba(255,255,255,0.45)" }}
                >
                  {sponsor.tier}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Partner With Us */}
        <div className="mb-16">
          <h3
            className="text-2xl font-black text-center mb-8"
            style={{ fontFamily: "Montserrat, sans-serif", color: "#FFFFFF" }}
          >
            Why Partner With SKF Goa River Marathon?
          </h3>
          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { stat: "30K+", label: "Total Reach" },
              { stat: "15+", label: "Years Experience" },
              { stat: "42+", label: "Countries" },
              { stat: "100%", label: "ROI Guaranteed" },
            ].map(({ stat, label }) => (
              <div
                key={label}
                className="p-6 text-center rounded-2xl border transition-all duration-300"
                style={{
                  backgroundColor: "#FFFFFF",
                  borderColor: "#e5e7eb",
                  boxShadow: "0 2px 12px rgba(11,30,61,0.08)",
                }}
              >
                <div
                  className="text-3xl font-black mb-2"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    color: "#1A6FB4",
                  }}
                >
                  {stat}
                </div>
                <div
                  className="text-sm font-medium"
                  style={{
                    fontFamily: "Open Sans, sans-serif",
                    color: "#0B1E3D",
                  }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div> */}
          <div className="bg-[#F47B20] w-full">
            <div className="max-w-[1200px] mx-auto px-[5vw] grid grid-cols-2 md:grid-cols-4">
              {trustItems.map((item, i) => (
                <div
                  key={i}
                  className={`flex flex-col items-center text-center py-6 px-4 gap-0.5
            ${i < trustItems.length - 1 ? "border-r border-white/20" : ""}`}
                >
                  <div className="font-['Montserrat'] text-[2rem] font-black text-white leading-none">
                    {item.num}
                  </div>
                  <div className="font-['Montserrat'] text-[0.72rem] font-semibold tracking-[0.12em] uppercase text-white/75">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Partnership Inquiry */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3
              className="text-2xl font-black mb-6"
              style={{ fontFamily: "Montserrat, sans-serif", color: "#FFFFFF" }}
            >
              Become a Partner
            </h3>
            <p
              className="mb-6"
              style={{
                color: "rgba(255,255,255,0.75)",
                fontFamily: "Open Sans, sans-serif",
                fontWeight: 300,
              }}
            >
              India's most scenic and fun focused marathon experience. Join us
              for an unforgettable journey along the beautiful ZUARI River.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5" style={{ color: "#2E8FD8" }} />
                <span
                  style={{
                    color: "rgba(255,255,255,0.75)",
                    fontFamily: "Open Sans, sans-serif",
                  }}
                >
                  info@goarivermarathon.com
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5" style={{ color: "#2E8FD8" }} />
                <span
                  style={{
                    color: "rgba(255,255,255,0.75)",
                    fontFamily: "Open Sans, sans-serif",
                  }}
                >
                  +91 7020142370
                </span>
              </div>
            </div>
          </div>

          <div
            className="p-6 rounded-2xl border"
            style={{ backgroundColor: "#122B55", borderColor: "#1A3A6B" }}
          >
            <form onSubmit={handleSponsorSubmit} className="space-y-4">
              <div>
                <Label
                  htmlFor="sponsor-name"
                  style={{
                    color: "rgba(255,255,255,0.75)",
                    fontFamily: "Open Sans, sans-serif",
                  }}
                >
                  Full Name
                </Label>
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
                  className="mt-1 border rounded-lg"
                  style={{
                    backgroundColor: "#1A3A6B",
                    borderColor: "rgba(255,255,255,0.15)",
                    color: "#FFFFFF",
                  }}
                />
              </div>
              <div>
                <Label
                  htmlFor="sponsor-email"
                  style={{
                    color: "rgba(255,255,255,0.75)",
                    fontFamily: "Open Sans, sans-serif",
                  }}
                >
                  Email
                </Label>
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
                  className="mt-1 border rounded-lg"
                  style={{
                    backgroundColor: "#1A3A6B",
                    borderColor: "rgba(255,255,255,0.15)",
                    color: "#FFFFFF",
                  }}
                />
              </div>
              <div>
                <Label
                  htmlFor="sponsor-company"
                  style={{
                    color: "rgba(255,255,255,0.75)",
                    fontFamily: "Open Sans, sans-serif",
                  }}
                >
                  Company/Organization
                </Label>
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
                  className="mt-1 border rounded-lg"
                  style={{
                    backgroundColor: "#1A3A6B",
                    borderColor: "rgba(255,255,255,0.15)",
                    color: "#FFFFFF",
                  }}
                />
              </div>
              <div>
                <Label
                  htmlFor="sponsor-message"
                  style={{
                    color: "rgba(255,255,255,0.75)",
                    fontFamily: "Open Sans, sans-serif",
                  }}
                >
                  Message
                </Label>
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
                  className="mt-1 border rounded-lg"
                  style={{
                    backgroundColor: "#1A3A6B",
                    borderColor: "rgba(255,255,255,0.15)",
                    color: "#FFFFFF",
                  }}
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-6 rounded-lg font-bold text-white transition-all duration-200 disabled:opacity-60"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  backgroundColor: "#F47B20",
                  boxShadow: "0 4px 14px rgba(244,123,32,0.35)",
                }}
                onMouseEnter={(e) =>
                  !isSubmitting &&
                  (e.currentTarget.style.backgroundColor = "#FF9748")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "#F47B20")
                }
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending...
                  </span>
                ) : (
                  "Send Partnership Inquiry"
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Partnership CTA */}
        <div className="p-8 rounded-2xl text-center bg-[#ffffff]">
          <Building2
            className="w-12 h-12 mx-auto mb-4"
            style={{ color: "#5BB8F5" }}
          />
          <h3
            className="text-2xl font-black mb-4"
            style={{ fontFamily: "Montserrat, sans-serif", color: "black" }}
          >
            Ready to Make an Impact?
          </h3>
          <p
            className="mb-6 max-w-2xl mx-auto"
            style={{
              color: "black",
              fontFamily: "Open Sans, sans-serif",
              fontWeight: 300,
            }}
          >
            Partner with us to reach 50,000+ engaged participants, boost brand
            visibility, and be part of India's most innovative marathon
            experience.
          </p>
          <button
            className="px-8 py-3 rounded-lg font-bold text-white transition-all duration-200"
            style={{
              fontFamily: "Montserrat, sans-serif",
              backgroundColor: "#F47B20",
              boxShadow: "0 4px 14px rgba(244,123,32,0.35)",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#FF9748")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#F47B20")
            }
          >
            Download Partnership Brochure
          </button>
        </div>
      </div>
    </section>
  );
};

export default EnhancedSponsorsSection;
