"use client";

import Image from "next/image";
import { useCart } from "@/app/context/CartContext";
import { Product } from "@/types/Product";
import { toast } from "sonner";

export default function ProductDetailsClient({
  product,
}: {
  product: Product;
}) {
  const { addToCart } = useCart();

  const discountedPrice =
    product.price - (product.price * product.discountPercentage) / 100;

  return (
    <div className="max-w-5xl mx-auto p-6 grid md:grid-cols-2 gap-10">
      <div className="relative w-full h-96 border rounded-xl overflow-hidden">
        <Image
          src={product.images[0]}
          alt={product.title}
          fill
          className="object-cover"
        />
      </div>

      <div>
        <h1 className="text-3xl font-bold">{product.title}</h1>
        <p className="text-gray-500">{product.brand}</p>

        <p className="mt-4 text-gray-700">{product.description}</p>

        <div className="mt-4 flex items-center gap-3">
          <span className="text-2xl font-bold text-green-600">
            ${discountedPrice.toFixed(2)}
          </span>
          <span className="line-through text-gray-400">
            ${product.price}
          </span>
        </div>

        <button
          onClick={() => {
            addToCart(product);
            toast.success("Product added to cart");
          }}
          className="mt-6 w-full bg-black text-white py-3 rounded-xl"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}