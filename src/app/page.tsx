import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './sections/HeroSection';
import ServicesSection from './sections/ServicesSection';
import AboutSection from './sections/AboutSection';
import TestimonialsSection from './sections/TestimonialsSection';
import GallerySection from './sections/GallerySection';
import BookingSection from './sections/BookingSection';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <TestimonialsSection />
        <GallerySection />
        <BookingSection />
      </main>
      <Footer />
    </>
  );
}
