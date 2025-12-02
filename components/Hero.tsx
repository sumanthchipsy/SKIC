import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { HERO_SLIDES } from '../constants';

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === HERO_SLIDES.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section id="home" className="relative h-[90vh] md:h-screen w-full overflow-hidden">
      {HERO_SLIDES.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black/40" />
          </div>

          <div className="relative z-20 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
            <div className="max-w-2xl pt-20">
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-lg animate-fade-in-up">
                {slide.title}
              </h1>
              <div className="w-20 h-1 bg-primary mb-6"></div>
              <p className="text-lg md:text-xl text-gray-100 mb-10 font-light leading-relaxed max-w-xl">
                {slide.subtitle}
              </p>
              <a 
                href="#contact" 
                className="inline-block bg-primary text-white font-bold py-4 px-10 rounded shadow-lg hover:bg-white hover:text-primary transition-all duration-300 transform hover:-translate-y-1 uppercase tracking-wider text-sm"
              >
                Get Your Free Consultation
              </a>
            </div>
          </div>
        </div>
      ))}

      {/* Slider Controls */}
      <div className="absolute bottom-10 left-4 md:left-auto md:right-auto md:ml-[calc(50vw-640px+2rem)] z-30 flex space-x-4">
        <button
          onClick={prevSlide}
          className="w-12 h-12 border border-white/30 hover:bg-primary hover:border-primary text-white flex items-center justify-center transition-all duration-300"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="w-12 h-12 border border-white/30 hover:bg-primary hover:border-primary text-white flex items-center justify-center transition-all duration-300"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
