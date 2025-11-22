import { Product, SpiceLevel } from './types';

// USAMOS IMÁGENES PLACEHOLDER PARA QUE LA DEMO SE VEA BIEN DE INMEDIATO
// Cuando tengas tus imágenes reales, sube los archivos a public/assets/ y cambia estas URLs por './assets/nombre-archivo.png'

export const PRODUCTS: Product[] = [
  {
    id: 'sombra',
    name: 'SOMBRA',
    level: SpiceLevel.Low,
    description: 'El inicio del misterio. Un picor que acecha pero no ataca. Ideal para principiantes.',
    color: 'bg-gray-800',
    textColor: 'text-gray-200',
    titleColor: 'text-gray-900',
    characterName: 'El Detective Silencioso',
    price: 150,
    // Placeholder oscuro para Sombra
    productImage: 'https://placehold.co/200x500/1a1a1a/FFFFFF/png?text=BOTELLA+SOMBRA&font=roboto', 
    characterImage: 'https://placehold.co/400x400/333333/FFFFFF/png?text=SILUETA+DETECTIVE', 
  },
  {
    id: 'vigilante',
    name: 'VIGILANTE',
    level: SpiceLevel.Medium,
    description: 'El equilibrio entre la justicia y el caos. Sabor que golpea pero protege el sabor de tu comida.',
    color: 'bg-bat-yellow',
    textColor: 'text-bat-black',
    titleColor: 'text-yellow-400',
    characterName: 'El Guardián Dorado',
    price: 180,
    // Placeholder amarillo para Vigilante
    productImage: 'https://placehold.co/200x500/FFD700/000000/png?text=BOTELLA+VIGILANTE&font=roboto',
    characterImage: 'https://placehold.co/400x400/FFD700/000000/png?text=HEROE+DORADO',
  },
  {
    id: 'enigma',
    name: 'ENIGMA',
    level: SpiceLevel.High,
    description: 'Un acertijo para tu lengua. ¿Es placer o es dolor? Picante complejo y cerebral con toques verdes.',
    color: 'bg-purple-700',
    textColor: 'text-green-400',
    titleColor: 'text-green-500',
    characterName: 'El Acertijo Verde',
    price: 200,
    // Placeholder verde/morado para Enigma
    productImage: 'https://placehold.co/200x500/4ade80/000000/png?text=BOTELLA+ENIGMA&font=roboto',
    characterImage: 'https://placehold.co/400x400/6b21a8/4ade80/png?text=ACERTIJO',
  },
  {
    id: 'bane-no',
    name: 'BANE-NO',
    level: SpiceLevel.Extreme,
    description: 'La fuerza bruta. Te romperá la resistencia. Solo para los valientes que no temen a la oscuridad.',
    color: 'bg-bat-red',
    textColor: 'text-white',
    titleColor: 'text-red-600',
    characterName: 'El Rompedor',
    price: 250,
    // Placeholder rojo intenso para Bane-no
    productImage: 'https://placehold.co/200x500/991b1b/FFFFFF/png?text=BOTELLA+BANE-NO&font=roboto',
    characterImage: 'https://placehold.co/400x400/991b1b/FFFFFF/png?text=ROMPEDOR',
  }
];

export const MANIFESTO = [
  { letter: 'B', word: 'Bravo' },
  { letter: 'A', word: 'Adictivo' },
  { letter: 'T', word: 'Tenaz' },
  { letter: 'I', word: 'Intenso' },
  { letter: 'C', word: 'Caliente' },
  { letter: 'H', word: 'Hirviente' },
  { letter: 'I', word: 'Impresionante' },
  { letter: 'L', word: 'Legendario' },
  { letter: 'E', word: 'Exquisito' },
];
