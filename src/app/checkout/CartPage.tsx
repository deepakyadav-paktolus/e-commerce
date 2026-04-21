import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

type CartItem = {
  id: number
  name: string
  price: number
  quantity: number
}

type CartPageProps = {
  items: CartItem[]
  updateQuantity: (id: number, quantity: number) => void
  removeItem: (id: number) => void
}

export default function CartPage({
  items,
  updateQuantity,
  removeItem,
}: CartPageProps) {
  const total = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  )

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Your Cart</CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          {items.length === 0 && (
            <p className="text-muted-foreground text-sm">
              Your cart is empty.
            </p>
          )}

          {items.map((item) => (
            <div key={item.id} className="space-y-2">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-muted-foreground">
                    ₹{item.price}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <Input
                    type="number"
                    min={1}
                    value={item.quantity}
                    onChange={(e) =>
                      updateQuantity(item.id, Number(e.target.value))
                    }
                    className="w-16"
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

      <Card>
        <CardHeader>
          <CardTitle>Summary</CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="flex justify-between">
            <span>Total</span>
            <span className="font-semibold">₹{total}</span>
          </div>

          <Button className="w-full">
            Proceed to Checkout
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}