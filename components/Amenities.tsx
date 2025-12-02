import React from 'react';
import * as LucideIcons from 'lucide-react';
import { FEATURES } from '../constants';

const Features: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-widest text-sm uppercase">Why Choose Us</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mt-3 max-w-3xl mx-auto">
            Inspire your space through art and design.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {FEATURES.map((item) => {
            const IconComponent = (LucideIcons as any)[item.iconName] || LucideIcons.Star;

            return (
              <div 
                key={item.id} 
                className="bg-[#fff5f6] p-10 rounded-lg flex items-start space-x-6 hover:-translate-y-2 transition-transform duration-300 group"
              >
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-sm border border-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <IconComponent size={32} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
