import React from 'react';
import { motion } from 'framer-motion';

export const History: React.FC = () => {
  return (
    <section id="historia" className="py-20 bg-white relative border-t-8 border-black overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-100 to-transparent opacity-50 pointer-events-none"></div>
      
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16 relative">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl md:text-8xl comic-font text-bat-black text-stroke-white drop-shadow-[6px_6px_0px_#FFD700] transform -rotate-2 z-10 relative inline-block">
              EL ORIGEN
            </h2>
          </motion.div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md h-24 bg-bat-red/10 -skew-x-12 border-b-8 border-bat-red z-0 opacity-0 md:opacity-100"></div>
        </div>

        {/* Comic Page Layout - Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 grid-rows-auto md:grid-rows-[350px_300px_350px] gap-6 max-w-6xl mx-auto bg-bat-black p-2 md:p-6 border-4 border-black shadow-[10px_10px_0_#333]">
          
          {/* PANEL 1: The Problem (Boredom) with Sombra Character */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-4 bg-gray-300 border-4 border-black relative overflow-hidden group min-h-[300px]"
          >
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/concrete-wall.png')] opacity-40"></div>
            
            {/* Narrative Box */}
            <div className="absolute top-4 left-4 bg-bat-yellow border-2 border-black p-3 max-w-[220px] shadow-comic transform -rotate-1 z-30">
              <p className="text-xs font-black uppercase tracking-widest mb-1 text-bat-red">Ciudad Gótica, 2023</p>
              <p className="font-sans text-sm font-bold leading-tight text-black">
                El mundo culinario había caído en la oscuridad. La comida... no tenía alma.
              </p>
            </div>

            {/* Background Text */}
            <div className="absolute inset-0 flex items-center justify-center">
               <span className="text-8xl md:text-9xl font-black text-gray-400 opacity-20 rotate-12">ABURRIDO</span>
            </div>

            {/* Character Interaction */}
            <motion.img 
              src="/assets/personaje-sombra.png" 
              alt="Sombra"
              className="absolute bottom-0 right-0 h-[85%] object-contain filter grayscale contrast-125 z-20"
              whileHover={{ scale: 1.05, filter: 'grayscale(0%)' }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </motion.div>

          {/* PANEL 2: The Villain (Bane-no) */}
          <motion.div 
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-2 bg-bat-red border-4 border-black relative flex items-center justify-center overflow-hidden min-h-[300px]"
          >
             <div className="absolute inset-0 bg-halftone opacity-20"></div>
             
             {/* Character */}
             <motion.img 
               src="/assets/personaje-baneno.png"
               alt="Bane-no"
               className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 h-[90%] object-contain drop-shadow-[0_0_15px_rgba(0,0,0,0.5)]"
               whileInView={{ y: [20, 0] }}
               whileHover={{ scale: 1.1 }}
             />

             <motion.h3 
              className="absolute top-4 text-5xl comic-font text-white text-center transform -rotate-6 leading-none drop-shadow-[4px_4px_0_#000] z-20"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
             >
               ¡SIN<br/>PIEDAD!
             </motion.h3>
             
             <div className="absolute bottom-2 right-2 bg-white border-2 border-black px-2 py-1 text-xs font-bold shadow-sm z-30">
               EL ENEMIGO
             </div>
          </motion.div>

          {/* PANEL 3: The Plan (Enigma) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-2 bg-purple-900 border-4 border-black relative min-h-[250px] overflow-hidden"
          >
             <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-10"></div>
             
             <motion.img 
               src="/assets/personaje-enigma.png"
               className="absolute bottom-0 left-[-20px] w-full h-full object-contain opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-500"
             />

             <div className="absolute top-4 right-4 bg-white p-4 border-2 border-black max-w-[200px] shadow-[6px_6px_0_#000] rounded-tl-xl rounded-br-xl z-20">
               <p className="font-sans text-sm font-bold italic">"¿Cómo crear algo que duela y guste al mismo tiempo?"</p>
             </div>
             
             <div className="absolute bottom-2 left-2 text-bat-green font-mono text-xs opacity-70">
                FORMULA: #X92-B
             </div>
          </motion.div>

          {/* PANEL 4: The Explosion (Vigilante) */}
          <motion.div 
             initial={{ opacity: 0, scale: 0.5 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.4, type: "spring" }}
             className="md:col-span-4 bg-bat-yellow border-4 border-black relative flex items-center justify-center overflow-hidden min-h-[250px] group"
          >
             {/* Dynamic background rays */}
             <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,_#FFD700_0deg,_#FFC000_20deg,_#FFD700_40deg,_#FFC000_60deg,_#FFD700_80deg,_#FFC000_100deg,_#FFD700_120deg,_#FFC000_140deg,_#FFD700_160deg,_#FFC000_180deg,_#FFD700_200deg,_#FFC000_220deg,_#FFD700_240deg,_#FFC000_260deg,_#FFD700_280deg,_#FFC000_300deg,_#FFD700_320deg,_#FFC000_340deg,_#FFD700_360deg)] opacity-50 animate-[spin_20s_linear_infinite]"></div>
             
             {/* Character Jumping Out */}
             <motion.img 
                src="/assets/personaje-vigilante.png"
                alt="Vigilante Action"
                className="absolute h-[110%] w-auto object-contain z-10 transform translate-y-10 group-hover:translate-y-0 transition-transform duration-300"
                style={{ filter: 'drop-shadow(10px 10px 0px rgba(0,0,0,0.8))' }}
             />

             <motion.div 
               className="relative z-20 text-8xl md:text-[9rem] comic-font text-bat-red text-stroke-white drop-shadow-[8px_8px_0_#000] transform -rotate-12 pointer-events-none"
               animate={{ scale: [1, 1.2, 1], rotate: [-12, -5, -12] }}
               transition={{ duration: 0.4, repeat: Infinity, repeatDelay: 3 }}
             >
               ¡KABOOM!
             </motion.div>
          </motion.div>

          {/* PANEL 5: The Resolution */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="md:col-span-6 bg-blue-900 border-4 border-black relative overflow-hidden min-h-[200px]"
          >
             <div className="absolute inset-0 bg-halftone opacity-10"></div>
             
             <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-8 h-full relative z-10 gap-6">
                <div className="md:w-2/3">
                   <h3 className="text-4xl md:text-5xl comic-font text-bat-yellow mb-4 text-stroke-sm drop-shadow-md">
                     LA JUSTICIA HA LLEGADO
                   </h3>
                   <div className="bg-white border-2 border-black p-6 shadow-[8px_8px_0_#000] transform skew-x-[-2deg]">
                      <p className="font-sans text-lg md:text-xl font-medium text-gray-900 skew-x-[2deg]">
                         "De las cenizas del aburrimiento, forjamos <strong>BATICHILE</strong>. La única salsa capaz de defender tu paladar."
                      </p>
                   </div>
                </div>
                
                {/* Heroic Group Shot Placeholder / Icon */}
                <div className="md:w-1/3 flex justify-center">
                   <motion.div 
                     className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-bat-white border-4 border-black flex items-center justify-center shadow-comic-yellow overflow-hidden relative"
                     whileHover={{ rotate: 360 }}
                     transition={{ duration: 0.8 }}
                   >
                      <img src="/assets/personaje-vigilante.png" className="absolute w-full h-full object-cover scale-150 top-4" />
                   </motion.div>
                </div>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
