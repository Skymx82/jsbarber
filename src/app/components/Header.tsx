"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="relative h-14 w-44 md:h-16 md:w-52 transition-all duration-300">
            {isScrolled ? (
              <Image 
                src="/images/logoclair.png" 
                alt="JS Barber Logo" 
                fill
                className="object-contain"
                sizes="(max-width: 768px) 176px, 208px"
                priority
              />
            ) : (
              <Image 
                src="/images/logo_trans.png" 
                alt="JS Barber Logo" 
                fill
                className="object-contain"
                sizes="(max-width: 768px) 176px, 208px"
                priority
              />
            )}
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {[
            { name: 'Services', href: '/#services' },
            { name: 'À propos', href: '/#about' },
            { name: 'Galerie', href: '/#gallery' },
            { name: 'Contact', href: '/contact' },
          ].map((item) => (
            <Link 
              key={item.name} 
              href={item.href}
              className={`font-medium hover:text-gold transition-colors ${
                isScrolled ? 'text-gray-dark' : 'text-white'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Booking Button */}
        <Link 
          href="/reservation" 
          className="hidden md:block bg-gold hover:bg-gold-light text-white font-bold py-2 px-4 rounded-md transition duration-300"
        >
          Prendre RDV
        </Link>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg 
            className={`w-6 h-6 ${isScrolled ? 'text-gray-dark' : 'text-white'}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto py-4 space-y-4">
            {[
              { name: 'Accueil', href: '/' },
              { name: 'Services', href: '/#services' },
              { name: 'À propos', href: '/#about' },
              { name: 'Galerie', href: '/#gallery' },
              { name: 'Contact', href: '/contact' },
            ].map((item) => (
              <Link 
                key={item.name} 
                href={item.href}
                className="block font-medium text-gray-dark hover:text-gold transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link 
              href="/reservation" 
              className="block w-full bg-gold hover:bg-gold-light text-white font-bold py-2 px-4 rounded-md text-center transition duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Prendre RDV
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
