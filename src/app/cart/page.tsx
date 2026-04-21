"use client";

import { useState } from "react";

type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
};

export default function CartPage() {
  const [cart, setCart] = useState<CartItem[]>([
    {
      id: 1,
      name: "Product 1",
      price: 499,
      quantity: 1,
      image: "/images/product1.jpg",
    },
    {
      id: 2,
      name: "Product 2",
      price: 899,
      quantity: 2,
      image: "/images/product2.jpg",
    },
  ]);

  const updateQuantity = (id: number, amount: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + amount) }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center bg-white p-4 rounded-lg shadow"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded"
                />

                <div className="ml-4 flex-1">
                  <h2 className="font-semibold">{item.name}</h2>
                  <p className="text-gray-600">₹{item.price}</p>

                  <div className="flex items-center mt-2">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="px-3 py-1 bg-gray-200 rounded"
                    >
                      -
                    </button>

                    <span className="mx-3">{item.quantity}</span>

                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="px-3 py-1 bg-gray-200 rounded"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="text-right">
                  <p className="font-semibold">
                    ₹{item.price * item.quantity}
                  </p>

                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-500 text-sm mt-2"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white p-6 rounded-lg shadow h-fit">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

            <div className="flex justify-between mb-2">
              <span>Total</span>
              <span className="font-bold">₹{totalPrice}</span>
            </div>

            <button className="w-full mt-4 bg-black text-white py-2 rounded hover:bg-gray-800">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}