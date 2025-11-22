export enum SpiceLevel {
  Low = 'Baja',
  Medium = 'Media',
  High = 'Alta',
  Extreme = 'Extrema'
}

export interface Product {
  id: string;
  name: string;
  level: SpiceLevel;
  description: string;
  color: string;
  textColor: string;
  titleColor: string;
  characterName: string;
  price: number;
  characterImage: string; // Solo mantenemos la imagen del personaje
}

export interface ComicPanelProps {
  title: string;
  text: string;
  image?: string;
  reverse?: boolean;
  rotation?: number;
}
