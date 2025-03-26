"use client";
import { useState, useEffect } from "react";
import sanityClient from "@/lib/sanityClient";
import { saveAs } from "file-saver";

interface Order {
  _id: string;
  customerName: string;
  email: string;
  contactNumber: string;
  address?: {
    city?: string;
    area?: string;
    fullAddress?: string;
  };
  items: {
    name: string;
    image: string;
    price: number;
    size: string;
    quantity: number;
  }[];
  totalPrice: number;
  status: string;
  orderDate: string;
}

const AdminPage = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const data = await sanityClient.fetch(`*[_type == "order"]`);
        setOrders(data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
      setLoading(false);
    };

    fetchOrders();
  }, []);

  // ✅ Function to Convert Orders to CSV Format
  const downloadCSV = () => {
    if (orders.length === 0) {
      alert("No orders to download.");
      return;
    }

    let csvContent = "Order ID,Customer Name,Email,Contact,Full Address,City,Area,Total Price,Status,Order Date,Items\n";

    orders.forEach((order) => {
      const itemsList = order.items.map((item) => `${item.name} (x${item.quantity})`).join(" | ");
      csvContent += `"${order._id}","${order.customerName}","${order.email}","${order.contactNumber}","${order.address?.fullAddress || "N/A"}","${order.address?.city || "N/A"}","${order.address?.area || "N/A"}","PKR ${order.totalPrice}","${order.status}","${order.orderDate}","${itemsList}"\n`;
    });

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    saveAs(blob, "orders.csv");
  };

  if (loading) return <p className="text-center py-10">Loading orders...</p>;

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">Admin Orders</h1>

        {/* ✅ CSV Download Button */}
        <button
          onClick={downloadCSV}
          className="mb-6 px-4 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition"
        >
          Download Orders as CSV
        </button>

        {orders.length === 0 ? (
          <p className="text-center text-gray-600">No orders available.</p>
        ) : (
          <div className="space-y-6">
            {orders.map((order) => (
              <div key={order._id} className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-lg font-bold text-gray-800">Order ID: {order._id}</h2>
                <p className="text-gray-600">Customer: {order.customerName}</p>
                <p className="text-gray-600">Email: {order.email}</p>
                <p className="text-gray-600">Contact: {order.contactNumber}</p>
                <p className="text-gray-600">
                  Address: {order.address?.fullAddress || "N/A"}, {order.address?.city || "N/A"}, {order.address?.area || "N/A"}
                </p>

                <h3 className="text-lg font-medium mt-4">Ordered Items:</h3>
                <div className="space-y-4 mt-2">
                  {order.items.map((item, index) => (
                    <div key={index} className="flex items-center gap-4 bg-gray-50 p-4 rounded-lg shadow-sm">
                      <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-lg" />
                      <div>
                        <p className="font-medium text-gray-800">{item.name}</p>
                        <p className="text-gray-500">Size: {item.size}</p>
                        <p className="text-gray-500">Quantity: {item.quantity}</p>
                        <p className="text-gray-800 font-medium">PKR {item.price * item.quantity}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <p className="mt-4 text-lg font-semibold text-gray-800">Total Price: PKR {order.totalPrice}</p>
                <p className="text-gray-500">Status: {order.status}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPage;
