"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";

export default function ParkingPage() {
  const [zones, setZones] = useState([
    { name: "Main Gate Parking", slots: 120, available: 45 },
    { name: "North Lot", slots: 80, available: 10 },
    { name: "East Gate Zone", slots: 60, available: 32 },
    { name: "VIP Parking", slots: 25, available: 5 },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setZones((prev) =>
        prev.map((z) => ({
          ...z,
          available: Math.max(0, z.available + Math.floor(Math.random() * 10 - 5)),
        }))
      );
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (available, total) => {
    const percent = (available / total) * 100;
    if (percent < 20) return "bg-red-500";
    if (percent < 50) return "bg-yellow-400";
    return "bg-green-500";
  };

  return (
    <div>  
    <h1 className="text-4xl PT-10 font-bold text-indigo-700 mb-6">
        🅿 Smart Parking Management
      </h1>
      <Navbar></Navbar>
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6">
      

      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg p-6">
        <p className="text-gray-600 mb-4">
          Real-time parking availability around temple premises. Integrated with
          IoT sensors for live slot updates.
        </p>

        <div className="grid sm:grid-cols-2 gap-4">
          {zones.map((zone, i) => (
            <div key={i} className="p-4 bg-gray-100 rounded-xl shadow-sm">
              <h3 className="font-semibold text-gray-800">{zone.name}</h3>
              <div
                className={`mt-2 py-2 px-4 text-center rounded-lg font-semibold text-white ${getStatusColor(
                  zone.available,
                  zone.slots
                )}`}
              >
                {zone.available} / {zone.slots} Slots Available
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-blue-50 rounded-xl p-4 text-sm text-gray-700">
          <h3 className="font-semibold text-blue-700 mb-2">🚘 Parking Alerts</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Main Gate Parking nearing capacity (80% full).</li>
            <li>VIP Zone restricted for authorized vehicles only.</li>
            <li>Shuttle service available every 10 mins from East Zone.</li>
          </ul>
        </div>

        <div className="mt-6 text-center text-gray-500 text-sm">
          Data simulated by Smart Temple IoT System (Demo)
        </div>
      </div>
    </div></div>    
  );
}
