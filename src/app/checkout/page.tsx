"use client";

import { useState } from "react";
import CartPage from "./CartPage";
import FormPage from "./FormPage";
import PaymentPage from "./PaymentPage";
import useMultiStep from "./useMultiStep";
import { toast } from "sonner";
import { useCart } from "@/app/context/CartContext";

interface Data {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  country: string;
  paymentMethod: string;
}

const INITIAL_DATA: Data = {
  name: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  state: "",
  pincode: "",
  country: "",
  paymentMethod: "",
};

export default function CheckoutPage() {
  const { cart, updateQuantity, removeItem } = useCart();

  const [data, setData] = useState<Data>(INITIAL_DATA);

  const updateData = (fields: Partial<Data>) => {
    setData((prev) => ({ ...prev, ...fields }));
  };

  const total = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const {
    step,
    currentStep,
    nextStep,
    prevStep,
    isFirstStep,
    isLastStep,
  } = useMultiStep([
    <FormPage key="form" {...data} updateData={updateData} />,

    <CartPage
      key="cart"
      items={cart}
      updateQuantity={updateQuantity}
      removeItem={removeItem}
    />,

    <PaymentPage
      key="payment"
      total={total}
      paymentMethod={data.paymentMethod}
      updateData={updateData}
    />,
  ]);

  const handleSubmit = () => {
    if (
      !data.name ||
      !data.email ||
      !data.address ||
      !data.paymentMethod
    ) {
      toast.error("Please fill all required fields");
      return;
    }

    if (cart.length === 0) {
      toast.error("Cart is empty");
      return;
    }

    toast.success("Order placed successfully 🚀");
  };

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      <div className="flex items-center justify-center ">
                {[0, 1, 2].map((i) => (
                    <div key={i} className="flex items-center">
                        <span
                            className={`h-9 w-9 flex items-center justify-center rounded-full ${currentStep >= i
                                    ? "bg-green-500 text-white"
                                    : "bg-gray-200 text-gray-500"
                                }`}
                        >
                            {i + 1}
                        </span>
                        {i < 2 && (
                            <span
                                className={`h-1 w-20 ${currentStep > i ? "bg-green-500" : "bg-gray-200"
                                    }`}
                            />
                        )}
                    </div>
                ))}
            </div>

      <div>{step}</div>

      <div className="flex justify-end">
        {!isFirstStep && (
          <button
            onClick={prevStep}
            className="border px-4 py-2 rounded"
          >
            Previous
          </button>
        )}

        <button
          onClick={isLastStep ? handleSubmit : nextStep}
          className="border px-4 py-2 rounded"
        >
          {isLastStep ? "Submit" : "Next"}
        </button>
      </div>
    </div>
  );
}