import Image from "next/image";
import WorflowImg01 from "@/public/images/workflow-01.png";
import WorflowImg02 from "@/public/images/workflow-02.png";
import WorflowImg03 from "@/public/images/workflow-03.png";
import CarouselLogo1 from "@/public/images/vapi.png";
import CarouselLogo2 from "@/public/images/voiceflow.png";
import CarouselLogo3 from "@/public/images/openai.png";
import CarouselLogo4 from "@/public/images/perplexity.png";
import CarouselLogo5 from "@/public/images/anthropic.png";
import CarouselLogo6 from "@/public/images/zapier.png";
import CarouselLogo7 from "@/public/images/make.png";
import CarouselLogo8 from "@/public/images/whatsapp.png";
import CarouselLogo9 from "@/public/images/twilio.png";

const logos = [
  CarouselLogo1,
  CarouselLogo2,
  CarouselLogo3,
  CarouselLogo4,
  CarouselLogo5,
  CarouselLogo6,
  CarouselLogo7,
  CarouselLogo8,
  CarouselLogo9,
];


export default function AITools() {
  return (
    <section className="relative" >
       <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 -mt-20 -translate-x-1/2"
        aria-hidden="true"
        id="ai-stack"
      >
        
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
              AI Stack
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
            Built with the World's Best AI Tools
            </h2>
            <p className="text-lg text-indigo-200/65">
            We don’t just use AI. We partner with the world’s top platforms to bring the best solutions into your business.
            </p>
          </div>


           
            
            
  {/* Infinite scrolling logos */}
  <div className="overflow-x-hidden whitespace-nowrap pb-4 md:pb-12">
            <div className="infinite-scroll flex flex-nowrap gap-10 justify-center items-center ">
              {logos.map((logo, index) => (
                <Image key={index} className="max-w-none max-h-[30px]" src={logo} alt={`Logo ${index + 1}`} />
              ))}
              {/* Duplicate the logos dynamically */}
              {logos.map((logo, index) => (
                <Image key={`duplicate-${index}`} className="max-w-none max-h-[30px]" src={logo} alt={`Logo ${index + 1}`} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
