export interface Product {
  id: string;
  name: string;
  category: 'Rings' | 'Necklaces' | 'Earrings' | 'Bangles' | 'Bracelets' | 'Pendants';
  price: number;
  rating: number;
  reviewsCount: number;
  description: string;
  longDescription: string;
  image: string;
  images: string[]; // Gallery images
  isFeatured?: boolean;
  isBestSeller?: boolean;
  isNewArrival?: boolean;
  specifications: {
    metal: string;
    purity: string;
    gemstone: string;
    weight: string;
    certification: string;
  };
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedSize?: string;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
}
