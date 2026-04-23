"use client"

import { useEffect, useState, useRef } from "react"
import Autoplay from "embla-carousel-autoplay"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "./ui/carousel"

export default function MyCarousel() {
  const [data, setData] = useState<any[]>([])

  const plugin = useRef(
    Autoplay({
      delay: 2000,
      stopOnInteraction: false,
    })
  )

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://fakestoreapi.com/products")
      const fetchedData = await res.json()
      setData(fetchedData)
    }
    fetchData()
  }, [])

  return (
    <div className="w-screen h-80 max-w-full mx-auto">
      <Carousel opts={{ loop: true, dragFree: true }} plugins={[plugin.current]}>
        <CarouselContent>
          {data.map((item: any) => (
            <CarouselItem key={item.id}>
              <div className="flex items-center justify-center h-64 bg-gray-200 rounded-xl">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-48 w-48 object-contain mr-5"
                />
                <div className="flex flex-col items-center justify-center">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-lg font-semibold">${item.price}</p>
                </div>
              </div>

            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}