"use client";

import Link from "next/link";
import { useCart } from "../context/CartContext";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function CartPage() {
  const { cart } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <main className="max-w-4xl min-w-2xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">🛒 Your Cart</h1>
        <div className="">
          <Link href="/">
            <Button variant="outline">← Continue Shopping</Button>
          </Link>
        </div>
      </div>

      {cart.length === 0 ? (
        <Card className="text-center py-10">
          <CardContent>
            <p className="text-gray-500">Your cart is empty</p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <Card key={item.id} className="shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg">
                  {item.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="flex justify-between items-center">
                <div>
                  <p className="text-gray-500">
                    ${item.price} X {item.quantity}
                  </p>
                </div>

                <p className="font-semibold">
                  ${item.price * item.quantity}
                </p>
              </CardContent>
            </Card>
          ))}

          <Separator />

          <Card className="bg-muted">
            <CardContent className="flex justify-between items-center py-6">
              <h2 className="text-xl font-semibold">Total</h2>
              <h2 className="text-2xl font-bold">${total.toFixed(2)}</h2>
            </CardContent>
          </Card>

          <Link href="/checkout" className="w-full bg-primary text-primary-foreground py-2 px-4 rounded-xl text-lg">
            Proceed to Checkout
          </Link>
        </div>
      )}
    </main>
  );
}