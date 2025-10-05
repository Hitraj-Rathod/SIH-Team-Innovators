import { Inter } from "next/font/google";
import Navbar from "../components/Navbar";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const stats = {
    devotees: 15211,
    waitTime: "45 min",
    footfall: 48762,
    crowdZone: "Gate 3 Full, Gate 2 Moderate, Gate 1 Open",
  };
  const updates = [
    "10:45 AM - Gate 3 opened for crowd management",
    "11:00 AM - VIP Darshan slots available for booking",
  ];
  const weather = { temp: 32, condition: "Partly Cloudy" };

  return (
    <main className={`min-h-screen bg-gray-100 p-4 ${inter.className}`}>
      

      <Navbar />

      {/* ===== Alert Banner ===== */}
      <div className="bg-yellow-100 text-yellow-800 p-3 mb-4 text-center rounded-lg shadow ">
        <p className="text-red-600 font-bold text-lg">⚠ ALERT</p>
        <p>Online booking mandatory for VIP Darshan | Follow crowd guidelines</p>
      </div>

      {/* ===== Temple Selector ===== */}
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <h2 className="text-lg font-semibold mb-2 text-black">
          🛕 Select Temple Location
        </h2>
        <select className="w-full border p-2 rounded">
          <option>Somnath Temple</option>
          <option>Dwarkadhish Temple</option>
          <option>Ambaji Temple</option>
          <option>Pavagadh Temple</option>
        </select>
        <p className="text-sm text-gray-500 mt-2">
          Temple data will update automatically based on your selection.
        </p>
      </div>

      {/* ===== Dashboard Section ===== */}
      <div className="bg-white p-4 rounded-lg shadow text-black mb-6">
        <h2 className="text-xl font-semibold mb-3 text-black">
          📊 Live Crowd Dashboard
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border p-2 rounded">
          <div className="text-center">
            <p className="font-bold">Current Devotees</p>
            <p>{stats.devotees.toLocaleString()}</p>
          </div>
          <div className="text-center">
            <p className="font-bold">Average Wait Time</p>
            <p>{stats.waitTime}</p>
          </div>
          <div className="text-center">
            <p className="font-bold">Today's Footfall</p>
            <p>{stats.footfall.toLocaleString()}</p>
          </div>
          <div className="text-center">
            <p className="font-bold">Crowd Zone Status</p>
            <p>{stats.crowdZone}</p>
          </div>
        </div>

        {/* Live Updates */}
        <div className="mt-4 bg-orange-500 text-white p-3 rounded-lg">
          <h3 className="font-bold text-lg">🔴 Live Updates</h3>
          <ul className="list-disc ml-5">
            {updates.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Weather */}
        <div className="mt-4 bg-yellow-500 text-black p-3 rounded-lg">
          <h3 className="font-bold">🌤 Weather Today</h3>
          <p>
            {weather.temp}°C | {weather.condition}
          </p>
        </div>
      </div>

      {/* ===== Important Quick Links ===== */}
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <h2 className="text-lg font-semibold text-black mb-2">
          🔗 Useful Quick Links
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <Link
            href="/facilities"
            className="p-3 bg-green-100 hover:bg-green-200 rounded-lg text-center"
          >
            🏛 Temple Facilities
          </Link>
          <Link
            href="/crowd"
            className="p-3 bg-blue-100 hover:bg-blue-200 rounded-lg text-center"
          >
            👥 Live Crowd Zones
          </Link>
          <Link
            href="/emergency"
            className="p-3 bg-red-100 hover:bg-red-200 rounded-lg text-center"
          >
            🚨 Emergency Contact
          </Link>
          <Link
            href="/feedback"
            className="p-3 bg-yellow-100 hover:bg-yellow-200 rounded-lg text-center"
          >
            💬 Feedback
          </Link>
          <a
            href="https://gujaratindia.gov.in"
            target="_blank"
            className="p-3 bg-gray-100 hover:bg-gray-200 rounded-lg text-center"
          >
            🌐 Official Gujarat Portal
          </a>
        </div>
      </div>

      {/* ===== Emergency Button (Floating) ===== */}
      <Link
        href="/emergency"
        className="fixed bottom-6 right-6 bg-red-600 text-white p-4 rounded-full shadow-lg hover:bg-red-700"
      >
        🚨 Emergency Help
      </Link>

      {/* ===== Footer ===== */}
      <footer className="mt-10 text-center text-gray-600 text-sm pb-6">
        © 2025 Govt. of Gujarat | TirthSuraksha – Smart Pilgrimage Management
      </footer>
    </main>
  );
}
