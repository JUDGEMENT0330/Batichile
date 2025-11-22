
import React from 'react';
import { PRODUCTS } from '../constants';
import { ComicButton } from './ComicButton';

export const Products: React.FC = () => {
  // Función para manejar errores de carga de imagen
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.style.display = 'none'; // Ocultar imagen rota
    target.parentElement?.classList.add('bg-red-100', 'border-2', 'border-red-500', 'border-dashed');
    
    // Crear un elemento de texto para avisar
    const span = document.createElement('span');
    span.innerText = 'FALTA IMAGEN\n(Revisar /public/assets/)';
    span.className = 'text-xs text-red-600 font-bold text-center p-2 block';
    target.parentElement?.appendChild(span);
  };

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
              className="group relative bg-white border-4 border-black p-4 flex flex-col h-full transition-transform hover:-translate-y-2 hover:shadow-comic-yellow duration-300 overflow-visible"
            >
              {/* Header Tag - Spice Level */}
              <div className={`absolute -top-5 left-1/2 -translate-x-1/2 px-4 py-1 border-2 border-black font-bold uppercase tracking-wider text-sm ${product.color} ${product.textColor} shadow-[2px_2px_0_#000] z-30 whitespace-nowrap`}>
                Nivel: {product.level}
              </div>

              <div className="mt-8 mb-4 flex-grow text-center flex flex-col items-center">
                 
                 {/* Contenedor de Imagen del Personaje - MAS GRANDE */}
                 <div className="relative w-full h-64 mb-4 flex items-end justify-center">
                    {/* Fondo de impacto detrás del personaje */}
                    <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-48 rounded-full opacity-20 scale-100 group-hover:scale-125 transition-transform duration-500 ${product.color}`}></div>
                    
                    {/* Imagen del personaje */}
                    <div className="relative z-10 w-full h-full flex items-end justify-center group-hover:scale-110 transition-transform duration-300">
                        <img 
                            src={product.characterImage} 
                            alt={product.characterName}
                            onError={handleImageError}
                            className="max-h-full max-w-full object-contain drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)]"
                        />
                    </div>
                    
                    {/* Bocadillo de texto pequeño estilo cómic decorativo */}
                    <div className="absolute right-2 top-10 bg-white border-2 border-black px-2 py-1 text-xs font-bold transform rotate-12 shadow-[2px_2px_0_#000] z-20 animate-bounce">
                        HA-HA!
                    </div>
                 </div>

                 {/* Título del Producto con Borde Estilo Cómic */}
                 <h3 
                   className={`text-4xl lg:text-5xl comic-font mb-1 ${product.titleColor} text-stroke-black`}
                   style={{ 
                     filter: 'drop-shadow(3px 3px 0px rgba(0,0,0,1))' 
                   }}
                 >
                   {product.name}
                 </h3>
                 
                 <p className="text-xs font-bold text-gray-500 uppercase mb-2 tracking-widest">{product.characterName}</p>
                 <p className="text-base leading-snug font-medium text-gray-800 border-t-2 border-dashed border-gray-300 pt-3 pb-2">
                   {product.description}
                 </p>
              </div>

              <div className="mt-auto">
                <div className="flex justify-between items-center mb-3 px-2 bg-gray-100 rounded p-1 border border-gray-200">
                   <span className="text-xs font-bold text-gray-500 uppercase">Cont. Neto 50ml</span>
                   <span className="text-xl font-black font-serif text-bat-black">${product.price}</span>
                </div>
                <ComicButton className="w-full text-sm py-3 tracking-widest" variant={product.id === 'bane-no' ? 'danger' : 'primary'}>
                  AGREGAR AL CARRO
                </ComicButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
