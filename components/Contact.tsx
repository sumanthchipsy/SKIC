import React from 'react';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone } from 'lucide-react';
import Logo from './Logo';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="relative bg-white">
      {/* CTA Section Parallax */}
      <div className="relative h-[400px] flex items-center">
         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1540932239986-30128078f3c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-fixed bg-center">
            <div className="absolute inset-0 bg-black/50"></div>
         </div>
         <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-2xl">
               <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
                 Let's get together and create your dream home.
               </h2>
               <p className="text-gray-200 text-lg mb-8 font-light">
                 From first sketch to final styling, we're with you at every step. Bringing your vision to life with care, creativity, and precision.
               </p>
               <button className="bg-primary hover:bg-primary-dark text-white font-bold py-4 px-10 rounded shadow-xl transition-all hover:-translate-y-1 text-sm uppercase tracking-wider">
                 Contact Us
               </button>
            </div>
         </div>
      </div>

      {/* Footer Content */}
      <div className="bg-[#f9fafb] pt-20 pb-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            
            {/* Brand */}
            <div className="col-span-1 md:col-span-1">
               <div className="mb-6">
                 <Logo className="items-start" />
               </div>
               <p className="text-gray-500 text-sm leading-relaxed mb-6">
                 First Floor, Sapthagiri Layout, Kodigehalli Main Road, Seegehalli, Virgonagar, Post, Krishnarajapuram, Bengaluru, Karnataka 560049
               </p>
               <div className="flex space-x-3">
                 {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                   <a key={i} href="#" className="w-8 h-8 bg-primary/10 rounded flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                     <Icon size={16} />
                   </a>
                 ))}
               </div>
            </div>

            {/* Company Links */}
            <div className="md:pl-10">
              <h4 className="text-primary font-bold text-lg mb-6">Company</h4>
              <ul className="space-y-3 text-gray-600 text-sm font-medium">
                <li><a href="#about" className="hover:text-primary transition">About Us</a></li>
                <li><a href="#process" className="hover:text-primary transition">How It Works</a></li>
                <li><a href="#portfolio" className="hover:text-primary transition">Portfolio</a></li>
                <li><a href="#contact" className="hover:text-primary transition">Contact Us</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-primary font-bold text-lg mb-6">Get in touch</h4>
              <ul className="space-y-4 text-gray-600 text-sm">
                <li className="flex items-center space-x-3">
                   <Phone size={16} className="text-primary flex-shrink-0" />
                   <span>+91 81233 59279</span>
                </li>
                <li className="flex items-center space-x-3">
                   <Phone size={16} className="text-primary flex-shrink-0" />
                   <span>+91 89708 91997</span>
                </li>
                <li className="flex items-center space-x-3">
                   <Mail size={16} className="text-primary flex-shrink-0" />
                   <span>contact@skicprojects.com</span>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-primary font-bold text-lg mb-6">Newsletter</h4>
              <p className="text-gray-600 text-sm mb-4">Signup our newsletter to get update information, news, insight or promotions.</p>
              <div className="space-y-3">
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded focus:outline-none focus:border-primary text-sm"
                />
                <button className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 rounded transition-colors flex items-center justify-center space-x-2 text-sm">
                  <Mail size={16} />
                  <span>Sign Up</span>
                </button>
              </div>
            </div>
          </div>
        </div>
          
        <div className="bg-primary text-white text-center py-4">
            <p className="text-xs font-medium tracking-wide">Designed and Developed by UB Sumanth</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;