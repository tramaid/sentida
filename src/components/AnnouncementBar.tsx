import React from 'react';

export const AnnouncementBar: React.FC = () => {
  const announcements = [
    'TALLER A PUERTAS CERRADAS EN MARTÍNEZ',
    'PEDIDOS CON 48-72 HS DE ANTICIPACIÓN',
    'TORTAS ARTESANALES CON FLORES NATURALES',
    'ENVÍOS EN AUTO EN ZONA NORTE Y CABA',
    'ATENDIDO POR SUS PASTELERAS, ANTO Y NADIA',
  ];

  return (
    <div
      role="region"
      aria-label="Anuncios importantes"
      className="bg-[#F8EADE] border-b border-[#CFB59E]/50 text-[#402D21] py-2 px-4 overflow-hidden text-[11px] font-medium tracking-[0.18em] uppercase select-none"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-center">
        {/* Animated Marquee */}
        <div className="relative w-full overflow-hidden flex whitespace-nowrap">
          <div className="animate-marquee flex items-center gap-8">
            {announcements.concat(announcements).map((item, idx) => (
              <span key={idx} className="flex items-center gap-6">
                <span>{item}</span>
                <span className="text-[#8FB1C9]" aria-hidden="true">
                  ·
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
