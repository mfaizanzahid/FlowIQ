"use client";
import { useState } from "react";
import Header from "@/components/ui/header";
import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Workflows from "@/components/workflows";
import Integrations from "@/components/integrations";
import AITools from "@/components/ai-tools";
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";
import Cta from "@/components/cta";
import Form from "@/components/form";
import Faqs from "@/components/faqs";
import About from "@/components/about";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "Form Started", {
        event_category: "Engagement",
        event_label: "Modal Opened",
      });
    }
  };
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
    <Header onBookConsultation={openModal} />
      <PageIllustration />
      <Hero onBookConsultation={openModal} />
      <Features />
      <AITools />
      <Workflows />
      <Integrations />
      <Testimonials />
      <About />
      <Faqs />
      <Cta onBookConsultation={openModal} />
      
      {/* Modal */}
      {isModalOpen && (
        <div className="modal-backdrop" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              &times;
            </button>
            <Form />
          </div>
        </div>
      )}
    </>
  );
}