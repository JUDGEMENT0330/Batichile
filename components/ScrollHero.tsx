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

  // Text animations - Note: Opacity fades slower now to stay visible over bottle longer
  const textY = useTransform(scrollYProgress, [0, 0.3], [0, -50]); // Moves up slightly
  const textOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const textScale = useTransform(scrollYProgress, [0, 0.4], [1, 1.2]);

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

        {/* The Bottle - Z-Index 30 (Below Text) */}
        <motion.div 
          style={{ scale, opacity, rotate, y }}
          className="relative z-30 w-64 md:w-80 lg:w-96 aspect-[1/2.5] flex items-center justify-center"
        >
          {/* Bottle Glow Effect */}
          <div className="absolute inset-0 bg-bat-red blur-3xl opacity-30 rounded-full scale-90"></div>
          
          {/* BOTELLA REAL */}
          <div className="relative w-full h-full flex items-center justify-center transform -rotate-3">
             <img 
               src="/assets/botella-batichile.png" 
               alt="Salsa Batichile Hero" 
               className="w-full h-full object-contain drop-shadow-[10px_10px_0_#000]"
             />
          </div>
        </motion.div>

        {/* Main Title & Slogan - Z-Index 50 (ABOVE Bottle) */}
        <motion.div 
          style={{ y: textY, opacity: textOpacity, scale: textScale }}
          className="absolute inset-0 z-50 flex flex-col items-center justify-center pointer-events-none"
        >
          <div className="relative mt-20 md:mt-0 text-center">
            <h1 className="text-8xl md:text-[10rem] leading-none text-bat-yellow drop-shadow-[8px_8px_0_#000] stroke-black transform -rotate-2 mix-blend-normal">
              BATICHILE
            </h1>
            <div className="relative inline-block mt-4 transform rotate-1">
              <div className="absolute inset-0 bg-black transform skew-x-12 border-2 border-bat-yellow shadow-comic"></div>
              <p className="relative z-10 text-2xl md:text-4xl text-bat-white font-bold px-6 py-2">
                "Desde lo más profundo de la baticueva..."
              </p>
            </div>
          </div>
          
          <div className="absolute bottom-10 animate-bounce flex flex-col items-center gap-2">
            <span className="comic-font text-bat-yellow uppercase text-xl text-stroke-sm">Desliza para investigar</span>
            <ChevronDown className="text-bat-yellow w-10 h-10 drop-shadow-md" />
          </div>
        </motion.div>

        {/* Comic overlay elements that appear during zoom */}
        <motion.div 
            className="absolute right-10 top-1/3 z-40 bg-white p-4 border-4 border-black shadow-comic transform rotate-6 max-w-xs"
            style={{ 
                x: useTransform(scrollYProgress, [0.1, 0.4], [500, 0]),
                opacity: useTransform(scrollYProgress, [0.4, 0.6], [1, 0])
            }}
        >
            <h3 className="text-2xl text-black comic-font mb-1">¡ZAS!</h3>
            <p className="text-black font-bold leading-tight">Golpe de sabor directo a tus sentidos.</p>
        </motion.div>

        <motion.div 
            className="absolute left-10 bottom-1/4 z-40 bg-bat-yellow p-4 border-4 border-black shadow-comic transform -rotate-3 max-w-xs"
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
