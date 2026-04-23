import ProductCard from "@/components/ProductCard";
import Image from "next/image";
import MyCarousel from "@/components/MyCarousel";

export default async function Home() {
  const res= await fetch("https://dummyjson.com/products")
  const data= await res.json()
  // console.log(data.products)
  return (
    <>
    <div className=""><MyCarousel /> </div>
    
    <div className="flex flex-wrap justify-center gap-6">{data?.products?.map((product: any) => (
      <ProductCard key={product.id} {...product} product={product}/>
    ))}</div>
    </>
  );
}
