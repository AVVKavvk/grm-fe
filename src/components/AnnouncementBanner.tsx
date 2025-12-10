import { useState } from "react";
import { X, Calendar, Clock, MapPin } from "lucide-react";

const AnnouncementBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 flex-1">
            <span className="text-2xl">🎉</span>
            <span className="font-bold text-lg hidden sm:inline">
              Visit Our Expo!
            </span>
          </div>

          <div className="flex items-center gap-6 flex-wrap justify-center">
            <span className="flex items-center gap-2 text-sm">
              <MapPin className="w-4 h-4" />
              Chicalim Panchayat
            </span>
            <span className="flex items-center gap-2 text-sm">
              <Calendar className="w-4 h-4" />
              Dec 12: 3:00 PM - 6:30 PM
            </span>
            <span className="flex items-center gap-2 text-sm">
              <Clock className="w-4 h-4" />
              Dec 13: 9:30 AM - 6:30 PM
            </span>
            <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-semibold">
              Spot Registrations Open!
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBanner;
