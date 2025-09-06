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
      question: "My customers don’t want AI.",
      answer:
        "We hear this all the time. Customers want authentic, human interaction — and that’s exactly what they get. Our approach uses AI in the background to handle the repetitive admin: scheduling reminders, follow-ups, service renewals, and upsell prompts. That way, your office team can focus on talking to customers instead of chasing down tasks. It’s not about replacing humans — it’s about freeing them to deliver better service.",
    },
    {
      question: "We already use ServiceTitan/Jobber/ISN — why do we need FlowIQ?",
      answer:
        "Great — those platforms are powerful, but they’re built for scheduling, dispatch, and invoicing — not for business development. Most companies barely scratch the surface of what’s possible. We optimize, customize, and manage these tools so they also drive rebooking, maintenance contracts, upsells, cross-sells, and referrals. In short, we turn your existing investment into a real revenue engine.",
    },
    {
      question: "Is this complicated for my team to learn?",
      answer:
        "Not at all. That’s the beauty of it. We don’t overhaul how your team works or introduce “new shiny software” they have to figure out. We customize the platforms you already use and handle the administration ourselves. For your staff, it’s seamless — they keep doing what they do best, while the system quietly works in the background to boost revenue.",
    },
    {
      question: "Do you replace my existing CRM or scheduling software?",
      answer:
        "No. We work with what you already have. Whether it’s ServiceTitan, Jobber, ISN, Salesforce, Zoho, HubSpot, or Go High Level — we customize, connect, and optimize them so they actually fit your business model. Instead of switching systems or juggling multiple tools, we make your current setup smarter and more profitable.",
    },
    {
      question: "What kind of ROI can I expect?",
      answer:
        "Most of our clients see 15–30% more booked jobs and incremental revenue within the first 60 days. That comes from better follow-up, upselling, recurring service agreements, and reactivation of past customers. And because we’re optimizing the systems you’ve already invested in, you’re not adding new costs — you’re simply converting more value out of what’s already there.",
    },
    {
      question: "Can you handle ongoing administration of ServiceTitan?",
      answer:
        "Yes. This is actually where we shine. Many home service companies set up their FSM or CRM software once and then let it collect dust — which leads to inefficiencies, lost opportunities, and broken workflows. With FlowIQ, we offer done-for-you monthly management: cleaning data, updating automations, fixing errors, and rolling out new revenue-generating campaigns. Your systems stay sharp, updated, and profitable — month after month.",
    },
    {
      question: "We already have an office manager handling this — why outsource?",
      answer:
        "Office managers are great at keeping operations moving, but they’re not specialists in CRM architecture, workflow design, or revenue systems. That’s where we come in. We don’t replace your office manager — we make their job easier. We handle the heavy lifting behind the scenes, so your office staff has a reliable, fully optimized system that saves them time and helps the business grow.",
    },
    {
      question: "What if we don’t have a dedicated sales team?",
      answer:
        "That’s actually where our systems have the most impact. By automating follow-ups, service reminders, and rebooking campaigns, you create a “silent sales engine” that works 24/7 — even without a sales rep on staff. Your technicians, office staff, and marketing dollars all work harder because customers don’t slip through the cracks.",
    },
    {
      question: "Will this replace our marketing?",
      answer:
        "Not at all. If anything, it makes your marketing more valuable. Most companies leak money by paying for leads that never book, or by doing one-off jobs with no repeat business. Our systems plug those holes. You keep running your marketing campaigns, but now you’ll capture and convert more of those leads into repeat, long-term customers.",
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
              We know you’ve heard the buzzwords. That’s why we keep it simple: no gimmicks, no jargon - just clear answers on how we help your service management software and CRM actually drive revenue.
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