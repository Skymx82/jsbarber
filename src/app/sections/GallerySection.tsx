"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [animateSection, setAnimateSection] = useState(false);

  // Animation effect when component mounts
  useEffect(() => {
    setAnimateSection(true);
  }, []);

  // Données des images de la galerie
  const galleryImages = [
    {
      id: 1,
      src: "/images/colo.jpg",
      alt: "Dégradé classique",
      category: "moderne"
    },
    {
      id: 2,
      src: "/images/coup.jpg",
      alt: "Coupe tendance",
      category: "moderne"
    },
    {
      id: 3,
      src: "/images/barbe.jpg",
      alt: "Barbe sculptée",
      category: "barbe",
    },
    {
      id: 4,
      src: "/images/barber2.jpg",
      alt: "Coupe et barbe",
      category: "barbe"
    },
    {
      id: 5,
      src: "/images/coupetend.jpg",
      alt: "Dégradé haut",
      category: "dégradé"
    },
    {
      id: 6,
      src: "/images/coupefond.jpg",
      alt: "Style moderne",
      category: "dégradé"
    },
    {
      id: 7,
      src: "/images/shamp.jpg",
      alt: "Barbe taillée",
      category: "classique"
    },
    {
      id: 8,
      src: "/images/soin.jpg",
      alt: "Coupe classique",
      category: "classique"
    },
    {
      id: 9,
      src: "/images/barbe3.jpg",
      alt: "Dégradé bas",
      category: "barbe"
    }
  ];

  // Catégories pour le filtrage
  const categories = ["tous", "dégradé", "moderne", "barbe", "classique"];
  const [activeCategory, setActiveCategory] = useState("tous");

  // Filtrer les images en fonction de la catégorie sélectionnée
  const filteredImages = activeCategory === "tous" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  // Ouvrir l'image en plein écran
  const openFullscreen = (src: string) => {
    setSelectedImage(src);
    document.body.style.overflow = 'hidden'; // Empêcher le défilement
  };

  // Fermer l'image en plein écran
  const closeFullscreen = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto'; // Réactiver le défilement
  };

  return (
    <section id="gallery" className="py-20 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold opacity-10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('/images/pattern-bg.png')] bg-repeat opacity-5"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${animateSection ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">NOTRE <span className="text-gold">GALERIE</span></h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-4"></div>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            Découvrez nos réalisations et trouvez l'inspiration pour votre prochaine coupe
          </p>
        </div>
        
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-bold uppercase transition-all duration-300 ${
                activeCategory === category 
                  ? 'bg-gold text-white' 
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredImages.map((image) => (
            <div 
              key={image.id}
              className="relative group overflow-hidden rounded-lg cursor-pointer transform transition-all duration-500 hover:scale-[1.02] hover:shadow-xl"
              onClick={() => openFullscreen(image.src)}
            >
              <div className="aspect-square relative overflow-hidden">
                <Image 
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                  <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center p-4">
                    <div className="w-12 h-12 mx-auto border-2 border-white rounded-full flex items-center justify-center mb-2">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                    <p className="font-bold">{image.alt}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Instagram CTA */}
        <div className="mt-16 text-center">
          <a 
            href="https://www.instagram.com/js_barber31/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-bold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
          >
            <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            Plus de photos sur Instagram
          </a>
        </div>
      </div>
      
      {/* Fullscreen Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeFullscreen}
        >
          <button 
            className="absolute top-6 right-6 text-white hover:text-gold"
            onClick={closeFullscreen}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div 
            className="relative max-w-5xl max-h-[80vh] w-full h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image 
              src={selectedImage}
              alt="Image agrandie"
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
