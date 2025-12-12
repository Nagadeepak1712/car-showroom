import React from 'react';
import { motion } from 'framer-motion';
import { IMAGES } from '../utils/images';
import { Shield, Zap, Wind, MicOff } from 'lucide-react';

const FEATURES = [
  {
    icon: <Zap className="w-8 h-8 text-gold-500" />,
    title: "V12 Twin-Turbo",
    desc: "Seamless power delivery that propels you from 0-60 in under 4.5 seconds without spilling a drop of champagne."
  },
  {
    icon: <MicOff className="w-8 h-8 text-gold-500" />,
    title: "Acoustic Sanctuary",
    desc: "Over 100kg of sound-deadening material creates the quietest cabin in the automotive world."
  },
  {
    icon: <Shield className="w-8 h-8 text-gold-500" />,
    title: "Guardian AI",
    desc: "Predictive safety systems scan the road 1000 times per second to ensure your journey is effortless."
  },
  {
    icon: <Wind className="w-8 h-8 text-gold-500" />,
    title: "Magic Carpet Ride",
    desc: "GPS-aided air suspension anticipates corners and bumps, adjusting instantly for zero disturbance."
  }
];

export const TechSection: React.FC = () => {
  const MotionDiv = motion.div as any;

  return (
    <section id="technology" className="py-24 bg-charcoal-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-4">Advanced Engineering</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Where technology serves tranquility.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {FEATURES.map((feature, idx) => (
            <MotionDiv
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-charcoal-800/50 p-8 rounded-sm border border-white/5 hover:border-gold-500/30 transition-colors"
            >
              <div className="mb-6 bg-charcoal-950 w-16 h-16 rounded-full flex items-center justify-center border border-white/10">
                {feature.icon}
              </div>
              <h3 className="text-xl text-white font-serif mb-4">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
            </MotionDiv>
          ))}
        </div>

        {/* Parallax-like Image Strip */}
        <div className="relative h-96 w-full overflow-hidden rounded-sm">
          <img 
            src={IMAGES.tech.engine} 
            alt="Engine Bay" 
            className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity duration-700 hover:scale-105 transform"
          />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <h3 className="text-6xl md:text-8xl font-serif text-white/10 uppercase tracking-widest">Power</h3>
          </div>
        </div>
      </div>
    </section>
  );
};