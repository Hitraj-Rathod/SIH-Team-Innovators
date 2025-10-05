"use client";
import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [role, setRole] = useState("devotee");
  const [form, setForm] = useState({ email: "", password: "" });
  const [loggedIn, setLoggedIn] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleLogin = (e) => {
    e.preventDefault();
    if (form.email && form.password) {
      setLoggedIn(true);
      setTimeout(() => setLoggedIn(false), 4000);
      setForm({ email: "", password: "" });
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-100 to-yellow-50 flex flex-col items-center justify-center p-6">
      <div className="max-w-md w-full bg-white shadow-lg rounded-2xl p-8">
        <div className="flex justify-center mb-4">
          <img src="/logo.png" alt="Gov Logo" className="h-16" />
        </div>
        <h1 className="text-3xl font-bold text-center text-orange-600 mb-2">
          TirthSuraksha Login
        </h1>
        <p className="text-center text-gray-500 mb-6">
          तीर्थसुरक्षा - सुरक्षित दर्शन
        </p>
 
        <div className="flex justify-between bg-gray-100 p-1 rounded-lg mb-6">
          <button
            onClick={() => setRole("devotee")}
            className={`w-1/2 py-2 rounded-lg font-semibold ${
              role === "devotee"
                ? "bg-orange-600 text-white"
                : "text-gray-600 hover:bg-gray-200"
            }`}
          >
            🧎 Devotee
          </button>
          <button
            onClick={() => setRole("authority")}
            className={`w-1/2 py-2 rounded-lg font-semibold ${
              role === "authority"
                ? "bg-orange-600 text-white"
                : "text-gray-600 hover:bg-gray-200"
            }`}
          >
            🏛️ Temple Authority
          </button>
        </div>

     
        <form onSubmit={handleLogin}>
          <label className="block text-gray-700 font-medium mb-2">
            {role === "devotee" ? "Email / Mobile Number" : "Official Email ID"}
          </label>
          <input
            type="text"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="border w-full p-2 rounded mb-4"
            required
            placeholder={
              role === "devotee"
                ? "e.g. rahul@gmail.com / 9876543210"
                : "e.g. admin@somnath.gov.in"
            }
          />

          <label className="block text-gray-700 font-medium mb-2">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            className="border w-full p-2 rounded mb-4"
            required
            placeholder="Enter your password"
          />

      
          {role === "authority" ? (
            <p className="text-xs text-gray-500 mb-3">
               Only authorized temple officials or control room staff can log in.
            </p>
          ) : (
            <p className="text-xs text-gray-500 mb-3">
               For devotees: login to view your virtual queue, booking, and alerts.
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-orange-600 text-white py-2 rounded-lg font-semibold hover:bg-orange-700"
          >
            Login
          </button>

          {loggedIn && (
            <div className="mt-4 text-green-700 text-center bg-green-100 p-2 rounded-lg font-medium">
              ✅ Logged in successfully as {role === "devotee" ? "Devotee" : "Authority"}!
            </div>
          )}
        </form>

     
        <div className="text-center mt-6">
          <Link href="/" className="text-blue-600 hover:underline block">
            ← Back to Home
          </Link>
          <Link href="/feedback" className="text-indigo-600 hover:underline block">
            Need Help or Feedback
          </Link>
        </div>
      </div>

      <footer className="mt-8 text-center text-gray-500 text-sm">
        © 2025 Govt. of Gujarat | TirthSuraksha – Safe Darshan
      </footer>
    </main>
  );
}
