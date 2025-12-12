import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const GALLERY_IMAGES = [
  "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1503376763036-066120622c74?q=80&w=800&auto=format&fit=crop",
];

export const GallerySection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const MotionDiv = motion.div as any;

  return (
    <section id="gallery" className="py-24 bg-charcoal-950">
      <div className="container mx-auto px-6">
        <h2 className="font-serif text-4xl text-white mb-12 text-center">Curated Gallery</h2>
        
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {GALLERY_IMAGES.map((src, idx) => (
            <MotionDiv
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="break-inside-avoid"
            >
              <img
                src={src}
                alt={`Gallery ${idx}`}
                onClick={() => setSelectedImage(src)}
                className="w-full rounded-sm cursor-zoom-in hover:opacity-80 transition-opacity"
              />
            </MotionDiv>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <MotionDiv
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute top-8 right-8 text-white/50 hover:text-white">
              <X size={40} />
            </button>
            <img 
              src={selectedImage} 
              alt="Full screen" 
              className="max-w-full max-h-[90vh] shadow-2xl rounded-sm"
              onClick={(e) => e.stopPropagation()}
            />
          </MotionDiv>
        )}
      </AnimatePresence>
    </section>
  );
};