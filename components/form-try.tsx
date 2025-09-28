"use client";

import { useState } from "react";
import Image from "next/image";
import BlurredShape from "@/public/images/blurred-shape.svg";

export default function FormTry() {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    phoneSystem: "",
    subject:"Book Exclusive 6-month Intake Trial",
    // automationArea: "",
  });

  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false); // New state to track submission

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
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
        if (typeof window !== "undefined" && window.gtag) {
          window.gtag("event", "Intake Trial Form Submitted", {
            event_category: "Engagement",
            event_label: "Form Submission",
          });
        }
        
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

             <h2
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl"
              data-aos="fade-up"
            >
              Book Exclusive 6-month Trial
            </h2>
            <p className="text-lg text-indigo-200/65 pb-8">
            Ready to See What's Really Happening on Your Intake Calls?

            </p>


           
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                className="form-input w-full"
                required
                disabled={isSubmitted} // Disable input if form is submitted
              />
              <input
                type="text"
                name="companyName"
                placeholder="Company Name"
                value={formData.companyName}
                onChange={handleChange}
                className="form-input w-full"
                required
                disabled={isSubmitted} // Disable input if form is submitted
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="form-input w-full"
                required
                disabled={isSubmitted} // Disable input if form is submitted
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="form-input w-full"
                // className="w-full p-3 rounded bg-gray-700 text-white"
                required
                disabled={isSubmitted} // Disable input if form is submitted
              />
                      

              <select
                name="phoneSystem"
                value={formData.phoneSystem}
                onChange={handleChange}
                className="form-input w-full bg-gray-880 text-gray-600"
                required
                disabled={isSubmitted} // Disable input if form is submitted
              >
                <option value="" disabled className="text-gray-200 bg-gray-800">
                  What phone system do you use?
                </option>
                <option value="RingCentral" className="bg-gray-800 text-gray-200">RingCentral</option>
                <option value="Vongage" className="bg-gray-800 text-gray-200">Vongage</option>
                <option value="Nextiva" className="bg-gray-800 text-gray-200">Nextiva</option>
                <option value="GoToConnect" className="bg-gray-800 text-gray-200">GoToConnect</option>
                <option value="ZoomPhone" className="bg-gray-800 text-gray-200">ZoomPhone</option>
                <option value="Dialpad" className="bg-gray-800 text-gray-200">Dialpad</option>
                <option value="8x8" className="bg-gray-800 text-gray-200">8x8</option>
                <option value="3CX" className="bg-gray-800 text-gray-200">3CX</option>
                <option value="VXT" className="bg-gray-800 text-gray-200">VXT</option>
                <option value="Other" className="bg-gray-800 text-gray-200">Other</option>
              </select>

 
              {/* <textarea
                name="automationArea"
                placeholder="What key challenge can we help you resolve?"
                value={formData.automationArea}
                onChange={handleChange}
                className="form-input w-full"
                // className="w-full p-3 rounded bg-gray-700 text-white"
                required
                disabled={isSubmitted} // Disable textarea if form is submitted
              /> */}
              <button
                type="submit"
                className={`btn group mb-4 w-full sm:mb-0 sm:w-full   ${
                  isSubmitted ? "bg-gray-500 cursor-not-allowed" : "bg-linear-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%] cursor-pointer"
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