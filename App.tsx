import React, { useState, useEffect } from 'react';
import { ScrollHero } from './components/ScrollHero';
import { Manifesto } from './components/Manifesto';
import { Products } from './components/Products';
import { Footer } from './components/Footer';
import { ComicButton } from './components/ComicButton';
import { Menu, X } from 'lucide-react';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll for header styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-bat-black text-bat-white selection:bg-bat-yellow selection:text-black">
      
      {/* Sticky Header */}
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 border-b-4 border-bat-yellow py-2 shadow-lg backdrop-blur-sm' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          
          <div className="text-2xl md:text-3xl comic-font text-bat-yellow tracking-wider transform hover:rotate-2 transition-transform cursor-pointer">
            BATICHILE
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="font-bold uppercase hover:text-bat-yellow hover:underline decoration-wavy decoration-bat-red underline-offset-4 transition-all">Inicio</a>
            <a href="#productos" className="font-bold uppercase hover:text-bat-yellow hover:underline decoration-wavy decoration-bat-red underline-offset-4 transition-all">Salsas</a>
            <a href="#" className="font-bold uppercase hover:text-bat-yellow hover:underline decoration-wavy decoration-bat-red underline-offset-4 transition-all">Historia</a>
            <ComicButton className="text-sm px-6 py-2" variant="primary">Comprar Ahora</ComicButton>
          </nav>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-bat-yellow" onClick={() => setIsMenuOpen(!isMenuOpen)}>
             {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-black border-b-4 border-bat-yellow p-8 flex flex-col gap-6 shadow-2xl md:hidden">
            <a href="#" className="text-2xl font-bold uppercase text-white hover:text-bat-yellow" onClick={() => setIsMenuOpen(false)}>Inicio</a>
            <a href="#productos" className="text-2xl font-bold uppercase text-white hover:text-bat-yellow" onClick={() => setIsMenuOpen(false)}>Salsas</a>
            <a href="#" className="text-2xl font-bold uppercase text-white hover:text-bat-yellow" onClick={() => setIsMenuOpen(false)}>Historia</a>
            <ComicButton className="w-full" onClick={() => setIsMenuOpen(false)}>Comprar Ahora</ComicButton>
          </div>
        )}
      </header>

      <main>
        {/* 
           The Hero section handles the "Advance into the bottle" effect.
           It is tall (300vh) to allow scrolling "through" the animation.
        */}
        <ScrollHero />

        {/* Content sections appear after the user has "passed" the zoom effect */}
        <div className="relative z-40 bg-bat-white">
           {/* Transition Divider */}
           <div className="h-24 bg-bat-black" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 10%)' }}></div>
           
           <Manifesto />
           
           {/* Transition Divider */}
           <div className="h-24 bg-bat-white" style={{ clipPath: 'polygon(0 0, 100% 100%, 100% 0)' }}></div>
           
           <Products />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
