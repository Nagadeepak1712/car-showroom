
import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b from-charcoal-900 to-black text-white pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="font-serif text-2xl tracking-widest mb-6 text-gold-500">AURELIUS</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              The pinnacle of automotive luxury. Designed in London, crafted for the world.
            </p>
            <div className="flex space-x-4">
              <Instagram className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Facebook className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="uppercase tracking-widest text-xs font-semibold mb-6 text-gray-300">Models</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li className="hover:text-gold-400 cursor-pointer transition-colors">Imperator</li>
              <li className="hover:text-gold-400 cursor-pointer transition-colors">Sovereign</li>
              <li className="hover:text-gold-400 cursor-pointer transition-colors">Wraith</li>
              <li className="hover:text-gold-400 cursor-pointer transition-colors">Silence EV</li>
            </ul>
          </div>

          <div>
            <h4 className="uppercase tracking-widest text-xs font-semibold mb-6 text-gray-300">Ownership</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li className="hover:text-gold-400 cursor-pointer transition-colors">Bespoke</li>
              <li className="hover:text-gold-400 cursor-pointer transition-colors">Service & Maintenance</li>
              <li className="hover:text-gold-400 cursor-pointer transition-colors">Financial Services</li>
              <li className="hover:text-gold-400 cursor-pointer transition-colors">Find a Dealer</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="uppercase tracking-widest text-xs font-semibold mb-6 text-gray-300">Exclusive Updates</h4>
            <p className="text-xs text-gray-500 mb-4">Join our inner circle for private unveilings.</p>
            <div className="flex flex-col space-y-3">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-white/5 border border-white/10 px-4 py-2 text-sm text-white focus:outline-none focus:border-gold-500 transition-colors"
              />
              <button className="bg-gold-600 text-black text-xs font-bold uppercase tracking-widest py-3 hover:bg-gold-500 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
          <p>&copy; 2024 Aurelius Automotive. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span className="cursor-pointer hover:text-gray-400">Privacy Policy</span>
            <span className="cursor-pointer hover:text-gray-400">Terms of Use</span>
            <span className="cursor-pointer hover:text-gray-400">Legal</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
