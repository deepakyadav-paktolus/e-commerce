import Image from "next/image";
import React from "react";

export default async function ProductCard() {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {products.map((product:any) => (
        <div
          key={product.id}
          className="max-w-sm rounded-2xl shadow-md p-4 border hover:shadow-lg transition"
        >
          <div className="flex justify-center">
            <Image
              src={product.image}
              alt={product.title}
              width={200}
              height={200}
              className="object-contain"
            />
          </div>

          <h2 className="text-lg font-semibold mt-4">
            {product.title}
          </h2>

          <p className="text-gray-500 text-sm mt-2">
            {product.description}
          </p>

          <div className="flex items-center justify-between mt-4">
            <span className="text-xl font-bold text-green-600">
              ${product.price}
            </span>

            <span className="text-sm text-yellow-600">
              ⭐ {product.rating.rate} ({product.rating.count})
            </span>
          </div>

          <span className="inline-block mt-3 text-xs bg-gray-200 px-2 py-1 rounded">
            {product.category}
          </span>
        </div>
      ))}
    </div>
  );
}