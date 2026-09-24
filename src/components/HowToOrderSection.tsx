import React from 'react';
import { DobleFilete } from './DobleFilete';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_BASE_URL } from '../data/products';

export const HowToOrderSection: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Elegí tu torta o mesa',
      description: 'Recorré nuestra carta o contanos la idea que tenés en mente. Si necesitás asesoramiento sobre el tamaño o porciones según tu festejo, te guiamos.',
    },
    {
      step: '02',
      title: 'Escribinos por WhatsApp',
      description: 'Hacé clic en el botón de WhatsApp indicándonos la fecha exacta de tu celebración, el producto elegido y si preferís retiro en Martínez o envío en auto.',
    },
    {
      step: '03',
      title: 'Confirmación y Seña',
      description: 'Chequeamos agenda del taller. Para asegurar tu fecha y encargar las flores de estación, solicitamos una seña del 50% vía transferencia o Mercado Pago.',
    },
    {
      step: '04',
      title: 'Elaboración & Entrega',
      description: 'Horneamos fresco y decoramos tu pedido. El día pactado podés pasar a retirarlo por nuestro taller o lo despachamos en auto refrigerado a tu domicilio.',
    },
  ];

  return (
    <section id="como-pedir" className="py-16 md:py-24 bg-[#F8EADE]/40 border-b border-[#CFB59E]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-20">
          <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#46627A]">
            ¿Cómo pido?
          </span>
          <DobleFilete />
          <h2 className="font-serif-sentida text-3xl sm:text-4xl md:text-5xl text-[#402D21] mt-2 mb-4">
            Cuatro pasos simples por WhatsApp
          </h2>
          <p className="text-sm sm:text-base text-[#6C4D38] leading-relaxed">
            Al no tener tienda masiva, cada pedido se atiende de forma personalizada por chat para que todo salga exactamente como soñás.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((st) => (
            <div
              key={st.step}
              className="bg-[#FEFAF8] border border-[#CFB59E] rounded-[3px] p-6 relative flex flex-col justify-between"
            >
              <div>
                <span className="font-serif-sentida text-3xl sm:text-4xl text-[#8FB1C9] block mb-3">
                  {st.step}
                </span>
                <h3 className="font-serif-sentida text-lg sm:text-xl text-[#402D21] mb-2">
                  {st.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#6C4D38] leading-relaxed">
                  {st.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Direct WhatsApp Call to Action Banner */}
        <div className="bg-[#FEFAF8] border border-[#CFB59E] rounded-[3px] p-8 sm:p-10 max-w-3xl mx-auto text-center">
          <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#46627A] mb-2 block">
            ¿Tenés una fecha en mente?
          </span>
          <h3 className="font-serif-sentida text-2xl sm:text-3xl text-[#402D21] mb-4">
            Consultanos disponibilidad para tu festejo
          </h3>
          <p className="text-xs sm:text-sm text-[#6C4D38] leading-relaxed max-w-xl mx-auto mb-6">
            Recordá que trabajamos con un mínimo de 48 a 72 horas hábiles de anticipación. En fechas de alta demanda (fines de semana y fin de año) los cupos se completan rápido.
          </p>
          <a
            href={`${WHATSAPP_BASE_URL}?text=${encodeURIComponent(
              '¡Hola Anto y Nadia! Quisiera consultar disponibilidad para hacer un pedido. ¿Cómo están de agenda?'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 bg-[#402D21] hover:bg-[#6C4D38] text-[#FEFAF8] text-[12px] md:text-[13px] font-medium uppercase tracking-[0.18em] px-8 py-4 rounded-[3px] transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-[#8FB1C9]" />
            <span>Escribir por WhatsApp ahora</span>
          </a>
        </div>

      </div>
    </section>
  );
};
