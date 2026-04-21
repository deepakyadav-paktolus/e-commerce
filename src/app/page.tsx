import ProductCard from "@/components/ProductCard";
import Image from "next/image";

export default async function Home() {
  const res= await fetch("https://dummyjson.com/products")
  const data= await res.json()
  console.log(data.products
)
  return (
    <>
    <div className="h-100 border bg-green-200"> </div>
    <div className="h-100 border bg-red-200"> crousel  </div>
    {data?.products?.map((product: any) => (
      <ProductCard key={product.id} {...product} />
    ))}
    </>
  );
}
