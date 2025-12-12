
import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ModelsSection } from './components/ModelsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { TechSection } from './components/TechSection';
import { GallerySection } from './components/GallerySection';
import { BuilderSection } from './components/BuilderSection';
import { LegacySection } from './components/LegacySection';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-charcoal-950 min-h-screen text-gray-200 selection:bg-gold-500 selection:text-black">
      <Navbar />
      <Hero />
      <ModelsSection />
      <ExperienceSection />
      <TechSection />
      <GallerySection />
      <BuilderSection />
      <LegacySection />
      <Footer />
    </div>
  );
};

export default App;
