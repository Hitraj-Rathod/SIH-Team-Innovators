"use client";
import Navbar from "@/components/Navbar";
import { useState } from "react";

export default function EmergencyPage() {
  const [alertSent, setAlertSent] = useState(false);
  const [selectedType, setSelectedType] = useState("Medical Emergency");

  const handleSendAlert = () => {
    setAlertSent(true);
    setTimeout(() => setAlertSent(false), 4000);
  };

  return (
    <div><h1 className="text-4xl text-center pt-10 font-bold text-red-600 mb-6">
         Emergency Assistance
      </h1>
      <Navbar ></Navbar>  
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6">
      

      <div className="max-w-md bg-white p-6 rounded-2xl shadow-lg w-full">
        <p className="text-gray-600 mb-4">
          In case of any emergency, temple security and medical teams will be
          alerted immediately. Use this panel for assistance.
        </p>

        <label className="block text-gray-700 font-medium mb-2">
          Select Emergency Type:
        </label>
        <select
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
          className="border w-full p-2 rounded mb-4"
        >
          <option>Medical Emergency</option>
          <option>Fire / Safety Issue</option>
          <option>Missing Person</option>
          <option>Security Alert</option>
          <option>Other</option>
        </select>

        <label className="block text-gray-700 font-medium mb-2">
          Additional Details:
        </label>
        <textarea
          rows="3"
          placeholder="Describe the issue briefly..."
          className="border w-full p-2 rounded mb-4"
        ></textarea>

        <button
          onClick={handleSendAlert}
          className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700"
        >
          Send Emergency Alert
        </button>

        {alertSent && (
          <div className="mt-4 text-green-700 font-semibold text-center bg-green-100 p-2 rounded-lg">
            ✅ Alert sent to control room & nearest response team!
          </div>
        )}
      </div>

      <div className="mt-8 text-center text-gray-500 text-sm">
        Connected to Temple Safety Control Room (Demo)
      </div>
    </div></div>
  );
}
