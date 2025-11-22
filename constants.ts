import { Product, SpiceLevel } from './types';

// ACTUALIZADO: Ahora las rutas apuntan a tus archivos locales en la carpeta public/assets
// NOTA: Asegúrate de que los archivos .png en esa carpeta no estén vacíos (0 bytes).

export const PRODUCTS: Product[] = [
  {
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
    // Usamos la botella genérica ya que no subiste una específica para cada sabor
    productImage: '/assets/botella-batichile.png', 
    // Ruta actualizada al archivo que subiste
    characterImage: '/assets/personaje-sombra.png', 
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
    productImage: '/assets/botella-batichile.png',
    characterImage: '/assets/personaje-vigilante.png',
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
    productImage: '/assets/botella-batichile.png',
    characterImage: '/assets/personaje-enigma.png',
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
    productImage: '/assets/botella-batichile.png',
    // Nota: Asegúrate que el nombre del archivo coincida (baneno vs bane-no)
    characterImage: '/assets/personaje-baneno.png',
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
