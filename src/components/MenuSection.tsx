import React, { useState } from 'react';
import { DobleFilete } from './DobleFilete';
import { ProductImage } from './ProductImage';
import { MessageCircle, Info } from 'lucide-react';
import { Product, CATEGORIES, PRODUCTS, WHATSAPP_BASE_URL } from '../data/products';

interface MenuSectionProps {
  activeCategory: string;
  onSelectCategory: (categoryId: string) => void;
  onOpenProduct: (product: Product) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  activeCategory,
  onSelectCategory,
  onOpenProduct,
}) => {
  const [onlyPopular, setOnlyPopular] = useState(false);

  const filteredProducts = PRODUCTS.filter((item) => {
    const matchesCategory =
      activeCategory === 'todas' ? true : item.category === activeCategory;
    const matchesPopular = onlyPopular ? item.popular : true;
    return matchesCategory && matchesPopular;
  });

  return (
    <section id="carta" className="py-16 md:py-24 bg-[#FEFAF8] border-b border-[#CFB59E]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#46627A]">
            La Carta Completa
          </span>
          <DobleFilete />
          <h2 className="font-serif-sentida text-3xl sm:text-4xl md:text-5xl text-[#402D21] mt-2 mb-4">
            Los más elegidos de SENTIDA
          </h2>
          <p className="text-sm sm:text-base text-[#6C4D38] leading-relaxed">
            Hacé clic en cualquier producto para ver sus detalles de rinde y conservación, o escribinos directamente por WhatsApp para confirmar tu fecha.
          </p>
        </div>

        {/* Filter Bar: Segmented interactive tabs (Zero-pill compliant) */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 pb-4 border-b border-[#CFB59E]/30">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1 p-1 bg-[#F8EADE] rounded-[3px] border border-[#CFB59E]/50">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => onSelectCategory(cat.id)}
                  className={`px-3 py-2 text-[11px] md:text-[12px] font-medium uppercase tracking-[0.14em] rounded-[2px] transition-all ${
                    isActive
                      ? 'bg-[#402D21] text-[#FEFAF8] shadow-xs'
                      : 'text-[#402D21] hover:text-[#6C4D38] hover:bg-[#FEFAF8]/60'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Quick Toggle for "Los más elegidos" */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setOnlyPopular(!onlyPopular)}
              className={`inline-flex items-center gap-2 px-3 py-2 text-[11px] font-medium uppercase tracking-[0.14em] rounded-[2px] border transition-colors ${
                onlyPopular
                  ? 'bg-[#DDE6ED] border-[#46627A] text-[#402D21]'
                  : 'bg-[#FEFAF8] border-[#CFB59E] text-[#6C4D38] hover:text-[#402D21]'
              }`}
            >
              <span className={`w-2 h-2 rounded-full ${onlyPopular ? 'bg-[#46627A]' : 'bg-[#CFB59E]'}`} />
              <span>Solo favoritos</span>
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProducts.map((product) => {
            const whatsAppProductUrl = `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(
              `¡Hola Anto y Nadia! Quisiera consultar precio y disponibilidad para encargar: ${product.name} (${product.portions}).`
            )}`;

            return (
              <article
                key={product.id}
                className="bg-[#FEFAF8] border border-[#CFB59E]/70 rounded-[3px] p-5 flex flex-col justify-between transition-all duration-300 hover:border-[#402D21] hover:shadow-[0_6px_20px_rgba(64,45,33,0.06)] group"
              >
                <div>
                  {/* Photo with Vitrina top arch */}
                  <div className="relative mb-5 cursor-pointer" onClick={() => onOpenProduct(product)}>
                    <ProductImage
                      src={product.image}
                      alt={product.name}
                      aspectClass="aspect-[4/3]"
                      arch={true}
                    />

                    {/* Tag if any */}
                    {product.tag && (
                      <span className="absolute top-3 right-3 bg-[#FEFAF8]/95 border border-[#CFB59E] px-2.5 py-1 text-[10px] font-medium tracking-[0.16em] uppercase text-[#46627A] rounded-[2px] shadow-xs">
                        {product.tag}
                      </span>
                    )}
                  </div>

                  {/* Category & Portions unboxed metadata */}
                  <div className="flex items-center justify-between text-[11px] text-[#6C4D38] mb-2 font-medium">
                    <span className="uppercase tracking-[0.16em] text-[#46627A]">
                      {product.categoryLabel}
                    </span>
                    <span className="tracking-tight text-[#402D21]">
                      {product.portions}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className="font-serif-sentida text-xl text-[#402D21] mb-2.5 group-hover:text-[#6C4D38] transition-colors cursor-pointer"
                    onClick={() => onOpenProduct(product)}
                  >
                    {product.name}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-[#6C4D38] leading-relaxed mb-4 line-clamp-3">
                    {product.description}
                  </p>
                </div>

                {/* Card Actions */}
                <div className="pt-4 border-t border-[#CFB59E]/30 flex flex-col gap-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] uppercase tracking-[0.14em] text-[#6C4D38] font-medium">
                      Por encargo · A consultar
                    </span>
                    <button
                      type="button"
                      onClick={() => onOpenProduct(product)}
                      className="inline-flex items-center gap-1 text-[11px] font-medium text-[#402D21] hover:text-[#6C4D38] tracking-[0.12em] uppercase py-1"
                    >
                      <Info className="w-3.5 h-3.5 text-[#8FB1C9]" />
                      <span>Ver ficha</span>
                    </button>
                  </div>

                  <a
                    href={whatsAppProductUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#402D21] hover:bg-[#6C4D38] text-[#FEFAF8] text-[11px] md:text-[12px] font-medium uppercase tracking-[0.16em] py-2.5 px-3 rounded-[2px] transition-colors border border-[#402D21]"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-[#8FB1C9]" />
                    <span>Pedir por WhatsApp</span>
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom helper notice */}
        <div className="mt-14 p-6 bg-[#F8EADE]/60 border border-[#CFB59E] rounded-[3px] text-center max-w-3xl mx-auto">
          <p className="font-serif-sentida text-lg text-[#402D21] mb-2">
            ¿Buscás una torta con un diseño o relleno particular?
          </p>
          <p className="text-xs sm:text-sm text-[#6C4D38] mb-4">
            Contanos tu idea por WhatsApp. Nos encanta adaptar sabores, colores de flores y temáticas según el festejo que estés soñando.
          </p>
          <a
            href={`${WHATSAPP_BASE_URL}?text=${encodeURIComponent(
              '¡Hola Anto y Nadia! Tengo una idea para una torta personalizada y quería consultarles si es posible elaborarla...'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#402D21] hover:text-[#6C4D38] border-b border-[#402D21] pb-0.5"
          >
            <span>Consultar por diseño personalizado</span>
          </a>
        </div>

      </div>
    </section>
  );
};
