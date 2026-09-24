import React, { useEffect } from 'react';
import { X, MessageCircle, Clock, Sparkles } from 'lucide-react';
import { Product, WHATSAPP_BASE_URL } from '../data/products';
import { ProductImage } from './ProductImage';
import { DobleFilete } from './DobleFilete';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (product) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [product, onClose]);

  if (!product) return null;

  const whatsAppProductUrl = `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(
    `¡Hola Anto y Nadia! Vi en la web la ficha de "${product.name}" (${product.portions}) y quisiera consultar disponibilidad y precio para encargar.`
  )}`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-product-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-[#402D21]/60 backdrop-blur-xs animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-[#FEFAF8] border border-[#CFB59E] rounded-[4px] shadow-xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 text-[#402D21] hover:text-[#6C4D38] bg-[#FEFAF8]/90 rounded-full border border-[#CFB59E]/60 focus-visible:ring-2 focus-visible:ring-[#46627A]"
          aria-label="Cerrar ventana de detalles"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Content */}
        <div className="flex flex-col md:flex-row">
          {/* Photo */}
          <div className="md:w-1/2 p-6 bg-[#F8EADE]/50 flex items-center justify-center border-b md:border-b-0 md:border-r border-[#CFB59E]/40">
            <div className="w-full max-w-xs">
              <ProductImage
                src={product.image}
                alt={product.name}
                aspectClass="aspect-[4/3]"
                arch={true}
              />
              <div className="mt-3 text-center">
                <span className="text-[10px] uppercase tracking-[0.16em] text-[#46627A] font-medium">
                  {product.categoryLabel}
                </span>
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#46627A]">
                Ficha del Producto
              </span>
              <DobleFilete className="!my-2 !items-start" width={40} />

              <h3
                id="modal-product-title"
                className="font-serif-sentida text-2xl text-[#402D21] mb-2"
              >
                {product.name}
              </h3>

              <div className="flex items-center gap-2 text-xs font-semibold text-[#402D21] mb-4">
                <span>Rendimiento:</span>
                <span className="text-[#6C4D38] font-normal">{product.portions}</span>
              </div>

              <p className="text-xs sm:text-sm text-[#6C4D38] leading-relaxed mb-4">
                {product.description}
              </p>

              <div className="p-3 bg-[#F8EADE]/60 border border-[#CFB59E]/40 rounded-[2px] mb-4">
                <span className="text-[11px] font-medium uppercase tracking-[0.1em] text-[#402D21] flex items-center gap-1.5 mb-1">
                  <Sparkles className="w-3.5 h-3.5 text-[#8FB1C9]" />
                  <span>Detalles de elaboración</span>
                </span>
                <p className="text-[11px] text-[#6C4D38] leading-relaxed">
                  {product.details}
                </p>
              </div>

              <div className="flex items-center gap-2 text-[11px] text-[#6C4D38] mb-6">
                <Clock className="w-3.5 h-3.5 text-[#8FB1C9]" />
                <span>Encargo con 48 a 72 hs de anticipación</span>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 border-t border-[#CFB59E]/40">
              <a
                href={whatsAppProductUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#402D21] hover:bg-[#6C4D38] text-[#FEFAF8] text-[12px] font-medium uppercase tracking-[0.16em] py-3.5 px-4 rounded-[2px] transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#8FB1C9]" />
                <span>Pedir este producto por WhatsApp</span>
              </a>
              <p className="text-[10px] text-center text-[#6C4D38] mt-2 tracking-wide">
                Te confirmamos precio y disponibilidad en el momento.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
