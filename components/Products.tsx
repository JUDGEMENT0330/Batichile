import React from 'react';
import { PRODUCTS } from '../constants';
import { ComicButton } from './ComicButton';

export const Products: React.FC = () => {
  return (
    <section id="productos" className="py-24 bg-bat-black relative">
      <div className="absolute inset-0 bg-halftone opacity-50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block bg-bat-yellow px-4 py-1 text-black font-bold transform -skew-x-12 border-2 border-black mb-4">
            LOS ARCHIVOS SECRETOS
          </span>
          <h2 className="text-6xl md:text-7xl text-bat-white comic-font transform -rotate-2 drop-shadow-[4px_4px_0_#8A0303]">
            ARSENAL DE SABOR
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS.map((product, index) => (
            <div 
              key={product.id}
              className="group flex flex-col h-full"
            >
              {/* COMIC PANEL (VIÑETA) - No bottles, just character */}
              <div className={`relative w-full aspect-square border-4 border-black shadow-comic ${product.color} overflow-hidden mb-4 transition-transform hover:-translate-y-2 duration-300`}>
                
                {/* Corner decoration */}
                <div className="absolute top-0 left-0 w-8 h-8 border-r-2 border-b-2 border-black bg-white z-20"></div>
                
                {/* Spice Level Tag inside panel */}
                <div className="absolute top-2 right-2 bg-black text-white text-xs font-bold px-2 py-1 transform rotate-2 z-20 border border-white">
                   NIVEL: {product.level}
                </div>

                {/* Character Image */}
                <div className="absolute inset-0 flex items-end justify-center p-2">
                    <img 
                        src={product.characterImage} 
                        alt={product.characterName}
                        className="w-full h-full object-contain drop-shadow-[4px_4px_0px_rgba(0,0,0,0.4)] group-hover:scale-110 transition-transform duration-300"
                    />
                </div>

                {/* Comic Action Text/Onomatopoeia */}
                <div className="absolute bottom-2 left-2 bg-white border-2 border-black px-2 py-0.5 text-xs font-black transform -rotate-6 z-20 shadow-[2px_2px_0_#000]">
                    {product.id === 'bane-no' ? '¡CRACK!' : product.id === 'enigma' ? '¿?' : '¡BOOM!'}
                </div>
              </div>

              {/* Information Panel */}
              <div className="bg-white border-4 border-black p-4 flex-grow flex flex-col relative">
                 {/* Title overlapping slightly */}
                 <h3 
                   className={`text-4xl comic-font mb-1 ${product.titleColor} text-stroke-black -mt-6 bg-white inline-block self-start px-2 border-2 border-black transform -rotate-2 shadow-[2px_2px_0_#000] z-30`}
                 >
                   {product.name}
                 </h3>
                 
                 <div className="mt-4 mb-4 flex-grow">
                    <p className="text-xs font-bold text-gray-500 uppercase mb-1 tracking-widest flex items-center gap-2">
                        <span className={`w-3 h-3 rounded-full ${product.color} border border-black`}></span>
                        {product.characterName}
                    </p>
                    <p className="text-base leading-snug font-medium text-gray-900 font-sans">
                    {product.description}
                    </p>
                 </div>

                <div className="flex justify-between items-end gap-4 mt-auto pt-4 border-t-2 border-dashed border-gray-300">
                    <div className="flex flex-col">
                        <span className="text-[10px] font-bold text-gray-500 uppercase">Precio</span>
                        <span className="text-2xl font-black font-serif text-bat-black">${product.price}</span>
                    </div>
                    <ComicButton className="text-xs px-4 py-2" variant={product.id === 'bane-no' ? 'danger' : 'primary'}>
                        COMPRAR
                    </ComicButton>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
