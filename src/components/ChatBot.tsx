import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  MessageCircle,
  X,
  Send,
  User,
  Bot,
  UserCheck,
  Building2,
  Handshake,
} from "lucide-react";
import cracoDImage from "@/assets/craco-mascot.jpg";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userType, setUserType] = useState(null);
  const [messages, setMessages] = useState([
    {
      type: "bot",
      text: "🦀 Ahoy! I'm Craco, your cheerful marathon navigator! I'm here to help everyone - runners, sponsors, vendors, and curious explorers. What brings you to our amazing marathon adventure?",
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");

  const userTypes = [
    {
      id: "participant",
      label: "Marathon Participant",
      icon: <UserCheck className="w-4 h-4" />,
      color: "bg-primary",
    },
    {
      id: "potential",
      label: "Potential Runner",
      icon: <User className="w-4 h-4" />,
      color: "bg-secondary",
    },
    {
      id: "vendor",
      label: "Vendor/Partner",
      icon: <Building2 className="w-4 h-4" />,
      color: "bg-accent",
    },
    {
      id: "sponsor",
      label: "Potential Sponsor",
      icon: <Handshake className="w-4 h-4" />,
      color: "bg-gradient-ocean",
    },
  ];

  const getQuestionsByType = (type) => {
    const questions = {
      participant: [
        "Track my registration status",
        "Download race bib & kit info",
        "Craco merchandise store",
        "Post-race recovery tips",
        "Upload race memories",
        "VIP participant perks",
      ],
      potential: [
        "How do I register?",
        "Which race distance for me?",
        "Training plan & tips",
        "What's included in package?",
        "Early bird pricing info",
        "Carb loading party details",
      ],
      vendor: [
        "Partnership opportunities",
        "Vendor application process",
        "Festival vendor spaces",
        "Equipment rental services",
        "Logistics coordination",
        "Contact partnership team",
      ],
      sponsor: [
        "Sponsorship packages",
        "Brand visibility opportunities",
        "ROI & participant demographics",
        "CSR partnership benefits",
        "Custom sponsorship proposals",
        "Media & PR opportunities",
      ],
    };
    return questions[type] || [];
  };

  const handleSendMessage = (message?: string) => {
    const textToSend = message || inputMessage;
    if (!textToSend.trim()) return;

    const userMessage = {
      type: "user",
      text: textToSend,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");

    setTimeout(() => {
      let botResponse = "";

      // Personalized responses based on user type
      if (userType === "participant") {
        if (
          textToSend.toLowerCase().includes("track") ||
          textToSend.toLowerCase().includes("status")
        ) {
          botResponse =
            "🏃‍♂️ I can help you track everything! Your race bib will be available for download 48 hours before the event. You'll get email & SMS updates about kit collection, shuttle timings, and exclusive participant perks. Want me to send you the participant portal link?";
        } else if (
          textToSend.toLowerCase().includes("merchandise") ||
          textToSend.toLowerCase().includes("craco")
        ) {
          botResponse =
            "🛍️ Ahoy! Our Craco merchandise is flying off the shelves! We have limited edition t-shirts (₹899), caps (₹599), water bottles (₹399), and exclusive marathon hoodies (₹1299). Early bird participants get 20% off everything! Shall I reserve your favorites?";
        } else if (textToSend.toLowerCase().includes("recovery")) {
          botResponse =
            "💆‍♂️ Recovery like a pro! Join our Recovery Rave at Bogmalo Beach Resort on Dec 14th - massage therapy, nutrition advice, plus celebration! As a registered participant, you get priority booking and 30% off recovery services.";
        }
      } else if (userType === "sponsor") {
        if (
          textToSend.toLowerCase().includes("package") ||
          textToSend.toLowerCase().includes("sponsorship")
        ) {
          botResponse =
            "🤝 Exciting sponsorship opportunities await! Our 15th edition expects 10,000+ participants from 20+ countries. We offer Title (₹50L), Platinum (₹25L), Gold (₹15L) packages with extensive brand visibility, CSR benefits, and tech integration opportunities. Shall I connect you with our partnerships team?";
        } else if (
          textToSend.toLowerCase().includes("ROI") ||
          textToSend.toLowerCase().includes("demographics")
        ) {
          botResponse =
            "📊 Great question! Our participants: 65% aged 25-45, 78% urban professionals, average income ₹8-15L, highly active on social media. Last year generated 50M+ social impressions, 200+ media mentions. ROI averages 300-500% based on brand visibility metrics. Want detailed analytics?";
        }
      } else if (userType === "vendor") {
        if (
          textToSend.toLowerCase().includes("vendor") ||
          textToSend.toLowerCase().includes("partnership")
        ) {
          botResponse =
            "🏪 Welcome aboard! We're seeking premium vendors for our finish line festival, carb loading party, and recovery rave. Premium spots available from ₹25K-₹75K with guaranteed foot traffic of 8000+ people over 3 days. Shall I share the vendor application form?";
        }
      } else {
        // General responses for potential runners
        if (textToSend.toLowerCase().includes("register")) {
          botResponse =
            "🏃‍♂️ Registration is open with early bird pricing! Choose from 5K (₹1200), 10K (₹1500), Half Marathon (₹2200), or Full Marathon (₹2800). Prices increase by ₹500 after Nov 15th and again after Nov 30th. Book now to save!";
        } else if (
          textToSend.toLowerCase().includes("carb loading") ||
          textToSend.toLowerCase().includes("party")
        ) {
          botResponse =
            "🍝 Our legendary Carb Loading Party at HQ Vasco on Dec 13th! ₹899 includes traditional Goan feast, nutrition expert talks, race strategy sessions, and meet & greet with elite athletes. Limited to 500 people - only 150 spots left!";
        } else if (textToSend.toLowerCase().includes("training")) {
          botResponse =
            "💪 Your training adventure starts here! I'll create a personalized 12-week plan based on your fitness level and chosen distance. Plus, join our weekend group runs at Miramar Beach every Saturday 6 AM. Free for registered participants!";
        }
      }

      if (!botResponse) {
        botResponse =
          "🦀 I'm your friendly marathon navigator! Ask me about registration, training, our exciting events, sponsorship opportunities, or anything else. I'm here to make your marathon journey smooth sailing!";
      }

      const botMessage = {
        type: "bot",
        text: botResponse,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };

  return (
    <>
      {/* Chat Button */}
      <div className="fixed bottom-16 right-4 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-20 h-20 rounded-full shadow-elegant hover:shadow-strong transition-all bg-gradient-ocean text-primary-foreground hover:scale-110"
        >
          {isOpen ? <X className="w-6 h-6" /> : <div>Ask Craco</div>}
        </Button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 max-w-[calc(100vw-3rem)] h-[600px] bg-card border border-border rounded-xl shadow-strong z-40 flex flex-col">
          {/* Header */}
          <div className="p-4 border-b border-border bg-gradient-ocean text-primary-foreground rounded-t-xl">
            <div className="flex items-center gap-3">
              <img
                src={cracoDImage}
                alt="Craco Mascot"
                className="w-12 h-12 rounded-full border-2 border-primary-foreground/20"
              />
              <div>
                <h3 className="font-bold">Craco - Your Marathon Navigator</h3>
                <p className="text-xs text-primary-foreground/80">
                  Online • Ready for adventure!
                </p>
              </div>
            </div>
          </div>

          {/* User Type Selection */}
          {!userType && messages.length === 1 && (
            <div className="p-4 border-b border-border bg-muted/30">
              <p className="text-sm font-medium text-foreground mb-3">
                I'm here to help! What describes you best?
              </p>
              <div className="grid grid-cols-2 gap-2">
                {userTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => {
                      setUserType(type.id);
                      handleSendMessage(`I'm a ${type.label.toLowerCase()}`);
                    }}
                    className="flex items-center gap-2 p-3 text-xs border border-border rounded-lg hover:bg-muted transition-colors text-left"
                  >
                    {type.icon}
                    <span>{type.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex gap-3 ${
                  message.type === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {message.type === "bot" && (
                  <img
                    src={cracoDImage}
                    alt="Craco"
                    className="w-8 h-8 rounded-full"
                  />
                )}
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.type === "user"
                      ? "bg-primary text-primary-foreground ml-8"
                      : "bg-muted text-foreground"
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                  <div
                    className={`text-xs mt-1 ${
                      message.type === "user"
                        ? "text-primary-foreground/70"
                        : "text-muted-foreground"
                    }`}
                  >
                    {message.time}
                  </div>
                </div>
                {message.type === "user" && (
                  <User className="w-6 h-6 text-muted-foreground mt-3" />
                )}
              </div>
            ))}
          </div>

          {/* Quick Questions */}
          {userType && messages.length <= 3 && (
            <div className="p-3 border-t border-border bg-muted/30">
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="outline" className="text-xs">
                  {userTypes.find((t) => t.id === userType)?.label}
                </Badge>
                <p className="text-xs text-muted-foreground">
                  Quick questions:
                </p>
              </div>
              <div className="grid grid-cols-1 gap-1">
                {getQuestionsByType(userType).map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleSendMessage(question)}
                    className="text-xs p-2 bg-card border border-border rounded hover:bg-muted transition-colors text-left"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-4 border-t border-border">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder="Ask Craco anything..."
                className="flex-1 px-3 py-2 text-sm border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button
                onClick={() => handleSendMessage()}
                size="sm"
                className="px-3"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-2 text-center">
              🦀 Craco is AI-powered and ready to navigate your marathon
              adventure 24/7!
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
