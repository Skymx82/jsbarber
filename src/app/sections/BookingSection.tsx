"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function BookingSection() {
  const [isVisible, setIsVisible] = useState(false);

  // Détecter quand la section devient visible pour déclencher les animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById('booking');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  // Classes CSS pour les animations
  const animationClass = isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8';

  return (
    <section id="booking" className="py-24 bg-black relative overflow-hidden">
      {/* Éléments décoratifs de fond */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center transition-all duration-1000 ease-out">
          {/* Titre et sous-titre */}
          <h2 className={`text-4xl md:text-5xl font-bold text-white mb-4 transition-all duration-700 delay-100 ${animationClass}`}>
            <span className="text-gold">RÉSERVEZ</span> VOTRE RENDEZ-VOUS
          </h2>
          
          <div className={`w-32 h-1 bg-gold mx-auto mb-6 transition-all duration-700 delay-200 ${animationClass}`}></div>
          
          <p className={`text-white/80 text-lg mb-12 max-w-2xl mx-auto transition-all duration-700 delay-300 ${animationClass}`}>
            Prenez rendez-vous en quelques clics grâce à notre système de réservation en ligne Planity.
            Choisissez la date, l'heure et le service qui vous conviennent.
          </p>

          {/* Carte CTA */}
          <div className={`bg-black/50 backdrop-blur-sm p-8 rounded-2xl border border-gold/30 shadow-xl mb-8 transition-all duration-700 delay-400 ${animationClass}`}>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-left">
                <h3 className="text-2xl font-bold text-white mb-4">Réservation <span className="text-gold">Planity</span></h3>
                <ul className="text-white/80 space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-gold flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Réservation simple et rapide</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-gold flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Disponibilités en temps réel</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-gold flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Confirmation par SMS</span>
                  </li>
                </ul>
              </div>
              
              <div className="flex flex-col items-center justify-center">
                <Link 
                  href="reservation" 
                  className="bg-gold hover:bg-gold/90 text-black font-bold py-4 px-8 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 flex items-center gap-2 w-full justify-center text-center"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Réserver maintenant
                </Link>
                <p className="text-white/60 text-sm mt-4">
                  Ouvert du mardi au samedi de 9h à 19h
                </p>
              </div>
            </div>
          </div>

          {/* Texte d'information supplémentaire */}
          <p className={`text-white/60 text-sm transition-all duration-700 delay-500 ${animationClass}`}>
            Vous serez redirigé vers notre page de réservation Planity où vous pourrez choisir votre service et créneau.
          </p>
        </div>
      </div>
    </section>
  );
}
