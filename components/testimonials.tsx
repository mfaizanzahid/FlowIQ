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
    company: "ComfortPro Heating & Cooling",
    content:
      "We’ve been on ServiceTitan for years, but honestly we were just scratching the surface. FlowIQ helped us clean up our data, build out automated follow-up campaigns, and create a system for upselling maintenance contracts. Within 3 months, our service agreement renewals jumped by 28% and our techs now walk into every job with pre-qualified upsell opportunities. It feels like we finally turned ServiceTitan into the revenue tool it should have been all along.",
    categories: [1,2,3,4,5],
  },
  {
    img: TestimonialImg02,
    clientImg: ClientImg02,
    name: "Marcus Steele",
    company: "ClearFlow Plumbing",
    content:
      "We were bleeding revenue by not rebooking seasonal jobs. FlowIQ set up a Zoho CRM pipeline that syncs with Jobber, and now our customers get automatic reminders and offers at just the right time. In the first 90 days, we booked 32 additional jobs from existing clients — no extra marketing spend. That’s the kind of ROI we’ve been looking for.",
    categories: [1,2,3,4],
  },
  {
    img: TestimonialImg03,
    clientImg: ClientImg03,
    name: "Sarah Patel",
    company: "VoltPro Electric",
    content:
      "We knew we weren’t following up properly on estimates. FlowIQ set up GoHighLevel integrated with our ServiceTitan data. Now every lead is tracked, followed up, and nurtured until we get a yes or no. Our conversion rate on proposals jumped 21% in the first two months. It feels like we hired a full-time sales coordinator — without the overhead.",
    categories: [1,2,3,4],
  },
  {
    img: TestimonialImg04,
    clientImg: ClientImg04,
    name: "Natalie Kim",
    company: "TopShield Roofing",
    content:
      "Before FlowIQ, we were booking jobs but not building long-term client value. They customized HubSpot for us and layered it onto our JobNimbus system. Now we have automated workflows for referrals, warranty check-ins, and seasonal promotions. We’ve already booked 19 referral jobs that never would’ve come in without this system. It’s like having a built-in growth engine that runs itself.",
    categories: [1,2,3],
  },
  {
    img: TestimonialImg05,
    clientImg: ClientImg05,
    name: "Rebecca Lin",
    company: "PrimeCheck Inspections",
    content:
      "We run a big team across multiple states using ISN. Scheduling was fine, but we weren’t getting enough repeat or referral business. FlowIQ created a rebooking and referral system using Zoho CRM that plugs right into ISN. Within 60 days, we saw a 25% increase in referral jobs and inspectors are now trained to flag upsell opportunities in real-time. It finally feels like ISN is helping us grow, not just manage appointments.",
    categories: [1,2,3,4],
  },
  {
    img: TestimonialImg06,
    clientImg: ClientImg06,
    name: "David Brooks",
    company: "PureAir Heating & Cooling",
    content:
      "I used to spend hours every week double-checking ServiceTitan reports and chasing my team to follow up with unsold estimates. FlowIQ automated that entire process. Now every unsold estimate gets a consistent email/SMS/phone sequence, and our close rate on those has doubled. What’s more, I get clean dashboards in HubSpot that show me exactly where the money is. Game-changer for both revenue and my sanity.",
    categories: [1, 2,3],
  },
  {
    img: TestimonialImg07,
    clientImg: ClientImg07,
    name: "Omar Hernandez",
    company: "Streamline Plumbing Services",
    content:
      "ServiceTitan kept us organized, but it didn’t help us grow. FlowIQ built out a cross-selling system inside Salesforce that identifies when a drain-cleaning customer should get a water heater offer or repiping inspection. The extra jobs have been worth tens of thousands already, and the system just keeps running. It’s the smartest investment we’ve made in years.",
    categories: [1, 2,3,4,5],
  },
  {
    img: TestimonialImg08,
    clientImg: ClientImg08,
    name: "Allison Greene",
    company: "ClimateGuard HVAC",
    content:
      "FlowIQ helped us transform ServiceTitan from a scheduling tool into a sales machine. They built a Zoho integration that tracks leads all the way through service agreements and replacements. Our team is now automatically reminded when equipment warranties are expiring, which has added over $120k in replacement jobs in the last quarter. It feels like we finally have a system that works for us, not against us.",
    categories: [1,2,3,4],
  },
  {
    img: TestimonialImg09,
    clientImg: ClientImg09,
    name: "Jonathan Reed",
    company: "EagleEye Home Inspections",
    content:
      "ISN gave us scheduling and management, but not much else. FlowIQ built automated post-inspection follow-ups that educate agents and clients, request reviews, and ask for referrals at the right moments. We’ve seen a 40% jump in Google reviews and now get consistent referral leads each month. It’s turned what used to be one-and-done inspections into a steady stream of repeat and referral business.",
    categories: [1,2,3,4,5],
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
          Real Results. Real Revenue.
          </h2>
          <p className="text-lg text-indigo-200/65">
          From HVAC to home inspections, our clients use FlowIQ to turn their service management software and CRMs into growth engines. These are their stories of higher close rates, more referrals, and <u>real bottom-line impact</u>.
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
              
              <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"/>
              </svg>
                <span>Software Admin</span>
              </button>
              {/* Button #3 */}
              <button
                className={`flex h-8 flex-1 items-center gap-2.5 whitespace-nowrap rounded-full px-3 text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-3 focus-visible:ring-indigo-200 ${category === 3 ? "relative bg-linear-to-b from-gray-900 via-gray-800/60 to-gray-900 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,--theme(--color-indigo-500/0),--theme(--color-indigo-500/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]" : "opacity-65 transition-opacity hover:opacity-90"}`}
                aria-pressed={category === 3}
                onClick={() => setCategory(3)}
              >
               <svg className={`${category === 3 ? "stroke-indigo-500" : "stroke-gray-600"}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" >
               <path d="m14.305 7.53.923-.382"/><path d="m15.228 4.852-.923-.383"/><path d="m16.852 3.228-.383-.924"/><path d="m16.852 8.772-.383.923"/><path d="m19.148 3.228.383-.924"/><path d="m19.53 9.696-.382-.924"/><path d="m20.772 4.852.924-.383"/><path d="m20.772 7.148.924.383"/><path d="M22 13v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7"/><path d="M8 21h8"/><circle cx="18" cy="6" r="3"/>
               </svg>

                <span>CRM Integration</span>
              </button>
              {/* Button #4 */}
              <button
                className={`flex h-8 flex-1 items-center gap-2.5 whitespace-nowrap rounded-full px-3 text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-3 focus-visible:ring-indigo-200 ${category === 4 ? "relative bg-linear-to-b from-gray-900 via-gray-800/60 to-gray-900 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,--theme(--color-indigo-500/0),--theme(--color-indigo-500/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]" : "opacity-65 transition-opacity hover:opacity-90"}`}
                aria-pressed={category === 4}
                onClick={() => setCategory(4)}
              >
                <svg className={`${category === 4 ? "stroke-indigo-500" : "stroke-gray-600"}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" >
               <path strokeOpacity="1" d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/>
              <path d="M2 14h2"/><path d="M20 14h2"/><path strokeOpacity="1" d="M15 13v2"/><path strokeOpacity="1" d="M9 13v2"/>
                
                </svg>
                <span>AI-Enabled Systems</span>
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
