import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  ArrowRight,
  Star,
  Users,
  Calendar,
  Gift,
  Clock,
  AlertTriangle,
  Building,
} from "lucide-react";
import { useState } from "react";
import CountdownTimer from "./CountdownTimer";

const RegistrationSection = () => {
  const [selectedPlan, setSelectedPlan] = useState("half");

  const pricingPhases = [
    { phase: "Festival Offer", endDate: "2025-10-15", discount: "₹500 OFF" },
    { phase: "Regular", endDate: "2025-12-31", discount: "₹300 OFF" },
    { phase: "Last Call", endDate: "2026-01-15", discount: "₹100 OFF" },
  ];

  const plans = [
    {
      id: "full",
      name: "Full Marathon",
      distance: "42.2 KM",
      price: "₹2,676",
      originalPrice: "₹2,973",
      nextPrice: "₹2,800",
      popular: false,
      features: [
        "Professional timing chip",
        "GPS tracking & live analytics",
        "Finisher medal & certificate",
        "Technical running t-shirt",
        "Post-race nutrition package",
        "Medical support throughout",
        "Digital race photos",
        "Training plan access",
      ],
    },
    {
      id: "half",
      name: "Half Marathon",
      distance: "21.1 KM",
      price: "₹2,155",
      originalPrice: "₹2,395",
      nextPrice: "₹2,200",
      popular: true,
      features: [
        "Professional timing chip",
        "GPS tracking & analytics",
        "Finisher medal & certificate",
        "Technical running t-shirt",
        "Post-race refreshments",
        "Medical support",
        "Digital race photos",
        "Training guidance",
      ],
    },
    {
      id: "10k",
      name: "10K Run",
      distance: "10 KM",
      price: "₹1,491",
      originalPrice: "₹1,657",
      nextPrice: "₹1,550",
      popular: false,
      features: [
        "Digital timing system",
        "Basic GPS tracking",
        "Finisher medal",
        "Event t-shirt",
        "Refreshment station",
        "Medical support",
        "Digital certificate",
      ],
    },
  ];

  const benefits = [
    {
      icon: <Star className="w-6 h-6" />,
      title: "Festival Offer",
      description: "Save up to ₹500 with our limited-time festival offer",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Group Discounts",
      description: "Register 10+ people together and get additional 10% off",
    },
    {
      icon: <Gift className="w-6 h-6" />,
      title: "Combo Packages",
      description:
        "Ultimate Experience Package includes marathon + both special events",
    },
    {
      icon: <Building className="w-6 h-6" />,
      title: "For Corporates",
      description:
        "Special corporate packages with team building activities and bulk registration benefits",
    },
  ];

  return (
    <section id="registration" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-red-500/10 text-red-600 px-4 py-2 rounded-full mb-6">
            <AlertTriangle className="w-4 h-4" />
            <span className="text-sm font-medium">Price Increases Soon!</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Secure Your
            <span className="bg-gradient-sunset bg-clip-text text-transparent">
              {" "}
              Spot Today
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Join the tech revolution in marathon running. Festival offer pricing
            ends soon – don’t miss out on this incredible opportunity.
          </p>

          {/* Pricing Urgency Timer */}
          <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20 p-6 rounded-xl border border-red-200 dark:border-red-800 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Clock className="w-5 h-5 text-red-600" />
              <span className="text-lg font-bold text-red-600">
                Festival Offer Ends In:
              </span>
            </div>
            <CountdownTimer targetDate="2025-10-15T23:59:59" />
            <div className="mt-4 text-sm text-red-600/80">
              Prices increase by ₹300–500 after October 15th
            </div>
          </div>
        </div>

        {/* Registration Plans */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative bg-card p-8 rounded-xl border-2 transition-all cursor-pointer ${
                selectedPlan === plan.id
                  ? "border-primary shadow-strong scale-105"
                  : "border-border shadow-soft hover:shadow-medium"
              } ${plan.popular ? "ring-2 ring-accent/20" : ""}`}
              onClick={() => setSelectedPlan(plan.id)}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {plan.name}
                </h3>
                <div className="text-lg text-muted-foreground mb-4">
                  {plan.distance}
                </div>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-primary">
                    {plan.price}
                  </span>
                  <span className="text-lg text-muted-foreground line-through ml-2">
                    {plan.originalPrice}
                  </span>
                </div>
                <div className="text-sm text-accent font-semibold mb-2">
                  Festival Offer Price
                </div>
                <div className="text-xs text-red-600 font-medium">
                  Next: {plan.nextPrice} (After Oct 15)
                </div>
              </div>

              {/* Features */}
              <div className="space-y-3 mb-8">
                {plan.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Button
                variant={selectedPlan === plan.id ? "hero" : "outline"}
                className="w-full"
              >
                {selectedPlan === plan.id ? "Selected" : "Select Plan"}
              </Button>
            </div>
          ))}
        </div>

        {/* Registration CTA */}
        <div className="bg-gradient-ocean p-8 rounded-2xl shadow-strong text-center mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            Ready to Run the Future?
          </h3>
          <p className="text-primary-foreground/80 mb-6 text-lg max-w-2xl mx-auto">
            Complete your registration now and be part of India's most
            technologically advanced marathon experience.
          </p>
          <Button
            variant="hero"
            size="lg"
            className="bg-background text-foreground hover:bg-background/90"
          >
            Complete Registration
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="text-center p-6 bg-card rounded-lg border border-border shadow-soft"
            >
              <div className="text-primary mb-4 flex justify-center">
                {benefit.icon}
              </div>
              <h4 className="font-bold text-foreground mb-2">
                {benefit.title}
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="text-center mt-16 p-6 bg-muted/50 rounded-lg border border-border">
          <h4 className="font-bold text-foreground mb-2">Need Help?</h4>
          <p className="text-muted-foreground mb-4">
            Our registration team is here to assist you with any questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+91 7020142370"
              className="text-primary hover:underline"
            >
              📞 +91 7020142370
            </a>
            <a
              href="mailto:register@goarivermarathon.com"
              className="text-primary hover:underline"
            >
              ✉️ register@goarivermarathon.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationSection;
