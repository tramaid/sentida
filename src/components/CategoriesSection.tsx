import React from 'react';
import { DobleFilete } from './DobleFilete';
import { ProductImage } from './ProductImage';
import { ArrowRight } from 'lucide-react';

interface CategoriesSectionProps {
  onSelectCategory: (categoryId: string) => void;
}

export const CategoriesSection: React.FC<CategoriesSectionProps> = ({ onSelectCategory }) => {
  const categories = [
    {
      id: 'clasicas',
      title: 'Especialidades & Clásicas',
      subtitle: 'Tartas de siempre con técnica impecable',
      description: 'Key Lime Pie con curd natural, Cheesecake estilo New York horneado, Marquise húmeda con frutos rojos y Tarta Sablée.',
      image: '/key-lime-pie.jpg',
      tag: 'Las más pedidas',
      count: '7 variedades',
    },
    {
      id: 'decoradas',
      title: 'Tortas con Flores & Números',
      subtitle: 'La firma botánica de SENTIDA',
      description: 'Letter cakes, Number cakes para 15 y festejos, Heart cakes vintage y tortas decoradas con pétalos y flores naturales frescas.',
      image: '/torta-de-petalos.jpg',
      tag: 'Diseño botánico',
      count: 'Personalizadas',
    },
    {
      id: 'mesas',
      title: 'Mesas Dulces & Shots',
      subtitle: 'Bocados individuales para eventos',
      description: 'Shots dulces con flores y merengue, alfajorcitos de maicena que se deshacen, cuadraditos de carrot y galletas de manteca florales.',
      image: '/vasitos-con-flores.jpg',
      tag: 'Eventos & Festejos',
      count: 'Por docena o box',
    },
    {
      id: 'mas-tortas',
      title: 'Tortas de Chocolate & Cakes',
      subtitle: 'Humedad, cacao puro y dulce de leche',
      description: 'Nuestra Carrot Cake especiada con nueces, Torta húmeda de chocolate belga, Torta Brownie con merengue y Chocotorta clásica.',
      image: '/carrot-cake.jpg',
      tag: 'Para toda ocasión',
      count: '5 variedades',
    },
  ];

  return (
    <section id="categorias" className="py-16 md:py-24 bg-[#F8EADE]/40 border-b border-[#CFB59E]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-20">
          <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#46627A]">
            ¿Qué puedo pedir?
          </span>
          <DobleFilete />
          <h2 className="font-serif-sentida text-3xl sm:text-4xl md:text-5xl text-[#402D21] mt-2 mb-4">
            Especialidades de nuestro taller
          </h2>
          <p className="text-sm sm:text-base text-[#6C4D38] leading-relaxed">
            Cada receta se elabora desde cero con manteca de primera línea, chocolate genuino, frutas seleccionadas y flores frescas.
          </p>
        </div>

        {/* 4 Large Editorial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="group bg-[#FEFAF8] border border-[#CFB59E] rounded-[3px] p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:border-[#402D21] hover:shadow-[0_8px_24px_rgba(64,45,33,0.06)]"
            >
              <div>
                {/* Image Showcase with Vitrina Arch */}
                <div className="mb-6">
                  <ProductImage
                    src={cat.image}
                    alt={cat.title}
                    aspectClass="aspect-[16/10]"
                    arch={true}
                  />
                </div>

                {/* Unboxed Metadata */}
                <div className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.16em] text-[#46627A] mb-2">
                  <span>{cat.tag}</span>
                  <span className="text-[#8FB1C9]" aria-hidden="true">·</span>
                  <span>{cat.count}</span>
                </div>

                {/* Title */}
                <h3 className="font-serif-sentida text-2xl sm:text-3xl text-[#402D21] mb-2 group-hover:text-[#6C4D38] transition-colors">
                  {cat.title}
                </h3>
                
                <p className="text-xs uppercase tracking-[0.1em] text-[#6C4D38] font-medium mb-3">
                  {cat.subtitle}
                </p>

                <p className="text-sm text-[#6C4D38] leading-relaxed mb-6">
                  {cat.description}
                </p>
              </div>

              {/* Action Button to Filter Menu */}
              <div className="pt-4 border-t border-[#CFB59E]/40">
                <a
                  href="#carta"
                  onClick={() => onSelectCategory(cat.id)}
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#402D21] group-hover:text-[#6C4D38] transition-colors"
                >
                  <span>Explorar variedad</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#8FB1C9] group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
