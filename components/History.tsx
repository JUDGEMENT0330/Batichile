import React from 'react';
import { motion } from 'framer-motion';

export const History: React.FC = () => {
  return (
    <section id="historia" className="py-20 bg-white relative border-t-8 border-black">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12 relative">
          <h2 className="text-6xl md:text-8xl comic-font text-black text-stroke-white drop-shadow-[5px_5px_0px_rgba(0,0,0,1)] transform -rotate-2 z-10 relative">
            EL ORIGEN
          </h2>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-24 bg-bat-yellow -skew-x-12 border-4 border-black shadow-comic z-0"></div>
        </div>

        {/* Comic Page Layout */}
        <div className="grid grid-cols-1 md:grid-cols-6 grid-rows-[auto_auto_auto] gap-4 max-w-5xl mx-auto bg-black p-4 border-4 border-black shadow-2xl">
          
          {/* PANEL 1: The Problem */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-4 bg-gray-200 min-h-[300px] border-4 border-black relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-400 opacity-50"></div>
            <div className="absolute top-4 left-4 bg-bat-yellow border-2 border-black p-2 max-w-[200px] shadow-comic transform -rotate-1 z-20">
              <p className="text-xs font-bold uppercase tracking-widest">Ciudad Gótica, 2023</p>
              <p className="font-sans text-sm font-medium leading-tight">La comida había perdido su alma. El mundo estaba sumido en la insipidez...</p>
            </div>
            <div className="flex items-center justify-center h-full">
               <span className="text-9xl opacity-20 font-black grayscale">ABURRIDO</span>
            </div>
          </motion.div>

          {/* PANEL 2: The Villain (Boredom) */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-2 bg-bat-red min-h-[300px] border-4 border-black relative flex items-center justify-center overflow-hidden"
          >
             <div className="absolute inset-0 bg-halftone opacity-30"></div>
             <h3 className="text-5xl comic-font text-white text-center transform rotate-12 leading-none drop-shadow-md">
               ¡SIN<br/>SABOR!
             </h3>
             <div className="absolute bottom-2 right-2 bg-white border-2 border-black px-2 py-1 text-xs font-bold">
               EL ENEMIGO
             </div>
          </motion.div>

          {/* PANEL 3: The Experiment */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-2 bg-bat-black min-h-[250px] border-4 border-black relative"
          >
             <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-20"></div>
             <div className="absolute bottom-4 left-4 bg-white p-3 border-2 border-black max-w-[180px] shadow-[4px_4px_0_#FFF]">
               <p className="font-sans text-sm font-bold">"Necesitamos algo más fuerte. Algo que despierte a los muertos."</p>
             </div>
          </motion.div>

          {/* PANEL 4: The Explosion (Centerpiece) */}
          <motion.div 
             initial={{ opacity: 0, scale: 0.5 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.4, type: "spring" }}
             className="md:col-span-4 bg-bat-yellow min-h-[250px] border-4 border-black relative flex items-center justify-center overflow-hidden"
          >
             <div className="absolute inset-0 animate-pulse bg-bat-yellow"></div>
             {/* Explosion Shape */}
             <div className="relative z-10 text-8xl md:text-9xl comic-font text-bat-red text-stroke-black drop-shadow-[8px_8px_0_#000] transform -rotate-6">
               ¡KABOOM!
             </div>
             <div className="absolute top-2 right-2 bg-white border-2 border-black p-1 text-[10px] font-bold uppercase tracking-widest z-20">
               Laboratorio Subterráneo
             </div>
          </motion.div>

          {/* PANEL 5: The Result */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="md:col-span-6 bg-blue-900 min-h-[200px] border-4 border-black relative overflow-hidden"
          >
             <div className="absolute inset-0 bg-halftone opacity-20"></div>
             <div className="flex flex-col md:flex-row items-center justify-between px-8 py-6 h-full relative z-10">
                <div className="md:w-1/2">
                   <h3 className="text-4xl comic-font text-bat-yellow mb-2">LA JUSTICIA HA LLEGADO</h3>
                   <div className="bg-white border-2 border-black p-4 shadow-comic">
                      <p className="font-sans font-bold text-gray-900">
                         "De las cenizas del aburrimiento, forjamos BATICHILE. No es solo salsa, es una declaración de guerra contra la comida insípida."
                      </p>
                   </div>
                </div>
                <div className="md:w-1/3 flex justify-center mt-4 md:mt-0">
                   <div className="w-24 h-24 rounded-full bg-white border-4 border-black flex items-center justify-center">
                      <span className="text-5xl">🦇</span>
                   </div>
                </div>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};