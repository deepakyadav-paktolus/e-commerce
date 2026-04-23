"use client";

import {
  Dialog,
  DialogTrigger,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

type Props = {
  method: string;
};

export function Payment({ method }: Props) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(`Paid using ${method.toUpperCase()}`);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full mt-4">Pay Now</Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Complete Payment</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <p className="text-sm text-gray-500">
            Selected: <strong>{method.toUpperCase()}</strong>
          </p>

          {method === "card" && (
            <>
              <Input placeholder="Card Number" required />
              <div className="grid grid-cols-2 gap-3">
                <Input placeholder="MM/YY" required />
                <Input placeholder="CVV" required />
              </div>
            </>
          )}

          {method === "upi" && (
            <Input placeholder="name@upi" required />
          )}

          {method === "cod" && (
            <p className="text-sm text-green-600">
              Cash on Delivery selected
            </p>
          )}

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="destructive">Cancel</Button>
            </DialogClose>

            <Button type="submit">Pay</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}