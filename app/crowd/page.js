"use client";
import Navbar from "@/components/Navbar";
import { useState, useEffect } from "react";


export default function LiveCrowdPage() {
  const [data, setData] = useState({
    totalVisitors: 25430,
    liveVisitors: 920,
    crowdLevel: "Moderate",
    temperature: 34,
    lastUpdated: new Date().toLocaleTimeString(),
    zones: [
      { name: "Main Gate", status: "Full" },
      { name: "North Gate", status: "Moderate" },
      { name: "East Gate", status: "Open" },
      { name: "VIP Section", status: "Moderate" },
      { name: "Darshan Queue", status: "High" },
    ],
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const randomVisitors = Math.floor(800 + Math.random() * 600);
      const newLevel =
        randomVisitors > 1200 ? "High" : randomVisitors > 900 ? "Moderate" : "Low";

      const zoneStatuses = ["Open", "Moderate", "Full"];

      setData((prev) => {
        const newZones = prev.zones.map((z) => ({
          ...z,
          status: zoneStatuses[Math.floor(Math.random() * 3)],
        }));

        return {
          ...prev,
          liveVisitors: randomVisitors,
          crowdLevel: newLevel,
          temperature: 32 + Math.floor(Math.random() * 5),
          lastUpdated: new Date().toLocaleTimeString(),
          zones: newZones,
        };
      });
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case "Full":
        return "bg-red-500 text-white";
      case "Moderate":
        return "bg-yellow-400 text-black";
      default:
        return "bg-green-500 text-white";
    }
  };

  const levelColor =
    data.crowdLevel === "High"
      ? "bg-red-500"
      : data.crowdLevel === "Moderate"
      ? "bg-yellow-400"
      : "bg-green-500";

  return (
    <div className="bg-gray-100 p-4">
      <Navbar></Navbar>
        <h1 className="text-3xl font-bold text-indigo-700 mb-6 pt-5 text-center">
     Live Temple Crowd Dashboard
      </h1>
        
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6">
      

      <div className="grid md:grid-cols-3 gap-6 w-full max-w-4xl">
        <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
          <h2 className="text-gray-600 font-medium">Total Visitors Today</h2>
          <p className="text-3xl font-bold text-indigo-700 mt-2">
            {data.totalVisitors.toLocaleString()}
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
          <h2 className="text-gray-600 font-medium">Currently Inside Temple</h2>
          <p className="text-3xl font-bold text-green-700 mt-2">
            {data.liveVisitors.toLocaleString()}
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
          <h2 className="text-gray-600 font-medium">Temperature (°C)</h2>
          <p className="text-3xl font-bold text-orange-600 mt-2">
            {data.temperature}°C
          </p>
        </div>
      </div>

      {/* Crowd Level */}
      <div className="bg-white mt-8 p-6 rounded-2xl shadow-lg w-full max-w-3xl text-center">
        <h2 className="text-lg font-semibold text-gray-700 mb-2">
          Current Crowd Level
        </h2>
        <div
          className={`${levelColor} text-white py-3 px-6 rounded-lg text-xl font-bold inline-block`}
        >
          {data.crowdLevel}
        </div>
        <p className="mt-3 text-sm text-gray-500">
          Last Updated: {data.lastUpdated}
        </p>
      </div>


      <div className="bg-white mt-8 p-6 rounded-2xl shadow-lg w-full max-w-3xl">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">
         Live Crowd by Zone
        </h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {data.zones.map((zone, idx) => (
            <div
              key={idx}
              className={`rounded-lg py-3 px-4 text-center font-semibold ${getStatusColor(
                zone.status
              )}`}
            >
              {zone.name}: {zone.status}
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white mt-8 p-6 rounded-2xl shadow-lg w-full max-w-3xl text-gray-700">
        <h2 className="text-lg font-semibold mb-4">📢 Important Updates</h2>
        <ul className="space-y-2">
          <li>🕉️ Next Aarti Timing: <b>6:00 PM</b></li>
          <li>🚨 Medical Helpdesk: Near North Gate</li>
          <li>🧓 Senior Citizen Queue: Available at East Gate</li>
          <li>♿ Wheelchair Assistance: Contact Helpdesk +91 90000 00000</li>
        </ul>
      </div>

      <footer className="mt-8 text-gray-500 text-sm">
        Data Source: Gujarat Smart Temple Authority (Demo)
      </footer>
    </div></div>
  );
}
