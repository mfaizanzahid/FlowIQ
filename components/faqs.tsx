import { useState } from "react";

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Will AI agents replace my human team?",
      answer:
        "Not at all. Think of them as extra team members who love boring tasks and never sleep — freeing up your human team to focus on higher-value work.",
    },
    {
      question: "Is the setup process super technical?",
      answer:
        "Nope. You tell us what you need automated — and we handle the rest. From planning to building to training, we make the process painless.",
    },
    {
      question: "How fast can I start seeing results?",
      answer:
        "Many clients see improvements within 2–4 weeks — from faster response times to increased sales to lower overhead costs.",
    },
    {
      question: "What happens if my needs change over time?",
      answer:
        "We stick around! Our continuous support plans ensure your automations grow and evolve alongside your business.",
    },
    {
      question: "Is AI automation expensive?",
      answer:
        "Not with FlowIQ. We specialize in affordable, high-ROI solutions that pay for themselves fast — and keep delivering returns long-term.",
    },
  ];

  return (
    <section className="relative">
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 -mt-20 -translate-x-1/2"
        aria-hidden="true"
        id="faqs"
      >
        
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                FAQs
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Got Questions? We've Got Answers.
            </h2>
            <p className="text-lg text-indigo-200/65">
              We get it — AI automation can feel overwhelming at first. Here are answers to the most common questions we hear, so you can move forward with confidence.
            </p>
          </div>

          {/* Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-indigo-200/50 rounded-lg overflow-hidden"
              >
                <button
                  className="w-full flex justify-between items-center px-4 py-3 text-left text-indigo-200/80 hover:text-indigo-100 focus:outline-none"
                  onClick={() => toggleAccordion(index)}
                >
                  <span className="font-medium">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 transform transition-transform  ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  className={`transition-all duration-800 ease-in-out ${
                    openIndex === index ? "max-h-screen" : "max-h-0"
                  }`}
                >
                  <div className="px-4 py-3 text-indigo-200/70">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}