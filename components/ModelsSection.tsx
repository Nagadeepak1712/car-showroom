import React from 'react';
import { motion } from 'framer-motion';
import { IMAGES } from '../utils/images';
import { CarModel } from '../types';
import { LuxuryButton } from './ui/LuxuryButton';
import { ArrowRight } from 'lucide-react';

const MODELS: CarModel[] = [
  {
    id: 'phantom',
    name: 'Imperator',
    tagline: 'The Pinnacle of Presence',
    price: 450000,
    image: IMAGES.models.phantom,
    category: 'Sedan',
    specs: { hp: 563, acceleration: 4.5, topSpeed: 155 }
  },
  {
    id: 'cullinan',
    name: 'Sovereign',
    tagline: 'Dominance, Refined',
    price: 390000,
    image: IMAGES.models.cullinan,
    category: 'SUV',
    specs: { hp: 592, acceleration: 4.8, topSpeed: 155 }
  },
  {
    id: 'spectre',
    name: 'Wraith',
    tagline: 'A Spirit Unbound',
    price: 410000,
    image: IMAGES.models.spectre,
    category: 'Coupe',
    specs: { hp: 624, acceleration: 4.3, topSpeed: 160 }
  },
  {
    id: 'electra',
    name: 'Silence',
    tagline: 'The Future of Quiet',
    price: 520000,
    image: IMAGES.models.electra,
    category: 'Electric',
    specs: { hp: 1020, acceleration: 2.1, topSpeed: 200 }
  }
];

export const ModelsSection: React.FC = () => {
  const MotionH2 = motion.h2 as any;
  const MotionDiv = motion.div as any;

  return (
    <section id="models" className="py-24 bg-charcoal-900 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <MotionH2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-5xl text-white mb-4"
          >
            Our Signature Models
          </MotionH2>
          <div className="h-1 w-24 bg-gold-600 mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {MODELS.map((model, index) => (
            <MotionDiv
              key={model.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative h-[500px] overflow-hidden rounded-sm cursor-pointer"
            >
              {/* Image */}
              <div className="absolute inset-0">
                <img 
                  src={model.image} 
                  alt={model.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-80" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 w-full p-8 md:p-12">
                <div className="mb-2 flex items-center gap-4">
                  <span className="text-gold-400 text-xs uppercase tracking-widest border border-gold-400/30 px-3 py-1 rounded-full backdrop-blur-sm">
                    {model.category}
                  </span>
                </div>
                <h3 className="font-serif text-4xl text-white mb-2">{model.name}</h3>
                <p className="text-gray-300 font-light italic mb-6">{model.tagline}</p>
                
                <div className="flex items-end justify-between border-t border-white/20 pt-6">
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Starting From</p>
                    <p className="text-xl text-white font-medium">${model.price.toLocaleString()}</p>
                  </div>
                  
                  <button className="text-white flex items-center gap-2 group-hover:text-gold-400 transition-colors uppercase text-sm tracking-widest">
                    Discover More <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
};