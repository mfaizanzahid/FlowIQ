import { useState } from "react";

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // const faqs = [
  //   {
  //     question: "Will AI agents replace my human team?",
  //     answer:
  //       "Not at all. Think of them as extra team members who love boring tasks and never sleep — freeing up your human team to focus on higher-value work.",
  //   },
  //   {
  //     question: "Is the setup process super technical?",
  //     answer:
  //       "Nope. You tell us what you need automated — and we handle the rest. From planning to building to training, we make the process painless.",
  //   },
  //   {
  //     question: "How fast can I start seeing results?",
  //     answer:
  //       "Many clients see improvements within 2–4 weeks — from faster response times to increased sales to lower overhead costs.",
  //   },
  //   {
  //     question: "What happens if my needs change over time?",
  //     answer:
  //       "We stick around! Our continuous support plans ensure your automations grow and evolve alongside your business.",
  //   },
  //   {
  //     question: "Is AI automation expensive?",
  //     answer:
  //       "Not with FlowIQ. We specialize in affordable, high-ROI solutions that pay for themselves fast — and keep delivering returns long-term.",
  //   },
  // ];

  const faqs = [
    {
      question: "My team isn’t tech-savvy. Will we actually be able to use this?",
      answer:
        "100%. We design our systems for real-world use — not Silicon Valley engineers. Whether it’s your office manager, technician, or dispatcher, we make the tools intuitive, streamlined, and aligned with the way your team already works. We also handle all the setup, training, and onboarding — so there’s no complicated dashboard to learn, and no steep learning curve. Just clear results from day one.",
    },
    {
      question: "Will AI agents make my business feel robotic or impersonal?",
      answer:
        "That’s a valid concern — but we’ve solved for it. Our AI voice agents and chat agents are built with empathy, timing, and tone in mind. They’re trained to speak like a human, handle objections gracefully, and even add your brand personality into every interaction. Most clients tell us their customers don’t even realize they’re talking to AI — they just appreciate the fast, helpful response.",
    },
    {
      question: "How do you make sure the automation doesn’t break or mess something up?",
      answer:
        "We treat automation like mission-critical infrastructure. Before anything goes live, we run simulations, failover tests, and use version control for workflows. Every system has built-in guardrails, validation steps, and fallback logic — so if something’s off, it flags or pauses before it impacts your operations. After launch, we provide active monitoring and support to ensure your system stays reliable, even as your business evolves.",
    },
    {
      question: "What if our processes are messy or not documented? Can you still help?",
      answer:
        "Yes — and in fact, that’s where most businesses are when they come to us. We don’t expect a polished SOP or perfectly mapped workflow. During our discovery process, we work with you to unpack how things actually get done (even if that’s “Bob handles it when he remembers”). Then we organize, streamline, and automate your processes one layer at a time. You’ll come out of it not just with automation — but with clarity and structure across your operations.",
    },
    {
      question: "Is this only for big companies? We're a lean team trying to grow.",
      answer:
        "This is especially for lean teams. We’ve built AI and automation systems for home inspectors with just 2 team members and HVAC shops with 1 van. The goal is to help you punch above your weight — automate what drains your time, close more business, and grow profitably without hiring more staff. It’s not about size — it’s about building smarter from where you are right now.",
    },
    {
      question: "How long does it take to go live?",
      answer:
        "We move quickly — most projects go live within 2–4 weeks. That includes discovery, strategy, build, testing, and launch. We don’t drag things out or hide behind jargon. You’ll get clear timelines, frequent updates, and an obsessive focus on quick wins that start delivering value before the full system is even complete.",
    },
    {
      question: "Can this really help with follow-ups, quote chasing, and appointment scheduling?",
      answer:
        "Absolutely — and that’s one of the highest-ROI areas for automation. Imagine never having to remind your team to follow up on a lead, confirm an appointment, or chase down a quote. Our AI agents can text, email, or call your prospects in real time, answer questions, overcome objections, and schedule right into your existing calendar. It’s like giving your team a full-time assistant — without adding to payroll.",
    },
    {
      question: "What if I already use software like ISN, ServiceTitan, Clio or a CRM?",
      answer:
        "Perfect. We specialize in integrating with the tools you already know and rely on — whether that’s Clio, ISN, ServiceTitan, Zoho, HighLevel, HubSpot, Salesforce, or something more niche. Our systems layer on top of your current tech stack and make it work harder for you. No need to rip and replace — we turn your existing tools into a seamless, smart ecosystem.",
    },
    {
      question: "Will this actually save us money? Or is it just a shiny toy?",
      answer:
        "This isn’t some trendy AI gimmick — it’s a revenue enabler. Our clients routinely save 20–40+ hours per month on manual admin tasks, reduce missed appointments, and speed up response times, leading to more closed jobs. One HVAC company told us the system paid for itself in the first 6 weeks. Think of it as a permanent productivity upgrade that compounds over time — with hard numbers to prove it.",
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