import React from 'react';
import { PRODUCTS } from '../constants';
import { ComicButton } from './ComicButton';
import { Product } from '../types';

interface ProductsProps {
  addToCart: (product: Product) => void;
}

export const Products: React.FC<ProductsProps> = ({ addToCart }) => {
  return (
    <section id="productos" className="py-24 bg-bat-black relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 bg-halftone opacity-30"></div>
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-bat-yellow rounded-full blur-[100px] opacity-20"></div>
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-bat-red rounded-full blur-[100px] opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block bg-bat-yellow px-6 py-2 text-black text-lg font-black transform -skew-x-12 border-4 border-black mb-6 shadow-comic">
            LOS ARCHIVOS SECRETOS
          </span>
          <h2 className="text-6xl md:text-8xl text-bat-white comic-font transform -rotate-2 drop-shadow-[5px_5px_0_#8A0303] text-stroke-sm">
            ARSENAL DE SABOR
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 lg:gap-8">
          {PRODUCTS.map((product, index) => (
            <div 
              key={product.id}
              className="group flex flex-col h-full transform hover:-translate-y-2 transition-transform duration-300"
            >
              {/* COMIC PANEL (VIÑETA) - Character Focus */}
              <div className={`relative w-full aspect-[4/5] md:aspect-square border-4 border-black shadow-comic ${product.color} overflow-hidden mb-0 z-10`}>
                
                {/* Corner decoration */}
                <div className="absolute top-0 left-0 w-8 h-8 border-r-4 border-b-4 border-black bg-white z-20"></div>
                
                {/* Spice Level Tag inside panel - Top Right */}
                <div className="absolute top-3 right-3 bg-black text-white text-xs md:text-sm font-bold px-3 py-1 transform rotate-2 z-20 border-2 border-white shadow-md">
                   NIVEL: {product.level}
                </div>

                {/* Comic Action Text/Onomatopoeia - MOVED TO TOP LEFT to clear character space */}
                <div className="absolute top-2 left-2 bg-white border-2 border-black px-3 py-1 text-sm font-black transform -rotate-6 z-20 shadow-[4px_4px_0_#000]">
                    {product.id === 'bane-no' ? '¡CRACK!' : product.id === 'enigma' ? '¿?' : '¡BOOM!'}
                </div>

                {/* Character Image Container - Full Focus */}
                <div className="absolute inset-0 flex items-end justify-center">
                    <img 
                        src={product.characterImage} 
                        alt={product.characterName}
                        className="h-[95%] w-auto max-w-full object-contain drop-shadow-[8px_8px_0px_rgba(0,0,0,0.3)] group-hover:scale-110 transition-transform duration-300 filter contrast-125"
                    />
                </div>
              </div>

              {/* Information Panel */}
              <div className="bg-white border-x-4 border-b-4 border-black p-5 md:p-6 flex-grow flex flex-col relative shadow-[8px_8px_0_rgba(0,0,0,0.5)]">
                 
                 {/* Title overlapping slightly - Increased Size and Font */}
                 <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-[110%] text-center z-30">
                   <h3 
                     className={`text-4xl md:text-5xl comic-font ${product.titleColor} text-stroke-black bg-white inline-block px-4 py-1 border-4 border-black transform -rotate-1 shadow-[4px_4px_0_#000] whitespace-nowrap`}
                   >
                     {product.name}
                   </h3>
                 </div>
                 
                 <div className="mt-8 md:mt-10 mb-6 flex-grow text-center">
                    <p className="text-xs font-black text-gray-500 uppercase mb-3 tracking-[0.2em] flex items-center justify-center gap-2">
                        <span className={`w-3 h-3 rounded-full ${product.color} border border-black`}></span>
                        {product.characterName}
                        <span className={`w-3 h-3 rounded-full ${product.color} border border-black`}></span>
                    </p>
                    
                    {/* Typography Improvement for Description */}
                    <p className="text-lg md:text-xl leading-relaxed font-medium text-gray-800 font-sans tracking-tight">
                        {product.description}
                    </p>
                 </div>

                <div className="flex flex-col gap-3 mt-auto pt-4 border-t-2 border-dashed border-gray-300">
                    <div className="flex justify-between items-center px-2">
                        <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">Recompensa</span>
                        <span className="text-3xl font-black font-sans text-bat-black drop-shadow-sm">${product.price}</span>
                    </div>
                    
                    <ComicButton 
                      className="w-full py-3 text-lg" 
                      variant={product.id === 'bane-no' ? 'danger' : 'primary'}
                      onClick={() => addToCart(product)}
                    >
                        COMPRAR AHORA
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
