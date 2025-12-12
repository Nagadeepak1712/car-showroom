import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IMAGES } from '../utils/images';
import { LuxuryButton } from './ui/LuxuryButton';
import { ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const [index, setIndex] = useState(0);

  const MotionDiv = motion.div as any;

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % IMAGES.hero.length);
    }, 6000); // Change every 6 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      {/* Background Slideshow */}
      <AnimatePresence mode="popLayout">
        <MotionDiv
          key={index}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full"
        >
          <img
            src={IMAGES.hero[index]}
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
          {/* Gradients for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/40 to-black/30" />
        </MotionDiv>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h2 className="text-gold-400 uppercase tracking-[0.4em] text-sm md:text-base mb-6">
            Beyond Excellence
          </h2>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight">
            The Art of <br />
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500">
              Engineering
            </span>
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto mb-10 text-lg font-light leading-relaxed">
            Designed for those who demand perfection in every curve, every stitch, and every mile.
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <LuxuryButton onClick={() => document.getElementById('models')?.scrollIntoView({ behavior: 'smooth' })}>
              Explore Models
            </LuxuryButton>
            <LuxuryButton variant="outline" onClick={() => document.getElementById('builder')?.scrollIntoView({ behavior: 'smooth' })}>
              Build Your Own
            </LuxuryButton>
          </div>
        </MotionDiv>
      </div>

      {/* Scroll Indicator */}
      <MotionDiv 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
      >
        <ChevronDown size={32} />
      </MotionDiv>
    </header>
  );
};