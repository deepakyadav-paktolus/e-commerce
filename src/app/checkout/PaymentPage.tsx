import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { Payment } from "./Payment"

type PaymentPageProps = {
    total: number
    paymentMethod: string
    updateData: (data: { paymentMethod: string }) => void
}

export default function PaymentPage({
    total,
    paymentMethod,
    updateData,
}: PaymentPageProps) {
    return (
        <div className="max-w-3xl mx-auto p-6 space-y-6">
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
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="card" id="card" />
                            <Label htmlFor="card">Credit / Debit Card</Label>
                        </div>

                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="upi" id="upi" />
                            <Label htmlFor="upi">UPI</Label>
                        </div>

                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="cod" id="cod" />
                            <Label htmlFor="cod">Cash on Delivery</Label>
                        </div>
                    </RadioGroup>
                </CardContent>
            </Card>

            {paymentMethod === "card" && (
                <Card>
                    <CardHeader>
                        <CardTitle>Card Details</CardTitle>
                    </CardHeader>

                    <CardContent className="space-y-4">
                        <div>
                            <Label>Card Number</Label>
                            <Input placeholder="1234 5678 9012 3456" />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <Label>Expiry Date</Label>
                                <Input placeholder="MM/YY" />
                            </div>

                            <div>
                                <Label>CVV</Label>
                                <Input type="password" placeholder="123" />
                            </div>
                        </div>
                    </CardContent>
                </Card>
            )}

            {paymentMethod === "upi" && (
                <Card>
                    <CardHeader>
                        <CardTitle>UPI Details</CardTitle>
                    </CardHeader>

                    <CardContent>
                        <Label>UPI ID</Label>
                        <Input placeholder="example@upi" />
                    </CardContent>
                </Card>
            )}

            {paymentMethod === "cod" && (
                <Card>
                    <CardContent>
                        <p className="text-sm text-muted-foreground">
                            You will pay in cash when your order is delivered.
                        </p>
                    </CardContent>
                </Card>
            )}

            <Card>
                <CardHeader>
                    <CardTitle>Order Summary</CardTitle>
                </CardHeader>

                <CardContent className="space-y-3">
                    <div className="flex justify-between">
                        <span>Total Amount</span>
                        <span className="font-semibold">₹{total}</span>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}