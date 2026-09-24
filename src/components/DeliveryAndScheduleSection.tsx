import React from 'react';
import { DobleFilete } from './DobleFilete';
import { MapPin, Clock, ShieldCheck, Car } from 'lucide-react';

export const DeliveryAndScheduleSection: React.FC = () => {
  return (
    <section id="entregas" className="py-16 md:py-24 bg-[#FEFAF8] border-b border-[#CFB59E]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-20">
          <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#46627A]">
            ¿Dónde y cuándo lo recibo?
          </span>
          <DobleFilete />
          <h2 className="font-serif-sentida text-3xl sm:text-4xl md:text-5xl text-[#402D21] mt-2 mb-4">
            Retiro en Martínez y Envíos
          </h2>
          <p className="text-sm sm:text-base text-[#6C4D38] leading-relaxed">
            La pastelería es delicada: cuidamos la cadena de frío y el transporte para que tu torta llegue tan perfecta como sale de nuestro obrador.
          </p>
        </div>

        {/* 2 Big Informational Blocks */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
          
          {/* Block 1: Zonas y Modalidades */}
          <div className="bg-[#F8EADE]/40 border border-[#CFB59E] rounded-[3px] p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#FEFAF8] border border-[#CFB59E] flex items-center justify-center text-[#402D21]">
                  <MapPin className="w-5 h-5 text-[#46627A]" />
                </div>
                <div>
                  <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-[#46627A]">
                    Modalidad de entrega
                  </span>
                  <h3 className="font-serif-sentida text-xl text-[#402D21]">
                    Punto de retiro &amp; Envíos en auto
                  </h3>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-[#6C4D38] leading-relaxed">
                <div className="p-3 bg-[#FEFAF8] border border-[#CFB59E]/40 rounded-[2px]">
                  <p className="font-semibold text-[#402D21] mb-1">
                    Retiro sin cargo por taller en Martínez
                  </p>
                  <p>
                    Ubicado en zona residencial tranquila de Martínez (San Isidro), a pocas cuadras de Av. Santa Fe y Alvear. Estacionamiento fácil en la puerta. Te enviamos la ubicación exacta al señar.
                  </p>
                </div>

                <div className="p-3 bg-[#FEFAF8] border border-[#CFB59E]/40 rounded-[2px]">
                  <p className="font-semibold text-[#402D21] mb-1">
                    Envíos a domicilio en auto refrigerado
                  </p>
                  <p className="mb-2">
                    Coordinamos envíos con chofer de confianza en vehículos con aire acondicionado. El costo de envío se calcula según distancia y se abona al chofer o por transferencia.
                  </p>
                  <p className="text-[11px] text-[#46627A] font-medium uppercase tracking-[0.1em]">
                    Zonas frecuentes: San Isidro · Acassuso · Olivos · Vicente López · San Fernando · Tigre · CABA Zona Norte (Belgrano, Núñez, Palermo, Recoleta).
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#CFB59E]/40 flex items-center gap-2 text-[11px] text-[#402D21] font-medium">
              <Car className="w-4 h-4 text-[#8FB1C9]" />
              <span>No realizamos traslados de tortas en moto por seguridad estructural</span>
            </div>
          </div>

          {/* Block 2: Horarios y Anticipación */}
          <div className="bg-[#F8EADE]/40 border border-[#CFB59E] rounded-[3px] p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#FEFAF8] border border-[#CFB59E] flex items-center justify-center text-[#402D21]">
                  <Clock className="w-5 h-5 text-[#46627A]" />
                </div>
                <div>
                  <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-[#46627A]">
                    Horarios de entrega
                  </span>
                  <h3 className="font-serif-sentida text-xl text-[#402D21]">
                    Días y tiempos de producción
                  </h3>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-[#6C4D38] leading-relaxed">
                <div className="p-3 bg-[#FEFAF8] border border-[#CFB59E]/40 rounded-[2px]">
                  <p className="font-semibold text-[#402D21] mb-1">
                    Horarios de retiro acordados
                  </p>
                  <ul className="space-y-1 text-xs text-[#6C4D38]">
                    <li className="flex justify-between border-b border-[#CFB59E]/20 pb-1">
                      <span>Martes a Viernes:</span>
                      <span className="font-medium text-[#402D21]">10:00 a 19:00 hs</span>
                    </li>
                    <li className="flex justify-between border-b border-[#CFB59E]/20 pb-1">
                      <span>Sábados:</span>
                      <span className="font-medium text-[#402D21]">10:00 a 19:00 hs</span>
                    </li>
                    <li className="flex justify-between border-b border-[#CFB59E]/20 pb-1">
                      <span>Domingos:</span>
                      <span className="font-medium text-[#402D21]">10:00 a 13:00 hs</span>
                    </li>
                    <li className="flex justify-between text-[#6C4D38]/70">
                      <span>Lunes:</span>
                      <span>Cerrado (descanso de taller)</span>
                    </li>
                  </ul>
                </div>

                <div className="p-3 bg-[#FEFAF8] border border-[#CFB59E]/40 rounded-[2px]">
                  <p className="font-semibold text-[#402D21] mb-1">
                    Anticipación mínima requerida
                  </p>
                  <p>
                    <strong>48 a 72 horas hábiles</strong> para tortas clásicas de carta. Para letter cakes, number cakes y mesas dulces para eventos, agradecemos contactarnos con <strong>7 a 15 días</strong> de anticipación.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#CFB59E]/40 flex items-center gap-2 text-[11px] text-[#402D21] font-medium">
              <ShieldCheck className="w-4 h-4 text-[#8FB1C9]" />
              <span>Garantía de frescura: se elabora el mismo día de tu entrega</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
