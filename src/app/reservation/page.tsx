"use client";

import { useState, useEffect } from 'react';
import Header from '../components/Header';

export default function ReservationPage() {
  const [iframeLoaded, setIframeLoaded] = useState(false);

  // Désactiver le défilement de la page pendant le chargement
  useEffect(() => {
    // Bloquer le défilement pendant le chargement
    if (!iframeLoaded) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [iframeLoaded]);

  return (
    <>
      <Header />
      <main className="bg-black pt-20" style={{ height: '100vh' }}>
        {/* Loading indicator */}
        {!iframeLoaded && (
          <div className="fixed inset-0 pt-20 z-10 flex flex-col items-center justify-center bg-black">
            <div className="w-24 h-24 border-4 border-gold border-t-transparent rounded-full animate-spin mb-8"></div>
            <div className="bg-black/80 backdrop-blur-sm p-6 rounded-lg max-w-md text-center">
              <p className="text-white/90 text-xl mb-3">Chargement de Planity en cours...</p>
              <p className="text-white/70">Veuillez patienter, vous pourrez bientôt réserver votre créneau</p>
            </div>
          </div>
        )}
        
        {/* Planity iframe - prend toute la hauteur disponible sous le header */}
        <div 
          className="w-full h-[calc(100vh-80px)] bg-white"
        >
          <iframe 
            src="https://www.planity.com/hair-mind-31000-toulouse"
            onLoad={() => setIframeLoaded(true)}
            className="w-full h-full border-0"
            title="Système de réservation JS Barber"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </main>
    </>
  );
}
