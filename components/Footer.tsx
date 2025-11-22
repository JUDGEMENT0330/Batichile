import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-bat-gray border-t-8 border-bat-yellow py-12">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-8 flex justify-center">
          <div className="relative group cursor-pointer">
             <div className="text-5xl comic-font text-bat-white group-hover:text-bat-yellow transition-colors">
               BATICHILE
             </div>
             <div className="h-1 w-full bg-bat-red mt-1 transform scale-x-0 group-hover:scale-x-100 transition-transform"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-left text-gray-400 text-sm mb-12 font-sans">
            <div>
                <h4 className="text-white font-bold uppercase mb-4">Cuartel General</h4>
                <p>La Metrópolis del Sabor</p>
                <p>Callejón del Crimen #1939</p>
                <p>batichile@gotham.sabor</p>
            </div>
            <div>
                <h4 className="text-white font-bold uppercase mb-4">Enlaces Rápidos</h4>
                <ul className="space-y-2">
                    <li><a href="#" className="hover:text-bat-yellow">Manifiesto</a></li>
                    <li><a href="#" className="hover:text-bat-yellow">Productos</a></li>
                    <li><a href="#" className="hover:text-bat-yellow">Contacto</a></li>
                </ul>
            </div>
            <div className="border-2 border-gray-700 p-4 rounded border-dashed">
                <h4 className="text-bat-yellow font-bold uppercase mb-2 flex items-center gap-2">
                    ⚠️ ZONA DE PELIGRO
                </h4>
                <p className="text-xs leading-relaxed">
                    BATICHILE opera bajo la Doctrina de la Parodia y el Homenaje Estético.
                    <strong>Marca original.</strong> No afiliada a DC Comics ni Warner Bros. 
                    Cualquier semejanza con murciélagos millonarios es mera coincidencia paródica.
                </p>
            </div>
        </div>

        <div className="text-gray-600 text-xs pt-8 border-t border-gray-800">
          &copy; {new Date().getFullYear()} BATICHILE S.A. DE C.V. - Louis Houdelot, Gerente.
        </div>
      </div>
    </footer>
  );
};