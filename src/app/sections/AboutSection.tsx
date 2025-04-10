"use client";

import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function AboutSection() {
  const [animateSection, setAnimateSection] = useState(false);

  // Animation effect when component mounts
  useEffect(() => {
    setAnimateSection(true);
  }, []);

  return (
    <section id="about" className="py-20 relative overflow-hidden bg-black text-white">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold opacity-10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('/images/pattern-bg.png')] bg-repeat opacity-5"></div>
      </div>
      
      <div className="container mx-auto relative z-10 px-4">
        {/* Section Header - Modern and Impactful */}
        <div className={`text-center mb-16 transition-all duration-700 ${animateSection ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">NOTRE <span className="text-gold">UNIVERS</span></h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-4"></div>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            Découvrez l'expérience unique de JS Barber, où tradition et modernité se rencontrent
          </p>
        </div>
        
        {/* About Content - Split Layout */}
        <div className={`flex flex-col md:flex-row gap-12 items-center mb-20 transition-all duration-1000 ${animateSection ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
          {/* Left Side - Image */}
          <div className="w-full md:w-1/2 relative">
            <div className="relative h-[500px] w-full overflow-hidden rounded-xl">
              <Image
                src="/images/propos.png"
                alt="Intérieur du salon JS Barber"
                fill
                className="object-cover transition-transform duration-1000 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <span className="text-gold text-sm font-bold tracking-widest">DEPUIS 2020</span>
                <h3 className="text-white text-2xl font-bold mt-2">NOTRE SALON</h3>
              </div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-10 -right-10 bg-gold text-white p-6 rounded-xl shadow-2xl hidden md:block transform rotate-3 hover:rotate-0 transition-all duration-300">
              <p className="text-xl font-bold">+1000</p>
              <p className="text-sm">Clients satisfaits</p>
            </div>
          </div>
          
          {/* Right Side - Content */}
          <div className="w-full md:w-1/2">
            <h3 className="text-3xl font-bold mb-6">Un <span className="text-gold">savoir-faire</span> unique</h3>
            <p className="text-white/80 mb-6 text-lg">
              Notre salon JS Barber est né d'une passion pour l'art de la coiffure masculine et de la barbe. Situé au cœur de Cugnaux, nous proposons un espace où chaque homme peut se sentir à l'aise et ressortir avec un style qui lui correspond parfaitement.
            </p>
            <p className="text-white/80 mb-8 text-lg">
              Notre équipe de barbiers expérimentés combine techniques traditionnelles et tendances modernes pour offrir des prestations sur-mesure qui respectent votre personnalité et vos envies.
            </p>
            
            {/* Features */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="font-medium">Produits premium</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="font-medium">Barbiers certifiés</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="font-medium">Ambiance unique</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="font-medium">Service personnalisé</span>
              </div>
            </div>
            
            <a 
              href="/reservation" 
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold/80 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              <span>PRENDRE RENDEZ-VOUS</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
        
        {/* Core Values - Modern Cards */}
        <div className="mb-20">
          <h3 className={`text-3xl font-bold mb-10 text-center transition-all duration-700 ${animateSection ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Nos <span className="text-gold">valeurs</span>
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className={`bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-xl transform transition-all duration-500 hover:scale-105 hover:bg-white/10 ${animateSection ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: '100ms'}}>
              <div className="text-gold text-4xl mb-4">01</div>
              <h4 className="text-xl font-bold mb-3">Personnalisation</h4>
              <p className="text-white/70">Chaque coupe est adaptée à votre style et à la forme de votre visage.</p>
            </div>
            
            <div className={`bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-xl transform transition-all duration-500 hover:scale-105 hover:bg-white/10 ${animateSection ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: '200ms'}}>
              <div className="text-gold text-4xl mb-4">02</div>
              <h4 className="text-xl font-bold mb-3">Qualité</h4>
              <p className="text-white/70">Des produits haut de gamme et des outils professionnels pour des résultats impeccables.</p>
            </div>
            
            <div className={`bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-xl transform transition-all duration-500 hover:scale-105 hover:bg-white/10 ${animateSection ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: '300ms'}}>
              <div className="text-gold text-4xl mb-4">03</div>
              <h4 className="text-xl font-bold mb-3">Expertise</h4>
              <p className="text-white/70">Des barbiers formés aux dernières techniques et tendances du moment.</p>
            </div>
            
            <div className={`bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-xl transform transition-all duration-500 hover:scale-105 hover:bg-white/10 ${animateSection ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: '400ms'}}>
              <div className="text-gold text-4xl mb-4">04</div>
              <h4 className="text-xl font-bold mb-3">Satisfaction</h4>
              <p className="text-white/70">Votre contentement est notre priorité, nous nous assurons que vous repartiez satisfait.</p>
            </div>
          </div>
        </div>
        
        {/* Gallery Section */}
        <div className={`mb-20 transition-all duration-1000 ${animateSection ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-3xl font-bold mb-10 text-center">
            Notre <span className="text-gold">environnement</span>
          </h3>
          
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-8 relative h-80 overflow-hidden rounded-xl group">
              <Image
                src="/images/ambi.png"
                alt="Ambiance du salon JS Barber"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 66vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end">
                <div className="p-6">
                  <h4 className="text-2xl font-bold text-white">Ambiance unique</h4>
                  <p className="text-white/80">Un espace conçu pour votre confort et votre style</p>
                </div>
              </div>
            </div>
            
            <div className="col-span-6 md:col-span-4 relative h-80 overflow-hidden rounded-xl group">
              <Image
                src="/images/equip.png"
                alt="Équipement professionnel JS Barber"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end">
                <div className="p-6">
                  <h4 className="text-xl font-bold text-white">Équipement pro</h4>
                  <p className="text-white/80">Des outils de qualité</p>
                </div>
              </div>
            </div>
            
            <div className="col-span-6 md:col-span-4 relative h-80 overflow-hidden rounded-xl group">
              <Image
                src="/images/act.png"
                alt="Barbier JS Barber en action"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end">
                <div className="p-6">
                  <h4 className="text-xl font-bold text-white">Expertise</h4>
                  <p className="text-white/80">Savoir-faire et précision</p>
                </div>
              </div>
            </div>
            
            <div className="col-span-12 md:col-span-8 relative h-80 overflow-hidden rounded-xl group">
              <Image
                src="/images/dete.png"
                alt="L'expérience JS Barber"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 66vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end">
                <div className="p-6">
                  <h4 className="text-2xl font-bold text-white">Expérience complète</h4>
                  <p className="text-white/80">Un moment de détente et de transformation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className={`relative rounded-xl overflow-hidden transition-all duration-1000 ${animateSection ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-12 rounded-xl text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">L'EXPÉRIENCE <span className="text-gold">JS BARBER</span></h3>
            <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
            <p className="text-xl max-w-3xl mx-auto font-light tracking-wide text-white/80 mb-10">
              Un moment unique où style et détente se rencontrent pour une transformation complète. Prenez rendez-vous dès maintenant et découvrez l'excellence à l'état pur.
            </p>
            <a 
              href="/reservation" 
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold/80 text-white font-bold py-5 px-12 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-lg"
            >
              <span>RÉSERVER MAINTENANT</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
