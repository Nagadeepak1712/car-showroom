import React from 'react';
import { motion } from 'framer-motion';
import { IMAGES } from '../utils/images';

export const LegacySection: React.FC = () => {
  const MotionH2 = motion.h2 as any;
  const MotionP = motion.p as any;

  return (
    <section id="legacy" className="py-24 bg-charcoal-950 relative overflow-hidden">
      <div className="absolute inset-0 w-full h-full opacity-20 pointer-events-none">
        <img 
            src={IMAGES.history}
            alt="Vintage Car" 
            className="w-full h-full object-cover grayscale"
        />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
            <MotionH2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-serif text-5xl md:text-6xl text-white mb-8"
            >
                A Legacy of Excellence
            </MotionH2>
            <MotionP 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-xl text-gray-300 font-light leading-relaxed mb-12"
            >
                Founded in 1912, Aurelius has stood as the paragon of automotive luxury for over a century. 
                What began as a singular vision to build "the best car in the world" has evolved into 
                a global symbol of success, craftsmanship, and timeless elegance.
            </MotionP>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                    { label: "Founded", val: "1912" },
                    { label: "Bespoke Commissions", val: "2,400+" },
                    { label: "Hours per Vehicle", val: "800" },
                    { label: "Countries", val: "42" },
                ].map((stat, i) => (
                    <div key={i} className="border-l border-gold-500/30 pl-6 text-left">
                        <div className="text-3xl font-serif text-gold-400 mb-2">{stat.val}</div>
                        <div className="text-xs uppercase tracking-widest text-gray-500">{stat.label}</div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};