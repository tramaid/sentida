/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CategoriesSection } from './components/CategoriesSection';
import { MenuSection } from './components/MenuSection';
import { OccasionsSection } from './components/OccasionsSection';
import { AboutUsSection } from './components/AboutUsSection';
import { HowToOrderSection } from './components/HowToOrderSection';
import { DeliveryAndScheduleSection } from './components/DeliveryAndScheduleSection';
import { ReviewsSection } from './components/ReviewsSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { ProductModal } from './components/ProductModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Product } from './data/products';

export default function App() {
  const [activeCategory, setActiveCategory] = useState<string>('todas');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleSelectCategory = (categoryId: string) => {
    setActiveCategory(categoryId);
    // Smooth scroll down to the menu section
    const cartaElem = document.getElementById('carta');
    if (cartaElem) {
      cartaElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenProduct = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleCloseProduct = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="min-h-screen bg-[#FEFAF8] text-[#402D21] flex flex-col font-sans-sentida selection:bg-[#DDE6ED] selection:text-[#402D21]">
      {/* 1. Continuous Marquee Announcement Bar */}
      <AnnouncementBar />

      {/* 2. Sticky Navbar with Centered Logo */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 3. Hero Section: ¿Qué hacen? */}
        <Hero />

        {/* 4. Categorías Principales: ¿Qué puedo pedir? */}
        <CategoriesSection onSelectCategory={handleSelectCategory} />

        {/* 5. Carta & Los Más Elegidos with Interactive Filter Tabs */}
        <MenuSection
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
          onOpenProduct={handleOpenProduct}
        />

        {/* 6. Ocasiones: ¿Para qué ocasión? */}
        <OccasionsSection />

        {/* 7. Nosotras: ¿Quiénes son? (Anto y Nadia) */}
        <AboutUsSection />

        {/* 8. Cómo pedir: ¿Cómo pido? (Paso a paso) */}
        <HowToOrderSection />

        {/* 9. Entregas & Horarios: ¿Dónde y cuándo lo recibo? */}
        <DeliveryAndScheduleSection />

        {/* 10. Reseñas de clientes */}
        <ReviewsSection />

        {/* 11. Preguntas Frecuentes */}
        <FAQSection />
      </main>

      {/* 12. Pie con políticas y contacto */}
      <Footer />

      {/* 13. Modal de Producto Ampliado */}
      <ProductModal product={selectedProduct} onClose={handleCloseProduct} />

      {/* 14. Botón flotante discreto de WhatsApp */}
      <FloatingWhatsApp />
    </div>
  );
}
