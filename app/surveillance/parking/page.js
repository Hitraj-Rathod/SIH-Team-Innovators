"use client";

import Navbar from "@/components/Navbar";

export default function ParkingSurveillance() {
  const zones = [
    { id: 1, name: "Zone A – Near Main Gate", vehicles: 89, capacity: 100 },
    { id: 2, name: "Zone B – West Parking", vehicles: 130, capacity: 150 },
    { id: 3, name: "Zone C – VIP Parking", vehicles: 35, capacity: 50 },
    { id: 4, name: "Zone D – Bus Parking", vehicles: 42, capacity: 60 },
  ];

  return (
    <div className="bg-gray-100 p-4">
      <Navbar></Navbar>
      
      <h1 className="text-3xl mb-3 pt-5 text-center font-bold text-orange-600">
         Parking Surveillance
        </h1>
    
    <main className="min-h-screen bg-gray-100 p-6">
       <p className="border-2 text-center rounded-2xl bg-red-500">! This is only for Temple Athorities !</p>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {zones.map((zone) => {
          const fillPercent = Math.round(
            (zone.vehicles / zone.capacity) * 100
          );
          const fillColor =
            fillPercent > 80
              ? "bg-red-600"
              : fillPercent > 60
              ? "bg-orange-500"
              : "bg-green-600";

          return (
            <div
              key={zone.id}
              className="bg-white p-4 rounded-lg shadow hover:shadow-md transition"
            >
              <h3 className="font-bold text-lg">{zone.name}</h3>
              <div className="mt-2">
                <p>
                  <strong>Vehicles:</strong> {zone.vehicles} / {zone.capacity}
                </p>
                <p>
                  <strong>Occupancy:</strong>{" "}
                  <span className={fillColor + " text-white px-2 py-1 rounded"}>
                    {fillPercent}%
                  </span>
                </p>
              </div>

           
              <div className="mt-3 bg-black text-white h-48 flex items-center justify-center rounded-lg">
                📷 Parking Zone Camera ({zone.name})
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-8 text-sm text-gray-500 text-center">
        Monitored through AI-enabled CCTV & Vehicle Detection System (Demo)
      </div>
    </main></div>
  );
}
