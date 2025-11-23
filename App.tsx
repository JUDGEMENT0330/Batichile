import React, { useState, useEffect } from 'react';
import { ScrollHero } from './components/ScrollHero';
import { Manifesto } from './components/Manifesto';
import { Products } from './components/Products';
import { History } from './components/History';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { Product, CartItem } from './types';
import { ComicButton } from './components/ComicButton';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Cart Functions
  const addToCart = (product: Product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id: string, delta: number) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        return { ...item, quantity: Math.max(1, item.quantity + delta) };
      }
      return item;
    }));
  };

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  // Detect scroll for header styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-bat-black text-bat-white selection:bg-bat-yellow selection:text-black font-sans">
      
      {/* Sticky Header */}
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/95 border-b-4 border-bat-yellow py-2 shadow-lg backdrop-blur-sm' : 'bg-transparent py-4 md:py-6'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          
          <div className="text-3xl md:text-4xl comic-font text-bat-yellow tracking-wider transform hover:rotate-2 transition-transform cursor-pointer drop-shadow-[2px_2px_0_#fff]">
            BATICHILE
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="font-bold text-lg uppercase hover:text-bat-yellow hover:underline decoration-wavy decoration-bat-red underline-offset-4 transition-all">Inicio</a>
            <a href="#historia" className="font-bold text-lg uppercase hover:text-bat-yellow hover:underline decoration-wavy decoration-bat-red underline-offset-4 transition-all">Historia</a>
            <a href="#productos" className="font-bold text-lg uppercase hover:text-bat-yellow hover:underline decoration-wavy decoration-bat-red underline-offset-4 transition-all">Salsas</a>
            
            {/* Cart Button Comic Style */}
            <div className="relative">
              <ComicButton 
                variant="primary" 
                className="text-sm px-4 py-1 flex items-center gap-2 !border-2"
                onClick={() => setIsCartOpen(true)}
              >
                <ShoppingCart size={18} />
                COMPRAS
              </ComicButton>
              
              {cartCount > 0 && (
                <span className="absolute -top-3 -right-2 bg-bat-red text-white text-xs font-black w-6 h-6 flex items-center justify-center rounded-full border-2 border-white animate-bounce shadow-md z-10">
                  {cartCount}
                </span>
              )}
            </div>
          </nav>

          {/* Mobile Actions */}
          <div className="md:hidden flex items-center gap-4">
            <div className="relative" onClick={() => setIsCartOpen(true)}>
               <ComicButton variant="primary" className="!px-3 !py-1 text-sm flex items-center gap-1">
                 <ShoppingCart size={16} />
                 <span className="text-xs">COMPRAS</span>
               </ComicButton>
               {cartCount > 0 && (
                <span className="absolute -top-2 -right-1 bg-bat-red text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border border-white">
                  {cartCount}
                </span>
              )}
            </div>
            
            <button className="text-bat-yellow drop-shadow-sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-black border-b-4 border-bat-yellow p-8 flex flex-col gap-6 shadow-2xl md:hidden animate-in slide-in-from-top duration-300">
            <a href="#" className="text-3xl comic-font uppercase text-white hover:text-bat-yellow text-center border-b border-gray-800 pb-2" onClick={() => setIsMenuOpen(false)}>Inicio</a>
            <a href="#historia" className="text-3xl comic-font uppercase text-white hover:text-bat-yellow text-center border-b border-gray-800 pb-2" onClick={() => setIsMenuOpen(false)}>Historia</a>
            <a href="#productos" className="text-3xl comic-font uppercase text-white hover:text-bat-yellow text-center border-b border-gray-800 pb-2" onClick={() => setIsMenuOpen(false)}>Salsas</a>
          </div>
        )}
      </header>

      {/* Shopping Cart Drawer */}
      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        cartItems={cartItems}
        onRemove={removeFromCart}
        onUpdateQuantity={updateQuantity}
      />

      <main>
        {/* 
           The Hero section handles the "Advance into the bottle" effect.
           It is tall (300vh) to allow scrolling "through" the animation.
        */}
        <ScrollHero />

        {/* Content sections appear after the user has "passed" the zoom effect */}
        <div className="relative z-40 bg-bat-white">
           {/* Transition Divider */}
           <div className="h-16 md:h-24 bg-bat-black" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 10%)' }}></div>
           
           <Manifesto />
           
           {/* Transition Divider for History */}
           <div className="h-12 md:h-16 bg-white" style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%)' }}></div>
           
           <History />
           
           {/* Transition Divider for Products */}
           <div className="h-16 md:h-24 bg-bat-white" style={{ clipPath: 'polygon(0 0, 100% 100%, 100% 0)' }}></div>
           
           <Products addToCart={addToCart} />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
