"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from './components/Header';
import Footer from './components/Footer';

export default function NotFound() {
  const [animateSection, setAnimateSection] = useState(false);

  // Animation effect when component mounts
  useEffect(() => {
    setAnimateSection(true);
  }, []);

  return (
    <>
      <Header />
      <main className="bg-black pt-20">
        {/* Hero Section */}
        <section className="relative py-32 md:py-40 flex items-center justify-center overflow-hidden min-h-[70vh]">
          <div className="absolute inset-0 z-0 opacity-20">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gold opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold opacity-10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('/images/pattern-bg.png')] bg-repeat opacity-5"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10 text-center">
            <div className={`transition-all duration-700 ${animateSection ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h1 className="text-8xl md:text-9xl font-bold text-gold mb-4">404</h1>
              <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Page non trouvée</h2>
              <p className="text-white/80 max-w-xl mx-auto text-lg mb-10">
                Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
              </p>
            </div>
            
            <div className={`flex flex-col md:flex-row gap-6 justify-center items-center transition-all duration-700 delay-300 ${animateSection ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Link 
                href="/" 
                className="inline-flex items-center gap-2 bg-gold hover:bg-gold/80 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                <svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
                <span>RETOUR À L'ACCUEIL</span>
              </Link>
              
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                <span>NOUS CONTACTER</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </Link>
            </div>
            
            <div className={`mt-16 relative transition-all duration-1000 delay-500 ${animateSection ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
              <div className="relative w-64 h-64 mx-auto">
                <Image
                  src="/images/logo_trans.png"
                  alt="JS Barber Logo"
                  fill
                  className="object-contain opacity-30"
                  sizes="256px"
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 border-4 border-gold border-t-transparent rounded-full animate-spin"></div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Quick Links Section */}
        <section className="py-16 bg-gradient-to-b from-black to-gray-dark relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className={`text-center mb-12 transition-all duration-700 delay-300 ${animateSection ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Vous pourriez être intéressé par
              </h2>
              <div className="w-16 h-1 bg-gold mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className={`bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl transform transition-all duration-500 hover:scale-105 hover:bg-white/10 ${animateSection ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: '100ms'}}>
                <h3 className="text-xl font-bold text-white mb-3">Nos services</h3>
                <p className="text-white/70 mb-4">Découvrez notre gamme complète de services de coiffure et de barbe.</p>
                <Link href="/#services" className="text-gold hover:text-gold/80 transition-colors flex items-center">
                  En savoir plus
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
              
              <div className={`bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl transform transition-all duration-500 hover:scale-105 hover:bg-white/10 ${animateSection ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: '200ms'}}>
                <h3 className="text-xl font-bold text-white mb-3">À propos de nous</h3>
                <p className="text-white/70 mb-4">Apprenez-en plus sur notre histoire et notre passion pour la coiffure.</p>
                <Link href="/#about" className="text-gold hover:text-gold/80 transition-colors flex items-center">
                  En savoir plus
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
              
              <div className={`bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl transform transition-all duration-500 hover:scale-105 hover:bg-white/10 ${animateSection ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: '300ms'}}>
                <h3 className="text-xl font-bold text-white mb-3">Galerie</h3>
                <p className="text-white/70 mb-4">Explorez nos réalisations et laissez-vous inspirer pour votre prochain style.</p>
                <Link href="/#gallery" className="text-gold hover:text-gold/80 transition-colors flex items-center">
                  En savoir plus
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
              
              <div className={`bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl transform transition-all duration-500 hover:scale-105 hover:bg-white/10 ${animateSection ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: '400ms'}}>
                <h3 className="text-xl font-bold text-white mb-3">Réservation</h3>
                <p className="text-white/70 mb-4">Prenez rendez-vous en ligne pour votre prochaine coupe ou soin.</p>
                <Link href="/reservation" className="text-gold hover:text-gold/80 transition-colors flex items-center">
                  Réserver maintenant
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
