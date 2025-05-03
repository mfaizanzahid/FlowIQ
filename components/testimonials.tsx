"use client";

import { useState } from "react";
import useMasonry from "@/utils/useMasonry";
import Image, { StaticImageData } from "next/image";
import TestimonialImg01 from "@/public/images/testimonial-01.jpg";
import TestimonialImg02 from "@/public/images/testimonial-02.jpg";
import TestimonialImg03 from "@/public/images/testimonial-03.jpg";
import TestimonialImg04 from "@/public/images/testimonial-04.jpg";
import TestimonialImg05 from "@/public/images/testimonial-05.jpg";
import TestimonialImg06 from "@/public/images/testimonial-06.jpg";
import TestimonialImg07 from "@/public/images/testimonial-07.jpg";
import TestimonialImg08 from "@/public/images/testimonial-08.jpg";
import TestimonialImg09 from "@/public/images/testimonial-09.jpg";
import ClientImg01 from "@/public/images/client-logo-01.svg";
import ClientImg02 from "@/public/images/client-logo-02.svg";
import ClientImg03 from "@/public/images/client-logo-03.svg";
import ClientImg04 from "@/public/images/client-logo-04.svg";
import ClientImg05 from "@/public/images/client-logo-05.svg";
import ClientImg06 from "@/public/images/client-logo-06.svg";
import ClientImg07 from "@/public/images/client-logo-07.svg";
import ClientImg08 from "@/public/images/client-logo-08.svg";
import ClientImg09 from "@/public/images/client-logo-09.svg";

const testimonials = [
  {
    img: TestimonialImg01,
    clientImg: ClientImg01,
    name: "Emily Dawson",
    company: "Precision Home Inspections",
    content:
      "Running a home inspection business means fielding tons of calls and emails every day. FlowIQ built us an AI agent that handles 80% of inquiries — from scheduling inspections to answering basic service questions. Our customers love the instant responses, and my team finally has more time to focus on delivering great inspections.",
    categories: [1, 2],
  },
  {
    img: TestimonialImg02,
    clientImg: ClientImg02,
    name: "Marcus Steele",
    company: "ComfortFirst HVAC",
    content:
      "We wanted to scale our HVAC business but were stuck manually following up on quotes and leads. FlowIQ designed a marketing automation system that sends personalized follow-ups, seasonal promos, and maintenance reminders automatically. Our booked jobs have increased by 30% without hiring new staff!",
    categories: [1, 5],
  },
  {
    img: TestimonialImg03,
    clientImg: ClientImg03,
    name: "Sarah Patel",
    company: "Keystone Property Inspections",
    content:
      "In home inspection, speed matters. Clients want instant access to quotes and availability. FlowIQ built a custom AI app that gives potential clients an instant estimate and lets them book right away. Our conversion rate from inquiry to scheduled inspection jumped by over 50% after launch!",
    categories: [1, 4],
  },
  {
    img: TestimonialImg04,
    clientImg: ClientImg04,
    name: "Natalie Kim",
    company: "UrbanNest Communities",
    content:
      "As a property management company handling multiple multifamily communities, missed maintenance calls were a nightmare. With FlowIQ’s AI voice solution, every call is answered immediately, maintenance requests are logged automatically, and urgent issues are escalated to our on-call techs. Tenant satisfaction scores have gone through the roof.",
    categories: [1, 3],
  },
  {
    img: TestimonialImg05,
    clientImg: ClientImg05,
    name: "Rebecca Lin",
    company: "ArcticBreeze HVAC Solutions",
    content:
      "Our HVAC company used to struggle with after-hours customer questions, and we were losing opportunities because of it. The AI agent FlowIQ deployed now answers questions, schedules service calls, and even troubleshoots basic HVAC issues. It’s like having a front-desk team working 24/7 without the cost.",
    categories: [1, 2],
  },
  {
    img: TestimonialImg06,
    clientImg: ClientImg06,
    name: "David Brooks",
    company: "PureAir Heating & Cooling",
    content:
      "We used to miss a lot of inbound HVAC service calls, especially on weekends. Now, thanks to the AI voice agent from FlowIQ, we never miss a lead. Customers get immediate assistance, and the AI even books appointments straight into our system. It’s easily added $20K+ a month in new revenue.",
    categories: [1, 3],
  },
  {
    img: TestimonialImg07,
    clientImg: ClientImg07,
    name: "Omar Hernandez",
    company: "Apex Home Inspection",
    content:
      "Between inspection reports, scheduling, and follow-ups, our admin workload was out of control. FlowIQ automated our entire workflow — from inquiry to inspection to report delivery. Clients now get faster service, and we've reduced manual tasks by 70%. Game-changer for our business.",
    categories: [1, 5],
  },
  {
    img: TestimonialImg08,
    clientImg: ClientImg08,
    name: "Allison Greene",
    company: "HarborStone Living",
    content:
      "Keeping tenants informed across our multifamily properties was chaotic — emails, texts, notices everywhere. FlowIQ built a centralized communication automation system that sends updates, rent reminders, and maintenance notices instantly. Communication complaints from tenants have dropped dramatically.",
    categories: [1, 5],
  },
  {
    img: TestimonialImg09,
    clientImg: ClientImg09,
    name: "Jonathan Reed",
    company: "SummitView Apartments",
    content:
      "Managing hundreds of units across multifamily properties generates mountains of service tickets. FlowIQ built a custom AI dashboard that categorizes, prioritizes, and routes tickets based on urgency. Our response time dropped by 65%, and maintenance teams are way more efficient now.",
    categories: [1, 4],
  },
];

export default function Testimonials() {
  const masonryContainer = useMasonry();
  const [category, setCategory] = useState<number>(1);

  return (
    
    <div className="mx-auto max-w-6xl px-4 sm:px-6" id="testimonials">
      
      <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1] md:py-20">
        {/* Section header */}
        <div className="mx-auto max-w-3xl pb-12 text-center">
          <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
          Why Businesses Trust FlowIQ to Automate Their Success
          </h2>
          <p className="text-lg text-indigo-200/65">
          When it comes to automation, it’s easy to get overwhelmed with flashy tech that sounds good but doesn’t actually move the needle.
          At FlowIQ, we cut through the noise and focus on what matters: <u>real-world results</u>.
          </p>
        </div>

        <div>
          {/* Buttons */}
          <div className="flex justify-center pb-12 max-md:hidden md:pb-16">
            <div className="relative inline-flex flex-wrap justify-center rounded-[1.25rem] bg-gray-800/40 p-1">
              {/* Button #1 */}
              <button
                className={`flex h-8 flex-1 items-center gap-2.5 whitespace-nowrap rounded-full px-3 text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-3 focus-visible:ring-indigo-200 ${category === 1 ? "relative bg-linear-to-b from-gray-900 via-gray-800/60 to-gray-900 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,--theme(--color-indigo-500/0),--theme(--color-indigo-500/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]" : "opacity-65 transition-opacity hover:opacity-90"}`}
                aria-pressed={category === 1}
                onClick={() => setCategory(1)}
              >
                <svg
                  className={`fill-current ${category === 1 ? "text-indigo-500" : "text-gray-600"}`}
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height={16}
                >
                  <path d="M.062 10.003a1 1 0 0 1 1.947.455c-.019.08.01.152.078.19l5.83 3.333c.052.03.115.03.168 0l5.83-3.333a.163.163 0 0 0 .078-.188 1 1 0 0 1 1.947-.459 2.161 2.161 0 0 1-1.032 2.384l-5.83 3.331a2.168 2.168 0 0 1-2.154 0l-5.83-3.331a2.162 2.162 0 0 1-1.032-2.382Zm7.854-7.981-5.83 3.332a.17.17 0 0 0 0 .295l5.828 3.33c.054.031.118.031.17.002l5.83-3.333a.17.17 0 0 0 0-.294L8.085 2.023a.172.172 0 0 0-.17-.001ZM9.076.285l5.83 3.332c1.458.833 1.458 2.935 0 3.768l-5.83 3.333c-.667.38-1.485.38-2.153-.001l-5.83-3.332c-1.457-.833-1.457-2.935 0-3.767L6.925.285a2.173 2.173 0 0 1 2.15 0Z" />
                </svg>
                <span>View All</span>
              </button>
              {/* Button #2 */}
              <button
                className={`flex h-8 flex-1 items-center gap-2.5 whitespace-nowrap rounded-full px-3 text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-3 focus-visible:ring-indigo-200 ${category === 2 ? "relative bg-linear-to-b from-gray-900 via-gray-800/60 to-gray-900 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,--theme(--color-indigo-500/0),--theme(--color-indigo-500/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]" : "opacity-65 transition-opacity hover:opacity-90"}`}
                aria-pressed={category === 2}
                onClick={() => setCategory(2)}
              >
        
                <svg className={`${category === 2 ? "stroke-indigo-500" : "stroke-gray-600"}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" >
              <path strokeOpacity="1" d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/>
              <path d="M2 14h2"/><path d="M20 14h2"/><path strokeOpacity="1" d="M15 13v2"/><path strokeOpacity="1" d="M9 13v2"/></svg>
                <span>AI Agents</span>
              </button>
              {/* Button #3 */}
              <button
                className={`flex h-8 flex-1 items-center gap-2.5 whitespace-nowrap rounded-full px-3 text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-3 focus-visible:ring-indigo-200 ${category === 3 ? "relative bg-linear-to-b from-gray-900 via-gray-800/60 to-gray-900 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,--theme(--color-indigo-500/0),--theme(--color-indigo-500/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]" : "opacity-65 transition-opacity hover:opacity-90"}`}
                aria-pressed={category === 3}
                onClick={() => setCategory(3)}
              >
               <svg className={`${category === 3 ? "stroke-indigo-500" : "stroke-gray-600"}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" >
               <path d="M2 10v3"/><path d="M6 6v11"/><path d="M10 3v18"/><path d="M14 8v7"/><path d="M18 5v13"/><path d="M22 10v3"/></svg>

                <span>AI Voice</span>
              </button>
              {/* Button #4 */}
              <button
                className={`flex h-8 flex-1 items-center gap-2.5 whitespace-nowrap rounded-full px-3 text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-3 focus-visible:ring-indigo-200 ${category === 4 ? "relative bg-linear-to-b from-gray-900 via-gray-800/60 to-gray-900 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,--theme(--color-indigo-500/0),--theme(--color-indigo-500/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]" : "opacity-65 transition-opacity hover:opacity-90"}`}
                aria-pressed={category === 4}
                onClick={() => setCategory(4)}
              >
                <svg className={`${category === 4 ? "stroke-indigo-500" : "stroke-gray-600"}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" >
                <rect x="2" y="4" width="20" height="16" rx="2"/><path d="M10 4v4"/><path d="M2 8h20"/><path d="M6 4v4"/></svg>
                <span>Custom AI Apps</span>
              </button>
              {/* Button #5 */}
              <button
                className={`flex h-8 flex-1 items-center gap-2.5 whitespace-nowrap rounded-full px-3 text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-3 focus-visible:ring-indigo-200 ${category === 5 ? "relative bg-linear-to-b from-gray-900 via-gray-800/60 to-gray-900 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,--theme(--color-indigo-500/0),--theme(--color-indigo-500/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]" : "opacity-65 transition-opacity hover:opacity-90"}`}
                aria-pressed={category === 5}
                onClick={() => setCategory(5)}
              ><svg className={`${category === 5 ? "stroke-indigo-500" : "stroke-gray-600"}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" >
              <circle cx="12" cy="4.5" r="2.5"/><path d="m10.2 6.3-3.9 3.9"/>
            <circle cx="4.5" cy="12" r="2.5"/><path d="M7 12h10"/>
            <circle cx="19.5" cy="12" r="2.5"/><path d="m13.8 17.7 3.9-3.9"/>
            <circle cx="12" cy="19.5" r="2.5"/></svg>
                <span>Automation</span>
              </button>
            </div>
          </div>

          {/* Cards */}
          <div
            className="mx-auto grid max-w-sm items-start gap-6 sm:max-w-none sm:grid-cols-2 lg:grid-cols-3"
            ref={masonryContainer}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="group">
                <Testimonial testimonial={testimonial} category={category}>
                  {testimonial.content}
                </Testimonial>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Testimonial({
  testimonial,
  category,
  children,
}: {
  testimonial: {
    img: StaticImageData;
    clientImg: StaticImageData;
    name: string;
    company: string;
    content: string;
    categories: number[];
  };
  category: number;
  children: React.ReactNode;
}) {
  return (
    <article
      className={`relative rounded-2xl bg-linear-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-5 backdrop-blur-xs transition-opacity before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] ${!testimonial.categories.includes(category) ? "opacity-30" : ""}`}
    >
      <div className="flex flex-col gap-4">
        <div>
          {/* <Image src={testimonial.clientImg} height={36} alt="Client logo" /> */}

          <div className="flex items-center gap-1.5">
            <svg
              className="h-4 w-4 fill-current text-white-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12 .587l3.668 7.568 8.332 1.2-6 5.85 1.416 8.26L12 18.896l-7.416 3.9L6 15.205l-6-5.85 8.332-1.2z" />
            </svg>
            <svg
              className="h-4 w-4 fill-current text-white-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12 .587l3.668 7.568 8.332 1.2-6 5.85 1.416 8.26L12 18.896l-7.416 3.9L6 15.205l-6-5.85 8.332-1.2z" />
            </svg>
            <svg
              className="h-4 w-4 fill-current text-white-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12 .587l3.668 7.568 8.332 1.2-6 5.85 1.416 8.26L12 18.896l-7.416 3.9L6 15.205l-6-5.85 8.332-1.2z" />
            </svg>
            <svg
              className="h-4 w-4 fill-current text-white-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12 .587l3.668 7.568 8.332 1.2-6 5.85 1.416 8.26L12 18.896l-7.416 3.9L6 15.205l-6-5.85 8.332-1.2z" />
            </svg>
            <svg
              className="h-4 w-4 fill-current text-white-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12 .587l3.668 7.568 8.332 1.2-6 5.85 1.416 8.26L12 18.896l-7.416 3.9L6 15.205l-6-5.85 8.332-1.2z" />
            </svg>
          </div>    

        

        </div>
        <p className="text-indigo-200/65 before:content-['“'] after:content-['”']">
          {children}
        </p>
        <div className="flex items-center gap-3">
          <Image
            className="inline-flex shrink-0 rounded-full"
            src={testimonial.img}
            width={36}
            height={36}
            alt={testimonial.name}
          />
          <div className="text-sm font-medium text-gray-200">
            <span>{testimonial.name}</span>
            <span className="text-gray-700"> - </span>
            <a
              className="text-indigo-200/65 transition-colors hover:text-indigo-500"
              href="#0"
            >
              {testimonial.company}
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
