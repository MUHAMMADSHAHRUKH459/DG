'use client'
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ProductType, Size, ProductColor, ProductOption } from '../types/product';
import { cn } from '@/lib/utils';
import FuturisticImageGenerator from '../components/image-gen';

const productOptions: ProductOption[] = [
  {
    type: 'shirt',
    name: 'Classic T-Shirt',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Cloud White', value: '#ffffff' },
      { name: 'Midnight Black', value: '#000000' },
      { name: 'Ocean Blue', value: '#0ea5e9' },
      { name: 'Sage Green', value: '#84cc16' },
    ],
    image: '/images/s1.png'
  },
  {
    type: 'cap',
    name: 'Premium Cap',
    sizes: ['S', 'M', 'L'],
    colors: [
      { name: 'Cloud White', value: '#ffffff' },
      { name: 'Midnight Black', value: '#000000' },
      { name: 'Desert Sand', value: '#fde1d3' },
    ],
    image: '/images/cap1.jpg'
  },
  {
    type: 'mug',
    name: 'Ceramic Mug',
    sizes: ['M'],
    colors: [
      { name: 'Cloud White', value: '#ffffff' },
      { name: 'Midnight Black', value: '#000000' },
      { name: 'Soft Pink', value: '#ffdee2' },
    ],
    image: '/images/mug1.png'
  }
];

const ProductCustomizer = () => {
  const [selectedType, setSelectedType] = useState<ProductType | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState<Size | null>(null);
  const [selectedColor, setSelectedColor] = useState<ProductColor | null>(null);

  const selectedProduct = selectedType ? productOptions.find(p => p.type === selectedType) : null;

  return (
    <div className="relative min-h-screen w-full bg-gradient-to-r from-[#4c6489] to-[#001534] text-white overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500 opacity-20 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/3 w-40 h-40 bg-green-500 opacity-15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-purple-500 opacity-20 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 left-1/4 w-32 h-32 bg-red-500 opacity-10 rounded-full blur-2xl"></div>
      </div>

      <div className="relative max-w-4xl mx-auto p-8">
        <div className="space-y-8">
          <section>
            <h3 className="text-sm uppercase tracking-wider text-gray-400 mb-4">Select Product</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {productOptions.map((product) => (
                <motion.div
                  key={product.type}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    setSelectedType(product.type);
                    setSelectedSize(null);
                    setSelectedColor(null);
                  }}
                  className={cn(
                    "cursor-pointer relative overflow-hidden rounded-xl p-6 backdrop-blur-sm transition-all",
                    selectedType === product.type
                      ? "bg-white/90 shadow-lg ring-2 ring-black"
                      : "bg-white/50 hover:bg-white/70"
                  )}
                >
                  <div className="aspect-square mb-4 rounded-lg bg-gray-100 p-2">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <h3 className="font-medium text-black">{product.name}</h3>
                </motion.div>
              ))}
            </div>
          </section>

          {selectedProduct && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-sm uppercase tracking-wider text-gray-400 mb-4">Quantity</h3>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="h-10 w-10 rounded-full bg-gray-800 text-white flex items-center justify-center hover:bg-gray-700 transition-colors"
                  >
                    -
                  </button>
                  <span className="text-lg font-medium w-12 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="h-10 w-10 rounded-full bg-gray-800 text-white flex items-center justify-center hover:bg-gray-700 transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              <div>
                <h3 className="text-sm uppercase tracking-wider text-gray-400 mb-4">Select Size</h3>
                <div className="flex space-x-4">
                  {selectedProduct.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={cn(
                        "px-4 py-2 rounded-lg border-2 transition-all",
                        selectedSize === size ? "bg-gray-800 text-white" : "border-gray-400 text-gray-200"
                      )}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm uppercase tracking-wider text-gray-400 mb-4">Select Color</h3>
                <div className="flex space-x-4">
                  {selectedProduct.colors.map((color) => (
                    <button
                      key={color.value}
                      onClick={() => setSelectedColor(color)}
                      className={cn(
                        "w-10 h-10 rounded-full border-2 transition-all",
                        selectedColor?.value === color.value ? "ring-2 ring-white" : "border-gray-400"
                      )}
                      style={{ backgroundColor: color.value }}
                    ></button>
                  ))}
                </div>
              </div>
            </motion.section>
          )}
        </div>
        <div>
          <FuturisticImageGenerator />
        </div>
      </div>
    </div>
  );
};

export default ProductCustomizer;
