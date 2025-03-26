"use client";
import { useState } from "react";
import Card from "@/app/components/ui/card";
import { CardContent } from "../components/ui/cardconten";
import ImageGenerator from "../components/image.gen";

export default function CreatorDesignPage() {
  const [selectedItem, setSelectedItem] = useState("Shirt");
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("Black");
  const [size, setSize] = useState("M");
  const [isDoneEnabled, setIsDoneEnabled] = useState(true);
  const [shirtDesignArea, setShirtDesignArea] = useState("Front");

  const items = [
    { name: "Shirt", image: "/images/s1.png", sizes: ["S", "M", "L", "XL"], colors: ["Black", "White", "Red", "Blue"], price: "$25" },
    { name: "Mug", image: "/images/mug1.png", sizes: [], colors: ["Black", "White"], price: "$10" },
    { name: "Cap", image: "/images/cap1.jpg", sizes: ["M", "L"], colors: ["Black", "White", "Blue"], price: "$15" },
  ];

  const designAreas = ["Front", "Back", "Logo", "Sleeves"];

  const selectedProduct = items.find((item) => item.name === selectedItem) ?? {
    name: "",
    image: "",
    sizes: [],
    colors: [],
    price: "",
  };

  return (
    <div className="p-8 bg-gray-200 min-h-screen">
      <div className="text-center mb-8">
        <h1 className="text-5xl font-extrabold text-black">Customization Studio</h1>
        <h2 className="text-xl font-semibold">Design Your Perfect Item</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Select a product, choose your preferred size and color, then customize it to make it uniquely yours.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-8">
        <div className="space-y-6 bg-gray-100 p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold">Select Product</h3>
          <div className="flex space-x-4">
            {items.map((item) => (
              <Card
                key={item.name}
                className={`p-2 cursor-pointer transition-all duration-300 rounded-lg shadow-md hover:shadow-lg ${
                  selectedItem === item.name ? "border-4 border-blue-950" : ""
                }`}
                onClick={() => {
                  setSelectedItem(item.name);
                  setSize(item.sizes[0] || "");
                  setColor(item.colors[0] || "Black");
                }}
              >
                <CardContent>
                  <img src={item.image} alt={item.name} className="w-16 mx-auto" />
                  <p className="text-center mt-2 font-medium text-sm">{item.name}</p>
                  <p className="text-center font-semibold text-gray-700">{item.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {selectedItem === "Shirt" && (
            <div>
              <label className="block font-semibold">Design Area</label>
              <div className="flex space-x-3 mt-2">
                {designAreas.map((area) => (
                  <button
                    key={area}
                    className={`px-4 py-2 rounded-full border-2 font-semibold transition-all duration-300 ${
                      shirtDesignArea === area ? "bg-gray-400 text-white border-blue-950" : "bg-gray-200 border-gray-300"
                    }`}
                    onClick={() => setShirtDesignArea(area)}
                  >
                    {area}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div>
            <label className="block font-semibold">Color</label>
            <div className="flex space-x-2 mt-2">
              {selectedProduct?.colors?.map((col) => (
                <div
                  key={col}
                  className={`w-10 h-10 rounded-full border cursor-pointer transition-all duration-300 ${
                    color === col ? "border-4 border-blue-950 scale-110" : "border-gray-300"
                  }`}
                  style={{ backgroundColor: col.toLowerCase() }}
                  onClick={() => setColor(col)}
                ></div>
              ))}
            </div>
          </div>

          {selectedProduct?.sizes?.length > 0 && (
            <div>
              <label className="block font-semibold">Size</label>
              <div className="flex space-x-3 mt-2">
                {selectedProduct?.sizes?.map((sz) => (
                  <button
                    key={sz}
                    className={`w-10 h-10 flex justify-center items-center rounded-full border-2 font-semibold transition-all duration-300 ${
                      size === sz ? "bg-gray-400 text-white border-blue-950" : "bg-gray-200 border-gray-300"
                    }`}
                    onClick={() => setSize(sz)}
                  >
                    {sz}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div>
            <label className="block font-semibold">Quantity</label>
            <div className="flex items-center space-x-4 mt-2">
              <button
                className="bg-gray-300 px-3 py-1 rounded-md font-bold hover:bg-gray-400"
                onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
              >
                -
              </button>
              <span className="text-lg font-semibold">{quantity}</span>
              <button
                className="bg-blue-950 text-white px-3 py-1 rounded-md font-bold hover:bg-blue-950"
                onClick={() => setQuantity((prev) => prev + 1)}
              >
                +
              </button>
            </div>
          </div>

          <button
            className={`w-full p-2 mt-4 text-white font-bold rounded-md transition-all duration-300 ${
              isDoneEnabled ? "bg-blue-950 hover:bg-black" : "bg-gray-400 cursor-not-allowed"
            }`}
            onClick={() => alert("Selection Done!")}
            disabled={!isDoneEnabled}
          >
            Done
          </button>
        </div>

        <div className="flex justify-center items-center bg-white p-2 rounded-lg shadow-md">
          <ImageGenerator />
        </div>
      </div>
    </div>
  );
}
