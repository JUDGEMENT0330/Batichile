import React from 'react';
import { MANIFESTO } from '../constants';

export const Manifesto: React.FC = () => {
  return (
    <section className="py-20 bg-bat-white relative border-t-8 border-black overflow-hidden">
      {/* Background Grunge */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/dirty-old-shirt.png')]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          
          {/* Acrostic */}
          <div className="w-full md:w-1/2">
            <div className="bg-black p-8 transform -rotate-1 shadow-comic-red border-4 border-bat-red">
              <h2 className="text-4xl md:text-5xl text-bat-white mb-6 comic-font text-center underline decoration-bat-red">
                CÓDIGO DEL HÉROE
              </h2>
              <ul className="space-y-1">
                {MANIFESTO.map((item, index) => (
                  <li key={index} className="flex items-baseline">
                    <span className="text-bat-red font-black text-3xl w-10 font-serif">{item.letter}</span>
                    <span className="text-bat-white text-xl font-bold tracking-widest uppercase">{item.word}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Philosophy */}
          <div className="w-full md:w-1/2 space-y-6">
            <div className="relative">
               <div className="absolute -top-10 -left-10 text-9xl text-gray-200 font-black z-0 opacity-50">?</div>
               <h2 className="relative z-10 text-5xl md:text-6xl text-bat-black comic-font mb-4">
                 LA ESENCIA
               </h2>
            </div>
            <p className="text-xl md:text-2xl font-bold text-bat-gray leading-relaxed border-l-8 border-bat-yellow pl-6">
              "BATICHILE no es solo una salsa, es una señal en el cielo para los amantes del picante."
            </p>
            <p className="text-lg text-gray-700">
              Nacimos de la oscuridad para traer justicia al paladar aburrido. Somos la línea delgada entre el placer y el dolor.
              <br /><br />
              <strong>No salvamos ciudadanos del crimen, salvamos comidas de la insipidez.</strong>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};