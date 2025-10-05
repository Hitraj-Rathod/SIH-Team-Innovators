"use client";
import React, { useState,useRef } from "react";
import Link from "next/link";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenDropdown(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(false);
    }, 200); // small delay to prevent flicker
  };
  return (
    <div>
    <header className="flex justify-between items-center pt-6 mb-6">
        <div className="flex items-center space-x-4">
          <img src="/logo.png" alt="Govt Logo" className="h-20" />
          <div>
            <h1 className="text-4xl font-bold text-orange-600">
              TirthSuraksha – Safe Darshan
            </h1>
            <h3 className="text-black text-xl pt-1">
              तीर्थसुरक्षा - सुरक्षित दर्शन
            </h3>
            <p className="text-sm text-gray-600">
              Government of Gujarat | Dept. of Science & Technology
            </p>
          </div>
        </div>

       
        <Link
          href="/login"
          className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700"
        >
          Login / Admin
        </Link>
      </header>
    <nav className="bg-blue-900 text-white p-3 mb-4 flex justify-around gap-4 relative z-50">
      <a href="/" className="hover:text-gray-300">Home</a>
      <a href="/crowd" className="hover:text-gray-300">Crowd Status</a>
      <a href="/parking-info" className="hover:text-gray-300">Parking Info</a>
      <a href="/facilities" className="hover:text-gray-300">Facilities</a>
      <a href="/booking" className="hover:text-gray-300">E-Darshan Booking</a>
      <a href="/emergency" className="hover:text-gray-300">Emergency</a>
      <a href="/feedback" className="hover:text-gray-300">Feedback</a>

      {/* Dropdown for Surveillance */}
      <div
        className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <button className="hover:text-gray-300 flex items-center gap-1">
          Surveillance ▼
        </button>

        {openDropdown && (
          <div
            className="absolute bg-white text-black mt-2 rounded shadow-lg border border-gray-200"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <a
              href="/surveillance/temple"
              className="block px-4 py-2 hover:bg-gray-200"
            >
            Temple
            </a>
            <a
              href="/surveillance/parking"
              className="block px-4 py-2 hover:bg-gray-200"
            >
            Parking
            </a>
          </div>
        )}
      </div>
    </nav></div>
  );
};

export default Navbar;
