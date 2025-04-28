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
        id="how-we-can-help"
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
      <div className="mx-auto max-w-6xl px-4 sm:px-6" >
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1] md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-4 text-center md:pb-12" >
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
              How We Help
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
            Our AI Solutions, Built for Real Businesses
            </h2>
            <p className="text-lg text-indigo-200/65">
            Whether you’re booking service calls, chasing leads, managing customer inquiries, or trying to automate your marketing — we’ve got you covered.
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
              <path strokeOpacity="1" d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/>
              <path d="M2 14h2"/><path d="M20 14h2"/><path strokeOpacity="1" d="M15 13v2"/><path strokeOpacity="1" d="M9 13v2"/></svg>
              
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
              AI Smart Agents & Chatbots
              </h3>
              <p className="text-indigo-200/65">
              Not just fancy conversation bots — they integrate with your CRM, book jobs, give instant quotes, guide prospects, and qualify leads — all in your brand’s tone of voice.
              </p>
            </article>
            <article>
            <svg className="mb-3 stroke-indigo-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" >
            <path d="M2 10v3"/><path d="M6 6v11"/><path d="M10 3v18"/><path d="M14 8v7"/><path d="M18 5v13"/><path d="M22 10v3"/></svg>

              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
              AI Voice Agents
              </h3>
              <p className="text-indigo-200/65">
              Outbound and inbound AI agents that always answer, always call, and always follow up — handling customer calls with a 100% touch point rate.
              </p>
            </article>
            <article>
            <svg className="mb-3 stroke-indigo-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" >
            <path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z"/><path d="M21 16v2a4 4 0 0 1-4 4h-5"/>
            
            </svg>

              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
              AI Call Centres
              </h3>
              <p className="text-indigo-200/65">
              Imagine a full call center — but AI-driven. Specialized voice agents work together to support, serve, and sell for your business, around the clock.
              </p>
            </article>
            <article>
            <svg className="mb-3 stroke-indigo-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" >
            <rect x="2" y="4" width="20" height="16" rx="2"/><path d="M10 4v4"/><path d="M2 8h20"/><path d="M6 4v4"/>
            </svg>
              
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
              Custom AI Apps
              </h3>
              <p className="text-indigo-200/65">
              Need a tailored web app that uses AI magic behind the scenes? We design and build custom AI-powered applications that do exactly what you need.
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
              Workflow Automation
              </h3>
              <p className="text-indigo-200/65">
              We automate your operational processes — from service call scheduling to customer onboarding to task assignments — cutting down manual errors and freeing up your team to focus on real growth.
              </p>
            </article>
            <article>
              <svg className="mb-3 stroke-indigo-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" >
              <path d="m6 15-4-4 6.75-6.77a7.79 7.79 0 0 1 11 11L13 22l-4-4 6.39-6.36a2.14 2.14 0 0 0-3-3L6 15"/>
              <path d="m5 8 4 4"/><path d="m12 15 4 4"/>
            </svg>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
              Marketing Automation
              </h3>
              <p className="text-indigo-200/65">
              From lead nurturing to AI-powered blog posts, videos, newsletters, and LinkedIn thought leadership — we automate your marketing efforts to keep your brand top-of-mind and your pipeline flowing.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
