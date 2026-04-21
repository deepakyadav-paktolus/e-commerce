"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";
import { CancelModal } from "./CancelModal";

type ProfileData = {
  name: string;
  email: string;
  phone: string;
};

export default function ProfilePage() {
  const [data, setData] = useState<ProfileData>({
    name: "John Doe",
    email: "john@example.com",
    phone: "+91 9876543210",
  });

  const updateData = (field: keyof ProfileData, value: string) => {
    setData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    console.log("PROFILE DATA:", data);
    toast.success("Profile updated successfully!");
  };

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Profile Information</CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          <div>
            <Label>Name</Label>
            <Input
              value={data.name}
              onChange={(e) => updateData("name", e.target.value)}
            />
          </div>

          <div>
            <Label>Email</Label>
            <Input
              type="email"
              value={data.email}
              onChange={(e) => updateData("email", e.target.value)}
            />
          </div>

          <div>
            <Label>Phone</Label>
            <Input
              value={data.phone}
              onChange={(e) => updateData("phone", e.target.value)}
            />
          </div>

          <Button onClick={handleSave}>Save Changes</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Address</CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          <Input placeholder="Street Address" />
          <div className="grid grid-cols-2 gap-4">
            <Input placeholder="City" />
            <Input placeholder="State" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Input placeholder="Pincode" />
            <Input placeholder="Country" />
          </div>

          <Button variant="outline">Update Address</Button>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Account</CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          <Button variant="destructive">Logout</Button>

          <Separator />

          <CancelModal />
        </CardContent>
      </Card>
    </div>
  );
}