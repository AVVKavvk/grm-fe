import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const FAQ = () => {
  const faqSections = [
    {
      title: "Event Basics",
      items: [
        {
          question:
            "When and where is this year's SKF Goa River Marathon taking place?",
          answer:
            "The 14th edition of the SKF Goa River Marathon is happening on Sunday, 13th December 2026, in Chicalim village, Vasco da Gama, Goa — right by the Zuari River.",
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
            "If your payment was debited but you didn't get a confirmation, email us at runnersingoa@gmail.com or support@skfgoarivermarathon.com with your details. Refunds (if applicable) are processed within 3 working days.",
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
      title: "Results, Medals & Prizes",
      items: [
        {
          question:
            "What is the prize amount for each age category in the Full Marathon?",
          answer: (
            <div className="space-y-2">
              <p>
                All prizes are awarded in Indian Rupees. The prize amounts for
                the Full Marathon are as follows:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 mt-3">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-2 text-left">
                        Category
                      </th>
                      <th className="border border-gray-300 px-4 py-2 text-left">
                        1st Prize
                      </th>
                      <th className="border border-gray-300 px-4 py-2 text-left">
                        2nd Prize
                      </th>
                      <th className="border border-gray-300 px-4 py-2 text-left">
                        3rd Prize
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        Open Men (18–44)
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        ₹20,000
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        ₹17,500
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        ₹15,000
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2">
                        Open Women (18–39)
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        ₹20,000
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        ₹17,500
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        ₹15,000
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        Veteran Men (45–54)
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        ₹9,000
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        ₹7,000
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        ₹5,000
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2">
                        Veteran Women (40–49)
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        ₹9,000
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        ₹7,000
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        ₹5,000
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        Sr. Veteran Men (55–64)
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        ₹9,000
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        ₹7,000
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        ₹5,000
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2">
                        Sr. Veteran Women (50–59)
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        ₹9,000
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        ₹7,000
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        ₹5,000
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        Super Veteran Men (65+)
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        ₹9,000
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        ₹7,000
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        ₹5,000
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2">
                        Super Veteran Women (60+)
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        ₹9,000
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        ₹7,000
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        ₹5,000
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          ),
        },
        {
          question:
            "What is the prize amount for each age category in the 20 Miler (32K)?",
          answer: (
            <div className="space-y-2">
              <p>
                All prizes are awarded in Indian Rupees. The prize amounts for
                the 20 Miler (32 KM) are as follows:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 mt-3">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-2 text-left">
                        Category
                      </th>
                      <th className="border border-gray-300 px-4 py-2 text-left">
                        1st Prize
                      </th>
                      <th className="border border-gray-300 px-4 py-2 text-left">
                        2nd Prize
                      </th>
                      <th className="border border-gray-300 px-4 py-2 text-left">
                        3rd Prize
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        Open Men (18–44)
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        ₹17,500
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        ₹15,000
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        ₹12,500
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2">
                        Open Women (18–39)
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        ₹17,500
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        ₹15,000
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        ₹12,500
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        Veteran Men (45–54)
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        ₹6,000
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        ₹5,000
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        ₹4,000
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2">
                        Veteran Women (40–49)
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        ₹6,000
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        ₹5,000
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        ₹4,000
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        Sr. Veteran Men (55–64)
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        ₹6,000
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        ₹5,000
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        ₹4,000
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2">
                        Sr. Veteran Women (50–59)
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        ₹6,000
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        ₹5,000
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        ₹4,000
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        Super Veteran Men (65+)
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        ₹6,000
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        ₹5,000
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        ₹4,000
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2">
                        Super Veteran Women (60+)
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        ₹6,000
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        ₹5,000
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        ₹4,000
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          ),
        },
        {
          question:
            "What is the prize amount for each age category in the Half Marathon?",
          answer: (
            <div className="space-y-2">
              <p>
                All prizes are awarded in Indian Rupees. The prize amounts for
                the Half Marathon are as follows:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 mt-3">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-2 text-left">
                        Category
                      </th>
                      <th className="border border-gray-300 px-4 py-2 text-left">
                        1st Prize
                      </th>
                      <th className="border border-gray-300 px-4 py-2 text-left">
                        2nd Prize
                      </th>
                      <th className="border border-gray-300 px-4 py-2 text-left">
                        3rd Prize
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        Open Men (18–44)
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        ₹15,000
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        ₹12,500
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        ₹10,000
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2">
                        Open Women (18–39)
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        ₹15,000
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        ₹12,500
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        ₹10,000
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        Veteran Men (45–54)
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        ₹5,000
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        ₹4,000
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        ₹3,000
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2">
                        Veteran Women (40–49)
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        ₹5,000
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        ₹4,000
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        ₹3,000
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        Sr. Veteran Men (55–64)
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        ₹5,000
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        ₹4,000
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        ₹3,000
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2">
                        Sr. Veteran Women (50–59)
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        ₹5,000
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        ₹4,000
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        ₹3,000
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        Super Veteran Men (65+)
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        ₹5,000
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        ₹4,000
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        ₹3,000
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2">
                        Super Veteran Women (60+)
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        ₹5,000
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        ₹4,000
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        ₹3,000
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          ),
        },
        {
          question:
            "What is the prize amount for each age category in the 10K Run?",
          answer: (
            <div className="space-y-2">
              <p>
                All prizes are awarded in Indian Rupees. The prize amounts for
                the 10K Run are as follows:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 mt-3">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-2 text-left">
                        Category
                      </th>
                      <th className="border border-gray-300 px-4 py-2 text-left">
                        1st Prize
                      </th>
                      <th className="border border-gray-300 px-4 py-2 text-left">
                        2nd Prize
                      </th>
                      <th className="border border-gray-300 px-4 py-2 text-left">
                        3rd Prize
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        Open Men (18–44)
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        ₹15,000
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        ₹12,500
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        ₹10,000
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2">
                        Open Women (18–39)
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        ₹15,000
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        ₹12,500
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        ₹10,000
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        Veteran Men (45–54)
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        ₹5,000
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        ₹4,000
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        ₹3,000
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2">
                        Veteran Women (40–49)
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        ₹5,000
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        ₹4,000
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        ₹3,000
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        Sr. Veteran Men (55–64)
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        ₹5,000
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        ₹4,000
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        ₹3,000
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2">
                        Sr. Veteran Women (50–59)
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        ₹5,000
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        ₹4,000
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        ₹3,000
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        Super Veteran Men (65+)
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        ₹5,000
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        ₹4,000
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        ₹3,000
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2">
                        Super Veteran Women (60+)
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        ₹5,000
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        ₹4,000
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        ₹3,000
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          ),
        },
        {
          question: "What are the age categories for prizes?",
          answer: (
            <div className="space-y-3">
              <p className="font-semibold">
                The age brackets for each prize category are as follows:
              </p>
              <p className="text-sm italic">(Age calculated as on Race Day)</p>

              <div className="space-y-2">
                <div>
                  <p className="font-semibold">Open Category:</p>
                  <p>Men: 18 years and above, below 45 years</p>
                  <p>Women: 18 years and above, below 40 years</p>
                </div>

                <div>
                  <p className="font-semibold">Veteran Category:</p>
                  <p>Men: 45 years and above, below 55 years</p>
                  <p>Women: 40 years and above, below 50 years</p>
                </div>

                <div>
                  <p className="font-semibold">Senior Veteran Category:</p>
                  <p>Men: 55 years and above, below 65 years</p>
                  <p>Women: 50 years and above, below 60 years</p>
                </div>

                <div>
                  <p className="font-semibold">Super Veteran Category:</p>
                  <p>Men: 65 years and above</p>
                  <p>Women: 60 years and above</p>
                </div>
              </div>
            </div>
          ),
        },
        {
          question: "Will I get a finisher medal?",
          answer:
            "Yes! Every runner who crosses the finish line earns a medal.",
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
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16 md:py-32">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to all your questions about the SKF Goa River Marathon
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {faqSections.map((section, sectionIndex) => (
            <Card key={sectionIndex} className="overflow-hidden">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">
                  {section.title}
                </CardTitle>
                <CardDescription>
                  Essential information about {section.title.toLowerCase()}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {section.items.map((item, itemIndex) => (
                    <AccordionItem
                      key={itemIndex}
                      value={`item-${sectionIndex}-${itemIndex}`}
                    >
                      <AccordionTrigger className="text-left">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="whitespace-pre-line text-muted-foreground">
                          {item.answer}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>Still have questions?</CardTitle>
              <CardDescription>
                Our team is here to help you with any additional questions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <p>
                  <strong>Email:</strong> runnersingoa@gmail.com
                </p>
                <p>
                  <strong>Support:</strong> support@skfgoarivermarathon.com
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
