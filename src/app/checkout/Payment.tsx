"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useState } from "react";
import { toast } from "sonner";

export function Payment() {
  const [method, setMethod] = useState("card");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    toast.success("Payment successful!");
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Pay Now</Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Complete Payment</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <RadioGroup
            value={method}
            onValueChange={setMethod}
            className="space-y-2"
          >
            <div className="flex items-center gap-2">
              <RadioGroupItem value="card" id="card" />
              <Label htmlFor="card">Card</Label>
            </div>

            <div className="flex items-center gap-2">
              <RadioGroupItem value="upi" id="upi" />
              <Label htmlFor="upi">UPI</Label>
            </div>
          </RadioGroup>

          {method === "card" && (
            <FieldGroup>
              <Field>
                <Label>Card Number</Label>
                <Input placeholder="1234 5678 9012 3456" required />
              </Field>

              <div className="grid grid-cols-2 gap-3">
                <Field>
                  <Label>Expiry</Label>
                  <Input placeholder="MM/YY" required />
                </Field>

                <Field>
                  <Label>CVV</Label>
                  <Input type="password" placeholder="123" required />
                </Field>
              </div>
            </FieldGroup>
          )}

          {method === "upi" && (
            <Field>
              <Label>UPI ID</Label>
              <Input placeholder="name@upi" required />
            </Field>
          )}

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>

            <Button type="submit">Pay</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}