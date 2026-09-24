import React from 'react';
import { DobleFilete } from './DobleFilete';
import { ProductImage } from './ProductImage';

export const AboutUsSection: React.FC = () => {
  return (
    <section id="nosotras" className="py-16 md:py-24 bg-[#FEFAF8] border-b border-[#CFB59E]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-20">
          <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#46627A]">
            ¿Quiénes son?
          </span>
          <DobleFilete />
          <h2 className="font-serif-sentida text-3xl sm:text-4xl md:text-5xl text-[#402D21] mt-2 mb-4">
            Dos amigas, una misma pasión
          </h2>
          <p className="text-sm sm:text-base text-[#6C4D38] leading-relaxed">
            Detrás de SENTIDA estamos Anto y Nadia. Nos conocimos horneando y decidimos abrir un taller donde la pastelería vuelva a tener tiempo, dedicación y belleza natural.
          </p>
        </div>

        {/* Narrative & Photo Trio */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">
          
          {/* Photos Showcase */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <ProductImage
                src="/nadia-decorando-con-flores.jpg"
                alt="Nadia decorando una torta con flores frescas en el taller"
                aspectClass="aspect-[4/5]"
                arch={true}
              />
              <div className="p-3 bg-[#F8EADE]/60 border border-[#CFB59E]/50 rounded-[3px] text-center">
                <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-[#402D21]">
                  Taller en Martínez
                </span>
                <p className="text-[11px] text-[#6C4D38]">San Isidro, Buenos Aires</p>
              </div>
            </div>

            <div className="space-y-4 pt-6">
              <ProductImage
                src="/proceso-galletas-con-flores.jpg"
                alt="Proceso artesanal de galletas de manteca prensadas con pétalos naturales"
                aspectClass="aspect-[4/5]"
                arch={false}
              />
              <ProductImage
                src="/etiqueta-de-la-caja.jpg"
                alt="Etiqueta y packaging artesanal SENTIDA Pastelería"
                aspectClass="aspect-[4/3]"
                arch={false}
              />
            </div>
          </div>

          {/* Text Story */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#46627A] mb-2">
              Nuestra filosofía de cocina
            </span>
            <h3 className="font-serif-sentida text-2xl sm:text-3xl text-[#402D21] mb-5">
              Sin moldes de fábrica. Con la calidez de lo hecho en casa.
            </h3>
            
            <p className="text-sm sm:text-base text-[#6C4D38] leading-relaxed mb-4">
              No tenemos un local comercial a la calle con tortas en exhibición esperando días en una vitrina. En SENTIDA trabajamos a puertas cerradas: compramos los ingredientes para tu pedido, batimos la masa, horneamos y decoramos horas antes de que la recibas.
            </p>

            <p className="text-sm sm:text-base text-[#6C4D38] leading-relaxed mb-8">
              Creemos en los pétalos que caen con naturalidad sobre el buttercream, en las masas sablée que se deshacen en la boca y en el dulce de leche abundante. Cada pedido que sale de nuestro taller lleva nuestra firma y nuestro cariño personal.
            </p>

            {/* 3 Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-[#CFB59E]/40">
              <div>
                <span className="font-serif-sentida text-lg text-[#402D21] block mb-1">
                  01. Flores vivas
                </span>
                <p className="text-xs text-[#6C4D38] leading-relaxed">
                  Pétalos orgánicos y ramilletes de estación seleccionados a mano cada mañana.
                </p>
              </div>

              <div>
                <span className="font-serif-sentida text-lg text-[#402D21] block mb-1">
                  02. Ingredientes nobles
                </span>
                <p className="text-xs text-[#6C4D38] leading-relaxed">
                  Manteca de verdad, chocolate puro 60% cacao y dulce de leche repostero premium.
                </p>
              </div>

              <div>
                <span className="font-serif-sentida text-lg text-[#402D21] block mb-1">
                  03. De dueñas a vos
                </span>
                <p className="text-xs text-[#6C4D38] leading-relaxed">
                  Hablás por WhatsApp directo con nosotras, quienes pensamos y horneamos tu torta.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
