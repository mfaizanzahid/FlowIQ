import React, { useEffect, useState } from "react";
import Image from "next/image";
import Spotlight from "@/components/spotlight";
import Founder from "@/public/images/founder.png";
import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";
import VideoThumb from "@/public/images/hero-image-02.jpg";
import ModalYTVideo from "@/components/modal-ytvideo";

interface HeroProps {
  onBookConsultation: () => void;
}

export default function Try({ onBookConsultation }: HeroProps) {
  const [fName, setFName] = useState("there");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      setFName(urlParams.get("name") || "there");
    }
  }, []);

  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-20">
            <h1
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl"
              data-aos="fade-up"
            >
              Hi {fName}!
            </h1>
            <div className="mx-auto pt-2 pb-8">
              <ModalYTVideo
                thumb={VideoThumb}
                thumbWidth={1104}
                thumbHeight={576}
                thumbAlt="Modal video thumbnail"
                video="https://www.youtube.com/embed/5oyNWs8r_bU?si=2zzGtQdX4NMbLAKF"
                videoWidth={1280}
                videoHeight={720}
              />
            </div>
            <div className="mx-auto max-w-5xl">
              <p
                className="mb-8 text-xl text-indigo-200/65"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                We built FlowIQ with one goal in mind: to give you a simple, powerful way to understand your intake performance, coach your team effectively, and maximize the return on your marketing efforts.
                <br />
                <br />
                If you're interested in seeing what it can do for your firm, I'm personally offering an exclusive, no-obligation 6-month extended free trial to a few select firms. Click below to secure your spot!
              </p>
              <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
                <div data-aos="fade-up" data-aos-delay={400}>
                  <button onClick={() => {
                   if (typeof window !== "undefined" && window.gtag) {
                     window.gtag("event", "Intake Trial CTA Click", {
                       event_category: "Engagement",
                       event_label: "Button Click",
                     });
                   }
                   onBookConsultation()
                 }
                }
                    className="btn group mb-4 w-full bg-linear-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto cursor-pointer"
                  >
                    <span className="relative inline-flex items-center">
                      Book Exclusive 6-month Trial
                      <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
