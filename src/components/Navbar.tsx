import React, { useState } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { WHATSAPP_BASE_URL } from '../data/products';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Carta & Tortas', href: '#carta' },
    { label: 'Ocasiones', href: '#ocasiones' },
    { label: 'Nosotras', href: '#nosotras' },
    { label: 'Cómo pedir', href: '#como-pedir' },
    { label: 'Entregas', href: '#entregas' },
    { label: 'Preguntas', href: '#preguntas' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  const genericWhatsAppUrl = `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(
    '¡Hola Anto y Nadia! Llegué desde la web de SENTIDA y quería hacerles una consulta por un pedido...'
  )}`;

  return (
    <header className="sticky top-0 z-40 bg-[#FEFAF8]/95 backdrop-blur-sm border-b border-[#CFB59E]/40 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Mobile menu trigger */}
          <div className="flex items-center lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#402D21] hover:text-[#6C4D38] focus-visible:ring-2 focus-visible:ring-[#46627A] rounded"
              aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú de navegación'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Desktop Left Nav Links */}
          <nav className="hidden lg:flex items-center space-x-7" aria-label="Navegación principal">
            {navLinks.slice(0, 3).map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[12px] font-medium uppercase tracking-[0.16em] text-[#402D21] hover:text-[#6C4D38] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#8FB1C9] hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Centered Brand Logo */}
          <div className="flex-1 lg:flex-none flex justify-center">
            <a href="#" className="flex items-center py-2" aria-label="SENTIDA Pastelería Inicio">
              <img
                src="/logo-sentida.svg"
                alt="SENTIDA Pastelería Artesanal"
                className="h-10 md:h-12 w-auto object-contain"
              />
            </a>
          </div>

          {/* Desktop Right Nav Links & WhatsApp CTA */}
          <div className="hidden lg:flex items-center space-x-7">
            {navLinks.slice(3).map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[12px] font-medium uppercase tracking-[0.16em] text-[#402D21] hover:text-[#6C4D38] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#8FB1C9] hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}

            <a
              href={genericWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#402D21] hover:bg-[#6C4D38] text-[#FEFAF8] text-[12px] font-medium uppercase tracking-[0.16em] px-4 py-2.5 rounded-[3px] transition-colors duration-200 border border-[#402D21]"
            >
              <MessageCircle className="w-4 h-4 text-[#8FB1C9]" />
              <span>Pedir por WhatsApp</span>
            </a>
          </div>

          {/* Mobile Right Quick WhatsApp Button */}
          <div className="flex items-center lg:hidden">
            <a
              href={genericWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Escribir por WhatsApp"
              className="p-2 text-[#402D21] hover:text-[#6C4D38]"
            >
              <MessageCircle className="w-5 h-5 text-[#402D21]" />
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#F8EADE] border-b border-[#CFB59E] px-6 py-6 transition-all duration-300">
          <nav className="flex flex-col space-y-4" aria-label="Menú móvil">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="text-sm font-medium tracking-[0.14em] uppercase text-[#402D21] py-2 border-b border-[#CFB59E]/30"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4">
              <a
                href={genericWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLinkClick}
                className="w-full flex items-center justify-center gap-2 bg-[#402D21] text-[#FEFAF8] text-xs uppercase tracking-[0.16em] font-medium py-3 rounded-[3px]"
              >
                <MessageCircle className="w-4 h-4 text-[#8FB1C9]" />
                <span>Escribinos por WhatsApp</span>
              </a>
              <p className="text-center text-[11px] text-[#6C4D38] mt-3">
                Martínez, San Isidro · Pedidos con 48/72 hs
              </p>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
