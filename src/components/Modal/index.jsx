import React from "react";
import "./Modal.css";

export default function Modal({ isOpen, children, setOpenModal }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fundo">
      <div className="container">
        {children}
        <button onClick={setOpenModal}>Sair</button>
      </div>
    </div>
  );
}
