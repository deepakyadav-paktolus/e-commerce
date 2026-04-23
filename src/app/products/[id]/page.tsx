import { Suspense } from "react";
import ProductDetailsClient from "./ProductDetailsClient";

export default async function Page({params,}: { params:Promise <{ id: string }>;
}) {
  const paramsData = await params;
  const res = await fetch(`https://dummyjson.com/products/${paramsData.id}`);
  const product = await res.json();
  console.log(product)
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProductDetailsClient product={product} />
    </Suspense>
  );
}