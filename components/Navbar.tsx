import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, Facebook, Instagram, Youtube } from 'lucide-react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'How It Works', href: '#process' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact Us', href: '#contact' },
  ];

  return (
    <header className="fixed w-full z-50">
      {/* Top Bar */}
      <div className="bg-[#2c2c2c] text-white py-2 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-xs tracking-wide">
          <div className="flex items-center space-x-6">
            <a href="mailto:contact@skicprojects.com" className="flex items-center space-x-2 hover:text-primary transition">
              <Mail size={14} />
              <span>contact@sharadharesidency.com</span>
            </a>
            <a href="tel:+918123359279" className="flex items-center space-x-2 hover:text-primary transition">
              <Phone size={14} />
              <span>+91 81233 59279, +91 89708 91997</span>
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="hover:text-primary"><Facebook size={14} /></a>
            <a href="#" className="hover:text-primary"><Instagram size={14} /></a>
            <a href="#" className="hover:text-primary"><Youtube size={14} /></a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className={`transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4 bg-gradient-to-b from-black/50 to-transparent md:bg-none'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo - Scaled down for Header */}
            <a href="#" className="flex-shrink-0">
              <Logo isLight={!isScrolled} className="transform scale-75 origin-left" />
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium hover:text-primary transition-colors duration-200 ${isScrolled ? 'text-gray-800' : 'text-white'}`}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact"
                className="bg-primary hover:bg-primary-dark text-white text-xs font-bold py-3 px-6 rounded uppercase tracking-wider transition-all transform hover:scale-105 shadow-lg"
              >
                Free Consultation
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`${isScrolled ? 'text-gray-900' : 'text-white'} hover:text-primary focus:outline-none`}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t absolute w-full shadow-xl">
            <div className="px-4 pt-4 pb-6 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-2 text-gray-800 hover:text-primary font-medium border-b border-gray-100"
                >
                  {link.name}
                </a>
              ))}
              <a href="#contact" className="block w-full text-center bg-primary text-white py-3 rounded mt-4 font-bold text-sm uppercase">
                Free Consultation
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;