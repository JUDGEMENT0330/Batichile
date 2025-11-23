import React from 'react';
import { X, Trash2, Plus, Minus } from 'lucide-react';
import { CartItem } from '../types';
import { ComicButton } from './ComicButton';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onRemove: (id: string) => void;
  onUpdateQuantity: (id: string, delta: number) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({ 
  isOpen, 
  onClose, 
  cartItems, 
  onRemove,
  onUpdateQuantity
}) => {
  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-[60] transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div 
        className={`fixed top-0 right-0 h-full w-full md:w-[450px] bg-bat-gray border-l-8 border-bat-yellow z-[70] transform transition-transform duration-300 shadow-2xl flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Header */}
        <div className="bg-bat-yellow p-6 border-b-4 border-black flex justify-between items-center relative overflow-hidden">
          <div className="absolute inset-0 bg-halftone opacity-20 pointer-events-none"></div>
          <div>
            <h2 className="text-3xl comic-font text-black relative z-10">TU CINTURÓN</h2>
            <p className="text-xs font-bold uppercase tracking-widest text-black/80 relative z-10">Inventario de Misión</p>
          </div>
          <button onClick={onClose} className="bg-black text-white p-2 hover:bg-bat-red transition-colors border-2 border-white relative z-10">
            <X size={24} />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]">
          {cartItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-gray-500 opacity-60">
              <span className="text-6xl mb-4">🕸️</span>
              <p className="comic-font text-2xl">VACÍO...</p>
              <p className="font-sans text-sm">El crimen no espera, equípate.</p>
            </div>
          ) : (
            cartItems.map(item => (
              <div key={item.id} className="bg-white p-3 border-4 border-black shadow-comic flex gap-4 items-center transform hover:scale-[1.02] transition-transform">
                {/* Image Thumb */}
                <div className={`w-20 h-20 ${item.color} border-2 border-black flex items-center justify-center shrink-0 overflow-hidden`}>
                  <img src={item.characterImage} alt={item.name} className="h-full object-contain p-1" />
                </div>

                {/* Info */}
                <div className="flex-grow">
                  <h4 className="comic-font text-xl text-black leading-none">{item.name}</h4>
                  <p className="text-xs text-gray-500 uppercase font-bold mb-2">{item.characterName}</p>
                  
                  <div className="flex justify-between items-end">
                    <div className="flex items-center gap-2 bg-gray-100 border border-black px-1">
                      <button 
                        onClick={() => onUpdateQuantity(item.id, -1)}
                        className="p-1 hover:bg-gray-300 disabled:opacity-50"
                        disabled={item.quantity <= 1}
                      >
                        <Minus size={12} className="text-black" />
                      </button>
                      <span className="font-bold text-black w-4 text-center text-sm">{item.quantity}</span>
                      <button 
                        onClick={() => onUpdateQuantity(item.id, 1)}
                        className="p-1 hover:bg-gray-300"
                      >
                        <Plus size={12} className="text-black" />
                      </button>
                    </div>
                    <span className="font-black text-lg">${item.price * item.quantity}</span>
                  </div>
                </div>

                {/* Remove */}
                <button 
                  onClick={() => onRemove(item.id)}
                  className="text-gray-400 hover:text-bat-red transition-colors self-start"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer / Checkout */}
        <div className="bg-black p-6 border-t-4 border-bat-yellow">
          <div className="flex justify-between items-center mb-4 text-bat-white">
            <span className="uppercase text-sm font-bold tracking-widest text-gray-400">Daño Total</span>
            <span className="text-3xl comic-font text-bat-yellow">${total}</span>
          </div>
          <button 
            className="w-full bg-bat-yellow text-bat-black border-4 border-black px-8 py-4 font-bold text-xl uppercase transform transition-all active:scale-95 active:shadow-none shadow-comic hover:bg-yellow-300 comic-font skew-x-[-6deg]"
            onClick={() => alert('¡Función de pago en construcción por Alfred!')}
            disabled={cartItems.length === 0}
          >
            <span className="block skew-x-[6deg]">INICIAR MISIÓN</span>
          </button>
        </div>
      </div>
    </>
  );
};