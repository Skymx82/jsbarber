"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ContactPage() {
  const [showMap, setShowMap] = useState(false);
  const [animateSection, setAnimateSection] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });

  // Animation effect when component mounts
  useEffect(() => {
    setAnimateSection(true);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulation d'envoi de formulaire (à remplacer par votre logique d'envoi réelle)
    setTimeout(() => {
      setFormStatus({
        submitted: true,
        success: true,
        message: 'Votre message a été envoyé avec succès. Nous vous répondrons dans les plus brefs délais.'
      });
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      // Reset form status after 5 seconds
      setTimeout(() => {
        setFormStatus({
          submitted: false,
          success: false,
          message: ''
        });
      }, 5000);
    }, 1000);
  };

  return (
    <>
      <Header />
      <main className="bg-black pt-20">
        {/* Hero Section */}
        <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/contact-hero.jpg"
              alt="JS Barber Contact"
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
          
          {/* Content */}
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className={`text-4xl md:text-6xl font-bold text-white mb-4 transition-all duration-700 ${animateSection ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              CONTACTEZ <span className="text-gold">NOUS</span>
            </h1>
            <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
            <p className={`text-white/80 max-w-2xl mx-auto text-lg transition-all duration-700 delay-300 ${animateSection ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Nous sommes à votre écoute pour toute question ou prise de rendez-vous
            </p>
          </div>
        </section>

        {/* Contact Info & Form Section */}
        <section className="py-20 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 z-0 opacity-20">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gold opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold opacity-10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('/images/pattern-bg.png')] bg-repeat opacity-5"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className={`transition-all duration-700 ${animateSection ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                <h2 className="text-3xl font-bold text-white mb-8">Informations de <span className="text-gold">contact</span></h2>
                
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-xl mb-8">
                  <div className="flex flex-col space-y-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                        <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">Adresse</h3>
                        <p className="text-white/70">123 Avenue de Toulouse, 31270 Cugnaux</p>
                        <button 
                          onClick={() => setShowMap(!showMap)}
                          className="text-gold hover:text-gold-light transition-colors flex items-center mt-2"
                        >
                          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                          </svg>
                          {showMap ? 'Masquer la carte' : 'Voir sur la carte'}
                        </button>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                        <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">Téléphone</h3>
                        <p className="text-white/70">06 12 34 56 78</p>
                        <a 
                          href="tel:+33612345678" 
                          className="text-gold hover:text-gold-light transition-colors inline-block mt-2"
                        >
                          Nous appeler
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                        <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">Email</h3>
                        <p className="text-white/70">contact@jsbarber.fr</p>
                        <a 
                          href="mailto:contact@jsbarber.fr" 
                          className="text-gold hover:text-gold-light transition-colors inline-block mt-2"
                        >
                          Nous écrire
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Horaires */}
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-xl">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                    <svg className="w-6 h-6 text-gold mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Horaires d'ouverture
                  </h3>
                  <ul className="space-y-2 text-white/70">
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
                  <div className="mt-6">
                    <Link 
                      href="/reservation" 
                      className="inline-flex items-center gap-2 bg-gold hover:bg-gold/80 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                    >
                      <span>PRENDRE RENDEZ-VOUS</span>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
                
                {/* Social Media */}
                <div className="mt-8">
                  <h3 className="text-xl font-bold text-white mb-4">Suivez-nous</h3>
                  <div className="flex space-x-4">
                    <a 
                      href="https://www.instagram.com/jsbarber_cugnaux" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-gold transition-colors"
                      aria-label="Instagram"
                    >
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </a>
                    <a 
                      href="https://www.facebook.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-gold transition-colors"
                      aria-label="Facebook"
                    >
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className={`transition-all duration-700 ${animateSection ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                <h2 className="text-3xl font-bold text-white mb-8">Envoyez-nous un <span className="text-gold">message</span></h2>
                
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-xl">
                  {formStatus.submitted ? (
                    <div className={`p-4 rounded-lg ${formStatus.success ? 'bg-green-500/20 text-green-200' : 'bg-red-500/20 text-red-200'}`}>
                      <p className="flex items-center">
                        {formStatus.success ? (
                          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        ) : (
                          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        )}
                        {formStatus.message}
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-white mb-2">Nom complet</label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-gold"
                            placeholder="Votre nom"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-white mb-2">Email</label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-gold"
                            placeholder="Votre email"
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="phone" className="block text-white mb-2">Téléphone</label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-gold"
                            placeholder="Votre numéro"
                          />
                        </div>
                        <div>
                          <label htmlFor="subject" className="block text-white mb-2">Sujet</label>
                          <select
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            required
                            className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-gold"
                          >
                            <option value="" disabled>Sélectionnez un sujet</option>
                            <option value="information">Demande d'information</option>
                            <option value="reservation">Question sur les réservations</option>
                            <option value="service">Question sur les services</option>
                            <option value="autre">Autre</option>
                          </select>
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-white mb-2">Message</label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={6}
                          className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-gold"
                          placeholder="Votre message"
                        ></textarea>
                      </div>
                      
                      <div>
                        <button 
                          type="submit" 
                          className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold/80 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg w-full md:w-auto"
                        >
                          <span>ENVOYER LE MESSAGE</span>
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
            
            {/* Google Maps */}
            {showMap && (
              <div className={`mt-12 rounded-xl overflow-hidden h-96 w-full shadow-xl transition-all duration-500 ${animateSection ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
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
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-b from-black to-gray-dark relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-20">
            <div className="absolute top-0 left-0 w-96 h-96 bg-gold opacity-10 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold opacity-10 rounded-full blur-3xl translate-y-1/2 translate-x-1/2"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h2 className={`text-3xl md:text-4xl font-bold text-white mb-6 transition-all duration-700 ${animateSection ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Prêt à vivre l'expérience <span className="text-gold">JS Barber</span> ?
            </h2>
            <p className={`text-white/80 max-w-2xl mx-auto text-lg mb-8 transition-all duration-700 delay-100 ${animateSection ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Réservez dès maintenant votre rendez-vous et laissez nos experts s'occuper de votre style
            </p>
            <div className={`transition-all duration-700 delay-200 ${animateSection ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Link 
                href="/reservation" 
                className="inline-flex items-center gap-2 bg-gold hover:bg-gold/80 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                <span>PRENDRE RENDEZ-VOUS</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
