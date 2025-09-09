import { useState, useEffect } from 'react';

interface TimeUnit {
  value: number;
  label: string;
}

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set target date to September 20th, 2025
    const targetDate = new Date('2025-09-20T23:59:59');

    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    // Calculate immediately
    calculateTimeLeft();
    
    // Then update every second
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  // Format numbers to always have two digits
  const formatNumber = (num: number) => {
    return num < 10 ? `0${num}` : num.toString();
  };

  const timeUnits: TimeUnit[] = [
    { value: timeLeft.days, label: 'Days' },
    { value: timeLeft.hours, label: 'Hours' },
    { value: timeLeft.minutes, label: 'Minutes' },
    { value: timeLeft.seconds, label: 'Seconds' },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-xl mx-auto">
      {timeUnits.map((unit, index) => (
        <div key={unit.label} className="flex flex-col items-center">
          <div className="relative group w-full">
            {/* Background glow effect */}
            <div className="absolute inset-0 bg-blue-500/5 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Timer box */}
            <div className="relative bg-black/30 backdrop-blur-md rounded-xl w-full py-4 px-2 border border-glass-border overflow-hidden">
              {/* Animated corner accent */}
              <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-br from-blue-500/20 to-transparent rounded-bl-xl"></div>
              
              <div className="text-3xl md:text-5xl lg:text-6xl font-bold text-glow text-center">
                {formatNumber(unit.value)}
              </div>
            </div>
          </div>
          <div className="text-xs uppercase tracking-wider text-muted-foreground mt-3 font-medium">{unit.label}</div>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;