"use client";
import Navbar from "@/components/Navbar";


export default function TempleSurveillance() {
  const cameras = [
    { id: 1, name: "Gate 1 – Main Entry", status: "Active", density: "High" },
    { id: 2, name: "Sanctum Queue Area", status: "Active", density: "Medium" },
    { id: 3, name: "Prasad Distribution", status: "Active", density: "Low" },
    { id: 4, name: "Exit Path", status: "Active", density: "Moderate" },
  ];

  return (
    <div><h1 className="text-4xl mb-3 pt-10 text-center font-bold text-orange-600">
         Temple Surveillance
        </h1>
    <Navbar></Navbar>
    <main className="min-h-screen bg-gray-100 p-6">
     
       <p className="border-2 text-center rounded-2xl bg-red-500">! This is only for Temple Athorities !</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cameras.map((cam) => (
          <div
            key={cam.id}
            className="bg-white p-4 rounded-lg shadow hover:shadow-md transition"
          >
            <h3 className="font-bold text-lg">{cam.name}</h3>
            <div className="mt-2">
              <p>
                <strong>Status:</strong>{" "}
                <span
                  className={`${
                    cam.status === "Active" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {cam.status}
                </span>
              </p>
              <p>
                <strong>Crowd Density:</strong>{" "}
                <span
                  className={`${
                    cam.density === "High"
                      ? "text-red-600"
                      : cam.density === "Medium"
                      ? "text-orange-500"
                      : "text-green-600"
                  } font-semibold`}
                >
                  {cam.density}
                </span>
              </p>
            </div>

      
            <div className="mt-3 bg-black text-white h-48 flex items-center justify-center rounded-lg">
              📹 Live Camera Feed ({cam.name})
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-sm text-gray-500 text-center">
        Feeds powered by Smart AI-CCTV & IoT Network (Prototype View)
      </div>
    </main>
    </div>
  );
}
