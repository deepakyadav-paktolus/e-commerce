"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { CartItem } from "@/app/context/CartContext";

type Props = {
  items: CartItem[];
  updateQuantity: (id: number, qty: number) => void;
  removeItem: (id: number) => void;
};

export default function CartPage({ items, updateQuantity, removeItem }: Props) {
  const total = items.reduce((a, b) => a + b.price * b.quantity, 0);
  const totalFormatted = total.toFixed(2);
  return (
    <div className=" w-2xl">
      <Card>
        <CardHeader>
          <CardTitle>Cart Items</CardTitle>
        </CardHeader>

        <CardContent className="">
          {items.map((item) => (
            <div key={item.id} className="space-y-2">
              <div className="flex justify-between">
                <div>
                  <img src={item.image} alt={item.title} className="w-16 h-16 object-contain" />
                  <p className="font-medium">{item.title}</p>
                  <p className="text-sm text-muted-foreground">₹{item.price}</p>
                </div>

                <div className="flex gap-2 items-center">
                  <Input
                    className="w-16"
                    type="number"
                    min={1}
                    value={item.quantity}
                    onChange={(e) =>
                      updateQuantity(item.id, Number(e.target.value))
                    }
                  />

                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => removeItem(item.id)}
                  >
                    Remove
                  </Button>
                </div>
              </div>

              <Separator />
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="mt-5">
        <CardContent className="flex justify-between py-6">
          <span>Total</span>
          <span className="font-bold">₹{totalFormatted}</span>
        </CardContent>
      </Card>
    </div>
  );
}