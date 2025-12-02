import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Amenities'; // Note: This file exports Features now
import Process from './components/Process';
import Portfolio from './components/FloorPlans'; // Note: This file exports Portfolio now
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import ChatWidget from './components/ChatWidget';

function App() {
  return (
    <div className="min-h-screen font-sans text-gray-800">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Features />
        <Process />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>
      <ChatWidget />
    </div>
  );
}

export default App;
