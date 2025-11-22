import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export const ScrollHero: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  
  // Height of the scroll container. 300vh means we have 3 screens worth of scroll to animate.
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  // Animations linked to scroll progress
  const scale = useTransform(scrollYProgress, [0, 0.6, 0.8], [1, 3.5, 15]); // Zoom masivo hacia la botella
  const opacity = useTransform(scrollYProgress, [0.7, 0.9], [1, 0]); // Desvanecer al final
  const rotate = useTransform(scrollYProgress, [0, 0.5], [0, 5]); // Ligera inclinación dinámica
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 50]); // Movimiento vertical sutil
  
  // Background elements moving away
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.2]);

  // Text animations
  const textY = useTransform(scrollYProgress, [0, 0.3], [0, -200]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  // URL DE TU BOTELLA HERO (Principal)
  // ✅ CORREGIDO: Ruta absoluta para Vite
  const HERO_BOTTLE_IMAGE = "/assets/botella-batichile.png";

  // Error handling visual
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    console.error(`Error cargando imagen Hero: ${target.src}`);
    target.style.display = 'none';
    const div = document.createElement('div');
    div.className = 'w-full h-full flex items-center justify-center bg-red-600 text-white font-bold border-4 border-white text-center p-2';
    div.innerHTML = 'ERROR:<br>Imagen no encontrada<br>/assets/botella-batichile.png';
    target.parentElement?.appendChild(div);
  };

  return (
    <div ref={targetRef} className="h-[300vh] relative z-10">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center bg-halftone">
        
        {/* Background "Batcave" Atmosphere */}
        <motion.div 
          style={{ scale: bgScale, opacity: bgOpacity }}
          className="absolute inset-0 w-full h-full z-0 pointer-events-none"
        >
          <div className="absolute top-10 left-10 w-64 h-64 bg-bat-gray rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-bat-red rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          
          {/* Comic action lines */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, #fff 10px, #fff 11px)'
          }}></div>
        </motion.div>

        {/* Main Title - Fades out as we scroll */}
        <motion.div 
          style={{ y: textY, opacity: textOpacity }}
          className="absolute top-20 z-20 text-center w-full px-4"
        >
          <h1 className="text-7xl md:text-9xl text-bat-yellow drop-shadow-[6px_6px_0_#000] stroke-black mb-4 transform -rotate-2">
            BATICHILE
          </h1>
          <p className="text-xl md:text-2xl text-bat-white max-w-2xl mx-auto font-bold bg-black/80 p-4 border-2 border-bat-yellow transform rotate-1">
            "Desde lo más profundo de la baticueva..."
          </p>
          
          <div className="mt-10 animate-bounce flex flex-col items-center gap-2">
            <span className="comic-font text-bat-yellow uppercase">Desliza para investigar</span>
            <ChevronDown className="text-bat-yellow w-8 h-8" />
          </div>
        </motion.div>

        {/* The Bottle - The Star of the Show */}
        <motion.div 
          style={{ scale, opacity, rotate, y }}
          className="relative z-30 w-64 md:w-80 lg:w-96 aspect-[1/2.5] flex items-center justify-center"
        >
          {/* Bottle Glow Effect */}
          <div className="absolute inset-0 bg-bat-red blur-3xl opacity-30 rounded-full scale-90"></div>
          
          {/* IMAGEN REAL DE LA BOTELLA */}
          <div className="w-full h-full relative">
            <img 
                src={HERO_BOTTLE_IMAGE} 
                alt="Botella Batichile Hero" 
                onError={handleImageError}
                className="w-full h-full object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)] relative z-10"
            />
          </div>
          
        </motion.div>

        {/* Comic overlay elements that appear during zoom */}
        <motion.div 
            className="absolute right-10 top-1/3 z-20 bg-white p-4 border-4 border-black shadow-comic transform rotate-6 max-w-xs"
            style={{ 
                x: useTransform(scrollYProgress, [0.1, 0.4], [500, 0]),
                opacity: useTransform(scrollYProgress, [0.4, 0.6], [1, 0])
            }}
        >
            <h3 className="text-2xl text-black comic-font mb-1">¡ZAS!</h3>
            <p className="text-black font-bold leading-tight">Golpe de sabor directo a tus sentidos.</p>
        </motion.div>

        <motion.div 
            className="absolute left-10 bottom-1/4 z-20 bg-bat-yellow p-4 border-4 border-black shadow-comic transform -rotate-3 max-w-xs"
            style={{ 
                x: useTransform(scrollYProgress, [0.2, 0.5], [-500, 0]),
                opacity: useTransform(scrollYProgress, [0.5, 0.7], [1, 0])
            }}
        >
            <h3 className="text-2xl text-black comic-font mb-1">¡POW!</h3>
            <p className="text-black font-bold leading-tight">Sin conservadores. Pura justicia líquida.</p>
        </motion.div>

      </div>
    </div>
  );
};
