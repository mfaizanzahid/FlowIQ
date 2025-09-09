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
      question: "How customizable is FlowIQ?",
      answer: "Every firm is different. FlowIQ doesn’t force you into generic scorecards or cookie-cutter dashboards. We build custom metrics based on your practice area, goals, and existing systems. For example, a PI firm might want to track medical referral sources and case type trends, while an employment law firm might focus on intake objection handling and scheduling rates. FlowIQ is designed to reflect your exact business priorities."
    },
    {
      question: "Does FlowIQ replace my CRM or phone system?",
      answer: "No. FlowIQ is not a replacement — it’s an enhancement. We integrate directly with your existing CRM, phone systems, or case management software so you don’t have to rip and replace. The goal is to add visibility, intelligence, and accountability to what you’re already using, not to burden your team with another siloed platform."
    },
    {
      question: "How secure is client data inside FlowIQ?",
      answer: "Data security is a top priority. FlowIQ uses end-to-end encryption both in transit and at rest, with strict access controls to ensure only authorized team members can view data. We comply with industry best practices and, where required, legal industry standards around client confidentiality. Our architecture is designed to give law firms the peace of mind that sensitive information is fully protected."
    },
    {
      question: "Will FlowIQ compromise client confidentiality or attorney–client privilege?",
      answer: "Absolutely not. FlowIQ is designed for compliance and privacy first. We never share, resell, or expose your client data. Our scorecards and dashboards are focused on intake performance and process visibility, not the sensitive details of client cases. Your firm maintains full control of all data, and we’re happy to review our policies with your compliance team."
    },
    {
      question: "Is FlowIQ compliant with privacy laws like GDPR or HIPAA?",
      answer: "Yes. FlowIQ’s systems are structured to support compliance with major privacy frameworks, including GDPR and HIPAA (when relevant to healthcare-related intakes). If your jurisdiction has additional requirements (such as state bar guidelines), we work directly with you to ensure FlowIQ operates within those boundaries."
    },
    {
      question: "Will my staff feel like FlowIQ is spying on them?",
      answer: "FlowIQ is not about policing — it’s about coaching and consistency. Intake staff often welcome the clarity, since they get objective feedback rather than subjective criticism. Managers and owners appreciate that the data highlights where training is needed, which helps staff succeed rather than setting them up to fail."
    },
    {
      question: "How long does implementation take?",
      answer: "Most firms are live within 2–4 weeks, depending on the complexity of integrations and custom scorecards. Because we work with your existing systems, the onboarding process is streamlined. Our team handles setup and training so you can start seeing actionable insights quickly."
    },
    {
      question: "Will this create extra work for my intake team?",
      answer: "No. FlowIQ is designed to reduce workload, not add to it. Intake staff continue their normal process, while FlowIQ works in the background to score calls, track metrics, and surface insights. Managers get clean dashboards instead of hours of manual call listening or spreadsheet wrangling."
    },
    {
      question: "What measurable ROI can I expect?",
      answer: "Clients typically see improvements in consultation bookings (20–50% increase within months), rescued opportunities from missed calls or weak follow-ups, marketing ROI by knowing which campaigns generate quality cases, and staff performance consistency through objective coaching. For most firms, FlowIQ pays for itself many times over by capturing cases that would have otherwise been lost."
    },
    {
      question: "What if my firm has unique processes or industry-specific requirements?",
      answer: "That’s exactly what FlowIQ was built for. The platform is modular and customizable. Whether you need niche intake scorecards, reporting for a specific jurisdiction, or integration with less-common CRMs, we tailor the setup so it aligns perfectly with your workflows."
    },
    {
      question: "Who has access to the data inside FlowIQ?",
      answer: "Access is role-based and controlled by your firm. Intake staff, managers, and leadership can each be granted the level of visibility they need — nothing more, nothing less. You own the data, and we make sure only the right people in your organization can see it."
    },
    {
      question: "What happens if we stop using FlowIQ? Do we lose our data?",
      answer: "No. Your data is always yours. If you decide to offboard, we’ll provide a secure export of all your historical reports, scorecards, and metrics so you maintain full continuity. We believe in earning your business every month, not locking you in."
    },
    {
      question: "Is FlowIQ difficult to learn?",
      answer: "Not at all. The platform was designed for intake directors and firm leadership, not for data scientists. Dashboards are intuitive, reports are clear, and our team provides training to make sure your staff feels comfortable from day one."
    }
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
              We know switching or adding a system feels like a big move. Here’s what you need to know.
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