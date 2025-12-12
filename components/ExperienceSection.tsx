import React from 'react';
import { motion } from 'framer-motion';
import { IMAGES } from '../utils/images';

export const ExperienceSection: React.FC = () => {
  const MotionDiv = motion.div as any;

  return (
    <section id="experience" className="py-24 bg-charcoal-950 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Row 1: Text Left, Image Right */}
        <div className="flex flex-col md:flex-row items-center mb-32">
          <MotionDiv 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:w-1/2 md:pr-16 mb-12 md:mb-0"
          >
            <h4 className="text-gold-500 uppercase tracking-widest mb-4 text-sm">The Lifestyle</h4>
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">Handcrafted Interiors</h2>
            <p className="text-gray-400 leading-relaxed mb-8 font-light text-lg">
              Every stitch is placed by hand. Every piece of wood is cured for five years. 
              Inside an Aurelius, silence is golden, and comfort is absolute. We source only 
              the finest Bull leather from the highlands of Europe to ensure a flawless finish.
            </p>
            <ul className="space-y-4 mb-8">
              {['Bespoke Wood Veneers', 'Starlight Headliner', 'Massage & Ventilated Seating'].map((item) => (
                <li key={item} className="flex items-center text-gray-300">
                  <span className="w-1.5 h-1.5 bg-gold-500 rounded-full mr-4" />
                  {item}
                </li>
              ))}
            </ul>
          </MotionDiv>
          <MotionDiv 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gold-900/20 blur-xl rounded-full" />
              <img 
                src={IMAGES.interior[0]} 
                alt="Luxury Interior" 
                className="relative rounded-sm shadow-2xl w-full"
              />
            </div>
          </MotionDiv>
        </div>

        {/* Row 2: Image Left, Text Right */}
        <div className="flex flex-col md:flex-row-reverse items-center">
          <MotionDiv 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:w-1/2 md:pl-16 mb-12 md:mb-0"
          >
            <h4 className="text-gold-500 uppercase tracking-widest mb-4 text-sm">Bespoke Service</h4>
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">Your Vision, Realized</h2>
            <p className="text-gray-400 leading-relaxed mb-8 font-light text-lg">
              No two Aurelius vehicles are alike. Our bespoke department allows you to customize 
              every aspect of your vehicle, from the exterior paint color matching your favorite 
              lipstick or tie, to the embroidery on the headrests.
            </p>
          </MotionDiv>
           <MotionDiv 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <img 
              src={IMAGES.interior[1]} 
              alt="Bespoke Details" 
              className="rounded-sm shadow-2xl w-full"
            />
          </MotionDiv>
        </div>
      </div>
    </section>
  );
};