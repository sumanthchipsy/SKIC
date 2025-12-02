import React from 'react';
import { PROCESS_STEPS } from '../constants';
import { ArrowRight } from 'lucide-react';

const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-[#ffe4e6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-widest text-xs uppercase">How It Works</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mt-4">
            Personalized Interiors, Delivered<br/>Smoothly
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            We make the journey from empty walls to elegant interiors feel simple and exciting. Here's how we work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROCESS_STEPS.map((step) => (
            <div key={step.id} className="relative group overflow-hidden rounded-xl h-[450px] shadow-xl">
              <img 
                src={step.image} 
                alt={step.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              
              {/* Default Overlay (Bottom Gradient) */}
              <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-8 flex flex-col justify-end transition-opacity duration-300 ${step.isHighlighted ? 'opacity-0' : 'opacity-100'}`}>
                <h3 className="text-2xl font-bold text-white mb-2">{step.title}</h3>
              </div>

              {/* Highlighted Overlay (Full Pink) - Always visible for the middle card in screenshot */}
              {step.isHighlighted && (
                <div className="absolute inset-0 bg-primary/90 p-8 flex flex-col justify-center items-center text-center">
                  <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-white/90 mb-8 leading-relaxed">{step.description}</p>
                  <button className="bg-white text-primary px-8 py-3 rounded font-bold hover:bg-gray-100 transition-colors flex items-center space-x-2 shadow-lg">
                    <span>Know More</span>
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Dots indicator */}
        <div className="flex justify-center space-x-2 mt-12">
          <span className="w-2 h-2 rounded-full bg-primary/30 cursor-pointer hover:bg-primary"></span>
          <span className="w-2 h-2 rounded-full bg-primary cursor-pointer"></span>
          <span className="w-2 h-2 rounded-full bg-primary/30 cursor-pointer hover:bg-primary"></span>
        </div>
      </div>
    </section>
  );
};

export default Process;