import type { Product } from '../types';

export const products: Product[] = [
  {
    id: 1,
    title: "iPhone 14 Pro",
    price: 999.99,
    description: "The latest iPhone with Pro camera system and A16 Bionic chip.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400",
    rating: { rate: 4.5, count: 120 }
  },
  {
    id: 2,
    title: "MacBook Air M2",
    price: 1199.99,
    description: "Supercharged by M2 chip. Incredibly thin and light laptop.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400",
    rating: { rate: 4.8, count: 89 }
  },
  {
    id: 3,
    title: "Nike Air Jordan 1",
    price: 170.00,
    description: "Classic basketball shoes with timeless style.",
    category: "shoes",
    image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=400",
    rating: { rate: 4.3, count: 245 }
  },
  {
    id: 4,
    title: "Samsung 4K Smart TV",
    price: 799.99,
    description: "55-inch 4K UHD Smart TV with HDR support.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400",
    rating: { rate: 4.2, count: 156 }
  },
  {
    id: 5,
    title: "Adidas Ultraboost 22",
    price: 190.00,
    description: "Premium running shoes with boost technology.",
    category: "shoes",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
    rating: { rate: 4.4, count: 78 }
  },
  {
    id: 6,
    title: "Sony WH-1000XM5",
    price: 399.99,
    description: "Industry-leading noise canceling wireless headphones.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
    rating: { rate: 4.7, count: 203 }
  },
  {
    id: 7,
    title: "Levi's 501 Original Jeans",
    price: 89.99,
    description: "Classic straight-leg jeans with authentic styling.",
    category: "clothing",
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400",
    rating: { rate: 4.1, count: 312 }
  },
  {
    id: 8,
    title: "Apple Watch Series 8",
    price: 399.00,
    description: "Advanced health and fitness features with sleek design.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1551816230-ef5deaed4a26?w=400",
    rating: { rate: 4.6, count: 167 }
  },
  {
    id: 9,
    title: "Canon EOS R6",
    price: 2499.99,
    description: "Professional mirrorless camera with 4K video recording.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400",
    rating: { rate: 4.8, count: 45 }
  },
  {
    id: 10,
    title: "The North Face Jacket",
    price: 299.99,
    description: "Waterproof and breathable outdoor jacket.",
    category: "clothing",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400",
    rating: { rate: 4.3, count: 134 }
  },
  {
    id: 11,
    title: "Xbox Series X",
    price: 499.99,
    description: "Next-generation gaming console with 4K gaming.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1605901309584-818e25960a8f?w=400",
    rating: { rate: 4.5, count: 289 }
  },
  {
    id: 12,
    title: "Converse Chuck Taylor",
    price: 65.00,
    description: "Classic canvas sneakers with iconic design.",
    category: "shoes",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400",
    rating: { rate: 4.0, count: 456 }
  },
  {
    id: 13,
    title: "Patagonia Fleece",
    price: 179.99,
    description: "Warm and comfortable fleece jacket for outdoor activities.",
    category: "clothing",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400",
    rating: { rate: 4.4, count: 89 }
  },
  {
    id: 14,
    title: "iPad Pro 12.9",
    price: 1099.99,
    description: "Most advanced iPad with M2 chip and Liquid Retina XDR display.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400",
    rating: { rate: 4.7, count: 178 }
  },
  {
    id: 15,
    title: "Vans Old Skool",
    price: 65.00,
    description: "Classic skate shoes with side stripe design.",
    category: "shoes",
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=400",
    rating: { rate: 4.2, count: 234 }
  },
  {
    id: 16,
    title: "PlayStation 5",
    price: 499.99,
    description: "Latest PlayStation console with ray tracing and 3D audio.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=400",
    rating: { rate: 4.6, count: 345 }
  },
  {
    id: 17,
    title: "Tommy Hilfiger Polo",
    price: 79.99,
    description: "Classic polo shirt with signature flag logo.",
    category: "clothing",
    image: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=400",
    rating: { rate: 4.1, count: 167 }
  },
  {
    id: 18,
    title: "AirPods Pro 2",
    price: 249.99,
    description: "Active noise cancellation with personalized spatial audio.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400",
    rating: { rate: 4.5, count: 412 }
  },
  {
    id: 19,
    title: "New Balance 990v5",
    price: 185.00,
    description: "Premium running shoes made in USA with superior comfort.",
    category: "shoes",
    image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=400",
    rating: { rate: 4.3, count: 98 }
  },
  {
    id: 20,
    title: "Ralph Lauren Sweater",
    price: 198.99,
    description: "Luxury wool sweater with classic fit.",
    category: "clothing",
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400",
    rating: { rate: 4.4, count: 76 }
  }
];
