import React from 'react';
import { Play, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
       {/* Background Text */}
       <div className="absolute top-10 left-1/2 -translate-x-1/2 opacity-5 select-none pointer-events-none w-full text-center">
         <h1 className="text-[150px] font-bold font-serif leading-none text-gray-900">Testimonial</h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <span className="text-primary font-bold tracking-widest text-sm uppercase">Our Client</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mt-3">
            What they say about us.
          </h2>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video group">
             <img 
               src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
               alt="Client Testimonial" 
               className="w-full h-full object-cover"
             />
             <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
               <button className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white border-2 border-white hover:bg-primary hover:border-primary transition-all duration-300 group-hover:scale-110">
                 <Play size={32} fill="currentColor" />
               </button>
             </div>
             
             {/* Text Overlay */}
             <div className="absolute bottom-10 left-10 text-white max-w-md hidden md:block">
               <p className="font-bold text-sm uppercase tracking-wider mb-2 opacity-80">Customers Viewpoint</p>
               <h3 className="text-3xl font-serif font-bold leading-tight">
                 “Creating <span className="text-primary">Calm</span>: Our Serene Dream Home”
               </h3>
               <p className="mt-2 text-sm font-bold flex items-center">
                 A HEARTFELT REVIEW <span className="ml-2 bg-primary text-white text-[10px] px-2 py-1 rounded">WATCH NOW</span>
               </p>
             </div>
          </div>
          
          {/* Controls */}
          <div className="flex justify-center space-x-4 mt-8">
            <button className="w-12 h-12 border-2 border-primary text-primary hover:bg-primary hover:text-white flex items-center justify-center transition-colors">
              <ChevronLeft />
            </button>
            <button className="w-12 h-12 border-2 border-primary text-primary hover:bg-primary hover:text-white flex items-center justify-center transition-colors">
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
      
      {/* Decorative Bottom Wave (CSS Clip path simulation) */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-primary opacity-5 transform skew-y-2 origin-bottom-right"></div>
    </section>
  );
};

export default Testimonials;
