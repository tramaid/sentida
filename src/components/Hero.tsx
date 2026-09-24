import React from 'react';
import { MessageCircle, ArrowDown } from 'lucide-react';
import { DobleFilete } from './DobleFilete';
import { WHATSAPP_BASE_URL } from '../data/products';

export const Hero: React.FC = () => {
  const whatsAppUrl = `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(
    '¡Hola Anto y Nadia! Quisiera encargar una torta para un festejo. ¿Tienen disponibilidad?'
  )}`;

  return (
    <section className="relative bg-[#FEFAF8] overflow-hidden pt-10 pb-16 md:pt-16 md:pb-24 lg:pt-20 lg:pb-32 border-b border-[#CFB59E]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Kicker */}
            <div className="flex flex-col items-start">
              <span className="text-[11px] md:text-[12px] font-medium uppercase tracking-[0.18em] text-[#46627A]">
                Pastelería Artesanal · Martínez, San Isidro
              </span>
              <DobleFilete className="!my-2.5 !items-start" width={48} />
            </div>

            {/* Main Headline */}
            <h1 className="font-serif-sentida text-4xl sm:text-5xl md:text-6xl lg:text-[72px] leading-[1.08] text-[#402D21] mt-2 mb-6">
              Tortas con pétalos y alma de taller.
            </h1>

            {/* Subtitle */}
            <p className="text-[#6C4D38] text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-2xl mb-8">
              Pastelería boutique atendida por Antonela y Nadia. Horneamos solo por encargo, decoramos con flores naturales de estación y cuidamos cada sabor como si fuera para nuestra propia casa.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <a
                href={whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-[#402D21] hover:bg-[#6C4D38] text-[#FEFAF8] text-[12px] md:text-[13px] font-medium uppercase tracking-[0.18em] px-7 py-4 rounded-[3px] transition-all shadow-sm focus-visible:ring-2 focus-visible:ring-[#46627A]"
              >
                <MessageCircle className="w-4 h-4 text-[#8FB1C9]" />
                <span>Pedir por WhatsApp</span>
              </a>

              <a
                href="#carta"
                className="inline-flex items-center justify-center gap-2 bg-[#F8EADE] hover:bg-[#CFB59E]/30 text-[#402D21] border border-[#CFB59E] text-[12px] md:text-[13px] font-medium uppercase tracking-[0.18em] px-6 py-4 rounded-[3px] transition-all"
              >
                <span>Ver la carta</span>
                <ArrowDown className="w-4 h-4 text-[#6C4D38]" />
              </a>
            </div>

            {/* Trust Metadata (Zero-pill discipline: unboxed clean text) */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-[11px] md:text-[12px] text-[#6C4D38] font-medium tracking-[0.06em] pt-4 border-t border-[#CFB59E]/40 w-full">
              <span>Taller a puertas cerradas</span>
              <span className="text-[#8FB1C9]" aria-hidden="true">·</span>
              <span>Pedidos con 48 a 72 hs</span>
              <span className="text-[#8FB1C9]" aria-hidden="true">·</span>
              <span>Flores 100% naturales</span>
              <span className="text-[#8FB1C9]" aria-hidden="true">·</span>
              <span>Zona Norte &amp; CABA</span>
            </div>
          </div>

          {/* Right Column: Hero Vitrina Image with Rotating Seal */}
          <div className="lg:col-span-5 relative flex justify-center">
            {/* Vitrina Arch Card */}
            <div className="relative w-full max-w-[420px] sm:max-w-[460px]">
              
              {/* Decorative subtle border frame */}
              <div className="absolute -inset-3 rounded-t-[210px] rounded-b-[4px] border border-[#CFB59E]/50 pointer-events-none -z-0" />

              <div className="relative z-10 overflow-hidden rounded-t-[200px] rounded-b-[4px] border border-[#CFB59E] bg-[#F8EADE] aspect-[3/4] shadow-[0_10px_30px_rgba(64,45,33,0.06)]">
                <img
                  src="/hero-anto-torta-petalos.jpg"
                  alt="Torta decorada con flores naturales y pétalos - SENTIDA Pastelería"
                  className="w-full h-full object-cover"
                  loading="eager"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    // Graceful fallback to alternative or custom showcase if file not present
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    if (target.nextElementSibling) {
                      (target.nextElementSibling as HTMLElement).style.display = 'flex';
                    }
                  }}
                />

                {/* Elegant Vitrina Showcase Placeholder if physical JPG is pending */}
                <div
                  style={{ display: 'none' }}
                  className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-[#F8EADE]"
                >
                  <div className="w-20 h-20 rounded-full border border-[#CFB59E] bg-[#FEFAF8] flex items-center justify-center mb-5">
                    <svg viewBox="0 0 32 32" className="w-10 h-10 stroke-[#402D21] fill-none" strokeWidth="1.2">
                      <path d="M16 6 C18 11 21 14 21 18 C21 21.5 18.5 24 16 24 C13.5 24 11 21.5 11 18 C11 14 14 11 16 6 Z" />
                      <path d="M16 11 L16 21" strokeLinecap="round" />
                    </svg>
                  </div>
                  <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#46627A] mb-2">
                    Pieza de Autor
                  </span>
                  <p className="font-serif-sentida text-2xl text-[#402D21] mb-2">
                    Torta de Pétalos
                  </p>
                  <p className="text-xs text-[#6C4D38] leading-relaxed max-w-xs">
                    Flores frescas de estación, bizcochuelo húmedo y terminación sedosa hecha a mano.
                  </p>
                </div>
              </div>

              {/* Rotating Circular Brand Seal */}
              <div className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-8 z-20 w-28 h-28 sm:w-36 sm:h-36 pointer-events-none drop-shadow-md">
                <img
                  src="/SENTIDASELLO.svg"
                  alt="Sello Sentida Hecho a Mano"
                  className="w-full h-full animate-seal-spin object-contain"
                />
              </div>

              {/* Discreet badge label */}
              <div className="absolute top-4 right-4 z-20 bg-[#FEFAF8]/90 backdrop-blur-xs border border-[#CFB59E] px-3 py-1.5 rounded-[2px] text-[11px] font-medium tracking-[0.16em] uppercase text-[#402D21]">
                Hecho a mano
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
