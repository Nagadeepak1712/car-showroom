import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { LuxuryButton } from './ui/LuxuryButton';

const NAV_LINKS = [
  { name: 'Models', href: '#models' },
  { name: 'Experience', href: '#experience' },
  { name: 'Technology', href: '#technology' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Legacy', href: '#legacy' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const MotionDiv = motion.div as any;

  useEffect(() => {
    const handleScroll = () => {
      // Background handling
      setIsScrolled(window.scrollY > 50);

      // Scroll Spy Logic
      let current = '';
      const triggerPoint = window.innerHeight * 0.3; // 30% down the viewport

      for (const link of NAV_LINKS) {
        const id = link.href.substring(1);
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the top of the section has passed the trigger point (is moving up)
          // and the bottom is still below the top of the navbar area (roughly)
          if (rect.top <= triggerPoint && rect.bottom >= 100) {
            current = id;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-charcoal-950/90 py-4 shadow-xl backdrop-blur-md' : 'bg-transparent py-8'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex flex-col items-center group">
          <span className={`font-serif tracking-widest text-2xl font-bold transition-colors ${isScrolled ? 'text-gold-500' : 'text-white'}`}>
            AURELIUS
          </span>
          <span className="text-[0.5rem] uppercase tracking-[0.3em] text-gray-400 group-hover:text-gold-400 transition-colors">
            Automotive
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm uppercase tracking-widest transition-colors relative group ${
                  isActive ? 'text-gold-500' : 'text-gray-300 hover:text-gold-400'
                }`}
              >
                {link.name}
                <span 
                  className={`absolute -bottom-2 left-0 h-[1px] bg-gold-500 transition-all duration-300 ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                ></span>
              </a>
            );
          })}
          <LuxuryButton>Book Test Drive</LuxuryButton>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileOpen(true)}
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <MotionDiv
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 bg-charcoal-950 z-50 flex flex-col items-center justify-center space-y-8"
          >
            <button 
              className="absolute top-8 right-8 text-white/50 hover:text-white"
              onClick={() => setMobileOpen(false)}
            >
              <X size={32} />
            </button>
            
            {NAV_LINKS.map((link) => {
               const isActive = activeSection === link.href.substring(1);
               return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`font-serif text-3xl transition-colors ${
                    isActive ? 'text-gold-500' : 'text-white hover:text-gold-500'
                  }`}
                >
                  {link.name}
                </a>
               );
            })}
            <LuxuryButton onClick={() => setMobileOpen(false)}>Book Test Drive</LuxuryButton>
          </MotionDiv>
        )}
      </AnimatePresence>
    </nav>
  );
};