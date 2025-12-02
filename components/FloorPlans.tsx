import React from 'react';
import { PORTFOLIO_ITEMS } from '../constants';
import { ArrowRight } from 'lucide-react';

const Portfolio: React.FC = () => {
  // Re-arranging items to match the grid specifically
  // 1. Wide (Top Left)
  // 2. Small (Top Middle)
  // 3. Tall (Right)
  // 4. Small (Bottom Left)
  // 5. Wide (Bottom Middle)
  const [item1, item2, item3, item4, item5] = PORTFOLIO_ITEMS;

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-widest text-xs uppercase">Featured Project</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mt-3">
            Homes That Reflect You
          </h2>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:grid-rows-2 h-auto md:h-[700px]">
          
          {/* 1. Top Left - Wide */}
          <div className="md:col-span-2 md:row-span-1 relative group overflow-hidden rounded-lg bg-gray-200">
            <img src={item1.image} alt={item1.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute bottom-0 left-0 p-6 w-full bg-gradient-to-t from-black/70 to-transparent">
               <p className="text-white/90 text-xs uppercase tracking-wider mb-1">{item1.category}</p>
               <h3 className="text-white text-xl font-bold">{item1.title}</h3>
               <button className="mt-2 bg-white text-primary text-[10px] font-bold px-3 py-1 rounded uppercase opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">View</button>
            </div>
          </div>

          {/* 2. Top Middle - Small */}
          <div className="md:col-span-1 md:row-span-1 relative group overflow-hidden rounded-lg bg-gray-200">
             <img src={item2.image} alt={item2.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
             <div className="absolute bottom-0 left-0 p-6 w-full bg-gradient-to-t from-black/70 to-transparent">
               <p className="text-white/90 text-xs uppercase tracking-wider mb-1">{item2.category}</p>
               <h3 className="text-white text-lg font-bold leading-tight">{item2.title}</h3>
            </div>
          </div>

          {/* 3. Right - Tall (Spans 2 rows) */}
          <div className="md:col-span-1 md:row-span-2 relative group overflow-hidden rounded-lg bg-gray-200">
             <img src={item3.image} alt={item3.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
             <div className="absolute bottom-0 left-0 p-6 w-full bg-gradient-to-t from-black/70 to-transparent">
               <p className="text-white/90 text-xs uppercase tracking-wider mb-1">{item3.category}</p>
               <h3 className="text-white text-xl font-bold">{item3.title}</h3>
            </div>
          </div>

          {/* 4. Bottom Left - Small */}
          <div className="md:col-span-1 md:row-span-1 relative group overflow-hidden rounded-lg bg-gray-200">
             <img src={item4.image} alt={item4.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
             <div className="absolute bottom-0 left-0 p-6 w-full bg-gradient-to-t from-black/70 to-transparent">
               <p className="text-white/90 text-xs uppercase tracking-wider mb-1">{item4.category}</p>
               <h3 className="text-white text-lg font-bold leading-tight">{item4.title}</h3>
            </div>
          </div>

          {/* 5. Bottom Middle - Wide/Standard (Kids Room) */}
          <div className="md:col-span-1 md:row-span-1 relative group overflow-hidden rounded-lg bg-gray-300">
             <img src={item5.image} alt={item5.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="eager" />
             <div className="absolute bottom-0 left-0 p-6 w-full bg-gradient-to-t from-black/70 to-transparent">
               <p className="text-white/90 text-xs uppercase tracking-wider mb-1">{item5.category}</p>
               <h3 className="text-white text-lg font-bold leading-tight">{item5.title}</h3>
            </div>
          </div>

          {/* Call to Action Block */}
          <div className="bg-primary rounded-lg md:col-span-1 md:row-span-1 flex flex-col items-center justify-center p-8 text-center relative overflow-hidden group cursor-pointer hover:bg-primary-dark transition-colors">
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
             <div className="relative z-10">
               <h3 className="text-white text-2xl font-bold mb-4 uppercase">View More</h3>
               <div className="w-12 h-12 rounded-full border-2 border-white text-white flex items-center justify-center mx-auto group-hover:bg-white group-hover:text-primary transition-all duration-300">
                 <ArrowRight size={20} />
               </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Portfolio;