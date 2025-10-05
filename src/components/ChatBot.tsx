import { useState, useMemo } from "react";
import { X, Search, ChevronRight, Home, MessageCircle } from "lucide-react";

const faqData = [
  {
    title: "Event Basics",
    emoji: "🏃",
    items: [
      {
        question:
          "When and where is this year's SKF Goa River Marathon taking place?",
        answer:
          "The 14th edition of the SKF Goa River Marathon is happening on Sunday, 14th December 2025, in Chicalim village, Vasco da Gama, Goa — right by the Zuari River.",
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
    emoji: "📝",
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
          "If your payment was debited but you didn't get a confirmation, email us at runnersingoa@gmail.com or support@skfgoarivermarathon.com with your details. Refunds (if applicable) are processed within 3 working days.",
      },
    ],
  },
  {
    title: "Bibs, Timing & Kits",
    emoji: "🎽",
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
    emoji: "⏰",
    items: [
      {
        question: "What are the start times and cut-offs for each race?",
        answer:
          "• 42K Marathon: 4:00 AM (Cut-off: 6 hrs / Prize cut-off: 5:30 hrs)\n• 32K (20 Miler): 4:30 AM (Cut-off: 5 hrs / Prize cut-off: 4:30 hrs)\n• 21K Half Marathon: 5:30 AM (Cut-off: 3:30 hrs / Prize cut-off: 2:45 hrs)\n• 10K Run: 6:15 AM (Cut-off: 90 mins / Prize cut-off: 75 mins)\n• 5K Fun Walk: No timing, just fun!",
      },
    ],
  },
  {
    title: "Results, Medals & Prizes",
    emoji: "🏅",
    items: [
      {
        question: "Will I get a finisher medal?",
        answer: "Yes! Every runner who crosses the finish line earns a medal.",
      },
      {
        question: "What prizes are available?",
        answer:
          "Prizes are awarded in Open and Age Categories. Open Category prizes are announced on race day, Age Category results are confirmed within 3 days. Prize money is subject to Indian Income Tax laws.",
      },
      {
        question: "When and where will results be available?",
        answer:
          "Results and timing certificates will be published within a week at timingindia.com.",
      },
      {
        question: "Will there be photos of me?",
        answer:
          "Yes. Photos will be searchable by bib number on our website within a week of the event.",
      },
    ],
  },
  {
    title: "Logistics, Transport & Facilities",
    emoji: "🚌",
    items: [
      {
        question: "Is transport provided?",
        answer:
          "Shuttle buses run from Panaji, Margao, and Vasco between 3:00–5:30 AM, with return services post-race.",
      },
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
    emoji: "⚕️",
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
    emoji: "🎉",
    items: [
      {
        question: "What is the Carb Loading Fiesta?",
        answer:
          "A pre-race evening of carb-loading and community! Enjoy pasta, music, and motivation. Separate registration required.",
      },
      {
        question: "What is the Recovery Rave?",
        answer:
          "Our post-race celebration: ice baths, recovery rave, wellness workshops, live music, and food stalls. Open to all with a separate entry pass.",
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
    emoji: "📋",
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
    emoji: "🤝",
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

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentView, setCurrentView] = useState("sections");
  const [selectedSection, setSelectedSection] = useState(null);
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];

    const query = searchQuery.toLowerCase();
    const results = [];

    faqData.forEach((section) => {
      section.items.forEach((item) => {
        const questionMatch = item.question.toLowerCase().includes(query);
        const answerMatch = item.answer.toLowerCase().includes(query);

        if (questionMatch || answerMatch) {
          results.push({
            section: section.title,
            emoji: section.emoji,
            question: item.question,
            answer: item.answer,
          });
        }
      });
    });

    return results;
  }, [searchQuery]);

  const handleSectionClick = (section) => {
    setSelectedSection(section);
    setCurrentView("questions");
    setSearchQuery("");
  };

  const handleQuestionClick = (question) => {
    setSelectedQuestion(question);
    setCurrentView("answer");
  };

  const handleBack = () => {
    if (currentView === "answer") {
      setCurrentView("questions");
      setSelectedQuestion(null);
    } else if (currentView === "questions") {
      setCurrentView("sections");
      setSelectedSection(null);
    }
  };

  const handleHome = () => {
    setCurrentView("sections");
    setSelectedSection(null);
    setSelectedQuestion(null);
    setSearchQuery("");
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-20 h-20 rounded-full shadow-lg hover:shadow-xl transition-all bg-gradient-to-br from-orange-400 via-red-500 to-pink-500 text-white hover:scale-110 flex flex-col items-center justify-center"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <>
              <span className="text-xs font-bold mt-1">Ask Craco</span>
            </>
          )}
        </button>
      </div>

      {isOpen && (
        <div className="fixed bottom-28 right-6 w-96 max-w-[calc(100vw-3rem)] h-[600px] bg-white border-2 border-orange-200 rounded-2xl shadow-2xl z-40 flex flex-col overflow-hidden">
          {/* Header with Craco */}
          <div className="p-4 bg-gradient-to-br from-orange-400 via-red-500 to-pink-500 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-3xl shadow-lg">
                  🦀
                </div>
                <div>
                  <h3 className="font-bold text-lg">Craco the Crab</h3>
                  <p className="text-xs text-white/90">
                    Your Marathon Navigator 🌊
                  </p>
                </div>
              </div>
              {currentView !== "sections" && (
                <button
                  onClick={handleHome}
                  className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                >
                  <Home className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>

          {/* Search Bar */}
          <div className="p-3 bg-gradient-to-r from-orange-50 to-pink-50 border-b border-orange-200">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-orange-500" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Ask Craco anything..."
                className="w-full pl-10 pr-4 py-2 text-sm border-2 border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Content Area */}
          <div className="flex-1 overflow-y-auto bg-gradient-to-b from-orange-50/30 to-white">
            {/* Search Results */}
            {searchQuery.trim() && (
              <div className="p-4">
                <div className="bg-white rounded-lg p-3 mb-3 border-l-4 border-orange-500">
                  <div className="flex items-start gap-2">
                    <span className="text-2xl">🦀</span>
                    <p className="text-sm text-gray-700">
                      <span className="font-bold">Craco says:</span> I found{" "}
                      {searchResults.length} answer
                      {searchResults.length !== 1 ? "s" : ""} for you!
                    </p>
                  </div>
                </div>
                {searchResults.length === 0 ? (
                  <div className="bg-white rounded-lg p-6 text-center border-2 border-dashed border-orange-200">
                    <span className="text-4xl block mb-2">🦀</span>
                    <p className="text-sm text-gray-600">
                      Oops! I couldn't find that in my shell. Try different
                      words, mate!
                    </p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {searchResults.map((result, index) => (
                      <div
                        key={index}
                        className="bg-white p-4 border-2 border-orange-200 rounded-lg hover:border-orange-400 hover:shadow-md cursor-pointer transition-all"
                        onClick={() => {
                          setSelectedQuestion(result);
                          setCurrentView("answer");
                          setSearchQuery("");
                        }}
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-lg">{result.emoji}</span>
                          <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded-full font-medium">
                            {result.section}
                          </span>
                        </div>
                        <p className="text-sm font-medium text-gray-900">
                          {result.question}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Sections View */}
            {!searchQuery.trim() && currentView === "sections" && (
              <div className="p-4 space-y-2">
                <div className="bg-white rounded-lg p-3 mb-3 border-l-4 border-orange-500">
                  <div className="flex items-start gap-2">
                    <span className="text-2xl">🦀</span>
                    <p className="text-sm text-gray-700">
                      <span className="font-bold">Hi there!</span> Pick a topic
                      and I'll guide you through the marathon waves!
                    </p>
                  </div>
                </div>
                {faqData.map((section, index) => (
                  <button
                    key={index}
                    onClick={() => handleSectionClick(section)}
                    className="w-full flex items-center justify-between p-4 bg-white border-2 border-orange-200 rounded-lg hover:border-orange-400 hover:shadow-md transition-all text-left group"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{section.emoji}</span>
                      <div>
                        <p className="font-semibold text-gray-900 group-hover:text-orange-600 transition-colors">
                          {section.title}
                        </p>
                        <p className="text-xs text-gray-500">
                          {section.items.length} question
                          {section.items.length !== 1 ? "s" : ""}
                        </p>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-orange-400 group-hover:text-orange-600 group-hover:translate-x-1 transition-all" />
                  </button>
                ))}
              </div>
            )}

            {/* Questions View */}
            {!searchQuery.trim() &&
              currentView === "questions" &&
              selectedSection && (
                <div className="p-4">
                  <button
                    onClick={handleBack}
                    className="text-sm text-orange-600 hover:text-orange-700 mb-3 flex items-center gap-1 font-medium"
                  >
                    ← Back to topics
                  </button>
                  <div className="bg-white rounded-lg p-3 mb-4 border-l-4 border-orange-500">
                    <div className="flex items-start gap-2">
                      <span className="text-2xl">{selectedSection.emoji}</span>
                      <div>
                        <p className="font-bold text-gray-900">
                          {selectedSection.title}
                        </p>
                        <p className="text-xs text-gray-600 mt-1">
                          Choose your question below!
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {selectedSection.items.map((item, index) => (
                      <button
                        key={index}
                        onClick={() => handleQuestionClick(item)}
                        className="w-full p-3 bg-white border-2 border-orange-200 rounded-lg hover:border-orange-400 hover:shadow-md transition-all text-left text-sm"
                      >
                        <div className="flex items-start gap-2">
                          <span className="text-orange-500 font-bold mt-0.5">
                            Q:
                          </span>
                          <span className="text-gray-800">{item.question}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

            {/* Answer View */}
            {!searchQuery.trim() &&
              currentView === "answer" &&
              selectedQuestion && (
                <div className="p-4">
                  <button
                    onClick={handleBack}
                    className="text-sm text-orange-600 hover:text-orange-700 mb-3 flex items-center gap-1 font-medium"
                  >
                    ← Back to questions
                  </button>

                  {/* Question Bubble */}
                  <div className="mb-4">
                    <div className="flex items-start gap-2 justify-end mb-2">
                      <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-2xl rounded-tr-sm p-4 max-w-[85%] shadow-md">
                        <p className="text-sm font-medium">
                          {selectedQuestion.question}
                        </p>
                      </div>
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0">
                        You
                      </div>
                    </div>
                  </div>

                  {/* Craco's Answer */}
                  <div className="flex items-start gap-2">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-2xl flex-shrink-0 shadow-md">
                      🦀
                    </div>
                    <div className="bg-white border-2 border-orange-200 rounded-2xl rounded-tl-sm p-4 max-w-[85%] shadow-md">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-bold text-orange-600">Craco</span>
                        <span className="text-xs text-gray-500">just now</span>
                      </div>
                      <p className="text-sm text-gray-800 whitespace-pre-line leading-relaxed">
                        {selectedQuestion.answer}
                      </p>
                    </div>
                  </div>

                  {/* Helpful prompt */}
                  <div className="mt-4 bg-orange-50 border border-orange-200 rounded-lg p-3 text-center">
                    <p className="text-xs text-gray-600">
                      🦀 <span className="font-medium">Need more help?</span>{" "}
                      Search above or go back to explore more topics!
                    </p>
                  </div>
                </div>
              )}
          </div>

          {/* Footer */}
          <div className="p-3 bg-gradient-to-r from-orange-50 to-pink-50 border-t-2 border-orange-200">
            <p className="text-xs text-gray-600 text-center">
              🦀 <span className="font-semibold">Craco is here 24/7!</span>{" "}
              Can't find what you need? Email{" "}
              <span className="text-orange-600 font-medium">
                runnersingoa@gmail.com
              </span>
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
