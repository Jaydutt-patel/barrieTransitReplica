import React, { useState, useEffect } from "react";
import gif1 from "./assest/1.gif";

const PassBody = () => {
  const [counter, setCounter] = useState(80); // Start from 80

  const TodayDate = () => {
    const today = new Date().toDateString(); // Format: "Fri Feb 28 2025"

    return <div className="text-white font-bold text-3xl">{today}</div>;
  };

  const CurrentTime = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
      const interval = setInterval(() => {
        setTime(new Date());
      }, 1000); // Update time every second

      return () => clearInterval(interval); // Cleanup interval on unmount
    }, []);

    return (
      <div className="text-white font-bold text-3xl">
        {time.toLocaleTimeString("en-US", { hour12: true })}
      </div>
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prev) => (prev > 0 ? prev - 1 : 0)); // Stop at 0
    }, 60000); // Decrease every 1 minute (60,000 ms)

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="mt-8 p-4 flex flex-col justify-center items-center bg-sky-700 w-full rounded-3xl">
      <div className="text-white text-lg">Student 10 Ride Card</div>

      <div className="mt-3">
        <TodayDate />
      </div>

      <div className="mt-3">
        <CurrentTime />
      </div>

      <div className="text-white mt-8 text-xl">Barrie Transit</div>

      <div className="mt-2 w-11/12">
        <img src={gif1} alt="barrie transit" />
      </div>

      <div className="bg-red-500 text-white mt-3 rounded-3xl px-5 py-2 ">
        Expire
      </div>

      <h4 className="text-white mt-4">This pass expires after {counter}</h4>
      <h4 className="text-white">minutes</h4>

      <div className="text-sm text-white mb-4">User ID 1111504514</div>
    </div>
  );
};

export default PassBody;
