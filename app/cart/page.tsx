'use client';
import { useState, useEffect } from "react";
import { Trash2, Plus, Minus, ShoppingCart } from "lucide-react";

interface CartItem {
  name: string;
  image: string;
  price: number;
  size: string;
  quantity: number;
}

const CartPage = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [discount, setDiscount] = useState(0);
  const [deliveryFee, setDeliveryFee] = useState(200); // Static delivery fee
  const [discountCode, setDiscountCode] = useState("");
  const [isDiscountApplied, setIsDiscountApplied] = useState(false);

  // Form fields for address and contact details
  const [city, setCity] = useState("");
  const [area, setArea] = useState("");
  const [fullAddress, setFullAddress] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      const storedCart = localStorage.getItem("cart");
      if (storedCart) {
        const parsedCart = JSON.parse(storedCart).map((item: CartItem) => ({
          ...item,
          quantity: item.quantity || 1,
        }));
        setCart(parsedCart);
      }
      setLoading(false);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const removeItemFromCart = (index: number) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const updateQuantity = (index: number, increment: boolean) => {
    const updatedCart = [...cart];
    const item = updatedCart[index];
    item.quantity = Math.max(1, item.quantity + (increment ? 1 : -1));
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * (item.quantity || 1), 0);
  };

  const applyDiscount = () => {
    if (isDiscountApplied) return; // Prevent applying discount multiple times
    if (discountCode === "500") {
      setDiscount(500);
      setIsDiscountApplied(true);
    } else if (discountCode === "250") {
      setDiscount(50); // Deduct 50 for discount code 250
      setIsDiscountApplied(true);
    } else {
      alert("Invalid discount code!");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cart-bg">
        <div className="animate-fade-in">
          <ShoppingCart className="w-12 h-12 text-cart-text opacity-20" />
        </div>
      </div>
    );
  }

  const totalPrice = calculateTotal();
  const finalTotal = totalPrice - discount + deliveryFee;

  return (
    <div className="min-h-screen bg-gray-200 px-4 py-8 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">
        <div className="lg:w-2/3 space-y-8">
          <div className="text-center mb-12 animate-slide-up">
            <h1 className="text-4xl font-bold text-gray-800">Your Cart</h1>
          </div>
          {cart.length === 0 ? (
            <div className="text-center py-16 animate-fade-in">
              <ShoppingCart className="w-16 h-16 mx-auto mb-4 text-gray-400" />
              <p className="text-gray-500 font-light text-lg">Your cart is empty</p>
            </div>
          ) : (
            <div className="space-y-4">
              {cart.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-md transition-all hover:shadow-lg"
                >
                  <div className="flex items-center justify-between gap-6">
                    <div className="flex items-center gap-6">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                      <div>
                        <h3 className="font-medium text-gray-800">{item.name}</h3>
                        <p className="text-gray-500 text-sm">Size: {item.size}</p>
                        <div className="flex items-center space-x-3 mt-2">
                          <button
                            onClick={() => updateQuantity(index, false)}
                            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
                          >
                            <Minus className="w-4 h-4 text-gray-700" />
                          </button>
                          <span className="font-medium text-gray-800">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(index, true)}
                            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
                          >
                            <Plus className="w-4 h-4 text-gray-700" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <p className="text-gray-800 font-medium">
                        PKR {(item.price * item.quantity).toLocaleString()}
                      </p>
                      <button
                        onClick={() => removeItemFromCart(index)}
                        className="text-gray-400 hover:text-red-500"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="lg:w-1/3 space-y-8">
          <div className="bg-white rounded-xl p-8 shadow-md space-y-6">
            <div className="flex justify-between">
              <span className="text-gray-500">Subtotal</span>
              <span className="text-gray-800 font-medium">PKR {totalPrice.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Delivery Fee</span>
              <span className="text-gray-800 font-medium">PKR {deliveryFee.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Discount</span>
              <span className="text-gray-800 font-medium">-PKR {discount.toLocaleString()}</span>
            </div>
            <hr className="border-gray-300" />
            <div className="flex justify-between">
              <span className="text-gray-500">Total</span>
              <span className="text-2xl font-bold text-gray-800">PKR {finalTotal.toLocaleString()}</span>
            </div>
            <input
              type="text"
              placeholder="Enter discount code"
              value={discountCode}
              onChange={(e) => setDiscountCode(e.target.value)}
              className="w-full p-3 border rounded-lg text-gray-800"
            />
            <button
              onClick={applyDiscount}
              className="w-full bg-[#001534] text-white py-3 rounded-lg hover:opacity-90"
            >
              Apply Discount Code
            </button>
           
            <h3 className="text-lg font-medium text-gray-800">Address Details</h3>
            <input
              type="text"
              placeholder="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full p-3 border rounded-lg text-gray-800"
            />
            <input
              type="text"
              placeholder="Area / Nearby Landmark"
              value={area}
              onChange={(e) => setArea(e.target.value)}
              className="w-full p-3 border rounded-lg text-gray-800"
            />
            <textarea
              placeholder="Full Address"
              value={fullAddress}
              onChange={(e) => setFullAddress(e.target.value)}
              className="w-full p-3 border rounded-lg text-gray-800"
              rows={3}
            ></textarea>
            <input
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full p-3 border rounded-lg text-gray-800"
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border rounded-lg text-gray-800"
            />
            <input
              type="text"
              placeholder="Contact Number"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
              className="w-full p-3 border rounded-lg text-gray-800"
            />
            <button
  className="w-full bg-[#001534] text-white py-3 rounded-lg hover:opacity-90 mt-6"
>
  Place Order
</button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;