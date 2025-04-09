"use client";

import { useState } from 'react';
import Image from 'next/image';

type Service = {
  id: number;
  name: string;
  description: string;
  price: string;
  duration: string;
  image: string;
  category: 'haircut' | 'beard' | 'combo' | 'care';
};

export default function ServicesSection() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'haircut' | 'beard' | 'combo' | 'care'>('all');
  
  const services: Service[] = [
    {
      id: 1,
      name: "Coupe Classique",
      description: "Coupe de cheveux traditionnelle avec finitions soignées",
      price: "20€",
      duration: "30 min",
      image: "/images/coup.jpg",
      category: "haircut"
    },
    {
      id: 4,
      name: "Taille de Barbe",
      description: "Taille et définition de la barbe selon vos préférences",
      price: "18€",
      duration: "20 min",
      image: "/images/barbe.jpg",
      category: "beard"
    },
    {
      id: 6,
      name: "Coupe & Barbe",
      description: "Coupe de cheveux et taille de barbe",
      price: "40€",
      duration: "60 min",
      image: "/images/barbe3.jpg",
      category: "combo"
    },
    {
      id: 7,
      name: "Forfait Complet",
      description: "Coupe, barbe et Shampoing",
      price: "55€",
      duration: "75 min",
      image: "/images/soin.jpg",
      category: "combo"
    },
    {
      id: 8,
      name: "Shampoing",
      description: "Nettoyage et hydratation du cuir chevelu",
      price: "20€",
      duration: "20 min",
      image: "/images/shamp.jpg",
      category: "care"
    },
    {
      id: 9,
      name: "Coloration",
      description: "Coloration professionnelle adaptée à vos cheveux",
      price: "35€",
      duration: "45 min",
      image: "/images/colo.jpg",
      category: "care"
    }
  ];

  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(service => service.category === activeCategory);

  const categories = [
    { id: 'all', name: 'Tous les services' },
    { id: 'haircut', name: 'Coupes' },
    { id: 'beard', name: 'Barbe' },
    { id: 'combo', name: 'Forfaits' },
    { id: 'care', name: 'Soins' }
  ];

  return (
    <section id="services" className="py-20 bg-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ backgroundImage: 'url("/images/pattern-bg.png")', backgroundSize: '200px' }}></div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute -left-20 top-40 w-80 h-80 bg-gold opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute -right-20 bottom-40 w-80 h-80 bg-gold opacity-10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">NOS <span className="text-gold">PRESTATIONS</span></h2>
          <div className="w-24 h-1 bg-gold mx-auto"></div>
        </div>
        
        {/* Category Tabs - Stylish and Visual */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex bg-white/5 backdrop-blur-sm p-1 rounded-full">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id as any)}
                className={`px-6 py-3 rounded-full font-bold text-sm uppercase tracking-wider transition-all duration-300 ${activeCategory === category.id
                  ? 'bg-gold text-white shadow-lg transform scale-105'
                  : 'text-white/80 hover:text-white'}`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        
        {/* Services Grid - Visual Cards with Hover Effects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div 
              key={service.id} 
              className="group relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:shadow-xl"
            >
              {/* Service Image with Overlay */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                
                {/* Price Tag */}
                <div className="absolute top-4 right-4 bg-gold text-white text-xl font-bold px-4 py-2 rounded-full shadow-lg">
                  {service.price}
                </div>
                
                {/* Duration Badge */}
                <div className="absolute bottom-4 left-4 bg-black/60 text-white text-sm px-3 py-1 rounded-full flex items-center">
                  <svg className="w-4 h-4 mr-1 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {service.duration}
                </div>
              </div>
              
              {/* Service Name - Simplified Content */}
              <div className="p-5 text-center">
                <h3 className="text-xl text-white font-bold mb-0 group-hover:text-gold transition-colors">
                  {service.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to Action - More Visual */}
        <div className="mt-16 text-center">
          <a 
            href="/reservation" 
            className="inline-block bg-gold hover:bg-goldLight text-white font-bold text-lg py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            RÉSERVER MAINTENANT
          </a>
        </div>
      </div>
    </section>
  );
}
