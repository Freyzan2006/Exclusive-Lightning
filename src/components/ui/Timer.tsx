import React, { useState, useEffect } from 'react';

const Timer: React.FC = () => {
  const initialTime =
    1 * 24 * 60 * 60 * 1000 + 2 * 60 * 60 * 1000 + 35 * 60 * 1000 + 55 * 1000;
  const [timeLeft, setTimeLeft] = useState<number>(initialTime);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(interval);
          return 0;
        }
        return prevTime - 1000;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  return (
    <div className="flex justify-center items-center gap-3 flex-wrap">
      <div className="flex flex-col items-start">
        <span className="text-md text-black">Days</span>
        <span className="text-3xl text-black self-end">{days} </span>
      </div>
      <span className="text-red-500 text-4xl">:</span>
      <div className="flex flex-col items-start">
        <span className="text-md text-black">Hours</span>
        <span className="text-3xl text-black self-end">{hours}</span>
      </div>
      <span className="text-red-500 text-4xl">:</span>
      <div className="flex flex-col items-start">
        <span className="text-md text-black">Minutes</span>
        <span className="text-3xl text-black self-end">{minutes}</span>
      </div>
      <span className="text-red-500 text-4xl">:</span>
      <div className="flex flex-col items-start">
        <span className="text-md text-black">Seconds</span>
        <span className="text-3xl text-black self-end">{seconds}</span>
      </div>
    </div>
  );
};

export default Timer;
