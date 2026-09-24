import React from 'react';
import { DobleFilete } from './DobleFilete';
import { MessageCircle, Instagram, MapPin } from 'lucide-react';
import { WHATSAPP_BASE_URL, INSTAGRAM_URL, INSTAGRAM_HANDLE } from '../data/products';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#F8EADE] border-t border-[#CFB59E] pt-16 pb-12 text-[#402D21]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Brand Header */}
        <div className="flex flex-col items-center text-center max-w-xl mx-auto mb-12">
          <a href="#" aria-label="SENTIDA Pastelería Inicio" className="mb-3">
            <img
              src="/logo-sentida.svg"
              alt="SENTIDA Pastelería Artesanal"
              className="h-12 w-auto object-contain"
            />
          </a>
          <DobleFilete width={50} />
          <p className="text-xs sm:text-sm text-[#6C4D38] leading-relaxed mt-2">
            Pastelería de autor y taller botánico en Martínez, San Isidro. Horneamos a pedido con flores naturales seleccionadas y los mejores ingredientes.
          </p>
        </div>

        {/* 4 Footer Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 pb-12 border-b border-[#CFB59E]/40 text-xs text-[#6C4D38]">
          
          {/* Column 1: Atención & Taller */}
          <div>
            <h4 className="font-serif-sentida text-base text-[#402D21] mb-3">
              Nuestro Taller
            </h4>
            <div className="space-y-2 leading-relaxed">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#8FB1C9] shrink-0 mt-0.5" />
                <span>Martínez, San Isidro, Buenos Aires. (Taller a puertas cerradas, solo con retiro coordinado).</span>
              </p>
              <p>
                <strong>Atención:</strong> Martes a Sábados 10 a 19 hs · Domingos 10 a 13 hs.
              </p>
            </div>
          </div>

          {/* Column 2: Políticas claras */}
          <div>
            <h4 className="font-serif-sentida text-base text-[#402D21] mb-3">
              Políticas de Pedido
            </h4>
            <ul className="space-y-1.5 leading-relaxed">
              <li>· 48 a 72 hs de anticipación mínima.</li>
              <li>· Reserva de fecha con seña del 50%.</li>
              <li>· Envíos en auto refrigerado en Zona Norte y CABA.</li>
              <li>· Flores naturales orgánicas de estación.</li>
            </ul>
          </div>

          {/* Column 3: Navegación Rápida */}
          <div>
            <h4 className="font-serif-sentida text-base text-[#402D21] mb-3">
              Navegación
            </h4>
            <ul className="space-y-1.5">
              <li>
                <a href="#carta" className="hover:text-[#402D21] transition-colors">
                  Carta completa de tortas
                </a>
              </li>
              <li>
                <a href="#ocasiones" className="hover:text-[#402D21] transition-colors">
                  Ocasiones &amp; Eventos
                </a>
              </li>
              <li>
                <a href="#nosotras" className="hover:text-[#402D21] transition-colors">
                  Quiénes somos: Anto &amp; Nadia
                </a>
              </li>
              <li>
                <a href="#como-pedir" className="hover:text-[#402D21] transition-colors">
                  Cómo hacer tu pedido
                </a>
              </li>
              <li>
                <a href="#entregas" className="hover:text-[#402D21] transition-colors">
                  Zonas y horarios de entrega
                </a>
              </li>
              <li>
                <a href="#preguntas" className="hover:text-[#402D21] transition-colors">
                  Preguntas frecuentes
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contacto Directo */}
          <div>
            <h4 className="font-serif-sentida text-base text-[#402D21] mb-3">
              Escribinos
            </h4>
            <p className="mb-3 leading-relaxed">
              ¿Dudas o pedidos especiales? Chateá directamente con nosotras:
            </p>
            <div className="flex flex-col gap-2">
              <a
                href={WHATSAPP_BASE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#402D21] hover:text-[#6C4D38] font-medium"
              >
                <MessageCircle className="w-4 h-4 text-[#8FB1C9]" />
                <span>WhatsApp de Anto &amp; Nadia</span>
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#402D21] hover:text-[#6C4D38] font-medium"
              >
                <Instagram className="w-4 h-4 text-[#8FB1C9]" />
                <span>@{INSTAGRAM_HANDLE}</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#6C4D38] gap-4">
          <p>© {new Date().getFullYear()} SENTIDA Pastelería Artesanal. Todos los derechos reservados.</p>
          <p className="tracking-wide">
            Martínez · San Isidro · Buenos Aires · Argentina
          </p>
        </div>

      </div>
    </footer>
  );
};
