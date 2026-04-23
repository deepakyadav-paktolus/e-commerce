"use client";

import { Input } from "@/components/ui/input";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";

type Data = {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  country: string;
};

type Props = Data & {
  updateData: (data: Partial<Data>) => void;
};

export default function FormPage({
  name,
  email,
  phone,
  address,
  city,
  state,
  pincode,
  country,
  updateData,
}: Props) {
  return (
    <div className="space-y-4 w-2xl border p-4 rounded-lg">
      <FieldGroup>
        <Field>
          <FieldLabel>Name</FieldLabel>
          <Input value={name} required onChange={(e) => updateData({ name: e.target.value })} />
        </Field>

        <Field>
          <FieldLabel>Email</FieldLabel>
          <Input value={email} required onChange={(e) => updateData({ email: e.target.value })} />
        </Field>

        <Field>
          <FieldLabel>Phone</FieldLabel>
          <Input value={phone} required onChange={(e) => updateData({ phone: e.target.value })} />
        </Field>

        <Field>
          <FieldLabel>Address</FieldLabel>
          <Input value={address} required onChange={(e) => updateData({ address: e.target.value })} />
        </Field>

        <div className="grid grid-cols-2 gap-3">
          <Input placeholder="City" value={city} required onChange={(e) => updateData({ city: e.target.value })} />
          <Input placeholder="State" value={state} required onChange={(e) => updateData({ state: e.target.value })} />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <Input placeholder="Pincode" value={pincode} required onChange={(e) => updateData({ pincode: e.target.value })} />
          <Input placeholder="Country" value={country} required onChange={(e) => updateData({ country: e.target.value })} />
        </div>
      </FieldGroup>
    </div>
  );
}