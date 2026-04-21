"use client";

import CartPage from "./CartPage";
import FormPage from "./FormPage";
import multiStep from "./multiStep";
import { useState } from "react";
import PaymentPage from "./PaymentPage";
import { toast } from "sonner";

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

type CartItem = {
    id: number;
    name: string;
    price: number;
    quantity: number;
};

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

const INITIAL_CART: CartItem[] = [
    { id: 1, name: "Product 1", price: 499, quantity: 1 },
    { id: 2, name: "Product 2", price: 500, quantity: 1 },
];

const CheckoutPage = () => {
    const [data, setData] = useState(INITIAL_DATA);
    const [cart, setCart] = useState(INITIAL_CART);

    const updateData = (fields: Partial<Data>) => {
        setData((prev) => ({ ...prev, ...fields }));
    };

    const updateQuantity = (id: number, quantity: number) => {
        setCart((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, quantity } : item
            )
        );
    };

    const removeItem = (id: number) => {
        setCart((prev) => prev.filter((item) => item.id !== id));
    };

    const total = cart.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );

    const {
        step,
        totalSteps,
        currentStep,
        nextStep,
        prevStep,
        isFirstStep,
        isLastStep,
    } = multiStep([
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
        console.log("FINAL DATA:", data);
        console.log("CART:", cart);

      data ?  toast.success('Order placed successfully!', {
            style: {
                '--normal-bg': 'light-dark(var(--color-green-600), var(--color-green-400))',
                '--normal-text': 'var(--color-white)',
                '--normal-border': 'light-dark(var(--color-green-600), var(--color-green-400))'
            } as React.CSSProperties
        }): toast.error('Action failed!', {
          style: {
            '--normal-bg': 'light-dark(var(--color-red-600), var(--color-red-400))',
            '--normal-text': 'var(--color-white)',
            '--normal-border': 'light-dark(var(--color-red-600), var(--color-red-400))'
          } as React.CSSProperties
        })
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

            <div className="flex min-w-2xl justify-between">
                {!isFirstStep && (
                    <button
                        className="border px-4 py-2 rounded"
                        onClick={prevStep}
                    >
                        Previous
                    </button>
                )}

                <button
                    className="border px-4 py-2 rounded"
                    onClick={isLastStep ? handleSubmit : nextStep}
                >
                    {isLastStep ? "Submit" : "Next"}
                </button>
            </div>
        </div>
    );
};

export default CheckoutPage;