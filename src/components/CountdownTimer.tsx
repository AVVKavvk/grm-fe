import React, { useState, useEffect } from "react";
import { Clock } from "lucide-react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownTimerProps {
  targetDate: string;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const target = new Date(targetDate).getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="bg-gradient-ocean p-6 rounded-xl shadow-strong text-center">
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-background/10 p-3 rounded-lg">
          <div className="text-2xl font-bold text-primary-foreground">
            {timeLeft.days}
          </div>
          <div className="text-sm text-primary-foreground/80">Days</div>
        </div>
        <div className="bg-background/10 p-3 rounded-lg">
          <div className="text-2xl font-bold text-primary-foreground">
            {timeLeft.hours}
          </div>
          <div className="text-sm text-primary-foreground/80">Hours</div>
        </div>
        <div className="bg-background/10 p-3 rounded-lg">
          <div className="text-2xl font-bold text-primary-foreground">
            {timeLeft.minutes}
          </div>
          <div className="text-sm text-primary-foreground/80">Minutes</div>
        </div>
        <div className="bg-background/10 p-3 rounded-lg">
          <div className="text-2xl font-bold text-primary-foreground">
            {timeLeft.seconds}
          </div>
          <div className="text-sm text-primary-foreground/80">Seconds</div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
