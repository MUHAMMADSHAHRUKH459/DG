'use client';
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { Eye, ShoppingBag, ChevronRight, ChevronLeft, Star, X } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const products = [
  { name: "Black Hoodie", image: "/images/s1.png", price: 1800, rating: 4, description: "Comfortable and stylish hoodie for everyday wear." },
  { name: "Black Top", image: "/images/s2.png", price: 1800, rating: 4, description: "Simple yet elegant black top for any occasion." },
  { name: "Drop T-Shirt", image: "/images/s3.png", price: 1800, rating: 4, description: "Casual drop t-shirt with a modern twist." },
  { name: "Classic Jacket", image: "/images/s4.png", price: 2500, rating: 5, description: "A timeless classic jacket perfect for cooler weather." },
  { name: "Sporty Hoodie", image: "/images/s5.png", price: 2200, rating: 4, description: "Sporty hoodie for all your fitness and casual needs." },
  { name: "Trendy T-Shirt", image: "/images/s11.png", price: 1600, rating: 4, description: "Trendy and stylish t-shirt for a fashionable look." },
];

const ProductSlider = () => {
  const [viewPromptIndex, setViewPromptIndex] = useState<number | null>(null);

  return (
    <div className="relative w-full max-w-7xl mx-auto p-6">
      <div className="mb-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-gray-100"
        >
          FEATURED PRODUCTS
        </motion.h2>
      </div>

      <Swiper
        modules={[Navigation, EffectFade, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}  // Default for mobile
        navigation={{
          nextEl: ".next-btn",
          prevEl: ".prev-btn",
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 2 },    // Mobile view
          768: { slidesPerView: 2 },    // Tablet view
          1024: { slidesPerView: 3 },   // Desktop view
        }}
        className="px-4"
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <motion.div
              className="group relative  rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500 hover:scale-95 max-w-xs mx-auto border border-neutral-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="relative w-full h-48 mx-auto overflow-hidden flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-cover max-w-full max-h-full rounded-3xl transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <div className="p-4">
                <div className="flex items-center gap-1 mb-2">
                  {Array(product.rating).fill(null).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>

                <h3 className="text-xl font-semibold text-white mb-1">{product.name}</h3>
                <p className="text-gray-100 text-sm font-bold mb-3">PKR {product.price.toLocaleString()}</p>

                <div className="flex gap-2 items-center flex-wrap">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="py-2 px-4 bg-neutral-100 text-neutral-900 font-medium rounded-full hover:bg-neutral-200 transition-all duration-300 w-full sm:w-auto"
                    onClick={() => setViewPromptIndex(viewPromptIndex === index ? null : index)}
                  >
                    View details
                  </motion.button>
                </div>
              </div>

              {/* Details Section */}
              {viewPromptIndex === index && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="absolute inset-x-0 bottom-0 bg-white p-4 rounded-b-xl shadow-lg"
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-bold text-gray-900">{product.name}</h3>
                    <button onClick={() => setViewPromptIndex(null)} className="text-gray-600 hover:text-gray-900">
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                  <p className="text-sm text-gray-700 mt-2">{product.description}</p>
                </motion.div>
              )}
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="prev-btn absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-white/90 backdrop-blur-sm rounded-full shadow-lg text-neutral-800 hover:bg-white transition-all duration-300"
      >
        <ChevronLeft className="w-5 h-5" />
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="next-btn absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-white/90 backdrop-blur-sm rounded-full shadow-lg text-neutral-800 hover:bg-white transition-all duration-300"
      >
        <ChevronRight className="w-5 h-5" />
      </motion.button>
    </div>
  );
};

export default ProductSlider;
