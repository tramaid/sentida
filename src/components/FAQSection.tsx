import React, { useState } from 'react';
import { DobleFilete } from './DobleFilete';
import { Plus, Minus } from 'lucide-react';
import { FAQS } from '../data/products';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="preguntas" className="py-16 md:py-24 bg-[#FEFAF8] border-b border-[#CFB59E]/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-16">
          <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#46627A]">
            Dudas Frecuentes
          </span>
          <DobleFilete />
          <h2 className="font-serif-sentida text-3xl sm:text-4xl md:text-5xl text-[#402D21] mt-2 mb-4">
            Todo lo que necesitás saber
          </h2>
          <p className="text-sm sm:text-base text-[#6C4D38] leading-relaxed">
            Respondemos las preguntas habituales para que hagas tu pedido con total tranquilidad y claridad.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="bg-[#FEFAF8] border border-[#CFB59E] rounded-[3px] overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 hover:bg-[#F8EADE]/30 transition-colors focus-visible:ring-2 focus-visible:ring-[#46627A]"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif-sentida text-base sm:text-lg text-[#402D21] pr-2">
                    {faq.question}
                  </span>
                  <span className="text-[#402D21] p-1 shrink-0">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 pt-1 sm:px-6 text-xs sm:text-sm text-[#6C4D38] leading-relaxed border-t border-[#CFB59E]/20 bg-[#F8EADE]/20">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
