'use client'
import { useState, useEffect } from "react";
import { ShoppingBag, CheckCircle, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Product data
const products = [
  { name: "White Printed T-Shirt", category: "T-Shirts", image: "/images/s8.png", price: 1399,  },
  { name: "Printed Mug", category: "Mugs", image: "/images/pm1.jpg", price: 1800,  },
  { name: "Drop  Cat T-Shirt", category: "T-Shirts", image: "/images/ps2.jpg", price: 1399,  },
  { name: "Tokyo Printed  T-Shirt", category: "T-Shirts", image: "/images/s3.png", price: 1399, },
  { name: "Tokyo Printed  T-Shirt", category: "Caps", image: "/images/cap1.jpg", price: 700,   },
  { name: "Hustle Harder Mug", category: "Mugs", image: "/images/pm3.jpg", price: 2500,  },
  { name: "Swag Baggy T-Shirt", category: "T-Shirts", image: "/images/s11.png", price: 1399,  },
  { name: "Classy Baggy T-Shirt", category: "T-Shirts", image: "/images/s13.png", price:1399,  },
  { name: "Tokyo Black T-Shirt", category: "Caps", image: "/images/cap2.jpg", price: 700,  },
  { name: "Money Classy T-Shirt", category: "T-Shirts", image: "/images/s15.png", price: 1399,  },
  { name: "White Mind T-Shirt", category: "T-Shirts", image: "/images/s17.png", price: 1399,  },
  { name: "Classy Color T-Shirt", category: "T-Shirts", image: "/images/ps4.jpg", price: 1399, },
  { name: "Tokyo Black T-Shirt", category: "Caps", image: "/images/cap3.jpg", price: 700, },
  { name: "Pink Hearts Cute Mug", category: "Mugs", image: "/images/mug3.jpg", price: 2500,  },
  { name: "Spooky Black T-Shirt", category: "T-Shirts", image: "/images/s5.png", price: 1399,  },
  { name: "Simple Print T-Shirt", category: "T-Shirts", image: "/images/slider5.png", price: 1399, },
  { name: "Tokyo Black T-Shirt", category: "Caps", image: "/images/cap4.jpg", price: 700,  },
  { name: "Swag PinkPanther T-Shirt", category: "T-Shirts", image: "/images/s16.png", price: 1399,  },
  { name: "Bluish Quote White T-Shirt", category: "T-Shirts", image: "/images/s1.png", price:1399,  },
  { name: "Black and Blue Mug", category: "Mugs", image: "/images/pm4.jpg", price: 2500,  },
  { name: "Galaxy Theme T-Shirt", category: "T-Shirts", image: "/images/ps1.jpg", price: 1399,},
  { name: "Black Printed Mug", category: "Mugs", image: "/images/pm5.jpg", price: 2500,  },
  { name: "Slay Mug", category: "Mugs", image: "/images/pm6.jpg", price: 2500,  },
  { name: "Funky Dark Blue T-Shirt", category: "T-Shirts", image: "/images/ps6.jpg", price: 1399,  },
  { name: "Blue Theme Mug", category: "Mugs", image: "/images/mug1.jpg", price: 2500,  },
  { name: "Butterfly theme T-Shirt", category: "T-Shirts", image: "/images/s2.png", price: 1399,  },
  { name: "Bows Theme Mug", category: "Mugs", image: "/images/mug2.jpg", price: 2500,  },
  { name: "Classic White T-Shirt", category: "T-Shirts", image: "/images/s18.png", price: 1399,  },
  { name: "Funcky Bear T-Shirt", category: "T-Shirts", image: "/images/s19.png", price: 1399,  },
  { name: "Fairy Pastel Mug", category: "Mugs", image: "/images/mug4.jpg", price: 2500, },
  { name: "Drama Queen T-Shirt", category: "T-Shirts", image: "/images/s20.png", price:1399, },
  { name: "Classic Rise Grind Shine Mug", category: "Mugs", image: "/images/mug5.jpg", price: 2500,  },
  // Add more products here...
];

const sizes = ["S", "M", "L", "XL"];
const categories = ["All", "Caps", "T-Shirts", "Mugs", "Deals"];

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [cart, setCart] = useState<any[]>([]);
  const [addedToCart, setAddedToCart] = useState<number | null>(null);
  const [selectedSizes, setSelectedSizes] = useState<{ [key: number]: string }>({});
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) setCart(JSON.parse(storedCart));
    setPageLoaded(true);
  }, []);

  const handleAddToCart = (product: any, index: number) => {
    const size = selectedSizes[index] || "M";
    const productWithSize = { ...product, size };
    
    const newCart = [...cart, productWithSize];
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
    setAddedToCart(index);

    // Show toast notification
    const toast = document.getElementById("toast");
    if (toast) {
      toast.classList.remove("opacity-0");
      toast.classList.add("opacity-100");
      
      setTimeout(() => {
        toast.classList.remove("opacity-100");
        toast.classList.add("opacity-0");
      }, 2000);
    }

    setTimeout(() => setAddedToCart(null), 2000);
  };

  const handleSizeChange = (index: number, size: string) => {
    setSelectedSizes((prev) => ({ ...prev, [index]: size }));
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const selectCategory = (category: string) => {
    setSelectedCategory(category);
    setIsDropdownOpen(false);
  };

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-300 to-gray-50 px-4 md:px-8 py-12 relative overflow-hidden border border-yellow-900 ">
      {/* Background elegant patterns */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-0 right-0 bg-blue-100/30 w-96 h-96 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 bg-gray-200/40 w-96 h-96 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
      </div>

      {/* Toast notification */}
      <div id="toast" className="fixed top-4 right-4 bg-blue-950/80 backdrop-blur-md text-white px-6 py-3 rounded-lg shadow-xl z-50 opacity-0 transition-opacity duration-300 flex items-center mt-[-80px] ">
        <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
        <span>Added to cart!</span>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto relative z-10"
      >
        <div className="text-center mb-12 mt-[-20px]">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="inline-block bg-blue-950/5 backdrop-blur-sm text-gray-700 text-sm px-4 py-1 rounded-full mb-2 "
          >
            Premium Collection
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-4"
          >
            Shop the Best
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="max-w-2xl mx-auto text-gray-500"
          >
            Discover our curated collection of premium merchandise designed for style and comfort.
          </motion.p>
        </div>

        {/* Category Dropdown */}
        <div className="flex justify-center mb-12">
          <div className="relative w-full max-w-xs">
            <button
              onClick={toggleDropdown}
              className="w-full bg-white border mt-[-30px] border-gray-200 shadow-sm rounded-lg py-3 px-4 flex items-center justify-between text-sm font-medium text-gray-800 hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-200"
            >
              <span>{selectedCategory} Products</span>
              <ChevronDown
                className={`w-4 h-4 text-gray-500 transition-transform ${isDropdownOpen ? "transform rotate-180" : ""}`}
              />
            </button>
            
            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute z-20 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg"
                >
                  <ul className="py-1">
                    {categories.map((category, index) => (
                      <li key={index}>
                        <button
                          onClick={() => selectCategory(category)}
                          className={`w-full text-left px-4 py-2.5 text-sm ${
                            selectedCategory === category
                              ? "bg-gray-100 text-gray-900 font-medium"
                              : "text-gray-700 hover:bg-gray-50"
                          }`}
                        >
                          {category}
                        </button>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 mt-[10-px]">
          {filteredProducts.map((product, index) => {
            const isDiscounted = product.price === 1399;
            const originalPrice = 1500;
            const discountPercentage = isDiscounted
              ? Math.round(((originalPrice - product.price) / originalPrice) * 100)
              : 0;

            return (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * (index % 4), duration: 0.5 }}
                key={index}
                className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 relative overflow-hidden group"
              >
                <div className="absolute top-2 left-2 z-10">
                  <span className="inline-block text-xs font-medium text-gray-600 bg-gray-100/80 backdrop-blur-sm px-2 py-1 rounded-full">
                    {product.category}
                  </span>
                </div>

                {isDiscounted && (
                  <div className="absolute top-2 right-2 z-10">
                    <span className="inline-block text-xs font-medium text-red-600 bg-red-100/80 backdrop-blur-sm px-2 py-1 rounded-full">
                      {discountPercentage}% OFF
                    </span>
                  </div>
                )}

                <div className="relative aspect-square w-full mb-4 overflow-hidden rounded-lg">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <h3 className="text-sm md:text-base font-semibold text-gray-900 mb-2 line-clamp-2">{product.name}</h3>

                {/* Price Section */}
                <div className="flex items-center gap-2 mb-3">
                  {isDiscounted ? (
                    <>
                      <p className="text-red-500 text-sm font-medium line-through">
                        PKR {originalPrice.toLocaleString()}
                      </p>
                      <p className="text-gray-800 text-sm md:text-base font-semibold">
                        PKR {product.price.toLocaleString()}
                      </p>
                    </>
                  ) : (
                    <p className="text-gray-800 text-sm md:text-base font-semibold">
                      PKR {product.price.toLocaleString()}
                    </p>
                  )}
                </div>

                <div className="mb-4">
                  <label className="block text-xs font-medium text-gray-600 mb-1.5">Size:</label>
                  <div className="flex gap-2">
                    {sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => handleSizeChange(index, size)}
                        className={`flex-1 py-1.5 text-xs font-medium rounded-md border transition-all ${
                          selectedSizes[index] === size || (!selectedSizes[index] && size === "M")
                            ? "bg-blue-950 text-white border-gray-900"
                            : "bg-white text-gray-700 border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleAddToCart(product, index)}
                  className="w-full py-2.5 bg-blue-950 text-white text-sm font-semibold rounded-lg flex items-center justify-center shadow-sm hover:shadow-md transition-all"
                >
                  <ShoppingBag className="inline-block w-4 h-4 mr-2" />
                  Add to Cart
                </motion.button>

                {addedToCart === index && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-green-500/90 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-lg flex items-center shadow-lg"
                  >
                    <CheckCircle className="w-3 h-3 mr-1" />
                    Added to Cart
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Empty state when no products match filter */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <h3 className="text-lg font-medium text-gray-700 mb-2">No products found</h3>
            <p className="text-gray-500">Try selecting a different category</p>
          </div>
        )}
      </motion.div>

      {/* Cart Indicator */}
      {pageLoaded && cart.length > 0 && (
        <motion.div
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          className="fixed bottom-4 right-4 bg-black/90 backdrop-blur-md text-white px-4 py-3 rounded-full shadow-xl z-50 flex items-center gap-2"
        >
          <ShoppingBag className="w-4 h-4" />
          <span className="text-sm font-medium">{cart.length} item{cart.length !== 1 ? 's' : ''}</span>
        </motion.div>
      )}
    </div>
  );
};

export default Index;