import Image from "next/image";
import Spotlight from "@/components/spotlight";
import Founder from "@/public/images/founder.png";
import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";





export default function About() {
  return (
    <section className="relative">
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 -mt-20 -translate-x-1/2"
        aria-hidden="true"
        id="about"
      >
        
      </div>
      
      <div className="mx-auto max-w-5xl px-4 sm:px-6" >
        <div className="pb-12 md:pb-12">
          {/* Section header */}
          <div className="mx-auto lg:max-w-none max-w-3xl pb-12 text-center md:pb-20">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
              About Us
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
            Meet Faizan - Your Growth Systems Architect
            </h2>


<div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-16 mt-4">
  <div className="md:col-span-2 md:text-left text-md font-normal text-indigo-200/65">
    <p className="mb-4">
      A growth strategist with 20+ years in sales, marketing, operations, workflow automation, and AI,  Faizan spent the last decade helping home service companies - HVAC, plumbing, roofing, electrical, and home inspections - not just run smoother, but scale smarter.
    </p>
    <p className="mb-4">
      By mastering platforms like ServiceTitan, ISN, Jobber, JobNimbus, and Housecall Pro - and pairing them with CRMs like Salesforce, Zoho, HubSpot, and Go High Level - Faizan has helped owners unlock hidden revenue streams through better follow-ups, upsells, cross-sells, and long-term service contracts. His systems consistently turn expensive, underutilized tools into profit centers that pay for themselves.
    </p>
    <p className="mb-4">
      Backed by a team of AI and automation specialists, Faizan built FlowIQ with one mission: help service businesses capture every opportunity they’re leaving on the table. Clients trust him for results, clarity, and systems that create measurable growth.
    </p>
    <p className="mb-4">
      <i>"I believe the future of home services belongs to businesses that master systems - not just sales. That’s exactly why I built FlowIQ."
       —  Faizan, Founder of FlowIQ</i>
    </p>
  </div>
  <div>
    <Spotlight className="group mx-auto grid max-w-full items-start gap-6 lg:max-w-none lg:grid-cols-1">
      <a
        className="group/card relative overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 hover:after:opacity-20 group-hover:before:opacity-100"
        href="#0"
      >
        <div className="relative z-20 flex h-full items-center justify-center overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-linear-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
          <Image
            className="inline-flex"
            src={Founder}
            alt="Founder"
          />
        </div>
      </a>
    </Spotlight>
  </div>
</div>

          </div>


           
            
            
  

        </div>
      </div>
    </section>
  );
}
