import {
  Facebook,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Link } from "react-router-dom";
import skfLogo from "@/assets/SKF_logotype_black_RGB.png";

const Footer = () => {
  const socialLinks = [
    {
      icon: <Facebook className="w-4 h-4" />,
      link: "https://www.facebook.com/SKF.Goa.River.Marathon",
      label: "Facebook",
    },
    {
      icon: <Instagram className="w-4 h-4" />,
      link: "https://www.instagram.com/skfgoarivermarathon/",
      label: "Instagram",
    },
    {
      icon: <Youtube className="w-4 h-4" />,
      link: "https://www.youtube.com/@SkfGoaRiverMarathon",
      label: "YouTube",
    },
  ];

  const quickLinks = [
    { label: "About Marathon", link: "/" },
    { label: "Categories", link: "/categories" },
    { label: "FAQs", link: "/faq" },
  ];

  const supportLinks = [
    { label: "Contact Us", link: "/contact-us" },
    { label: "Partners", link: "/partners" },
    { label: "Terms & Conditions", link: "/term-and-conditions" },
  ];

  return (
    <footer
      className="border-t"
      style={{
        background: "var(--navy)",
        borderColor: "var(--border)",
        fontFamily: "var(--font-body)",
      }}
    >
      {/* Main Grid */}
      <div
        className="mx-auto px-[var(--gutter)] pt-16 pb-12"
        style={{ maxWidth: "var(--max-w)" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* ── Brand ── */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-5">
              {/* <div
                className="w-14 p-1.5 flex-shrink-0"
                style={{
                  background: "var(--white)",
                  borderRadius: "var(--radius)",
                }}
              >
                <img src={skfLogo} alt="SKF Logo" className="w-full" />
              </div> */}
              <div>
                <div
                  className="text-[0.6rem] tracking-[0.18em] uppercase mb-0.5"
                  style={{
                    fontFamily: "var(--font-head)",
                    fontWeight: 700,
                    color: "var(--sky)",
                  }}
                >
                  SKF Presents
                </div>
                <div
                  className="text-sm leading-tight"
                  style={{
                    fontFamily: "var(--font-head)",
                    fontWeight: 800,
                    color: "var(--white)",
                  }}
                >
                  Goa River Marathon
                </div>
              </div>
            </div>

            {/* Tagline */}
            <p
              className="text-[0.82rem] leading-[1.7] mb-6 max-w-[280px]"
              style={{ color: "var(--text-muted)" }}
            >
              India's most scenic and technologically advanced marathon. 16
              years running along the Zuari River, Chicalim, South Goa.
            </p>

            {/* Social Icons */}
            <div className="flex gap-2.5">
              {socialLinks.map((s, i) => (
                <a
                  key={i}
                  href={s.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex items-center justify-center w-9 h-9 transition-all duration-200"
                  style={{
                    borderRadius: "var(--radius)",
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid var(--border)",
                    color: "rgba(255,255,255,0.5)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "var(--blue)";
                    e.currentTarget.style.borderColor = "var(--blue)";
                    e.currentTarget.style.color = "var(--white)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.06)";
                    e.currentTarget.style.borderColor = "var(--border)";
                    e.currentTarget.style.color = "rgba(255,255,255,0.5)";
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* ── Quick Links ── */}
          <div>
            <h4
              className="text-[0.65rem] tracking-[0.18em] uppercase mb-5"
              style={{
                fontFamily: "var(--font-head)",
                fontWeight: 700,
                color: "rgba(255,255,255,0.35)",
              }}
            >
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((l, i) => (
                <li key={i}>
                  <Link
                    to={l.link}
                    className="text-[0.82rem] transition-colors duration-200"
                    style={{ color: "rgba(255,255,255,0.5)" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "var(--sky)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "rgba(255,255,255,0.5)")
                    }
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Support ── */}
          <div>
            <h4
              className="text-[0.65rem] tracking-[0.18em] uppercase mb-5"
              style={{
                fontFamily: "var(--font-head)",
                fontWeight: 700,
                color: "rgba(255,255,255,0.35)",
              }}
            >
              Support
            </h4>
            <ul className="flex flex-col gap-3">
              {supportLinks.map((l, i) => (
                <li key={i}>
                  <Link
                    to={l.link}
                    className="text-[0.82rem] transition-colors duration-200"
                    style={{ color: "rgba(255,255,255,0.5)" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "var(--sky)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "rgba(255,255,255,0.5)")
                    }
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Contact ── */}
          <div>
            <h4
              className="text-[0.65rem] tracking-[0.18em] uppercase mb-5"
              style={{
                fontFamily: "var(--font-head)",
                fontWeight: 700,
                color: "rgba(255,255,255,0.35)",
              }}
            >
              Contact
            </h4>
            <div className="flex flex-col gap-3.5">
              {/* Address */}
              <div className="flex items-start gap-2.5">
                <span
                  className="flex items-center justify-center w-5 h-5 flex-shrink-0 mt-0.5"
                  style={{
                    borderRadius: "4px",
                    background: "rgba(26,111,180,0.2)",
                    color: "var(--sky)",
                  }}
                >
                  <MapPin className="w-3 h-3" />
                </span>
                <span
                  className="text-[0.8rem] leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                >
                  Vasco Sports Club, Rukmini Towers,
                  <br />
                  Opp. Tilak Maidan, Vasco da Gama,
                  <br />
                  Goa 403 802
                </span>
              </div>

              {/* Phone 1 */}
              <div className="flex items-center gap-2.5">
                <span
                  className="flex items-center justify-center w-5 h-5 flex-shrink-0"
                  style={{
                    borderRadius: "4px",
                    background: "rgba(26,111,180,0.2)",
                    color: "var(--sky)",
                  }}
                >
                  <Phone className="w-3 h-3" />
                </span>
                <a
                  href="tel:+918322511333"
                  className="text-[0.8rem] transition-colors duration-200"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--sky)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "rgba(255,255,255,0.5)")
                  }
                >
                  +91 (832) 251 1333
                </a>
              </div>

              {/* Phone 2 */}
              <div className="flex items-center gap-2.5">
                <span
                  className="flex items-center justify-center w-5 h-5 flex-shrink-0"
                  style={{
                    borderRadius: "4px",
                    background: "rgba(26,111,180,0.2)",
                    color: "var(--sky)",
                  }}
                >
                  <Phone className="w-3 h-3" />
                </span>
                <a
                  href="tel:+919022174688"
                  className="text-[0.8rem] transition-colors duration-200"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--sky)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "rgba(255,255,255,0.5)")
                  }
                >
                  +91 9022 174 688
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-2.5">
                <span
                  className="flex items-center justify-center w-5 h-5 flex-shrink-0"
                  style={{
                    borderRadius: "4px",
                    background: "rgba(26,111,180,0.2)",
                    color: "var(--sky)",
                  }}
                >
                  <Mail className="w-3 h-3" />
                </span>
                <a
                  href="mailto:runnersingoa@gmail.com"
                  className="text-[0.8rem] transition-colors duration-200"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--sky)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "rgba(255,255,255,0.5)")
                  }
                >
                  runnersingoa@gmail.com
                </a>
              </div>

              {/* Hashtag pill */}
              <div className="mt-1">
                <span
                  className="inline-block text-[0.7rem] px-3 py-1 tracking-wider"
                  style={{
                    fontFamily: "var(--font-head)",
                    fontWeight: 700,
                    borderRadius: "20px",
                    background: "rgba(91,184,245,0.12)",
                    color: "var(--sky)",
                    border: "1px solid rgba(91,184,245,0.25)",
                  }}
                >
                  #RunGoa
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div
          className="mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 flex-wrap text-[0.72rem]"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
            color: "rgba(255,255,255,0.25)",
          }}
        >
          <span>© 2027 SKF Goa River Marathon. All rights reserved.</span>

          <div className="flex flex-wrap gap-5">
            {[
              { label: "Privacy Policy", link: "#" },
              { label: "Terms & Conditions", link: "/term-and-conditions" },
              { label: "Refund Policy", link: "#" },
              { label: "Sitemap", link: "#" },
            ].map((l, i) => (
              <Link
                key={i}
                to={l.link}
                className="transition-colors duration-200"
                style={{ color: "rgba(255,255,255,0.3)" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "rgba(255,255,255,0.55)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "rgba(255,255,255,0.3)")
                }
              >
                {l.label}
              </Link>
            ))}
          </div>

          <span
            style={{
              fontFamily: "var(--font-head)",
              fontWeight: 700,
              color: "var(--orange)",
            }}
          >
            #RunGoa
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
