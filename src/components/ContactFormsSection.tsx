import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Mail,
  Phone,
  MessageSquare,
  Building2,
  Users,
  ShoppingBag,
  Heart,
  Loader2,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useEmailStore } from "@/store/emailStore";

const ContactFormsSection = () => {
  const { toast } = useToast();
  const { sendEmail } = useEmailStore();
  const [activeForm, setActiveForm] = useState("general");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    category: "",
    budget: "",
    eventType: "",
    volunteerArea: "",
    availability: "",
  });

  // // Load reCAPTCHA v3 script
  // useEffect(() => {
  //   const script = document.createElement("script");
  //   script.src =
  //     "https://www.google.com/recaptcha/api.js?render=6LfX4NsrAAAAAEgmJaY9hCBEoF3by5k6sRNl-Rfq";
  //   script.async = true;
  //   script.defer = true;
  //   script.onload = () => {
  //     setRecaptchaLoaded(true);
  //     console.log("reCAPTCHA v3 loaded successfully");
  //   };
  //   document.body.appendChild(script);

  //   return () => {
  //     const existingScript = document.querySelector(
  //       'script[src*="recaptcha/api.js"]',
  //     );
  //     if (existingScript) {
  //       document.body.removeChild(existingScript);
  //     }
  //   };
  // }, []);

  const getFormTitle = (formType: string) => {
    const titles: { [key: string]: string } = {
      general: "General Inquiry",
      sponsor: "Sponsorship Inquiry",
      vendor: "Vendor Partnership Inquiry",
      group: "Group Registration Inquiry",
      volunteer: "Volunteer Application",
    };
    return titles[formType] || "Contact Form";
  };

  const formatEmailBody = () => {
    const formTypeTitle = getFormTitle(activeForm);
    let emailBody = `New ${formTypeTitle} Submission\n\n`;
    emailBody += `Contact Information:\n`;
    emailBody += `- Name: ${formData.name}\n`;
    emailBody += `- Email: ${formData.email}\n`;

    if (formData.phone) {
      emailBody += `- Phone: ${formData.phone}\n`;
    }

    if (
      formData.company &&
      (activeForm === "sponsor" || activeForm === "vendor")
    ) {
      emailBody += `- Company/Organization: ${formData.company}\n`;
    }

    emailBody += `\n`;

    // Add form-specific details
    if (activeForm === "sponsor") {
      if (formData.category) {
        emailBody += `Sponsorship Details:\n`;
        emailBody += `- Category: ${formData.category}\n`;
      }
      if (formData.budget) {
        emailBody += `- Budget Range: ${formData.budget}\n`;
      }
      emailBody += `\n`;
    }

    if (activeForm === "group" && formData.eventType) {
      emailBody += `Group Details:\n`;
      emailBody += `- Group Type: ${formData.eventType}\n\n`;
    }

    if (activeForm === "volunteer") {
      if (formData.volunteerArea) {
        emailBody += `Volunteer Preferences:\n`;
        emailBody += `- Preferred Area: ${formData.volunteerArea}\n`;
      }
      if (formData.availability) {
        emailBody += `- Availability: ${formData.availability}\n`;
      }
      emailBody += `\n`;
    }

    emailBody += `Message:\n${formData.message}\n\n`;
    emailBody += `---\n`;
    emailBody += `This email was automatically generated from the SKF Goa River Marathon contact form.\n`;
    emailBody += `Form Type: ${formTypeTitle}`;

    return emailBody;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // if (!recaptchaLoaded) {
    //   toast({
    //     title: "Error",
    //     description: "reCAPTCHA not loaded yet. Please try again.",
    //     variant: "destructive",
    //   });
    //   return;
    // }

    setIsSubmitting(true);

    try {
      // Execute reCAPTCHA
      // const token = await (window as any).grecaptcha.execute(
      //   "6LfX4NsrAAAAAEgmJaY9hCBEoF3by5k6sRNl-Rfq",
      //   { action: "submit_contact_form" }
      // );

      // console.log("reCAPTCHA token obtained:", token);

      // Prepare email data
      const emailData = {
        client_email:
          import.meta.env.VITE_DEFAULT_EMAIL || "runnersingoa@gmail.com",
        subject: `${getFormTitle(activeForm)} - ${formData.name}`,
        body: formatEmailBody(),
      };

      // Send email using your email store
      const result = await sendEmail(emailData);

      if (result) {
        toast({
          title: "Form Submitted Successfully!",
          description:
            "Thank you for your inquiry. We'll get back to you within 24 hours.",
        });

        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          message: "",
          category: "",
          budget: "",
          eventType: "",
          volunteerArea: "",
          availability: "",
        });

        // Reset reCAPTCHA
        // (window as any).grecaptcha?.reset();
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      // toast({
      //   title: "Submission Failed",
      //   description:
      //     "There was an error submitting your form. Please try again or contact us directly.",
      //   variant: "destructive",
      // });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const contactTypes = [
    {
      id: "general",
      title: "General Inquiry",
      icon: MessageSquare,
      description:
        "Questions about the marathon, registration, or general information",
    },
    {
      id: "sponsor",
      title: "Sponsorship Opportunities",
      icon: Building2,
      description:
        "Partner with us and reach thousands of health-conscious participants",
    },
    {
      id: "vendor",
      title: "Vendor Partnership",
      icon: ShoppingBag,
      description:
        "Food vendors, merchandise, or service providers interested in collaboration",
    },
    {
      id: "group",
      title: "Group Registration",
      icon: Users,
      description:
        "Corporate teams, running clubs, or large group registrations",
    },
    {
      id: "volunteer",
      title: "Volunteer with Us",
      icon: Heart,
      description:
        "Join our team and be part of creating an unforgettable marathon experience",
    },
  ];

  return (
    <section className="pt-28 md:pt-36">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{
              backgroundColor: "rgba(244,123,32,0.15)",
              color: "#F47B30",
            }}
          >
            <Mail className="w-4 h-4" />
            <span
              className="text-sm font-semibold tracking-widest uppercase"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Get In Touch
            </span>
          </div>
          <h2
            className="text-4xl md:text-5xl font-black mb-6"
            style={{ fontFamily: "Montserrat, sans-serif", color: "#FFFFFF" }}
          >
            Let's <span className="text-[#F47B20]">Connect</span>
          </h2>
          <p
            className="text-xl max-w-3xl mx-auto"
            style={{
              color: "rgba(255,255,255,0.75)",
              fontFamily: "Open Sans, sans-serif",
              fontWeight: 300,
            }}
          >
            Have questions or want to be part of our marathon family? We'd love
            to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Type Selection */}
          <div className="space-y-4">
            <h3
              className="text-lg font-bold mb-4"
              style={{ fontFamily: "Montserrat, sans-serif", color: "#FFFFFF" }}
            >
              How can we help you?
            </h3>
            {contactTypes.map((type) => (
              <div
                key={type.id}
                className="p-4 rounded-xl border cursor-pointer transition-all duration-200"
                style={{
                  backgroundColor:
                    activeForm === type.id ? "#122B55" : "rgba(26,58,107,0.40)",
                  borderColor:
                    activeForm === type.id
                      ? "#1A6FB4"
                      : "rgba(255,255,255,0.10)",
                  boxShadow:
                    activeForm === type.id
                      ? "0 4px 16px rgba(11,30,61,0.25)"
                      : "none",
                }}
                onClick={() => setActiveForm(type.id)}
              >
                <div className="flex items-start gap-3">
                  <type.icon
                    className="w-5 h-5 mt-1"
                    style={{
                      color:
                        activeForm === type.id
                          ? "#5BB8F5"
                          : "rgba(255,255,255,0.45)",
                    }}
                  />
                  <div>
                    <h4
                      className="font-bold mb-1"
                      style={{
                        fontFamily: "Montserrat, sans-serif",
                        color: activeForm === type.id ? "#5BB8F5" : "#FFFFFF",
                      }}
                    >
                      {type.title}
                    </h4>
                    <p
                      className="text-sm"
                      style={{
                        color: "rgba(255,255,255,0.60)",
                        fontFamily: "Open Sans, sans-serif",
                      }}
                    >
                      {type.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div
              className="p-8 rounded-2xl border"
              style={{ backgroundColor: "#122B55", borderColor: "#1A3A6B" }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold mb-2"
                      style={{
                        fontFamily: "Open Sans, sans-serif",
                        color: "rgba(255,255,255,0.75)",
                      }}
                    >
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) =>
                        handleInputChange("name", e.target.value)
                      }
                      required
                      className="border rounded-lg"
                      style={{
                        backgroundColor: "#1A3A6B",
                        borderColor: "rgba(255,255,255,0.15)",
                        color: "#FFFFFF",
                      }}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold mb-2"
                      style={{
                        fontFamily: "Open Sans, sans-serif",
                        color: "rgba(255,255,255,0.75)",
                      }}
                    >
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      required
                      className="border rounded-lg"
                      style={{
                        backgroundColor: "#1A3A6B",
                        borderColor: "rgba(255,255,255,0.15)",
                        color: "#FFFFFF",
                      }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-semibold mb-2"
                      style={{
                        fontFamily: "Open Sans, sans-serif",
                        color: "rgba(255,255,255,0.75)",
                      }}
                    >
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) =>
                        handleInputChange("phone", e.target.value)
                      }
                      className="border rounded-lg"
                      style={{
                        backgroundColor: "#1A3A6B",
                        borderColor: "rgba(255,255,255,0.15)",
                        color: "#FFFFFF",
                      }}
                    />
                  </div>
                  {(activeForm === "sponsor" || activeForm === "vendor") && (
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-semibold mb-2"
                        style={{
                          fontFamily: "Open Sans, sans-serif",
                          color: "rgba(255,255,255,0.75)",
                        }}
                      >
                        Company/Organization
                      </label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) =>
                          handleInputChange("company", e.target.value)
                        }
                        className="border rounded-lg"
                        style={{
                          backgroundColor: "#1A3A6B",
                          borderColor: "rgba(255,255,255,0.15)",
                          color: "#FFFFFF",
                        }}
                      />
                    </div>
                  )}
                </div>

                {activeForm === "sponsor" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="category"
                        className="block text-sm font-semibold mb-2"
                        style={{
                          fontFamily: "Open Sans, sans-serif",
                          color: "rgba(255,255,255,0.75)",
                        }}
                      >
                        Sponsorship Category
                      </label>
                      <Select
                        onValueChange={(value) =>
                          handleInputChange("category", value)
                        }
                        value={formData.category}
                      >
                        <SelectTrigger
                          className="border rounded-lg mt-0"
                          style={{
                            backgroundColor: "#1A3A6B",
                            borderColor: "rgba(255,255,255,0.15)",
                            color: "#FFFFFF",
                          }}
                        >
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent className="bg-white text-black cursor-pointer">
                          <SelectItem value="title">Title Sponsor</SelectItem>
                          <SelectItem value="platinum">
                            Platinum Partner
                          </SelectItem>
                          <SelectItem value="gold">Gold Partner</SelectItem>
                          <SelectItem value="silver">Silver Partner</SelectItem>
                          <SelectItem value="custom">Custom Package</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label
                        htmlFor="budget"
                        className="block text-sm font-semibold mb-2"
                        style={{
                          fontFamily: "Open Sans, sans-serif",
                          color: "rgba(255,255,255,0.75)",
                        }}
                      >
                        Budget Range
                      </label>
                      <Select
                        onValueChange={(value) =>
                          handleInputChange("budget", value)
                        }
                        value={formData.budget}
                      >
                        <SelectTrigger
                          className="border rounded-lg mt-0"
                          style={{
                            backgroundColor: "#1A3A6B",
                            borderColor: "rgba(255,255,255,0.15)",
                            color: "#FFFFFF",
                          }}
                        >
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent className="bg-white text-black cursor-pointer">
                          <SelectItem value="1-5">₹1-5 Lakhs</SelectItem>
                          <SelectItem value="5-10">₹5-10 Lakhs</SelectItem>
                          <SelectItem value="10-25">₹10-25 Lakhs</SelectItem>
                          <SelectItem value="25+">₹25+ Lakhs</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                )}

                {activeForm === "group" && (
                  <div>
                    <label
                      htmlFor="eventType"
                      className="block text-sm font-semibold mb-2"
                      style={{
                        fontFamily: "Open Sans, sans-serif",
                        color: "rgba(255,255,255,0.75)",
                      }}
                    >
                      Group Type
                    </label>
                    <Select
                      onValueChange={(value) =>
                        handleInputChange("eventType", value)
                      }
                      value={formData.eventType}
                    >
                      <SelectTrigger
                        className="border rounded-lg mt-0"
                        style={{
                          backgroundColor: "#1A3A6B",
                          borderColor: "rgba(255,255,255,0.15)",
                          color: "#FFFFFF",
                        }}
                      >
                        <SelectValue placeholder="Select group type" />
                      </SelectTrigger>
                      <SelectContent className="bg-white text-black cursor-pointer">
                        <SelectItem value="corporate">
                          Corporate Team
                        </SelectItem>
                        <SelectItem value="club">Running Club</SelectItem>
                        <SelectItem value="charity">
                          Charity Organization
                        </SelectItem>
                        <SelectItem value="friends">Friends Group</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                )}

                {activeForm === "volunteer" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="volunteerArea"
                        className="block text-sm font-semibold mb-2"
                        style={{
                          fontFamily: "Open Sans, sans-serif",
                          color: "rgba(255,255,255,0.75)",
                        }}
                      >
                        Preferred Volunteer Area
                      </label>
                      <Select
                        onValueChange={(value) =>
                          handleInputChange("volunteerArea", value)
                        }
                        value={formData.volunteerArea}
                      >
                        <SelectTrigger
                          className="border rounded-lg mt-0"
                          style={{
                            backgroundColor: "#1A3A6B",
                            borderColor: "rgba(255,255,255,0.15)",
                            color: "#FFFFFF",
                          }}
                        >
                          <SelectValue placeholder="Select area" />
                        </SelectTrigger>
                        <SelectContent className="bg-white text-black cursor-pointer">
                          <SelectItem value="registration">
                            Registration & Check-in
                          </SelectItem>
                          <SelectItem value="hydration">
                            Hydration Stations
                          </SelectItem>
                          <SelectItem value="course">Course Marshal</SelectItem>
                          <SelectItem value="medical">
                            Medical Support
                          </SelectItem>
                          <SelectItem value="finish">
                            Finish Line Support
                          </SelectItem>
                          <SelectItem value="photography">
                            Photography/Media
                          </SelectItem>
                          <SelectItem value="events">
                            Event Management
                          </SelectItem>
                          <SelectItem value="any">
                            Any Area (Flexible)
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label
                        htmlFor="availability"
                        className="block text-sm font-semibold mb-2"
                        style={{
                          fontFamily: "Open Sans, sans-serif",
                          color: "rgba(255,255,255,0.75)",
                        }}
                      >
                        Availability
                      </label>
                      <Select
                        onValueChange={(value) =>
                          handleInputChange("availability", value)
                        }
                        value={formData.availability}
                      >
                        <SelectTrigger
                          className="border rounded-lg mt-0"
                          style={{
                            backgroundColor: "#1A3A6B",
                            borderColor: "rgba(255,255,255,0.15)",
                            color: "#FFFFFF",
                          }}
                        >
                          <SelectValue placeholder="Select availability" />
                        </SelectTrigger>
                        <SelectContent className="bg-white text-black cursor-pointer">
                          <SelectItem value="race-day">
                            Race Day Only (Dec 15)
                          </SelectItem>
                          <SelectItem value="full-weekend">
                            Full Weekend (Dec 14-15)
                          </SelectItem>
                          <SelectItem value="pre-event">
                            Pre-Event Setup (Dec 13-14)
                          </SelectItem>
                          <SelectItem value="all-days">
                            All Days (Dec 13-16)
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                )}

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold mb-2"
                    style={{
                      fontFamily: "Open Sans, sans-serif",
                      color: "rgba(255,255,255,0.75)",
                    }}
                  >
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      handleInputChange("message", e.target.value)
                    }
                    required
                    rows={4}
                    placeholder="Tell us more about your inquiry..."
                    className="border rounded-lg"
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
                  className="w-full py-3 px-6 rounded-lg font-bold text-white text-lg transition-all duration-200 disabled:opacity-50"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    backgroundColor: "#F47B20",
                    boxShadow: "0 4px 14px rgba(244,123,32,0.35)",
                  }}
                  onMouseEnter={(e) => {
                    if (!isSubmitting)
                      e.currentTarget.style.backgroundColor = "#FF9748";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#F47B20";
                  }}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </button>

                <p
                  className="text-xs text-center"
                  style={{
                    color: "rgba(255,255,255,0.40)",
                    fontFamily: "Open Sans, sans-serif",
                  }}
                >
                  This site is protected by reCAPTCHA and the Google{" "}
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#2E8FD8" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.textDecoration = "underline")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.textDecoration = "none")
                    }
                  >
                    Privacy Policy
                  </a>{" "}
                  and{" "}
                  <a
                    href="https://policies.google.com/terms"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#2E8FD8" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.textDecoration = "underline")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.textDecoration = "none")
                    }
                  >
                    Terms of Service
                  </a>{" "}
                  apply.
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* Contact Info Cards */}
      </div>
      <div className=" bg-white  grid grid-cols-1 md:grid-cols-3 py-5 gap-8 mt-20">
        {[
          {
            icon: Mail,
            title: "Email Us",
            lines: [
              "runnersingoa@gmail.com",
              "support@skfgoarivermarathon.com",
            ],
          },
          {
            icon: Phone,
            title: "Call Us",
            lines: ["+91 7020142370", "WhatsApp: +91 7020142370"],
          },
          {
            icon: Building2,
            title: "Visit Us",
            lines: [
              "Vasco Sports Club",
              "Ground Floor, Rukmini Towers",
              "Opp. Tilak Maidan, Vasco da Gama",
              "403 802 GOA",
            ],
          },
        ].map(({ icon: Icon, title, lines }) => (
          <div
            key={title}
            className="p-6 rounded-2xl border text-center text-black transition-all duration-300"
            onMouseEnter={(e) =>
              (e.currentTarget.style.boxShadow =
                "0 20px 40px rgba(11,30,61,0.30)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.boxShadow =
                "0 2px 12px rgba(11,30,61,0.15)")
            }
          >
            <Icon
              className="w-8 h-8 mx-auto mb-4"
              style={{ color: "#2E8FD8" }}
            />
            <h3
              className="font-bold mb-3"
              style={{
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              {title}
            </h3>
            {lines.map((line, i) => (
              <p
                key={i}
                className="text-sm"
                style={{
                  fontFamily: "Open Sans, sans-serif",
                  fontWeight: 300,
                }}
              >
                {line}
              </p>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContactFormsSection;
