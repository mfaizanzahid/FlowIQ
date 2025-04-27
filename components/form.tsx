"use client";

import { useState } from "react";
import Image from "next/image";
import BlurredShape from "@/public/images/blurred-shape.svg";

export default function Form() {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    automationArea: "",
  });

  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false); // New state to track submission

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("Submitting...");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage("Your message has been sent successfully!");
        setIsSubmitted(true); // Mark the form as submitted
      } else {
        setMessage("Failed to send your message. Please try again.");
      }
    } catch (error) {
      setMessage("An error occurred. Please try again.");
    }
  };

  return (
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-24 ml-20 -translate-x-1/2"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShape}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-gray-800 py-3 md:py-7">
          <div className="mx-auto max-w-3xl text-center px-7 py-0">
            <h2 className="text-3xl font-semibold text-white md:text-4xl">
              Book A Free Consultation
            </h2>
            <p className="text-lg text-indigo-200/65 pb-5">
              After you submit, we’ll reach out to schedule a quick, no-pressure call with one of our workflow experts!
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full p-3 rounded bg-gray-700 text-white"
                required
                disabled={isSubmitted} // Disable input if form is submitted
              />
              <input
                type="text"
                name="companyName"
                placeholder="Company Name"
                value={formData.companyName}
                onChange={handleChange}
                className="w-full p-3 rounded bg-gray-700 text-white"
                required
                disabled={isSubmitted} // Disable input if form is submitted
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 rounded bg-gray-700 text-white"
                required
                disabled={isSubmitted} // Disable input if form is submitted
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 rounded bg-gray-700 text-white"
                required
                disabled={isSubmitted} // Disable input if form is submitted
              />
              <textarea
                name="automationArea"
                placeholder="What’s one area you'd love to automate?"
                value={formData.automationArea}
                onChange={handleChange}
                className="w-full p-3 rounded bg-gray-700 text-white"
                required
                disabled={isSubmitted} // Disable textarea if form is submitted
              />
              <button
                type="submit"
                className={`btn w-full py-3 rounded ${
                  isSubmitted ? "bg-gray-500 cursor-not-allowed" : "bg-indigo-600 hover:bg-indigo-700"
                } text-white`}
                disabled={isSubmitted} // Disable button if form is submitted
              >
                {message || "Submit"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}