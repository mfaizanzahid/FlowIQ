import Image from "next/image";
import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";
import BlurredShape from "@/public/images/blurred-shape.svg";
import FeaturesImage from "@/public/images/features.png";

export default function Features() {
  return (
    <section className="relative">
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 -mt-20 -translate-x-1/2"
        aria-hidden="true"
        
      >
        <Image
          className="max-w-none"
          src={BlurredShapeGray}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-80 -translate-x-[120%] opacity-50"
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
      <div className="mx-auto max-w-6xl px-4 sm:px-6" id="how-we-can-help">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1] md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-4 text-center md:pb-12" >
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
              How We Help
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
            Services That Put Your Service Management Software to Work
            </h2>
            <p className="text-lg text-indigo-200/65">
           We don’t replace your tools — we make them smarter, leaner, and revenue-focused.
            </p>
          </div>
          <div className="flex justify-center pb-4 md:pb-12" data-aos="fade-up">
            <Image
              className="max-w-none"
              src={FeaturesImage}
              width={1104}
              height={384}
              alt="Features"
            />
          </div>
          {/* Items */}
          <div className="mx-auto grid max-w-sm gap-12 sm:max-w-none sm:grid-cols-2 md:gap-x-14 md:gap-y-16 lg:grid-cols-3">
            <article>


              <svg className="mb-3 stroke-indigo-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" >
              <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"/>
              </svg>
              

              
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
              FSM Software Implementation & Admin
              </h3>
              <p className="text-indigo-200/65">
              We handle the heavy lifting of implementing, managing and customizing ServiceTitan, ISN, Jobber, and more. From setting up workflows to cleaning data, your platform runs smoother, faster, and error-free.
              </p>
            </article>
            <article>
            <svg className="mb-3 stroke-indigo-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" >
            <path d="m14.305 7.53.923-.382"/><path d="m15.228 4.852-.923-.383"/><path d="m16.852 3.228-.383-.924"/><path d="m16.852 8.772-.383.923"/><path d="m19.148 3.228.383-.924"/><path d="m19.53 9.696-.382-.924"/><path d="m20.772 4.852.924-.383"/><path d="m20.772 7.148.924.383"/><path d="M22 13v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7"/><path d="M8 21h8"/><circle cx="18" cy="6" r="3"/>
            </svg>

            

              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
              CRM Integration & Sales Systems
              </h3>
              <p className="text-indigo-200/65">
              Zoho, Salesforce, HubSpot, GoHighLevel - we build and manage custom CRMs that plug into your scheduling software. With pipelines, automations, and dashboards designed for sales, your team always knows the next best move.
              </p>
            </article>
            <article>

            
            <svg className="mb-3 stroke-indigo-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" >
              <path strokeOpacity="1" d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/>
              <path d="M2 14h2"/><path d="M20 14h2"/><path strokeOpacity="1" d="M15 13v2"/><path strokeOpacity="1" d="M9 13v2"/>
              </svg>

              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
              AI-Enabled Revenue Growth Systems
              </h3>
              <p className="text-indigo-200/65">
              We inject AI into your sales stack. From smart follow-up campaigns to predictive upselling, our systems help you win back lost leads, sell more maintenance contracts, and capture repeat business automatically.
              </p>
            </article>
            <article>
                   <svg className="mb-3 stroke-indigo-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" >
            <circle cx="12" cy="4.5" r="2.5"/><path d="m10.2 6.3-3.9 3.9"/>
            <circle cx="4.5" cy="12" r="2.5"/><path d="M7 12h10"/>
            <circle cx="19.5" cy="12" r="2.5"/><path d="m13.8 17.7 3.9-3.9"/>
            <circle cx="12" cy="19.5" r="2.5"/>
            </svg>
              
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
              Workflow & Marketing Automation
              </h3>
              <p className="text-indigo-200/65">
              We automate the operational grind (reminders, invoicing, job tracking) AND your marketing (email, SMS, content). The result: more booked jobs, fewer dropped balls, and 40+ hours a week saved for your team.
              </p>
            </article>
            <article>
     

            <svg className="mb-3 stroke-indigo-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" >
            <rect x="2" y="4" width="20" height="16" rx="2"/><path d="M10 4v4"/><path d="M2 8h20"/><path d="M6 4v4"/>
            </svg>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
              Data & Reporting Dashboards
              </h3>
              <p className="text-indigo-200/65">
              We transform raw data into clear insights. From revenue tracking to campaign performance, you’ll always know where growth is coming from - and where you’re leaving money on the table.
              </p>
            </article>
            <article>
              <svg className="mb-3 stroke-indigo-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><path d="M16 3.128a4 4 0 0 1 0 7.744"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><circle cx="9" cy="7" r="4"/>
            </svg>
            
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
              Team Training & Ongoing Support
              </h3>
              <p className="text-indigo-200/65">
              We don’t just set it up and leave. We train your staff on best practices, provide playbooks, and offer continuous optimization so your systems stay sharp as your business grows.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
