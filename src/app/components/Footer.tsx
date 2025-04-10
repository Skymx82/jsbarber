"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function Footer() {
  const [showMap, setShowMap] = useState(false);
  
  return (
    <footer className="bg-gray-dark pt-16 pb-8 text-black">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo & Description */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-gold">JS</span> Barber
            </h3>
            <p className="mb-4">
              Votre salon de coiffure et barbier tendance à Cugnaux. Coupes stylées, taille de barbe et soins pour hommes.
            </p>
            <div className="flex space-x-4 mt-4">
              <a 
                href="https://www.instagram.com/jsbarber_cugnaux" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-gold transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a 
                href="tel:+33612345678" 
                className="text-white hover:text-gold transition-colors"
                aria-label="Téléphone"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Horaires */}
          <div>
            <h3 className="text-xl font-bold mb-4 border-b border-gold pb-2">Horaires</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span>Lundi</span>
                <span>10:00 - 19:00</span>
              </li>
              <li className="flex justify-between">
                <span>Mardi</span>
                <span>10:00 - 19:00</span>
              </li>
              <li className="flex justify-between">
                <span>Mercredi</span>
                <span>10:00 - 19:00</span>
              </li>
              <li className="flex justify-between">
                <span>Jeudi</span>
                <span>10:00 - 19:00</span>
              </li>
              <li className="flex justify-between">
                <span>Vendredi</span>
                <span>10:00 - 19:00</span>
              </li>
              <li className="flex justify-between">
                <span>Samedi</span>
                <span>9:00 - 18:00</span>
              </li>
              <li className="flex justify-between">
                <span>Dimanche</span>
                <span>Fermé</span>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4 border-b border-gold pb-2">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 mt-1 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>123 Avenue de Toulouse, 31270 Cugnaux</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>06 12 34 56 78</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>contact@jsbarber.fr</span>
              </li>
              <li className="mt-4">
                <button 
                  onClick={() => setShowMap(!showMap)}
                  className="text-gold hover:text-gold-light transition-colors flex items-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  {showMap ? 'Masquer la carte' : 'Voir sur la carte'}
                </button>
              </li>
            </ul>
          </div>
          
          {/* Navigation rapide */}
          <div>
            <h3 className="text-xl font-bold mb-4 border-b border-gold pb-2">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-gold transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-gold transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/#about" className="hover:text-gold transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/#testimonials" className="hover:text-gold transition-colors">
                  Témoignages
                </Link>
              </li>
              <li>
                <Link href="/reservation" className="hover:text-gold transition-colors">
                  Réservation
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-gold transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Google Maps */}
        {showMap && (
          <div className="mb-8 rounded-lg overflow-hidden h-64 w-full">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23113.17846751371!2d1.3346870871582036!3d43.53687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12aeb1a465559b2d%3A0x406f69c2f3d9450!2s31270%20Cugnaux!5e0!3m2!1sfr!2sfr!4v1649252594453!5m2!1sfr!2sfr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps - JS Barber Cugnaux"
            ></iframe>
          </div>
        )}
        
        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8 mt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} JS Barber - Tous droits réservés | <span className="text-black">Site développé par <a href="https://tolarys-toulouse.fr" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-light transition-colors">Tolarys</a></span></p>
          <p className="mt-2">
            <Link href="/mentions-legales" className="text-gold hover:text-gold-light transition-colors">
              Mentions légales
            </Link>
            {' | '}
            <Link href="/politique-confidentialite" className="text-gold hover:text-gold-light transition-colors">
              Politique de confidentialité
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
