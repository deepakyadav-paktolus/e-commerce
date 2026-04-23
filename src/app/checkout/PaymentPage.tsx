"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

type Props = {
  total: number;
  paymentMethod: string;
  updateData: (data: { paymentMethod: string }) => void;
};

export default function PaymentPage({
  total,
  paymentMethod,
  updateData,
}: Props) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(`Paid using ${paymentMethod.toUpperCase()}`);
  };

  return (
    <div className="w-2xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Payment Method</CardTitle>
        </CardHeader>

        <CardContent>
          <RadioGroup
            value={paymentMethod}
            onValueChange={(value) =>
              updateData({ paymentMethod: value })
            }
            className="space-y-3"
          >
            <div className="flex items-center gap-2">
              <RadioGroupItem value="card" id="card" />
              <Label htmlFor="card">Card</Label>
            </div>

            <div className="flex items-center gap-2">
              <RadioGroupItem value="upi" id="upi" />
              <Label htmlFor="upi">UPI</Label>
            </div>

            <div className="flex items-center gap-2">
              <RadioGroupItem value="cod" id="cod" />
              <Label htmlFor="cod">Cash on Delivery</Label>
            </div>
          </RadioGroup>
        </CardContent>
      </Card>

      {paymentMethod && (
        <Card>
          <CardHeader>
            <CardTitle>Enter {paymentMethod.toUpperCase()} Details</CardTitle>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {paymentMethod === "card" && (
                <>
                  <Input placeholder="Card Number" required />
                  <div className="grid grid-cols-2 gap-3">
                    <Input placeholder="MM/YY" required />
                    <Input placeholder="CVV" required />
                  </div>
                </>
              )}

              {paymentMethod === "upi" && (
                <Input placeholder="name@upi" required />
              )}

              {paymentMethod === "cod" && (
                <p className="text-green-600 text-sm">
                  You will pay on delivery
                </p>
              )}

             {paymentMethod !== "cod" && (
              <Button type="submit" className="w-full">
                Pay ₹{total}
              </Button>
             )}
            </form>
          </CardContent>
        </Card>
      )}

      <Card>
        <CardContent className="flex justify-between py-6 text-lg">
          <span>Total</span>
          <span className="font-bold">₹{total}</span>
        </CardContent>
      </Card>
    </div>
  );
}