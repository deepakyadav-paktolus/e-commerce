import Image from "next/image";

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

interface Product {
  id: number;
  title: string;
  description: string;
  images: string[];
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  weight: number;
  warrantyInformation: string;
  availabilityStatus: string;
  reviews: Review[];
  meta: Meta;
}

const ProductDetails = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const res = await fetch(`https://dummyjson.com/products/${id}`);

  const product: Product = await res.json();

  const discountedPrice =
    product.price - (product.price * product.discountPercentage) / 100;

  return (
    <div className="max-w-5xl mx-auto p-6 grid md:grid-cols-2 gap-10">
      <div className="relative w-full h-96 border rounded-xl z-[-1] overflow-hidden">
        <Image
          src={product.images[0]}
          alt={product.title}
          fill
          className="object-cover "
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
          <span className="line-through text-gray-400">${product.price}</span>
          <span className="text-red-500 text-sm">
            {product.discountPercentage}% OFF
          </span>
        </div>

        <div className="mt-4 text-sm text-gray-600 space-y-1">
          <p> Rating: {product.rating}</p>
          <p> Stock: {product.stock}</p>
          <p> Category: {product.category}</p>
          <p> {product.availabilityStatus}</p>
          <p> {product.warrantyInformation}</p>
        </div>
        <div className="mt-4 flex gap-2 flex-wrap">
          {product.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs bg-gray-200 rounded-full"
            >
              {tag.charAt(0).toUpperCase() + tag.slice(1)}
            </span>
          ))}
        </div>

        <button
          // product={product}
          className="mt-6 w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
