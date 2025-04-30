import Image from "next/image";
import Spotlight from "@/components/spotlight";
import IntegrationImg01 from "@/public/images/isn.png";
import IntegrationImg02 from "@/public/images/servicetitan.png";
import IntegrationImg03 from "@/public/images/jobber.png";
import IntegrationImg04 from "@/public/images/clio.png";
import IntegrationImg05 from "@/public/images/salesforce.png";
import IntegrationImg06 from "@/public/images/zoho.png";
import IntegrationImg07 from "@/public/images/highlevel.png";
import IntegrationImg08 from "@/public/images/clickup.png";
import IntegrationImg09 from "@/public/images/monday.png";
import IntegrationImg10 from "@/public/images/airtable.png";

const logos = [
  IntegrationImg01,
  IntegrationImg02,
  IntegrationImg03,
  IntegrationImg04,
  IntegrationImg05,
  IntegrationImg06,
  IntegrationImg07,
  IntegrationImg08,
  IntegrationImg09,
  IntegrationImg10,
];




export default function Integrations() {
  return (
    <section className="relative">
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 -mt-20 -translate-x-1/2"
        aria-hidden="true"
        id="integrations"
      >
        
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
              Integrations
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
            We Play Nice with Your Favorite Tools
            </h2>
            <p className="text-lg text-indigo-200/65">
            Already using a CRM, booking tool, or project management platform? Perfect.
Our AI systems integrate seamlessly with the platforms you already rely on.
            </p>
          </div>
<Spotlight className="group mx-auto grid max-w-sm items-start gap-6 lg:max-w-none lg:grid-cols-5">
  {logos.map((logo, index) => (
    <a
      key={index}
      className="group/card relative h-[200px] overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 hover:after:opacity-20 group-hover:before:opacity-100"
      href="#0"
    >
      <div className="relative z-20 flex h-full items-center justify-center overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-linear-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
        <Image
          className="inline-flex max-h-[80px] max-w-[150px] object-contain"
          src={logo}
          alt={`Integration ${index + 1}`}
        />
      </div>
    </a>
  ))}
</Spotlight>

           
            
            
  

        </div>
      </div>
    </section>
  );
}
