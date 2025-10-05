"use client";
import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function FacilitiesPage() {
  return (
    <div> <h1 className="text-4xl pt-10 font-bold text-indigo-700 mb-6">
        Temple Facilities & Services
      </h1>
    <Navbar></Navbar>
    
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6">
      

      <div className="max-w-5xl bg-white p-6 rounded-2xl shadow-lg">
        {/* Temple Image */}
        <div className="relative w-full h-64 mb-6">
          <img
            src="/temple1.png"
            alt="Temple View"
            className="object-cover rounded-2xl"
          />
        </div>

        <p className="text-gray-700 leading-relaxed mb-4">
          The Gujarat Smart Temple initiative ensures a safe, comfortable, and
          spiritual experience for every devotee. Below are the available
          facilities designed for pilgrims visiting Somnath, Dwarka, Ambaji, and
          Pavagadh temples.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 mt-6">
          <div className="p-4 bg-indigo-50 rounded-xl shadow-sm">
            <h3 className="text-indigo-700 font-semibold">🙏 Darshan & Aarti Info</h3>
            <p className="text-sm text-gray-600 mt-1">
              Digital boards and mobile app updates display real-time darshan
              queue and Aarti timings.
            </p>
          </div>

          <div className="p-4 bg-indigo-50 rounded-xl shadow-sm">
            <h3 className="text-indigo-700 font-semibold">🧓 Senior Citizen Services</h3>
            <p className="text-sm text-gray-600 mt-1">
              Wheelchair assistance and priority queues are available near East
              Gate. Volunteers assist during peak hours.
            </p>
          </div>

          <div className="p-4 bg-indigo-50 rounded-xl shadow-sm">
            <h3 className="text-indigo-700 font-semibold">💧 Drinking Water & Rest Area</h3>
            <p className="text-sm text-gray-600 mt-1">
              Filtered water stations and shaded rest zones are available at
              every 200 meters across temple premises.
            </p>
          </div>

          <div className="p-4 bg-indigo-50 rounded-xl shadow-sm">
            <h3 className="text-indigo-700 font-semibold">🏥 Medical Helpdesk</h3>
            <p className="text-sm text-gray-600 mt-1">
              Emergency response staff with first aid kits and ambulances on
              standby at North Gate.
            </p>
          </div>

          <div className="p-4 bg-indigo-50 rounded-xl shadow-sm">
            <h3 className="text-indigo-700 font-semibold">🍛 Food & Prasadam</h3>
            <p className="text-sm text-gray-600 mt-1">
              Hygienic prasadam counters, and a cafeteria offering sattvik food.
            </p>
          </div>

          <div className="p-4 bg-indigo-50 rounded-xl shadow-sm">
            <h3 className="text-indigo-700 font-semibold">📱 Digital Assistance</h3>
            <p className="text-sm text-gray-600 mt-1">
              QR-based navigation, temple map, and crowd alerts through the
              official app and kiosks.
            </p>
          </div>
        </div>

        <div className="mt-8 text-center text-gray-500 text-sm">
          Managed by: Gujarat Smart Temple Authority | Demo Data
        </div>
      </div>
    </div></div>
  );
}
