import { useState } from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const [useFallback, setUseFallback] = useState(false);
  return (
    <a
      href="https://wa.me/962780989098"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full p-4 shadow-glow"
      aria-label="Contact on WhatsApp"
    >
      {useFallback ? (
        <MessageCircle className="w-8 h-8" />
      ) : (
        <img
          src="/whatsapp.svg"
          alt="WhatsApp"
          className="w-8 h-8"
          onError={() => setUseFallback(true)}
        />
      )}
    </a>
  );
};

export default WhatsAppButton;
