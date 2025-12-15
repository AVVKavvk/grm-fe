import React from "react";
import { Camera, Clock } from "lucide-react";

const Photos: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-orange-50">
      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center">
          {/* Icon Container */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-400 rounded-full blur-xl opacity-30 animate-pulse"></div>
              <div className="relative bg-gradient-to-br from-blue-500 to-orange-500 p-8 rounded-full">
                <Camera className="w-16 h-16 text-white" strokeWidth={1.5} />
              </div>
            </div>
          </div>

          {/* Main Message */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Photos &
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              {" "}
              Memories
            </span>
          </h2>

          <div className="max-w-2xl mx-auto mb-12">
            <p className="text-xl sm:text-2xl text-gray-700 leading-relaxed">
              Relive your marathon moments! Your race photos are now available.
            </p>
          </div>

          {/* Info Card */}
          <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg p-8 border border-gray-100 mb-8">
            <div className="flex items-center justify-center gap-3 text-blue-600 mb-4">
              <Camera className="w-6 h-6" />
              <span className="font-semibold text-lg">
                How to Find Your Photos
              </span>
            </div>
            <ol className="text-left text-gray-600 leading-relaxed space-y-2 list-decimal list-inside">
              <li>Click the button below to visit the photo portal</li>
              <li>
                Select <strong>SKF Goa River Marathon 2025</strong>
              </li>
              <li>
                Search by your <strong>Bib Number</strong> or upload a{" "}
                <strong>selfie</strong>
              </li>
              <li>View and purchase your race photos</li>
            </ol>
          </div>

          {/* CTA Button */}
          <a
            href="https://ifinish.in/photos/searchPhotos"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-blue-600 to-orange-600 text-white font-semibold text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
          >
            View Your Photos
          </a>

          {/* Visual Elements */}
          <div className="mt-16 flex justify-center gap-4 opacity-20">
            <div className="w-24 h-32 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg transform rotate-[-12deg]"></div>
            <div className="w-24 h-32 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg transform rotate-[8deg]"></div>
            <div className="w-24 h-32 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg transform rotate-[-5deg]"></div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Photos;
