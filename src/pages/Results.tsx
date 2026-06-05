import React from "react";
import { Link } from "react-router-dom";
import { ExternalLink, Camera, Trophy } from "lucide-react";

function Results() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans flex flex-col">
      {/* Notification Banner */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-3 px-4 relative shadow-md">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-4">
          <div className="flex items-center gap-2 text-lg font-bold text-center md:text-left">
            <span className="text-2xl">🎉</span>
            Thank you runners for the overwhelming response!
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-grow flex items-center justify-center p-4">
        <div className="max-w-3xl w-full bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden text-center p-10 md:p-16">
          <div className="flex justify-center mb-6">
            <div className="bg-blue-50 p-4 rounded-full text-blue-600">
              <Trophy size={48} strokeWidth={1.5} />
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Official Race Results
            </span>
          </h2>

          <p className="text-lg text-gray-500 mb-10 max-w-xl mx-auto">
            Congratulations to all the finishers! The final timings,
            leaderboards, and e-certificates are officially hosted on IFinish.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Primary CTA - IFinish */}
            <a
              href="https://ifinish.in/eventresult"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 hover:shadow-lg transition-all active:scale-95"
            >
              Open in IFinish
              <ExternalLink size={20} />
            </a>

            {/* Secondary CTA - Photos */}
            <Link
              to="/photos"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gray-100 text-gray-800 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-200 hover:shadow transition-all active:scale-95"
            >
              <Camera size={20} />
              Event Gallery
            </Link>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-100">
            <p className="text-sm text-gray-400">
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
