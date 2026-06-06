import { useState } from "react";
import { Plus, Mail, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const faqs = [
  {
    q: "Where is the race venue?",
    a: "The race starts and finishes at Village Panchayat Ground, Chicalim, South Goa — 403 802. Race kit collection is held at the same venue the day before. A Google Maps link is available on the Route page.",
  },
  {
    q: "What is the refund policy?",
    a: "Registrations are non-refundable under all circumstances. If the event is cancelled by the organisers, a 90% refund or free entry to the following year's edition will be offered to all registered participants.",
  },
  {
    q: "How do I collect my race kit?",
    a: "Kit collection is held at the race venue on the day before the event. Carry your registration confirmation email and a photo ID. If you cannot attend, authorise a representative with a signed letter, copy of your registration, and their ID proof.",
  },
  {
    q: "Is the course traffic-free?",
    a: "Yes. The entire course is closed to vehicular traffic for 6+ hours from the start gun. Race officials, emergency vehicles, and photographers are positioned throughout the course.",
  },
  {
    q: "How does live GPS tracking work?",
    a: "Each timed-category runner receives a GPS timing chip in their bib. After registration you'll receive a shareable family tracking link. Your position, pace, and splits update in real time on the tracking page.",
  },
  {
    q: "Are prizes equal for men and women?",
    a: "Yes — all open category prize money is identical for men and women, calculated on net chip time (not gun time). Age category trophies and certificates are also equal across genders.",
  },
  {
    q: "Can I register as a group?",
    a: "Yes — group registrations of 5 or more runners are available with a 10% discount. Use the Group Registration link on the Categories page or contact us directly at runnersingoa@gmail.com.",
  },
];

const HomeFAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq" className="bg-[#F4F7FB] py-24">
      <div className="max-w-[1200px] mx-auto px-[5vw]">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-16 items-start">
          {/* ── Left: intro ── */}
          <div className="lg:sticky lg:top-24">
            <p className="font-['Montserrat'] text-[0.68rem] font-bold tracking-[0.20em] uppercase text-[#1A6FB4] mb-3">
              FAQs
            </p>
            <h2 className="font-['Montserrat'] text-4xl md:text-5xl font-black uppercase text-[#0B1E3D] leading-tight mb-4">
              Got <span className="text-[#F47B20]">Questions?</span>
            </h2>
            <div className="w-12 h-[3px] bg-[#F47B20] rounded-full mb-5" />
            <p className="font-['Open_Sans'] text-base text-[#0B1E3D]/65 leading-relaxed mb-8">
              Everything runners ask before race day. Can't find your answer?
              Reach out directly.
            </p>

            {/* CTA block */}
            <div className="bg-[#0B1E3D] rounded-[16px] p-6 mb-5">
              <p className="font-['Open_Sans'] text-[0.82rem] text-white/70 leading-relaxed mb-4">
                Still have questions? Our team is ready to help you plan your
                race day.
              </p>

              <a
                href="mailto:runnersingoa@gmail.com"
                className="inline-flex items-center gap-2 font-['Montserrat'] text-[0.75rem] font-bold
                           tracking-[0.10em] uppercase bg-[#1A6FB4] hover:bg-[#2E8FD8]
                           text-white px-5 py-3 rounded-[8px] transition-colors duration-200"
              >
                <Mail className="w-4 h-4" />
                Email Us
              </a>
            </div>

            {/* More FAQ link */}
            <Link
              to="/faq"
              className="inline-flex items-center gap-2 font-['Montserrat'] text-[0.75rem] font-bold
                         tracking-[0.10em] uppercase text-[#0B1E3D] border border-[#0B1E3D]/20
                         hover:border-[#F47B20] hover:text-[#F47B20]
                         px-5 py-3 rounded-[8px] transition-all duration-200 w-full justify-center"
            >
              View All FAQs
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* ── Right: accordion ── */}
          <div className="flex flex-col divide-y divide-[#0B1E3D]/[0.10]">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div key={i} className="faq-item">
                  {/* Question row */}
                  <button
                    onClick={() => toggle(i)}
                    className="w-full flex items-center justify-between gap-4 py-5 text-left
                               group cursor-pointer"
                  >
                    <span
                      className={`font-['Montserrat'] text-[0.88rem] font-bold leading-snug transition-colors duration-200
                        ${isOpen ? "text-[#1A6FB4]" : "text-[#0B1E3D] group-hover:text-[#1A6FB4]"}`}
                    >
                      {faq.q}
                    </span>
                    <span
                      className={`w-7 h-7 shrink-0 rounded-full flex items-center justify-center
                                  transition-all duration-250
                                  ${
                                    isOpen
                                      ? "bg-[#F47B20] rotate-45"
                                      : "bg-[#0B1E3D] group-hover:bg-[#1A6FB4]"
                                  }`}
                    >
                      <Plus className="w-4 h-4 text-white" />
                    </span>
                  </button>

                  {/* Answer — CSS height transition */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out
                      ${isOpen ? "max-h-[300px] pb-5" : "max-h-0 pb-0"}`}
                  >
                    <p className="font-['Open_Sans'] text-[0.84rem] text-[#0B1E3D]/70 leading-[1.75]">
                      {faq.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeFAQSection;
