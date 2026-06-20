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
          question: "Will race photographs be available after the event?",
          answer:
            "Absolutely! Our professional photography team will be stationed at multiple locations along the course, capturing your race journey—from the excitement at the start line and action shots along the route to your triumphant finish-line moment. These high-quality photographs will be available for viewing and purchase on the SKF Goa River Marathon website a few days after the event, giving you a lasting memory of your achievement. ",
        },
        {
          question: "Will the marathon take place if it rains?",
          answer:
            "Absolutely! Rain only adds to the adventure. The event will be held, rain or shine.",
        },
        {
          question: "Where can I see timing results of my previous races?",
          answer: (
            <>
              You can find previous results at{" "}
              <a
                href="https://ifinish.in/eventresult"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F47B20] underline"
              >
                ifinish.in/eventresult
              </a>{" "}
              by searching for year and event name "SKF Goa".
            </>
          ),
        },
        {
          question: "Where can I find previous years photos?",
          answer: (
            <>
              You can find last year's photos at{" "}
              <a
                href="https://ifinish.in/photos/searchPhotos"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F47B20] underline"
              >
                ifinish.in/photos/searchPhotos
              </a>
              .
            </>
          ),
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
          question:
            "Can I cancel my registration, transfer it to another participant, defer it to a future event, or receive a refund?",
          answer:
            "No. All registrations for the SKF Goa River Marathon are final. Registrations cannot be cancelled, transferred to another participant, deferred to a future edition of the event, or refunded under any circumstances. \n This policy is necessary because significant event-related costs are incurred immediately after registration, including race planning, participant services, bib and timing chip allocation, medals, T-shirts, hydration and medical arrangements, venue and logistics commitments, and other operational expenses. These costs are planned and committed based on confirmed participant numbers well in advance of race day. \n\n  By completing your registration, you acknowledge and accept this no-transfer, no-deferment, and no-refund policy. We encourage participants to register only when reasonably certain of their ability to attend and participate.",
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
          question:
            "Will all prize winners be announced and awarded on race day?",
          answer:
            "No. Only the Open Category winners will be tabulated, announced, and awarded on race day. Please note that these results can only be finalized after all events have concluded and the necessary timing data has been processed. \n For all other categories, results will be subject to post-race verification, including age-category eligibility and other checks. Once verification is complete, winners will be notified directly regarding prize collection.",
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
      className="min-h-screen md:mt-20 mt-16"
      style={{
        backgroundColor: "#FFFFFF",
        fontFamily: "Open Sans, sans-serif",
      }}
    >
      {/* Hero Header */}
      <div className="bg-[#0B1E3D] py-16 md:py-20 px-4 text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-['Montserrat'] font-extrabold text-4xl md:text-5xl text-white mb-5">
            Frequently Asked <span className="text-[#F47B20]">Questions</span>
          </h2>

          <p
            className="text-lg font-light"
            style={{ color: "rgba(255,255,255,0.75)" }}
          >
            Find answers to all your questions about the SKF Goa River Marathon
          </p>
        </div>
      </div>

      {/* Alternating FAQ Sections */}
      <div className="flex flex-col w-full">
        {faqSections.map((section, sectionIndex) => {
          // Alternates between dark and light themes based on index
          const isDark = Math.floor(sectionIndex / 2) % 2 === 0;

          return (
            <div
              key={sectionIndex}
              className="w-full py-8 px-4"
              style={{
                backgroundColor: isDark ? "#0B1E3D" : "#F4F7FB",
              }}
            >
              <div className="max-w-6xl mx-auto">
                {/* Section Title */}
                <div className="mb-8">
                  <h2
                    className="text-3xl font-black"
                    style={{
                      color: isDark ? "#5BB8F5" : "#122B55",
                    }}
                  >
                    {section.title}
                  </h2>
                  <p
                    className="text-sm mt-2"
                    style={{
                      color: isDark
                        ? "rgba(255,255,255,0.60)"
                        : "rgba(11,30,61,0.60)",
                    }}
                  >
                    Essential information about {section.title.toLowerCase()}
                  </p>
                </div>

                {/* Accordion Container */}
                <div
                  className="rounded-2xl border overflow-hidden"
                  style={{
                    backgroundColor: isDark ? "#122B55" : "#FFFFFF",
                    borderColor: isDark
                      ? "rgba(255,255,255,0.1)"
                      : "rgba(11,30,61,0.1)",
                    boxShadow: isDark
                      ? "0 4px 20px rgba(0,0,0,0.3)"
                      : "0 4px 20px rgba(11,30,61,0.05)",
                  }}
                >
                  <Accordion
                    type="single"
                    collapsible
                    className="w-full px-6 py-2"
                  >
                    {section.items.map((item, itemIndex) => (
                      <AccordionItem
                        key={itemIndex}
                        value={`item-${sectionIndex}-${itemIndex}`}
                        style={{
                          borderColor: isDark
                            ? "rgba(255,255,255,0.08)"
                            : "rgba(11,30,61,0.08)",
                        }}
                      >
                        <AccordionTrigger
                          className="text-left py-5 font-semibold hover:no-underline text-[1rem]"
                          style={{
                            fontFamily: "Montserrat, sans-serif",
                            color: isDark ? "#FFFFFF" : "#0B1E3D",
                          }}
                        >
                          {item.question}
                        </AccordionTrigger>
                        <AccordionContent>
                          <div
                            className="whitespace-pre-line pb-6 leading-relaxed"
                            style={{
                              color: isDark
                                ? "rgba(255,255,255,0.75)"
                                : "rgba(11,30,61,0.75)",
                              fontWeight: 400,
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
            </div>
          );
        })}
      </div>

      {/* Still have questions - Matches the final alternating band pattern */}
      <div
        className="w-full py-16 px-4 text-center"
        style={{
          backgroundColor:
            Math.floor((faqSections.length - 1) / 2) % 2 === 0
              ? "#0B1E3D"
              : "#F4F7FB",
        }}
      >
        <div
          className="max-w-2xl mx-auto rounded-2xl border p-8"
          style={{
            backgroundColor: "#F47B20",

            borderColor:
              Math.floor((faqSections.length - 1) / 2) % 2 === 0
                ? "rgba(255,255,255,0.1)"
                : "rgba(11,30,61,0.1)",
            boxShadow: "0 4px 24px rgba(11,30,61,0.1)",
          }}
        >
          <h2
            className="text-2xl font-black mb-2"
            style={{
              fontFamily: "Montserrat, sans-serif",
              color: "#FFFFFF",
            }}
          >
            Still have questions?
          </h2>
          <p
            className="text-sm mb-6"
            style={{
              color: "",
            }}
          >
            Our team is here to help you with any additional questions
          </p>
          <div className="space-y-2 text-sm">
            <p
              style={{
                color:
                  Math.floor((faqSections.length - 1) / 2) % 2 === 0
                    ? "rgba(255,255,255,0.8)"
                    : "rgba(11,30,61,0.8)",
              }}
            >
              <strong
                style={{
                  color:
                    Math.floor((faqSections.length - 1) / 2) % 2 === 0
                      ? "#FFFFFF"
                      : "#0B1E3D",
                }}
              >
                Email:
              </strong>{" "}
              <a
                href="mailto:runnersingoa@gmail.com"
                style={{ color: "#FFFFFF", fontWeight: 900 }}
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
  );
};

export default FAQ;
