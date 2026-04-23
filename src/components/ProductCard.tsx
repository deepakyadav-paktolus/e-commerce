"use client";
import Image from "next/image";
import Link from "next/link";

interface CardProps {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  thumbnail: string;
  tags: string[];
  brand: string;
  weight: number;
  dimensions: Dimensions;
  warrantyInformation: string;
  availabilityStatus: string;
  reviews: Review[];
  meta: Meta;
  product: any;
}

interface Dimensions {
  width: number;
  height: number;
  depth: number;
}

interface Review {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}

interface Meta {
  createdAt: string;
  updatedAt: string;
  barcode: string;
  qrCode: string;
}

const ProductCard = ({
  id,
  title,
  description,
  price,
  discountPercentage,
  rating,
  stock,
  thumbnail,
  brand,
  product
}: CardProps) => {
  const discountedPrice = (price - (price * discountPercentage) / 100).toFixed(
    2,
  );


  return (
    <Link href={`/products/${id}`}>
      <div className="max-w-sm rounded-2xl border p-4 shadow-md hover:shadow-xl transition bg-white">
        <div className="relative w-full h-48 mb-4">
          <Image
            src={thumbnail}
            alt={title}
            fill
            className="object-cover rounded-xl"
          />
        </div>
        <p className="text-sm text-gray-500">{brand}</p>
        <h2 className="text-lg font-semibold line-clamp-1">{title}</h2>
        <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
        <div className="flex items-center gap-2 mt-2">
          <span className="text-yellow-500">⭐ {rating}</span>
          <span className="text-xs text-gray-500">({stock} in stock)</span>
        </div>
        <div className="flex items-center gap-2 mt-3">
          <span className="text-xl font-bold text-green-600">
            ${discountedPrice}
          </span>
          <span className="text-sm line-through text-gray-400">${price}</span>
          <span className="text-xs text-red-500">
            {discountPercentage}% OFF
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
