import React from "react";

function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
    const url = isMobile
      ? "https://wa.me/917826973022"
      : "https://web.whatsapp.com/send?phone=917826973022";
    window.open(url, "_blank");
  };

  return (
    <button 
      className="btn btn-whatsapp"
      onClick={handleWhatsAppClick}
    >
       💬 WhatsApp
    </button>
  );
}

export default WhatsAppButton;