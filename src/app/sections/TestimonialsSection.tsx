"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

type Testimonial = {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  text: string;
  date: string;
};

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Thomas D.",
      avatar: "/images/testimonials/avatar-1.jpg",
      rating: 5,
      text: "Meilleur barbier de Cugnaux ! L'ambiance est super agréable, le service impeccable et ma coupe est toujours parfaite. Je ne vais nulle part ailleurs maintenant.",
      date: "15 mars 2025"
    },
    {
      id: 2,
      name: "Julien M.",
      avatar: "/images/testimonials/avatar-2.jpg",
      rating: 5,
      text: "Je cherchais un barbier qui sache vraiment s'occuper des barbes épaisses et j'ai enfin trouvé ! Expertise au top et conseils personnalisés, je recommande vivement.",
      date: "2 février 2025"
    },
    {
      id: 3,
      name: "Alexandre B.",
      avatar: "/images/testimonials/avatar-3.jpg",
      rating: 4,
      text: "Première visite chez JS Barber et certainement pas la dernière. Cadre élégant, barbier attentif à mes demandes et résultat à la hauteur de mes attentes.",
      date: "18 janvier 2025"
    },
    {
      id: 4,
      name: "Maxime L.",
      avatar: "/images/testimonials/avatar-4.jpg",
      rating: 5,
      text: "Expérience complète avec coupe et soin de barbe. Le massage du cuir chevelu vaut le détour à lui seul ! Un vrai moment de détente dans un cadre stylé.",
      date: "5 décembre 2024"
    },
    {
      id: 5,
      name: "Nicolas P.",
      avatar: "/images/testimonials/avatar-5.jpg",
      rating: 5,
      text: "Enfin un barbier qui prend le temps d'écouter ce que je veux ! Résultat impeccable, produits de qualité et prix raisonnable. Je suis client fidèle depuis l'ouverture.",
      date: "20 novembre 2024"
    }
  ];

  // Auto-scroll testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Render stars based on rating
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <svg 
        key={index}
        className={`w-5 h-5 ${index < rating ? 'text-gold' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-black relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/pattern-bg.png')] bg-repeat opacity-5"></div>
        <div className="absolute -left-40 top-20 w-96 h-96 rounded-full bg-gold opacity-10 blur-3xl"></div>
        <div className="absolute -right-40 bottom-20 w-96 h-96 rounded-full bg-gold opacity-10 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        {/* Section Header - Minimal and Bold */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">AVIS <span className="text-gold">CLIENTS</span></h2>
          <div className="w-24 h-1 bg-gold mx-auto"></div>
        </div>
        
        {/* Visual Testimonial Showcase */}
        <div className="relative">
          {/* Large Rating Display */}
          <div className="flex justify-center mb-12">
            <div className="flex items-center space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg 
                  key={star}
                  className="w-12 h-12 text-gold"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>
          
          {/* Visual Testimonial Cards */}
          <div className="relative h-[500px] max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => {
              // Calculate position and styling based on active index
              const isActive = index === activeIndex;
              const isPrev = (index === activeIndex - 1) || (activeIndex === 0 && index === testimonials.length - 1);
              const isNext = (index === activeIndex + 1) || (activeIndex === testimonials.length - 1 && index === 0);
              
              let position = "";
              let scale = "scale-0";
              let opacity = "opacity-0";
              let zIndex = 0;
              
              if (isActive) {
                position = "left-1/2 -translate-x-1/2 top-0";
                scale = "scale-100";
                opacity = "opacity-100";
                zIndex = 30;
              } else if (isPrev) {
                position = "left-0 -translate-x-1/4 top-1/4";
                scale = "scale-75";
                opacity = "opacity-60";
                zIndex = 20;
              } else if (isNext) {
                position = "right-0 translate-x-1/4 top-1/4";
                scale = "scale-75";
                opacity = "opacity-60";
                zIndex = 20;
              }
              
              return (
                <div 
                  key={testimonial.id}
                  className={`absolute ${position} ${scale} ${opacity} transition-all duration-700 w-full max-w-2xl transform cursor-pointer`}
                  style={{ zIndex }}
                  onClick={() => isActive ? null : setActiveIndex(index)}
                >
                  <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-white/10">
                    {/* Quote Icon */}
                    <div className="absolute -top-6 -left-6 w-12 h-12 bg-gold rounded-full flex items-center justify-center shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>
                    
                    <div className="flex items-center mb-6">
                      <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-gold shadow-lg">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="ml-6">
                        <h3 className="font-bold text-2xl text-white">{testimonial.name}</h3>
                        <div className="flex mt-1">
                          {renderStars(testimonial.rating)}
                        </div>
                      </div>
                    </div>
                    
                    {/* Simplified Quote */}
                    <p className="text-white/90 text-lg font-light italic mb-4 leading-relaxed">"{testimonial.text.length > 100 ? testimonial.text.substring(0, 100) + '...' : testimonial.text}"</p>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Simple Navigation */}
          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={() => setActiveIndex((activeIndex - 1 + testimonials.length) % testimonials.length)}
              className="bg-gold hover:bg-goldLight text-white w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
              aria-label="Témoignage précédent"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => setActiveIndex((activeIndex + 1) % testimonials.length)}
              className="bg-gold hover:bg-goldLight text-white w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
              aria-label="Témoignage suivant"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Social Proof - Visual Call to Action */}
        <div className="mt-16 text-center">
          <a 
            href="https://g.page/r/JS-Barber-Cugnaux/review" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center bg-white/10 backdrop-blur-sm hover:bg-gold text-white px-8 py-4 rounded-full font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-lg border border-white/20 group"
          >
            <svg className="w-6 h-6 mr-3 group-hover:animate-pulse" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM15 6.5V9H11V17H9V9H5V6.5H15Z" />
            </svg>
            PARTAGEZ VOTRE EXPÉRIENCE
          </a>
        </div>
      </div>
    </section>
  );
}
