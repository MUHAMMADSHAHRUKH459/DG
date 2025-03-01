'use client'
import { useState, useEffect } from "react";
import { ShoppingBag, CheckCircle, Eye } from "lucide-react";
import { motion } from "framer-motion";

const products = [
  { name: "White Printed T-Shirt", category: "T-Shirts", image: "/images/s8.png", price: 1399, prompt: "Stay cozy with this premium black hoodie." },
  { name: "Printed Mug", category: "Mugs", image: "/images/pm1.jpg", price: 1800, prompt: "A must-have black top for any occasion." },
  { name: "Drop Black Cat T-Shirt", category: "T-Shirts", image: "/images/ps2.jpg", price: 1399, prompt: "Casual drop t-shirt with a modern twist." },
  { name: "Tokyo Printed Black T-Shirt", category: "T-Shirts", image: "/images/s3.png", price: 1399, prompt: "A timeless jacket for cool weather." },
  { name: "Tokyo Printed Black T-Shirt", category: "Caps", image: "/images/cap1.jpg", price: 700, prompt: "A timeless jacket for cool weather." },
  { name: "Hustle Harder Mug", category: "Mugs", image: "/images/pm3.jpg", price: 2500, prompt: "A timeless jacket for cool weather." },
  { name: "Swag Printed Baggy T-Shirt", category: "T-Shirts", image: "/images/s11.png", price: 1399, prompt: "A timeless jacket for cool weather." },
  { name: "Classy Girl Baggy T-Shirt", category: "T-Shirts", image: "/images/s13.png", price:1399, prompt: "A timeless jacket for cool weather." },
  { name: "Tokyo Printed Black T-Shirt", category: "Caps", image: "/images/cap2.jpg", price: 700, prompt: "A timeless jacket for cool weather." },
  { name: "Money Money Classy  Black T-Shirt", category: "T-Shirts", image: "/images/s15.png", price: 1399, prompt: "A timeless jacket for cool weather." },
  { name: "White Mind T-Shirt", category: "T-Shirts", image: "/images/s17.png", price: 1399, prompt: "A timeless jacket for cool weather." },
  { name: "Classy Color theme T-Shirt", category: "T-Shirts", image: "/images/ps4.jpg", price: 1399, prompt: "A timeless jacket for cool weather." },
  { name: "Tokyo Printed Black T-Shirt", category: "Caps", image: "/images/cap3.jpg", price: 700, prompt: "A timeless jacket for cool weather." },
  { name: "Pink Hearts Cute Mug", category: "Mugs", image: "/images/mug3.jpg", price: 2500, prompt: "A timeless jacket for cool weather." },
  { name: "Spooky Black T-Shirt", category: "T-Shirts", image: "/images/s5.png", price: 1399, prompt: "A timeless jacket for cool weather." },
  { name: "Simple Print White T-Shirt", category: "T-Shirts", image: "/images/slider5.png", price: 1399, prompt: "A timeless jacket for cool weather." },
  { name: "Tokyo Printed Black T-Shirt", category: "Caps", image: "/images/cap4.jpg", price: 700, prompt: "A timeless jacket for cool weather." },
  { name: "Swag PinkPanther T-Shirt", category: "T-Shirts", image: "/images/s16.png", price: 1399, prompt: "A timeless jacket for cool weather." },
  { name: "Bluish Quote White T-Shirt", category: "T-Shirts", image: "/images/s1.png", price:1399, prompt: "A timeless jacket for cool weather." },
  { name: "Black and Blue theme Mug", category: "Mugs", image: "/images/pm4.jpg", price: 2500, prompt: "A timeless jacket for cool weather." },
  { name: "Galaxy Theme Black T-Shirt", category: "T-Shirts", image: "/images/ps1.jpg", price: 1399, prompt: "A timeless jacket for cool weather." },
  { name: "Black Printed Mug", category: "Mugs", image: "/images/pm5.jpg", price: 2500, prompt: "A timeless jacket for cool weather." },
  { name: "Slay Mug", category: "Mugs", image: "/images/pm6.jpg", price: 2500, prompt: "A timeless jacket for cool weather." },
  { name: "Funky Dark Blue T-Shirt", category: "T-Shirts", image: "/images/ps6.jpg", price: 1399, prompt: "A timeless jacket for cool weather." },
  { name: "Blue Theme Mug", category: "Mugs", image: "/images/mug1.jpg", price: 2500, prompt: "A timeless jacket for cool weather." },
  { name: "Butterfly theme Black T-Shirt", category: "T-Shirts", image: "/images/s2.png", price: 1399, prompt: "A timeless jacket for cool weather." },
  { name: "Bows Theme Mug", category: "Mugs", image: "/images/mug2.jpg", price: 2500, prompt: "A timeless jacket for cool weather." },
  { name: "Classic White Printed T-Shirt", category: "T-Shirts", image: "/images/s18.png", price: 1399, prompt: "A timeless jacket for cool weather." },
  { name: "Funcky Bear T-Shirt", category: "T-Shirts", image: "/images/s19.png", price: 1399, prompt: "A timeless jacket for cool weather." },
  { name: "Fairy Pastel Mug", category: "Mugs", image: "/images/mug4.jpg", price: 2500, prompt: "A timeless jacket for cool weather." },
  { name: "Drama Queen Funcky T-Shirt", category: "T-Shirts", image: "/images/s20.png", price:1399, prompt: "A timeless jacket for cool weather." },
  { name: "Classic Rise Grind Shine Mug", category: "Mugs", image: "/images/mug5.jpg", price: 2500, prompt: "A timeless jacket for cool weather." },
  // Add more products here...
];

const sizes = ["S", "M", "L", "XL"];

const ProductCards = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [cart, setCart] = useState<any[]>([]);
  const [addedToCart, setAddedToCart] = useState<number | null>(null);
  const [showPromptIndex, setShowPromptIndex] = useState<number | null>(null);
  const [selectedSizes, setSelectedSizes] = useState<{ [key: number]: string }>({});

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) setCart(JSON.parse(storedCart));
  }, []);

  const handleAddToCart = (product: any, index: number) => {
    const size = selectedSizes[index] || "M";
    const productWithSize = { ...product, size };
    setCart((prev) => [...prev, productWithSize]);
    localStorage.setItem("cart", JSON.stringify([...cart, productWithSize]));
    setAddedToCart(index);

    alert(`${product.name} has been added to your cart!`);
    setTimeout(() => setAddedToCart(null), 2000);
  };

  const handleSizeChange = (index: number, size: string) => {
    setSelectedSizes((prev) => ({ ...prev, [index]: size }));
  };

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#b1d0ff] to-[#001534] px-2 sm:px-4 md:px-6 py-4 md:py-6 relative">
      <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-center text-white mb-4 sm:mb-8">
        SHOP THE BEST
      </h2>

      {/* Category Buttons */}
      <div className="flex justify-start sm:justify-center overflow-x-auto pb-4 mb-6 sm:mb-10 -mx-2 px-2 sm:px-0 sm:overflow-visible sm:space-x-4">
        {["All", "Caps", "T-Shirts", "Mugs", "Deals", "Other"].map((category, index) => (
          <button
            key={index}
            className={`flex-shrink-0 py-1.5 sm:py-2 px-3 sm:px-5 rounded-full font-semibold transition-all duration-300 shadow-md text-[10px] sm:text-xs mr-2 sm:mr-0 ${
              selectedCategory === category
                ? "bg-gray-950 text-white scale-105"
                : "bg-gray-200 text-gray-700 hover:bg-black hover:text-white"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-4 md:gap-6">
        {filteredProducts.map((product, index) => {
          const isDiscounted = product.price === 1399; // Check if the product is discounted
          const originalPrice = 1500; // Original price for discounted products
          const discountPercentage = isDiscounted
            ? Math.round(((originalPrice - product.price) / originalPrice) * 100)
            : 0;

          return (
            <motion.div
              key={index}
              className="bg-white rounded-lg p-2 sm:p-4 shadow-md hover:shadow-lg transition-shadow border border-gray-200"
              whileHover={{ scale: 1.02 }}
            >
              <span className="absolute top-1 left-1 text-[8px] sm:text-xs font-semibold text-gray-600 bg-gray-100 px-1.5 py-0.5 rounded">
                {product.category}
              </span>

              {/* Discount Badge */}
              

              <div className="relative aspect-square w-full mb-2">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover rounded"
                  loading="lazy"
                />
              </div>

              <h3 className="text-xs sm:text-sm font-bold text-gray-900 mb-1 line-clamp-2">{product.name}</h3>

              {/* Price Section */}
              <div className="flex items-center gap-2">
                {isDiscounted ? (
                  <>
                    <p className="text-red-500 text-sm sm:text-base font-medium line-through">
                      PKR {originalPrice.toLocaleString()}
                    </p>
                    <p className="text-gray-700 text-sm sm:text-base font-medium">
                      PKR {product.price.toLocaleString()}
                    </p>
                  </>
                ) : (
                  <p className="text-gray-700 text-sm sm:text-base font-medium">
                    PKR {product.price.toLocaleString()}
                  </p>
                )}
              </div>

              <div className="mb-2">
                <label className="block text-[10px] sm:text-xs font-medium text-gray-700 mb-1">Size:</label>
                <select
                  value={selectedSizes[index] || "M"}
                  onChange={(e) => handleSizeChange(index, e.target.value)}
                  className="w-full border rounded-md p-1 text-[10px] sm:text-xs focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  {sizes.map((size) => (
                    <option key={size} value={size}>
                      {size}
                    </option>
                  ))}
                </select>
              </div>

             

              {showPromptIndex === index && (
                <p className="text-gray-500 text-[10px] sm:text-xs mb-2 border-t pt-2">{product.prompt}</p>
              )}

              <button
                onClick={() => handleAddToCart(product, index)}
                className="w-full py-1.5 sm:py-2 bg-gradient-to-r from-black to-gray-900 text-white font-semibold text-[10px] sm:text-xs rounded-full flex items-center justify-center shadow-md hover:shadow-lg hover:scale-105 transition-all"
              >
                <ShoppingBag className="inline-block w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                Add to Cart
              </button>

              {addedToCart === index && (
                <div className="absolute top-2 right-2 bg-green-500 text-white text-[8px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-lg flex items-center shadow-lg animate-fade">
                  <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                  Added to Cart
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Cart Indicator */}
      {cart.length > 0 && (
        <div className="fixed bottom-4 sm:top-1/2 right-0 sm:transform sm:-translate-y-1/2 bg-blue-500 text-white text-[10px] sm:text-xs p-2 sm:p-3 rounded-l-md shadow-lg z-50">
          <p>{cart.length} Product(s) in Cart</p>
        </div>
      )}
    </div>
  );
};

export default ProductCards;