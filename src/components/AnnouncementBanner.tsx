import { useState } from "react";
import { X, Calendar, Clock, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const AnnouncementBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-3 px-4 relative">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-4 pr-8">
        <div className="flex items-center gap-2 text-lg font-bold">
          <span className="text-2xl">🎉</span>
          Thank you runners for the overwhelming response!
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
          <span>Photos and results are now live.</span>

          <a
            href="https://ifinish.in/eventresult"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-blue-600 px-4 py-1.5 rounded-full font-semibold hover:bg-blue-50 transition-colors"
          >
            View Results
          </a>

          <Link
            to={`/photos`}
            rel="noopener noreferrer"
            className="bg-white/20 px-4 py-1.5 rounded-full font-semibold hover:bg-white/30 transition-colors"
          >
            View Photos
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBanner;
