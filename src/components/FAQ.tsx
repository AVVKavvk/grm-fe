import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqSections = [
    {
      title: "Event Basics",
      items: [
        {
          question:
            "When and where is this year's SKF Goa River Marathon taking place?",
          answer:
            "The 16th edition of the SKF Goa River Marathon is happening on Sunday, 13th December 2026, in Chicalim village, Vasco da Gama, Goa — right by the Zuari River.",
        },
        {
          question: "What race categories can I register for?",
          answer:
            "You can choose your challenge:\n• Full Marathon – 42.195 KM\n• 20 Miler – 32 KM\n• Half Marathon – 21.1 KM\n• 10K Run\n• 5K Fun Walk",
        },
        {
          question: "What is the route like?",
          answer:
            "The SKF Goa River Marathon route runs parallel to Goa's stunning Zuari River. It's AIMS-certified, traffic-free for 6+ hours, and fully supported with hydration, medical stations, and cheering zones. Race officials, emergency vehicles, and photographers will be on hand to keep you safe and capture your best moments.",
        },
        {
          question: "Will the marathon take place if it rains?",
          answer:
            "Absolutely! Rain only adds to the adventure. The event will be held, rain or shine.",
        },
        {
          question: "What is the expected weather?",
          answer:
            "December in Goa usually brings pleasant winter sunshine, with temperatures between 20–28°C. Perfect running weather.",
        },
        {
          question: "Are international runners welcome?",
          answer:
            "Yes! We're proud to host runners from around the world — last year, participants came from 42 countries.",
        },
      ],
    },
    {
      title: "Registration & Discounts",
      items: [
        {
          question: "How do I register?",
          answer:
            "Registration is available online through the official website. Simply pick your race, fill in your details, and you're in!",
        },
        {
          question: "What discounts are available?",
          answer:
            "Two ways to save:\n• Early Bird Discount (15%) – available for the first two months of registration.\n• Group Discount (10%) – valid for groups of 10+ runners (applicable after the Early Bird window closes).",
        },
        {
          question: "What is the last date to register?",
          answer:
            "Online registrations close on 25th November 2025. For the 5K Fun Walk, limited spot registrations will be available at the Expo (12th & 13th December).",
        },
        {
          question: "Can I cancel, transfer, or change my registration?",
          answer:
            "• Cancellations/Transfers: Not allowed.\n• Category Change: Yes, until 14th November 2025. Upgrades require a fee difference + processing charge; downgrades are free but non-refundable.",
        },
        {
          question: "I had a payment issue. What should I do?",
          answer:
            "If your payment was debited but you didn't get a confirmation, email us at runnersingoa@gmail.com with your details. Refunds (if applicable) are processed within 3 working days.",
        },
      ],
    },
    {
      title: "Bibs, Timing & Kits",
      items: [
        {
          question: "Will I get a timing chip?",
          answer:
            "Yes — all participants in 42K, 32K, 21K, and 10K runs receive a bib with a timing chip. The 5K Fun Walk bib is without timing.",
        },
        {
          question: "Where and when do I collect my bib and kit?",
          answer:
            "At the Marathon Expo (12th & 13th December 2025) in Chicalim. Bring your photo ID and confirmation email. Please note: no race-day bib collection.",
        },
        {
          question: "Can someone else collect my bib for me?",
          answer: "Yes, with your signed authorization and a copy of your ID.",
        },
        {
          question: "What's inside the registration kit?",
          answer:
            "Your official bib, race-day t-shirt, and race instructions. Merchandise is available separately at the Expo and online store.",
        },
      ],
    },
    {
      title: "Start Times & Cut-Offs",
      items: [
        {
          question: "What are the start times and cut-offs for each race?",
          answer:
            "• 42K Marathon: 4:00 AM (Cut-off: 6 hrs / Prize cut-off: 5:30 hrs)\n• 32K (20 Miler): 4:30 AM (Cut-off: 5 hrs / Prize cut-off: 4:30 hrs)\n• 21K Half Marathon: 5:30 AM (Cut-off: 3:30 hrs / Prize cut-off: 2:45 hrs)\n• 10K Run: 6:15 AM (Cut-off: 90 mins / Prize cut-off: 75 mins)\n• 5K Fun Walk: No timing, just fun!",
        },
      ],
    },
    {
      title: "Logistics, Transport & Facilities",
      items: [
        {
          question: "Will roads be closed?",
          answer: "Yes. The route will be closed to traffic until 10:00 AM.",
        },
        {
          question: "What about baggage?",
          answer:
            "A baggage counter will be available. Please avoid leaving valuables.",
        },
        {
          question: "Will toilets be available on the route?",
          answer: "Yes, at multiple points.",
        },
        {
          question: "Lost & Found?",
          answer: "Available at the Baggage Counter.",
        },
      ],
    },
    {
      title: "Health & Safety",
      items: [
        {
          question: "Do I need a medical certificate?",
          answer:
            "No, but you must sign a medical fitness declaration during registration.",
        },
        {
          question: "Are medical facilities available?",
          answer:
            "Yes, medical stations and ambulances will be available throughout the course.",
        },
        {
          question: "I have a medical condition. Can I still run?",
          answer:
            "Please declare it during registration so our team can support you in case of emergencies.",
        },
      ],
    },
    {
      title: "Festival Add-Ons",
      items: [
        {
          question: "What is the Carb Loading Fiesta?",
          answer:
            "A pre-race evening of carb-loading and community! Enjoy pasta, music, and motivation. Separate registration required.",
        },

        {
          question: "Will there be after-race celebrations?",
          answer:
            "Yes! From prize distribution to cultural performances, the celebrations keep going.",
        },
      ],
    },
    {
      title: "Participation Rules",
      items: [
        {
          question: "What are the participation rules?",
          answer:
            "• Spectators: Welcome at cheering zones.\n• Wheelchair / Differently-abled categories: Not currently, but please contact organizers for support.\n• Prams/Strollers: Not allowed in 5K.\n• Pets: Not allowed at the venue or route for safety reasons.\n• Minimum Age:\n  - 42K / 32K / 21K: 18+\n  - 10K: 16+\n  - 5K: Open (children under 12 must be accompanied).",
        },
      ],
    },
    {
      title: "Volunteering & Community",
      items: [
        {
          question: "Can I volunteer?",
          answer: "Yes! Apply through the Volunteer section on our website.",
        },
        {
          question: "Will there be training runs before the marathon?",
          answer:
            "Yes, keep an eye on our website and social media for announcements.",
        },
      ],
    },
  ];

  return (
    <div
      className="min-h-screen md:mt-10 mt-8"
      style={{
        backgroundColor: "#0B1E3D",
        fontFamily: "Open Sans, sans-serif",
      }}
    >
      <div className="container mx-auto px-4 py-16 md:py-32">
        {/* Header */}
        <div className="text-center mb-12">
          <h1
            className="text-4xl md:text-5xl font-black mb-4"
            style={{ fontFamily: "Montserrat, sans-serif", color: "#FFFFFF" }}
          >
            Frequently Asked Questions
          </h1>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: "rgba(255,255,255,0.70)", fontWeight: 300 }}
          >
            Find answers to all your questions about the SKF Goa River Marathon
          </p>
        </div>

        {/* FAQ Sections */}
        <div className="max-w-4xl mx-auto space-y-6">
          {faqSections.map((section, sectionIndex) => (
            <div
              key={sectionIndex}
              className="rounded-2xl border overflow-hidden"
              style={{
                backgroundColor: "#122B55",
                borderColor: "#1A3A6B",
                boxShadow: "0 2px 16px rgba(11,30,61,0.20)",
              }}
            >
              {/* Section Header */}
              <div
                className="px-6 py-5"
                style={{
                  backgroundColor: "#1A3A6B",
                  borderBottom: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <h2
                  className="text-2xl font-black"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    color: "#5BB8F5",
                  }}
                >
                  {section.title}
                </h2>
                <p
                  className="text-sm mt-1"
                  style={{
                    color: "rgba(255,255,255,0.50)",
                    fontFamily: "Open Sans, sans-serif",
                  }}
                >
                  Essential information about {section.title.toLowerCase()}
                </p>
              </div>

              {/* Accordion */}
              <div className="px-6 py-2">
                <Accordion type="single" collapsible className="w-full">
                  {section.items.map((item, itemIndex) => (
                    <AccordionItem
                      key={itemIndex}
                      value={`item-${sectionIndex}-${itemIndex}`}
                      style={{ borderColor: "rgba(255,255,255,0.08)" }}
                    >
                      <AccordionTrigger
                        className="text-left py-4 font-semibold hover:no-underline"
                        style={{
                          fontFamily: "Montserrat, sans-serif",
                          color: "#FFFFFF",
                          fontSize: "0.95rem",
                        }}
                      >
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent>
                        <div
                          className="whitespace-pre-line pb-4 leading-relaxed"
                          style={{
                            color: "rgba(255,255,255,0.70)",
                            fontFamily: "Open Sans, sans-serif",
                            fontWeight: 300,
                          }}
                        >
                          {item.answer}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          ))}
        </div>

        {/* Still have questions */}
        <div className="text-center mt-12">
          <div
            className="max-w-2xl mx-auto rounded-2xl border p-8"
            style={{
              backgroundColor: "#122B55",
              borderColor: "#1A3A6B",
              boxShadow: "0 4px 24px rgba(11,30,61,0.25)",
            }}
          >
            <h2
              className="text-2xl font-black mb-2"
              style={{ fontFamily: "Montserrat, sans-serif", color: "#FFFFFF" }}
            >
              Still have questions?
            </h2>
            <p
              className="text-sm mb-6"
              style={{
                color: "rgba(255,255,255,0.55)",
                fontFamily: "Open Sans, sans-serif",
              }}
            >
              Our team is here to help you with any additional questions
            </p>
            <div
              className="space-y-2 text-sm"
              style={{
                color: "rgba(255,255,255,0.75)",
                fontFamily: "Open Sans, sans-serif",
              }}
            >
              <p>
                <strong style={{ color: "#FFFFFF" }}>Email:</strong>{" "}
                <a
                  href="mailto:runnersingoa@gmail.com"
                  style={{ color: "#2E8FD8" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.textDecoration = "underline")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.textDecoration = "none")
                  }
                >
                  runnersingoa@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
