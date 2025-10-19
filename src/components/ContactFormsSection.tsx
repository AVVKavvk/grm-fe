import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
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

const ContactFormsSection = () => {
  const { toast } = useToast();
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

  // Load reCAPTCHA script
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://www.google.com/recaptcha/api.js?render=6LfX4NsrAAAAAEgmJaY9hCBEoF3by5k6sRNl-Rfq";
    script.async = true;
    script.defer = true;
    script.onload = () => setRecaptchaLoaded(true);
    document.body.appendChild(script);

    return () => {
      const existingScript = document.querySelector(
        'script[src*="recaptcha/api.js"]'
      );
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!recaptchaLoaded) {
      toast({
        title: "Error",
        description: "reCAPTCHA not loaded yet. Please try again.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Prepare email data
      const emailData = {
        to: "support@skfgoarivermarathon.com",
        subject: `${getFormTitle(activeForm)} - ${formData.name}`,
        formType: activeForm,
        ...formData,
      };

      // Send to your backend API endpoint
      // const response = await fetch("/api/contact", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(emailData),
      // });

      // if (response.ok) {
      //   toast({
      //     title: "Form Submitted Successfully!",
      //     description:
      //       "Thank you for your inquiry. We'll get back to you within 24 hours.",
      //   });

      //   // Reset form
      //   setFormData({
      //     name: "",
      //     email: "",
      //     phone: "",
      //     company: "",
      //     message: "",
      //     category: "",
      //     budget: "",
      //     eventType: "",
      //     volunteerArea: "",
      //     availability: "",
      //   });

      //   // Reset reCAPTCHA
      //   (window as any).grecaptcha?.reset();
      // } else {
      //   throw new Error("Failed to submit form");
      // }
    } catch (error) {
      toast({
        title: "Submission Failed",
        description:
          "There was an error submitting your form. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
    <section className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full mb-6">
            <Mail className="w-4 h-4" />
            <span className="text-sm font-medium">Get In Touch</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's
            <span className="bg-gradient-ocean bg-clip-text text-transparent">
              {" "}
              Connect
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have questions or want to be part of our marathon family? We'd love
            to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Type Selection */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">How can we help you?</h3>
            {contactTypes.map((type) => (
              <Card
                key={type.id}
                className={`p-4 cursor-pointer transition-smooth hover:shadow-medium ${
                  activeForm === type.id ? "border-primary bg-primary/5" : ""
                }`}
                onClick={() => setActiveForm(type.id)}
              >
                <div className="flex items-start gap-3">
                  <type.icon
                    className={`w-5 h-5 mt-1 ${
                      activeForm === type.id
                        ? "text-primary"
                        : "text-muted-foreground"
                    }`}
                  />
                  <div>
                    <h4
                      className={`font-medium mb-1 ${
                        activeForm === type.id
                          ? "text-primary"
                          : "text-foreground"
                      }`}
                    >
                      {type.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {type.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) =>
                        handleInputChange("name", e.target.value)
                      }
                      required
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      required
                      className="mt-2"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) =>
                        handleInputChange("phone", e.target.value)
                      }
                      className="mt-2"
                    />
                  </div>
                  {(activeForm === "sponsor" || activeForm === "vendor") && (
                    <div>
                      <Label htmlFor="company">Company/Organization</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) =>
                          handleInputChange("company", e.target.value)
                        }
                        className="mt-2"
                      />
                    </div>
                  )}
                </div>

                {activeForm === "sponsor" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="category">Sponsorship Category</Label>
                      <Select
                        onValueChange={(value) =>
                          handleInputChange("category", value)
                        }
                      >
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
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
                      <Label htmlFor="budget">Budget Range</Label>
                      <Select
                        onValueChange={(value) =>
                          handleInputChange("budget", value)
                        }
                      >
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
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
                    <Label htmlFor="eventType">Group Type</Label>
                    <Select
                      onValueChange={(value) =>
                        handleInputChange("eventType", value)
                      }
                    >
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select group type" />
                      </SelectTrigger>
                      <SelectContent>
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
                      <Label htmlFor="volunteerArea">
                        Preferred Volunteer Area
                      </Label>
                      <Select
                        onValueChange={(value) =>
                          handleInputChange("volunteerArea", value)
                        }
                      >
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select area" />
                        </SelectTrigger>
                        <SelectContent>
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
                      <Label htmlFor="availability">Availability</Label>
                      <Select
                        onValueChange={(value) =>
                          handleInputChange("availability", value)
                        }
                      >
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select availability" />
                        </SelectTrigger>
                        <SelectContent>
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
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      handleInputChange("message", e.target.value)
                    }
                    required
                    rows={4}
                    className="mt-2"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                {/* Google reCAPTCHA */}
                <div className="flex justify-center">
                  <div
                    className="g-recaptcha"
                    data-sitekey="6LfX4NsrAAAAAEgmJaY9hCBEoF3by5k6sRNl-Rfq"
                  ></div>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting || !recaptchaLoaded}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  This site is protected by reCAPTCHA and the Google{" "}
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Privacy Policy
                  </a>{" "}
                  and{" "}
                  <a
                    href="https://policies.google.com/terms"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Terms of Service
                  </a>{" "}
                  apply.
                </p>
              </form>
            </Card>
          </div>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <Card className="p-6 text-center">
            <Mail className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Email Us</h3>
            <p className="text-sm text-muted-foreground mb-2">
              runnersingoa@gmail.com
            </p>
            <p className="text-sm text-muted-foreground">
              support@skfgoarivermarathon.com
            </p>
          </Card>

          <Card className="p-6 text-center">
            <Phone className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Call Us</h3>
            <p className="text-sm text-muted-foreground mb-2">+91 7020142370</p>
            <p className="text-sm text-muted-foreground">
              WhatsApp: +91 7020142370
            </p>
          </Card>

          <Card className="p-6 text-center">
            <Building2 className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Visit Us</h3>
            <p className="text-sm text-muted-foreground">Vasco Sports Club</p>
            <p className="text-sm text-muted-foreground">
              Ground Floor, Rukmini Towers
            </p>
            <p className="text-sm text-muted-foreground">
              Opp. Tilak Maidan, Vasco da Gama
            </p>
            <p className="text-sm text-muted-foreground">403 802 GOA</p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactFormsSection;
