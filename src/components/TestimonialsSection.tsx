import React, { useState } from "react";
import { Star, Quote, Facebook, Instagram, X } from "lucide-react";
import { Link } from "react-router-dom";

// Importing all available runner images
import bhawana1 from "@/assets/runners/bhawana_1.jpeg";
import bhawana2 from "@/assets/runners/bhawana_2.jpeg";
import sunilAndSneha1 from "@/assets/runners/s_and_s_1.jpeg";
import sunilAndSneha2 from "@/assets/runners/s_and_s_2.jpeg";

const testimonials = [
  {
    initials: "KM",
    name: "Kiran Mehta",
    detail: "Pune · Half Marathon 2024",
    text: "A perfect blend of sport and festival vibes. The energy along the course kept me going, and the post-run celebrations were heartwarming.",
    images: [],
  },
  {
    initials: "LB",
    name: "Liora Bennett",
    detail: "UK · 10K Run 2024",
    text: "I joined the 10K while on vacation in Goa, and it turned out to be the highlight of my trip. Everything from registration to hydration stations was seamless.",
    images: [],
  },
  {
    initials: "BD",
    name: "Bhasker Desai",
    detail: "Runner",
    text: "An incredible race that captures the true spirit of Goa. Highly recommend the Goa River Marathon to anyone looking for a scenic and well-organized run.",
    images: [],
    facebook: "https://www.facebook.com/share/18cgJejW4W/",
    instagram: "https://www.instagram.com/bdesai1999?igsh=cGo3dmtkZDJlMmxu",
  },
  {
    initials: "BD",
    name: "Bhawana Dutta",
    detail: "Gurgaon",
    text: "My two bits on the Goa River Marathon! Outstanding experience! The hydration support throughout the course was exceptional and thoughtfully placed, ensuring runners stayed fueled and safe. The volunteers were outstanding—encouraging, helpful, and always present with a smile. Course was being so closely supervised and gave participants a great sense of safety and confidence. Thank you for creating such a memorable race experience.",
    images: [bhawana1, bhawana2],
    facebook: "https://www.facebook.com/share/18gXt3BmPS/",
    instagram:
      "https://www.instagram.com/bhawana_datta?igsh=MWJ1bHp3aHdtMnh3Zw==",
  },
  {
    initials: "SS",
    name: "Sunil & Sangeeta Shetty",
    detail: "Mumbai",
    text: "GRM (Goa River Marathon) is our favourite race and one of the most popular races in the country. We have run this race twice and once were also part of the organising team. The route is beautiful and worth stopping and taking photos (unless you are a serious runner and running for time). The organisers Vasco Sports Club are a bunch of enthusiastic and passionate runners who give their 100% to make this race memorable for you.",
    images: [sunilAndSneha1, sunilAndSneha2],
    facebook: "https://www.facebook.com/sunil.shetty.14418",
    instagram:
      "https://www.instagram.com/sunilshetty27?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
];

const stats = [
  { num: "7,500+", label: "Runners Annually" },
  { num: "98%", label: "Would Recommend" },
  { num: "75%", label: "Return Participants" },
];

const Stars = () => (
  <div className="flex gap-1 mb-4">
    {[...Array(5)].map((_, i) => (
      <Star key={i} className="w-3.5 h-3.5 fill-[#F47B20] text-[#F47B20]" />
    ))}
  </div>
);

const TestimonialsSection = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <section className="bg-white py-24 relative">
        <div className="max-w-[1200px] mx-auto px-[5vw]">
          {/* ── Header ── */}
          <div className="text-center mb-14">
            <div
              className="inline-flex items-center gap-2 bg-[#1A6FB4]/10 border border-[#1A6FB4]/20
                            text-[#1A6FB4] px-4 py-1.5 rounded-full mb-5"
            >
              <Star className="w-3.5 h-3.5 fill-[#1A6FB4]" />
              <span className="font-['Montserrat'] text-[0.68rem] font-bold tracking-[0.16em] uppercase">
                Runner Stories
              </span>
            </div>
            <h2 className="font-['Montserrat'] text-4xl md:text-5xl font-black uppercase text-[#0B1E3D] leading-tight mb-4">
              What Runners <span className="text-[#F47B20]">Say</span>
            </h2>
            <div className="w-12 h-[3px] bg-gradient-to-r from-[#1A6FB4] to-[#5BB8F5] rounded-full mx-auto mb-5" />
            <p className="font-['Open_Sans'] text-base text-[#0B1E3D]/55 max-w-xl mx-auto leading-relaxed">
              Join thousands of runners who come back year after year. This is
              their race.
            </p>
          </div>

          {/* ── Testimonial cards ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14 items-start">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="group flex flex-col bg-white border border-[#0B1E3D]/[0.08] rounded-[16px] overflow-hidden
                           hover:border-[#1A6FB4]/30 hover:shadow-[0_20px_40px_rgba(11,30,61,0.10)]
                           transition-all duration-300"
              >
                {/* Dynamic Image Container */}
                {t.images && t.images.length > 0 && (
                  <div
                    className={`w-full grid gap-0.5 bg-white 
                      ${t.images.length > 1 ? "grid-cols-2" : "grid-cols-1"}`}
                  >
                    {t.images.map((img, idx) => (
                      <div
                        key={idx}
                        className="w-full aspect-[4/5] overflow-hidden relative bg-[#F4F7FB] cursor-zoom-in"
                        onClick={() => setSelectedImage(img)}
                      >
                        <img
                          src={img}
                          alt={`${t.name} photo ${idx + 1}`}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    ))}
                  </div>
                )}

                {/* Card Content */}
                <div className="p-7 flex flex-col flex-1">
                  <Stars />

                  {/* Quote */}
                  <div className="relative flex-1 mb-6">
                    <Quote className="w-4 h-4 text-[#1A6FB4]/30 mb-2" />
                    <p className="font-['Open_Sans'] text-[0.875rem] font-light italic text-[#0B1E3D]/65 leading-[1.75]">
                      {t.text}
                    </p>
                  </div>

                  {/* Footer with Name & Socials */}
                  <div className="flex items-center justify-between pt-5 border-t border-[#0B1E3D]/[0.06]">
                    <div>
                      <div className="font-['Montserrat'] text-[0.85rem] font-bold text-[#0B1E3D] line-clamp-1">
                        {t.name}
                      </div>
                      <div className="font-['Open_Sans'] text-[0.7rem] text-[#0B1E3D]/45 mt-0.5">
                        {t.detail}
                      </div>
                    </div>

                    {/* Social Links */}
                    {(t.facebook || t.instagram) && (
                      <div className="flex items-center gap-2 shrink-0">
                        {t.instagram && (
                          <a
                            href={t.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#0B1E3D]/30 hover:text-[#E1306C] transition-colors"
                          >
                            <Instagram className="w-4 h-4" />
                          </a>
                        )}
                        {t.facebook && (
                          <a
                            href={t.facebook}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#0B1E3D]/30 hover:text-[#1877F2] transition-colors"
                          >
                            <Facebook className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ── Stats row ── */}
          <div className="grid grid-cols-3 gap-4 mb-14">
            {stats.map((s, i) => (
              <div
                key={i}
                className={`text-center py-6 px-4
                  ${i < stats.length - 1 ? "border-r border-[#0B1E3D]/[0.08]" : ""}`}
              >
                <div className="font-['Montserrat'] text-3xl font-black text-[#0B1E3D] mb-1">
                  {s.num}
                </div>
                <div className="font-['Montserrat'] text-[0.68rem] font-semibold tracking-[0.12em] uppercase text-[#0B1E3D]/45">
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          {/* ── Gallery CTA ── */}
          <div>
            <div className="text-center">
              <Link
                to="/memories"
                className="inline-flex items-center gap-2 font-['Montserrat'] text-[0.78rem] font-bold
                           tracking-[0.10em] uppercase text-[#1A6FB4] border border-[#1A6FB4]/30
                           hover:bg-[#1A6FB4] hover:text-white px-6 py-3 rounded-[8px]
                           transition-all duration-200"
              >
                View Full Gallery →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Lightbox Modal ── */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0B1E3D]/90 backdrop-blur-sm p-4 cursor-zoom-out transition-all"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close Button */}
          <button
            className="absolute top-6 right-6 p-2 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-all"
            onClick={() => setSelectedImage(null)}
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Enlarged Image */}
          <img
            src={selectedImage}
            alt="Enlarged runner"
            className="max-w-full max-h-[90vh] object-contain rounded-[12px] shadow-2xl"
          />
        </div>
      )}
    </>
  );
};

export default TestimonialsSection;
