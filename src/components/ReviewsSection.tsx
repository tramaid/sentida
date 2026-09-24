import React from 'react';
import { DobleFilete } from './DobleFilete';
import { REVIEWS } from '../data/products';

export const ReviewsSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[#F8EADE]/40 border-b border-[#CFB59E]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-20">
          <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#46627A]">
            Testimonios
          </span>
          <DobleFilete />
          <h2 className="font-serif-sentida text-3xl sm:text-4xl md:text-5xl text-[#402D21] mt-2 mb-4">
            Palabras de quienes celebraron con nosotras
          </h2>
          <p className="text-sm sm:text-base text-[#6C4D38] leading-relaxed">
            Nada nos hace más felices que ver una torta de SENTIDA en el centro de sus mesas familiares y festejos con amigos.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="bg-[#FEFAF8] border border-[#CFB59E] rounded-[3px] p-6 flex flex-col justify-between"
            >
              <div>
                {/* 5 stars clean */}
                <div className="flex items-center gap-1 mb-3 text-[#402D21]" aria-label="Calificación 5 estrellas">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-sm">★</span>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-xs sm:text-sm text-[#402D21] leading-relaxed mb-6 font-normal">
                  “{rev.quote}”
                </blockquote>
              </div>

              {/* Author and context */}
              <div className="pt-4 border-t border-[#CFB59E]/40">
                <span className="font-serif-sentida text-sm text-[#402D21] block">
                  {rev.author}
                </span>
                <span className="text-[11px] text-[#6C4D38] block">
                  {rev.location} · {rev.occasion}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
