import React from "react";
import "./WhatsAppButton.css";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/573002121229?text=Hola%2C%20necesito%20ayuda."
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
      aria-label="Chatea con nosotros por WhatsApp"
    >
    <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        width="40"
        height="40"
/>
    </a>
  );
};

export default WhatsAppButton;

