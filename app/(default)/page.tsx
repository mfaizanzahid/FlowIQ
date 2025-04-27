"use client";
import { useState } from "react";
import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Workflows from "@/components/workflows";
import Integrations from "@/components/integrations";
import AITools from "@/components/ai-tools";
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";
import Cta from "@/components/cta";
import Form from "@/components/form";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <PageIllustration />
      <Hero onBookConsultation={openModal} />
      <Features />
      <AITools />
      <Workflows />
      <Integrations />
      <Testimonials />
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