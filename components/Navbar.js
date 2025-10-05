"use client";
import React, { useState } from "react";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <nav className="bg-blue-900 text-white p-3 mb-4 flex justify-around gap-4 relative">
      <a href="/" className="hover:text-gray-300">
        Home
      </a>
      <a href="/crowd" className="hover:text-gray-300">
        Crowd Status
      </a>
      <a href="/parking-info" className="hover:text-gray-300">
        Parking Info
      </a>
      <a href="/facilities" className="hover:text-gray-300">
        Facilities
      </a>
      <a href="/booking" className="hover:text-gray-300">
        E-Darshan Booking
      </a>
      <a href="/emergency" className="hover:text-gray-300">
        Emergency
      </a>
      <a href="/feedback" className="hover:text-gray-300">
        Feedback
      </a>

      {/* Dropdown for Surveillance */}
      <div
        className="relative"
        onMouseEnter={() => setOpenDropdown(true)}
        onMouseLeave={() => setOpenDropdown(false)}
      >
        <button className="hover:text-gray-300 flex items-center gap-1">
          Surveillance ▼
        </button>
        {openDropdown && (
          <div className="absolute bg-white text-black mt-2 rounded shadow-lg w-48 z-50">
            <a
              href="/surveillance/temple"
              className="block px-4 py-2 hover:bg-gray-200"
            >
              Temple Surveillance
            </a>
            <a
              href="/surveillance/parking"
              className="block px-4 py-2 hover:bg-gray-200"
            >
              Parking Surveillance
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
