// "use client";

import { useState } from "react";
import BlurredShape from "@/public/images/blurred-shape.svg";
import Image from "next/image";
import Spotlight from "@/components/spotlight";
import Founder from "@/public/images/founder.png";
import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";








// ...existing imports...

export default function ReferralForm() {
  const [referrals, setReferrals] = useState([
    { name: "", phone: "", email: "", jobTitle: "", companyName: "", phoneError: "" },
  ]);
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleReferralChange = (
    idx: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setReferrals((prev) =>
      prev.map((ref, i) => {
        if (i === idx) {
          // Phone validation
          let phoneError = ref.phoneError || "";
          if (name === "phone") {
            const phoneRegex = /^\d{8,15}$/;
            phoneError = value && !phoneRegex.test(value.replace(/\D/g, "")) ? "Enter a valid phone number (8-15 digits)" : "";
          }
          return { ...ref, [name]: value, phoneError };
        }
        return ref;
      })
    );
  };

  const addReferral = () => {
    setReferrals((prev) => [
      ...prev,
      { name: "", phone: "", email: "", jobTitle: "", companyName: "", phoneError: "" },
    ]);
  };

  const removeReferral = (idx: number) => {
    setReferrals((prev) => prev.filter((_, i) => i !== idx));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate all phone fields before submit
    let hasError = false;
    const phoneRegex = /^\d{8,15}$/;
    const updated = referrals.map((ref) => {
      const phoneError = ref.phone && !phoneRegex.test(ref.phone.replace(/\D/g, "")) ? "Enter a valid phone number (8-15 digits)" : "";
      if (phoneError) hasError = true;
      return { ...ref, phoneError };
    });
    setReferrals(updated);
    if (hasError) {
      setMessage("Please fix phone number errors before submitting.");
      return;
    }

    setMessage("Submitting...");
    try {
      const response = await fetch("/api/send-email-referral", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ referrals: updated.map(({ phoneError, ...rest }) => rest) }),
      });
      if (response.ok) {
        setMessage("Your referrals have been sent successfully!");
        setIsSubmitted(true);
        if (typeof window !== "undefined" && window.gtag) {
          window.gtag("event", "Referral Form Submitted", {
            event_category: "Engagement",
            event_label: "Referral Submission",
          });
        }
      } else {
        setMessage("Failed to send your referrals. Please try again.");
      }
    } catch (error) {
      setMessage("An error occurred. Please try again.");
    }
  };

  return (
    <section className="relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 py-10 sm:px-6">
        <div className="py-3 md:py-7">
          <div className="mx-auto max-w-3xl text-center px-0 py-0">
            <h2
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl"
              data-aos="fade-up"
            >
              Refer a Client
            </h2>
            <p className="text-lg text-indigo-200/65 pb-8">
              Add details of anyone you’d like to refer. You can add multiple referrals.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              {referrals.map((ref, idx) => (
                <div
                  key={idx}
                  className="w-full bg-white/10 rounded-lg p-4 mb-2 border border-indigo-200/20 relative"
                >
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex flex-1">
                      <span className="font-semibold text-indigo-200">
                      Referral {idx + 1}
                    </span>
                    </div>
                    <div className="flex flex-1 justify-end">
                    
                    {referrals.length > 1 && !isSubmitted && (
                      <button
                        type="button"
                        onClick={() => removeReferral(idx)}
                        className="ml-2 px-3 py-2 rounded bg-red-500 text-white hover:bg-red-600 text-lg"
                        aria-label="Remove this referral"
                      >
                        &minus;
                      </button>
                    )}
                     {idx === referrals.length - 1 && !isSubmitted && (
                      <button
                        type="button"
                        onClick={addReferral}
                        className="ml-2 px-3 py-2 rounded bg-indigo-500 text-white hover:bg-indigo-600 text-lg"
                        aria-label="Add another referral"
                      >
                        +
                      </button>
                    )}
                  </div>
                </div>         
                  <div className="flex flex-wrap gap-2 gap-y-2 items-center w-full">
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      value={ref.name}
                      onChange={(e) => handleReferralChange(idx, e)}
                      className="form-input flex-1 min-w-[100px] w-full sm:w-auto"
                      required
                      disabled={isSubmitted}
                    />
                    <input
                      type="text"
                      name="jobTitle"
                      placeholder="Job Title"
                      value={ref.jobTitle}
                      onChange={(e) => handleReferralChange(idx, e)}
                      className="form-input flex-1 min-w-[100px] w-full sm:w-auto"
                      required
                      disabled={isSubmitted}
                    />
                    <input
                      type="text"
                      name="companyName"
                      placeholder="Company Name"
                      value={ref.companyName}
                      onChange={(e) => handleReferralChange(idx, e)}
                      className="form-input flex-1 min-w-[100px] w-full sm:w-auto"
                      required
                      disabled={isSubmitted}
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={ref.email}
                      onChange={(e) => handleReferralChange(idx, e)}
                      className="form-input flex-1 min-w-[100px] w-full sm:w-auto"
                      required
                      disabled={isSubmitted}
                    />
                   
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone"
                        value={ref.phone}
                        onChange={(e) => handleReferralChange(idx, e)}
                        className={`form-input flex-1 min-w-[100px] w-full sm:w-auto ${ref.phoneError ? "border-red-500" : ""}`}
                        required
                        disabled={isSubmitted}
                      />
                      {ref.phoneError && (
                        <span className="text-red-400 text-xs mt-1">{ref.phoneError}</span>
                      )}
                    
                   
                  </div>
      
                </div>
              ))}
              <button
                type="submit"
                className={`btn group mb-4 w-full sm:mb-0 sm:w-full ${
                  isSubmitted
                    ? "bg-gray-500 cursor-not-allowed"
                    : "bg-linear-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%] cursor-pointer"
                } text-white`}
                disabled={isSubmitted}
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
// ...existing code...
