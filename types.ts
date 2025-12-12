
export interface CarModel {
  id: string;
  name: string;
  tagline: string;
  price: number;
  image: string;
  category: 'Sedan' | 'SUV' | 'Coupe' | 'Electric';
  specs: {
    hp: number;
    acceleration: number; // 0-60
    topSpeed: number;
  };
}

export interface Review {
  id: number;
  name: string;
  role: string;
  quote: string;
  avatar: string;
}

export interface GalleryItem {
  id: number;
  src: string;
  category: string;
  alt: string;
}

export type BuildConfig = {
  modelId: string;
  color: string;
  wheels: string;
  interior: string;
  packages: string[];
};
