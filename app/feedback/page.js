"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";   

export default function FeedbackPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    rating: "",
    message: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: "", rating: "", message: "" });
  };

  return (
  <div className="bg-gray-100 p-4">
    <Navbar></Navbar>
    <h1 className="text-3xl text-center pt-5 font-bold text-indigo-700 mb-6">
        Feedback & Suggestions
      </h1>
       
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6">
      

      <form
        onSubmit={handleSubmit}
        className="max-w-md bg-white p-6 rounded-2xl shadow-lg w-full"
      >
        <p className="text-gray-600 mb-4">
          Help us improve the temple experience by sharing your valuable feedback.
        </p>

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          className="border w-full p-2 rounded mb-4"
          required
        />

        <label className="block text-gray-700 font-medium mb-2">
          Rate Your Experience:
        </label>
        <select
          name="rating"
          value={form.rating}
          onChange={handleChange}
          className="border w-full p-2 rounded mb-4"
          required
        >
          <option value="">Select Rating</option>
          <option>⭐ Very Good</option>
          <option>😊 Good</option>
          <option>😐 Average</option>
          <option>😟 Poor</option>
        </select>

        <textarea
          name="message"
          rows="4"
          placeholder="Your feedback..."
          value={form.message}
          onChange={handleChange}
          className="border w-full p-2 rounded mb-4"
          required
        ></textarea>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700"
        >
          Submit Feedback
        </button>

        {submitted && (
          <div className="mt-4 text-green-700 font-semibold text-center bg-green-100 p-2 rounded-lg">
            ✅ Thank you for your feedback!
          </div>
        )}
      </form>

      <div className="mt-8 text-center text-gray-500 text-sm">
        Data stored securely under Temple Feedback Portal (Demo)
      </div>
    </div></div>
  );
}
