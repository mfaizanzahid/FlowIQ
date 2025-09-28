"use client";


import { useState } from "react";
import Header from "@/components/ui/header";
import Form from "@/components/form-try";
import Try from "./try";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
    {/* <Header onBookConsultation={openModal} /> */}
      <Try onBookConsultation={openModal} />

      
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