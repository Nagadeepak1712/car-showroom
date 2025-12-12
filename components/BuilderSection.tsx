
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { LuxuryButton } from './ui/LuxuryButton';
import { Check } from 'lucide-react';

const CONFIG_OPTIONS = {
  models: [
    { id: 'phantom', name: 'Imperator', basePrice: 450000 },
    { id: 'cullinan', name: 'Sovereign', basePrice: 390000 },
    { id: 'spectre', name: 'Wraith', basePrice: 410000 },
  ],
  colors: [
    { id: 'obsidian', name: 'Obsidian Black', price: 0, hex: '#000000' },
    { id: 'arctic', name: 'Arctic White', price: 0, hex: '#F0F0F0' },
    { id: 'midnight', name: 'Midnight Blue', price: 12000, hex: '#191970' },
    { id: 'emerald', name: 'British Racing Green', price: 15000, hex: '#004225' },
    { id: 'gold', name: 'Champagne Gold', price: 25000, hex: '#C5A059' },
  ],
  interiors: [
    { id: 'seashell', name: 'Seashell & Navy', price: 0 },
    { id: 'tan', name: 'Tan & Mocha', price: 5000 },
    { id: 'black', name: 'Black Badge', price: 8000 },
  ],
  packages: [
    { id: 'theatre', name: 'Rear Theatre Config', price: 15000 },
    { id: 'picnic', name: 'Picnic Tables', price: 5000 },
    { id: 'sky', name: 'Starlight Headliner', price: 12000 },
  ]
};

export const BuilderSection: React.FC = () => {
  const [config, setConfig] = useState({
    model: CONFIG_OPTIONS.models[0],
    color: CONFIG_OPTIONS.colors[0],
    interior: CONFIG_OPTIONS.interiors[0],
    packages: [] as string[]
  });

  const togglePackage = (pkgId: string) => {
    setConfig(prev => ({
      ...prev,
      packages: prev.packages.includes(pkgId)
        ? prev.packages.filter(id => id !== pkgId)
        : [...prev.packages, pkgId]
    }));
  };

  const calculateTotal = () => {
    let total = config.model.basePrice + config.color.price + config.interior.price;
    config.packages.forEach(pkgId => {
      const pkg = CONFIG_OPTIONS.packages.find(p => p.id === pkgId);
      if (pkg) total += pkg.price;
    });
    return total;
  };

  return (
    <section id="builder" className="py-24 bg-charcoal-900 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Visualizer (Left) */}
          <div className="lg:w-2/3 sticky top-24 h-fit">
            <h2 className="font-serif text-4xl text-white mb-8">Craft Your Dream Car</h2>
            <div className="relative aspect-[16/9] bg-charcoal-800 rounded-sm overflow-hidden flex items-center justify-center shadow-2xl border border-white/5">
               <div 
                 className="absolute inset-0 opacity-30 transition-colors duration-700"
                 style={{ backgroundColor: config.color.hex }}
               />
               <h3 className="relative z-10 text-white text-lg tracking-widest uppercase">
                  {config.model.name} Visualization
               </h3>
               {/* Note: In a real app, this would swap layered images of the car */}
               <p className="absolute bottom-4 text-gray-400 text-xs">
                 *Visualization is simulated for demo purposes
               </p>
            </div>
            
            <div className="mt-8 flex justify-between items-end">
               <div>
                 <p className="text-gray-400 uppercase tracking-widest text-sm">Estimated Price</p>
                 <p className="text-4xl font-serif text-white mt-2">${calculateTotal().toLocaleString()}</p>
               </div>
               <LuxuryButton>Request Build Slot</LuxuryButton>
            </div>
          </div>

          {/* Controls (Right) */}
          <div className="lg:w-1/3 space-y-10">
            
            {/* Model Selection */}
            <div>
              <h3 className="text-gold-500 text-sm uppercase tracking-widest mb-4">Select Model</h3>
              <div className="grid grid-cols-1 gap-3">
                {CONFIG_OPTIONS.models.map(model => (
                  <button
                    key={model.id}
                    onClick={() => setConfig({...config, model})}
                    className={`text-left p-4 border transition-all ${
                      config.model.id === model.id 
                        ? 'border-gold-500 bg-gold-500/10' 
                        : 'border-white/10 hover:border-white/30'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-white font-serif text-lg">{model.name}</span>
                      <span className="text-gray-400 text-sm">From ${model.basePrice.toLocaleString()}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div>
              <h3 className="text-gold-500 text-sm uppercase tracking-widest mb-4">Exterior Finish</h3>
              <div className="flex flex-wrap gap-3">
                {CONFIG_OPTIONS.colors.map(color => (
                  <button
                    key={color.id}
                    onClick={() => setConfig({...config, color})}
                    className={`w-12 h-12 rounded-full border-2 transition-transform hover:scale-110 ${
                      config.color.id === color.id ? 'border-gold-500' : 'border-transparent'
                    }`}
                    style={{ backgroundColor: color.hex }}
                    title={`${color.name} (+$${color.price})`}
                  />
                ))}
              </div>
              <p className="mt-2 text-white text-sm">{config.color.name} {config.color.price > 0 && `(+${config.color.price.toLocaleString()})`}</p>
            </div>

             {/* Interior Selection */}
             <div>
              <h3 className="text-gold-500 text-sm uppercase tracking-widest mb-4">Interior Theme</h3>
              <div className="grid grid-cols-1 gap-2">
                {CONFIG_OPTIONS.interiors.map(interior => (
                   <button
                   key={interior.id}
                   onClick={() => setConfig({...config, interior})}
                   className={`text-left px-4 py-3 text-sm transition-colors ${
                     config.interior.id === interior.id 
                       ? 'text-gold-400 border-l-2 border-gold-400' 
                       : 'text-gray-400 border-l-2 border-transparent hover:text-white'
                   }`}
                 >
                   {interior.name} {interior.price > 0 && `(+${interior.price.toLocaleString()})`}
                 </button>
                ))}
              </div>
            </div>

            {/* Packages */}
            <div>
              <h3 className="text-gold-500 text-sm uppercase tracking-widest mb-4">Packages</h3>
              <div className="space-y-3">
                {CONFIG_OPTIONS.packages.map(pkg => {
                  const isSelected = config.packages.includes(pkg.id);
                  return (
                    <button
                      key={pkg.id}
                      onClick={() => togglePackage(pkg.id)}
                      className={`w-full flex justify-between items-center p-4 border text-sm transition-all ${
                        isSelected 
                          ? 'border-gold-500 bg-gold-500/5 text-white' 
                          : 'border-white/10 text-gray-400 hover:border-white/30'
                      }`}
                    >
                      <span>{pkg.name}</span>
                      <div className="flex items-center gap-3">
                        <span>+${pkg.price.toLocaleString()}</span>
                        {isSelected && <Check size={16} className="text-gold-500" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
