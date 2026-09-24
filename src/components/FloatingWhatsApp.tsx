import React from 'react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_BASE_URL } from '../data/products';

export const FloatingWhatsApp: React.FC = () => {
  const whatsAppUrl = `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(
    '¡Hola Anto y Nadia! Estoy navegando por la web y quería consultarles por un pedido.'
  )}`;

  return (
    <aside aria-label="Contacto rápido" className="fixed bottom-6 right-6 z-40">
      <a
        href={whatsAppUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir chat de WhatsApp con Anto y Nadia de SENTIDA Pastelería"
        className="group flex items-center gap-2.5 bg-[#402D21] hover:bg-[#6C4D38] text-[#FEFAF8] px-4 py-3 rounded-full shadow-[0_4px_14px_rgba(64,45,33,0.25)] border border-[#CFB59E]/40 transition-all duration-300 hover:scale-105 focus-visible:ring-2 focus-visible:ring-[#46627A]"
      >
        <MessageCircle className="w-5 h-5 text-[#8FB1C9]" />
        <span className="text-[12px] font-medium tracking-[0.14em] uppercase pr-1 hidden sm:inline-block">
          Pedir por WhatsApp
        </span>
      </a>
    </aside>
  );
};
