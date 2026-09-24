import React from 'react';
import { DobleFilete } from './DobleFilete';
import { ProductImage } from './ProductImage';
import { OCCASIONS, WHATSAPP_BASE_URL } from '../data/products';

export const OccasionsSection: React.FC = () => {
  return (
    <section id="ocasiones" className="py-16 md:py-24 bg-[#F8EADE]/40 border-b border-[#CFB59E]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-20">
          <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#46627A]">
            ¿Para qué ocasión?
          </span>
          <DobleFilete />
          <h2 className="font-serif-sentida text-3xl sm:text-4xl md:text-5xl text-[#402D21] mt-2 mb-4">
            Pastelería pensada para compartir
          </h2>
          <p className="text-sm sm:text-base text-[#6C4D38] leading-relaxed">
            Desde un té intimo entre amigos hasta la mesa dulce de un casamiento en Zona Norte. Te acompañamos en cada celebración.
          </p>
        </div>

        {/* 4 Occasion Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {OCCASIONS.map((occ) => {
            const whatsAppOccasionUrl = `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(
              `¡Hola Anto y Nadia! Estoy planeando un evento: ${occ.title}. Quería consultarles por propuestas y disponibilidad.`
            )}`;

            return (
              <div
                key={occ.id}
                className="bg-[#FEFAF8] border border-[#CFB59E] rounded-[3px] p-5 flex flex-col justify-between hover:border-[#402D21] transition-all duration-300"
              >
                <div>
                  <div className="mb-4">
                    <ProductImage
                      src={occ.image}
                      alt={occ.title}
                      aspectClass="aspect-[4/3]"
                      arch={false}
                    />
                  </div>

                  <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-[#46627A] block mb-1">
                    {occ.subtitle}
                  </span>

                  <h3 className="font-serif-sentida text-xl text-[#402D21] mb-2">
                    {occ.title}
                  </h3>

                  <p className="text-xs text-[#6C4D38] leading-relaxed mb-4">
                    {occ.description}
                  </p>

                  <div className="bg-[#F8EADE]/70 p-3 rounded-[2px] border border-[#CFB59E]/40 mb-4">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#402D21] block mb-1">
                      Sugerencia SENTIDA:
                    </span>
                    <p className="text-[11px] text-[#6C4D38] leading-tight">
                      {occ.recommended}
                    </p>
                  </div>
                </div>

                <a
                  href={whatsAppOccasionUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center text-[11px] font-semibold uppercase tracking-[0.16em] text-[#402D21] hover:text-[#6C4D38] border-t border-[#CFB59E]/30 pt-3 transition-colors"
                >
                  Consultar para esta fecha →
                </a>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
