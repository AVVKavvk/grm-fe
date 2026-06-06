import React from "react";
import { Link } from "react-router-dom";
import { ExternalLink, Camera, Trophy } from "lucide-react";

function Results() {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        backgroundColor: "#0B1E3D",
        fontFamily: "Open Sans, sans-serif",
      }}
    >
      {/* Notification Banner */}
      <div
        className="py-3 px-4 shadow-md"
        style={{
          backgroundColor: "#122B55",
          borderBottom: "1px solid #1A3A6B",
        }}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-center">
          <div
            className="flex items-center gap-2 text-lg font-bold text-center"
            style={{ fontFamily: "Montserrat, sans-serif", color: "#FFFFFF" }}
          >
            <span className="text-2xl">🎉</span>
            Thank you runners for the overwhelming response!
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow flex items-center justify-center p-4">
        <div
          className="max-w-3xl w-full rounded-3xl overflow-hidden text-center p-10 md:p-16 border"
          style={{
            backgroundColor: "#122B55",
            borderColor: "#1A3A6B",
            boxShadow: "0 20px 60px rgba(11,30,61,0.45)",
          }}
        >
          {/* Trophy Icon */}
          <div className="flex justify-center mb-6">
            <div
              className="p-4 rounded-full"
              style={{ backgroundColor: "rgba(91,184,245,0.12)" }}
            >
              <Trophy
                size={48}
                strokeWidth={1.5}
                style={{ color: "#5BB8F5" }}
              />
            </div>
          </div>

          {/* Heading */}
          <h2
            className="text-3xl md:text-4xl font-black mb-4"
            style={{ fontFamily: "Montserrat, sans-serif", color: "#FFFFFF" }}
          >
            Official <span className="text-[#F47B20]">Race Results</span>
          </h2>

          {/* Subtext */}
          <p
            className="text-lg mb-10 max-w-xl mx-auto"
            style={{
              color: "rgba(255,255,255,0.70)",
              fontFamily: "Open Sans, sans-serif",
              fontWeight: 300,
            }}
          >
            Congratulations to all the finishers! The final timings,
            leaderboards, and e-certificates are officially hosted on IFinish.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Primary CTA */}
            <a
              href="https://ifinish.in/eventresult"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 active:scale-95"
              style={{
                fontFamily: "Montserrat, sans-serif",
                backgroundColor: "#F47B20",
                color: "#FFFFFF",
                boxShadow: "0 4px 18px rgba(244,123,32,0.40)",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#FF9748")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#F47B20")
              }
            >
              Open in IFinish
              <ExternalLink size={20} />
            </a>

            {/* Secondary CTA */}
            <Link
              to="/memories"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 active:scale-95 border"
              style={{
                fontFamily: "Montserrat, sans-serif",
                backgroundColor: "transparent",
                borderColor: "#1A6FB4",
                color: "#5BB8F5",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(26,111,180,0.15)";
                e.currentTarget.style.borderColor = "#2E8FD8";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.borderColor = "#1A6FB4";
              }}
            >
              <Camera size={20} />
              Event Gallery
            </Link>
          </div>

          {/* Footer note */}
          <div
            className="mt-12 pt-8"
            style={{ borderTop: "1px solid rgba(255,255,255,0.10)" }}
          >
            <p
              className="text-sm"
              style={{
                color: "rgba(255,255,255,0.40)",
                fontFamily: "Open Sans, sans-serif",
              }}
            >
              Having trouble finding your results? Make sure you have your BIB
              number handy before searching on the IFinish portal.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Results;
