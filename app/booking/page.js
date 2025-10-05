"use client";
import { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import Navbar from "@/components/Navbar";

export default function EDarshanForm() {
  const [form, setForm] = useState({
    temple: "Somnath TempleS",
    type: "General Darshan ",
    date: "",
    time: "",
    name: "",
    phone: "",
    devotees: 1,
  });
  const [token, setToken] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const randomToken = "TKT-" + Math.floor(Math.random() * 1000000);
    setToken(randomToken);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold text-black mb-6 pt-10 text-center">
        Temple E-Darshan Booking
      </h1>
      <Navbar></Navbar>
    <div className="flex flex-col items-center bg-gradient-to-b from-white to-orange-300 p-8">
      
      
      <p className="mb-1 text-lg text-black">
        For E-Darshan Booking Fill the below form and generate your QR-Code </p>
        <p className="mb-6 text-black border-2 p-2 rounded-xl bg-yellow-200">
          After the QR-Generation, please save the QR-Code image or take a screenshot. 
          This QR-Code will be required for verification at the temple entrance.
        </p>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-6 rounded-2xl shadow-lg space-y-4 text-black"
      >
        <select
          name="temple"
          value={form.temple}
          onChange={handleChange}
          className="border w-full p-2 rounded"
        >
          <option>Somnath Temple</option>
          <option>Dwarka Temple</option>
          <option>Ambaji Temple</option>
          <option>Pavagadh Temple</option>
        </select>

        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          className="border w-full p-2 rounded"
        />
        <input
          type="time"
          name="time"
          value={form.time}
          onChange={handleChange}
          className="border w-full p-2 rounded"
        />
        <select
          name="type"
          value={form.type}
          onChange={handleChange}
          className="border w-full p-2 rounded"
        >
          <option>General Darshan (Free)</option>
          <option>VIP Darshan (Rs.500)</option>
          <option>Special Darshan(Rs.700)</option>
        </select>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          className="border w-full p-2 rounded"
        />
        <input
          type="text"
          name="phone"
          placeholder="Mobile Number"
          value={form.phone}
          onChange={handleChange}
          className="border w-full p-2 rounded"
        />
        <input
          type="number"
          name="devotees"
          placeholder="No. of Devotees"
          value={form.devotees}
          onChange={handleChange}
          className="border w-full p-2 rounded"
        />

        <button className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700">
          Generate Token
        </button>
      </form>

      {token && (
        <div className="mt-8 text-center">
          <h2 className="text-xl font-semibold text-green-700 mb-2">
            Your E-Darshan Token
          </h2>
          <QRCodeCanvas value={token} size={150} />
          <p className="mt-2 text-gray-600">Booking ID: {token}</p>
        </div>
      )}
    </div></div>
  );
}
