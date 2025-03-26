// Product types
export type ProductType = 'shirt' | 'mug' | 'custom';

// Color definition with name, hex code, and a corresponding background color for the product preview
export interface ProductColor {
  name: string;
  hex: string;
  background: string;
}

// Product interface
export interface Product {
  id: string;
  type: ProductType;
  name: string;
  description: string;
  basePrice: number;
  image: string;
  previewImage: string;
  colors: ProductColor[];
}

// Sample product data
export const products: Product[] = [
  {
    id: 'shirt-001',
    type: 'shirt',
    name: 'Premium T-Shirt',
    description: 'High-quality cotton t-shirt with a comfortable fit.',
    basePrice: 29.99,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1000',
    previewImage: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1000',
    colors: [
      { name: 'White', hex: '#FFFFFF', background: '#F8F8F8' },
      { name: 'Black', hex: '#000000', background: '#333333' },
      { name: 'Navy', hex: '#0A192F', background: '#162447' },
      { name: 'Gray', hex: '#9CA3AF', background: '#D1D5DB' },
      { name: 'Red', hex: '#EF4444', background: '#FEE2E2' },
    ],
  },
  {
    id: 'mug-001',
    type: 'mug',
    name: 'Ceramic Mug',
    description: 'Durable ceramic mug for your favorite beverages.',
    basePrice: 14.99,
    image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?q=80&w=1000',
    previewImage: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?q=80&w=1000',
    colors: [
      { name: 'White', hex: '#FFFFFF', background: '#F8F8F8' },
      { name: 'Black', hex: '#000000', background: '#333333' },
      { name: 'Blue', hex: '#3B82F6', background: '#DBEAFE' },
      { name: 'Green', hex: '#10B981', background: '#D1FAE5' },
    ],
  },
  {
    id: 'custom-001',
    type: 'custom',
    name: 'Custom Product',
    description: 'Design your own unique item.',
    basePrice: 24.99,
    image: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?q=80&w=1000',
    previewImage: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?q=80&w=1000',
    colors: [
      { name: 'White', hex: '#FFFFFF', background: '#F8F8F8' },
      { name: 'Black', hex: '#000000', background: '#333333' },
      { name: 'Silver', hex: '#CBD5E1', background: '#F1F5F9' },
      { name: 'Gold', hex: '#EAB308', background: '#FEF9C3' },
      { name: 'Rose Gold', hex: '#F472B6', background: '#FCE7F3' },
    ],
  },
];

// Sample AI prompt suggestions
export interface PromptSuggestion {
  id: string;
  title: string;
  description: string;
  prompt: string;
  category: string;
  image: string;
}

export const promptSuggestions: PromptSuggestion[] = [
  {
    id: 'prompt-001',
    title: 'Abstract Waves',
    description: 'Flowing waves of color in an abstract style',
    prompt: 'Abstract flowing waves of color, minimalist design, clean lines',
    category: 'Abstract',
    image: 'https://images.unsplash.com/photo-1541367777708-7905fe3296c0?q=80&w=1000',
  },
  {
    id: 'prompt-002',
    title: 'Geometric Patterns',
    description: 'Modern geometric patterns with vibrant colors',
    prompt: 'Modern geometric patterns, vibrant colors, clean edges, minimal design',
    category: 'Geometric',
    image: 'https://images.unsplash.com/photo-1566241832378-7db528e482a4?q=80&w=1000',
  },
  {
    id: 'prompt-003',
    title: 'Nature Inspired',
    description: 'Organic shapes inspired by nature',
    prompt: 'Organic shapes inspired by leaves and plants, natural colors, soft edges',
    category: 'Nature',
    image: 'https://images.unsplash.com/photo-1503435980610-a51f3ddfee50?q=80&w=1000',
  },
  {
    id: 'prompt-004',
    title: 'Minimal Typography',
    description: 'Clean typography with a minimalist aesthetic',
    prompt: 'Minimalist typography design, sparse composition, elegant fonts, subtle colors',
    category: 'Typography',
    image: 'https://images.unsplash.com/photo-1531594652722-322f69ff1dcd?q=80&w=1000',
  },
  {
    id: 'prompt-005',
    title: 'Vintage Style',
    description: 'Retro-inspired design with a vintage feel',
    prompt: 'Vintage style design, retro colors, aged texture, classic composition',
    category: 'Vintage',
    image: 'https://images.unsplash.com/photo-1517414204284-fb7e98d2e2fb?q=80&w=1000',
  },
  {
    id: 'prompt-006',
    title: 'Futuristic Tech',
    description: 'High-tech designs with a futuristic aesthetic',
    prompt: 'Futuristic tech design, glowing elements, digital aesthetic, sci-fi inspired',
    category: 'Technology',
    image: 'https://images.unsplash.com/photo-1510906594845-bc082582c8cc?q=80&w=1000',
  },
  {
    id: 'prompt-007',
    title: 'Watercolor Art',
    description: 'Soft watercolor style with blended colors',
    prompt: 'Watercolor art style, soft color blending, fluid shapes, artistic texture',
    category: 'Artistic',
    image: 'https://images.unsplash.com/photo-1535673774336-ef95d2851cf3?q=80&w=1000',
  },
  {
    id: 'prompt-008',
    title: 'Minimalist Portrait',
    description: 'Simplified portrait with minimal details',
    prompt: 'Minimalist portrait, simplified features, clean lines, limited color palette',
    category: 'Portrait',
    image: 'https://images.unsplash.com/photo-1576568699714-a3f4950805d5?q=80&w=1000',
  },
];

// Full list of prompts for the Prompts page
export const allPrompts: PromptSuggestion[] = [
  ...promptSuggestions,
  {
    id: 'prompt-009',
    title: 'Japanese Ukiyo-e',
    description: 'Traditional Japanese woodblock print style',
    prompt: 'Traditional Ukiyo-e style, Japanese woodblock print, flowing lines, flat colors',
    category: 'Artistic',
    image: 'https://images.unsplash.com/photo-1534471770828-9f5c58a42208?q=80&w=1000',
  },
  {
    id: 'prompt-010',
    title: 'Pop Art',
    description: 'Bold colors and patterns inspired by pop art',
    prompt: 'Pop art style, bold colors, halftone dots, comic-inspired, high contrast',
    category: 'Artistic',
    image: 'https://images.unsplash.com/photo-1525909002-1b05e0c869d8?q=80&w=1000',
  },
  {
    id: 'prompt-011',
    title: 'Cyberpunk City',
    description: 'Neon-lit futuristic cityscape',
    prompt: 'Cyberpunk cityscape, neon colors, futuristic architecture, rainy night, bright signs',
    category: 'Technology',
    image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=1000',
  },
  {
    id: 'prompt-012',
    title: 'Abstract Portrait',
    description: 'Abstract interpretation of a human face',
    prompt: 'Abstract portrait, fragmented face, cubist style, bold colors, geometric shapes',
    category: 'Abstract',
    image: 'https://images.unsplash.com/photo-1576511489845-aec8551b381d?q=80&w=1000',
  },
  {
    id: 'prompt-013',
    title: 'Botanical Illustration',
    description: 'Detailed illustration of plants and flowers',
    prompt: 'Botanical illustration, detailed plant drawings, scientific accuracy, vintage style',
    category: 'Nature',
    image: 'https://images.unsplash.com/photo-1508885368613-8867e1aabc3e?q=80&w=1000',
  },
  {
    id: 'prompt-014',
    title: 'Cosmic Space',
    description: 'Colorful nebulas and cosmic imagery',
    prompt: 'Cosmic space scene, colorful nebulas, starfields, galaxies, deep space exploration',
    category: 'Abstract',
    image: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=1000',
  },
  {
    id: 'prompt-015',
    title: 'Bauhaus Style',
    description: 'Geometric designs inspired by Bauhaus',
    prompt: 'Bauhaus style, primary colors, geometric shapes, clean lines, modernist design',
    category: 'Geometric',
    image: 'https://images.unsplash.com/photo-1550681260-af9c11224ae7?q=80&w=1000',
  },
  {
    id: 'prompt-016',
    title: 'Glitch Art',
    description: 'Digital distortion and glitch effects',
    prompt: 'Glitch art, digital artifacts, distorted images, electronic aesthetic, RGB splits',
    category: 'Technology',
    image: 'https://images.unsplash.com/photo-1542203931-32ff8d7bec6d?q=80&w=1000',
  },
];
