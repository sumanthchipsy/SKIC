import React from 'react';
import { ArrowRight } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Large Background Text */}
      <div className="absolute top-0 left-0 opacity-[0.03] pointer-events-none select-none">
         <h1 className="text-[200px] font-bold font-serif leading-none text-gray-900 ml-10">About</h1>
      </div>
      
      {/* Hanging Lamps Decoration */}
      <div className="absolute top-0 left-20 w-[1px] h-40 bg-gray-400 hidden lg:block">
        <div className="absolute bottom-0 -left-5 w-10 h-12 bg-gray-800 rounded-t-full rounded-b-md shadow-lg"></div>
      </div>
      <div className="absolute top-0 left-40 w-[1px] h-24 bg-gray-400 hidden lg:block">
         <div className="absolute bottom-0 -left-5 w-10 h-12 bg-gray-800 rounded-t-full rounded-b-md shadow-lg"></div>
      </div>
      <div className="absolute top-0 right-20 w-[1px] h-56 bg-gray-400 hidden lg:block">
        <div className="absolute bottom-0 -left-5 w-10 h-12 bg-gray-800 rounded-t-full rounded-b-md shadow-lg"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
          {/* Text Content */}
          <div className="space-y-8 order-2 md:order-1">
            <span className="text-primary font-bold tracking-widest text-xs uppercase">Who We Are</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 leading-tight">
              Crafting Calm, Elegant Interiors Since 2018
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              At the heart of our work is a simple belief — your home should feel just right. Since 2018, we've transformed blank spaces into timeless homes across Whitefield, Bangalore, and beyond.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our designs blend modern sensibilities with deep material knowledge and attention to detail.
            </p>
            
            <button className="bg-primary text-white px-8 py-4 rounded font-bold hover:bg-gray-900 transition-colors duration-300 flex items-center space-x-2 uppercase text-sm tracking-wide shadow-lg">
              <span>Discover more</span>
            </button>
          </div>

          {/* Image Collage - Matching Screenshot Layout */}
          <div className="relative h-[600px] order-1 md:order-2">
             {/* Image 1: Dining (Top Left) */}
             <div className="absolute top-0 left-0 w-[55%] h-[45%] rounded-xl overflow-hidden shadow-2xl z-20">
               <img 
                src="https://images.unsplash.com/photo-1617806118233-18e1de247200?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Dining Area" 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" 
               />
             </div>

             {/* Image 2: Archway/Corridor (Right Side Tall) */}
             <div className="absolute top-10 right-0 w-[40%] h-[80%] rounded-xl overflow-hidden shadow-2xl z-10">
                <img 
                  src="https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Corridor" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" 
                />
             </div>

             {/* Image 3: Living Area (Bottom Left) */}
             <div className="absolute bottom-0 left-[10%] w-[50%] h-[40%] rounded-xl overflow-hidden shadow-2xl z-30 border-4 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1615873968403-89e068629265?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Living Area" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" 
                />
             </div>
          </div>
        </div>

        {/* Stats Section - Matching Screenshot Typography */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center border-t border-gray-100 pt-16 text-center">
          <div className="space-y-2">
            <h3 className="text-5xl md:text-6xl font-bold text-primary">100+</h3>
            <p className="text-gray-900 font-bold text-lg">Homes Transformed.</p>
            <p className="text-gray-500 text-sm max-w-xs mx-auto">Across Bangalore - from cozy apartments to spacious villas.</p>
          </div>
          
          <div className="relative py-6">
             <div className="flex justify-center items-center relative">
                <span className="text-8xl md:text-9xl font-bold text-transparent opacity-10 absolute" style={{ WebkitTextStroke: '2px #fd3d57' }}>07</span>
                <span className="text-6xl md:text-7xl font-bold text-primary relative z-10">07</span>
             </div>
             <p className="text-gray-900 font-bold text-sm uppercase tracking-widest mt-2">Years of Experience</p>
          </div>

          <div className="space-y-2">
            <h3 className="text-5xl md:text-6xl font-bold text-primary">95%</h3>
            <p className="text-gray-900 font-bold text-lg">Happy Clients.</p>
            <p className="text-gray-500 text-sm max-w-xs mx-auto">We ensure a smooth, organized process that lets you relax.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;