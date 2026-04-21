import { Button } from "@/components/ui/button"
import {
    Field,
    FieldDescription,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

type FormPageProps = {
    name: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    pincode: string;
    country: string;

}

type UserData = FormPageProps & {
    updateData: (data: Partial<FormPageProps>) => void;
}
export default function FormPage({ name, email, phone, address, city, state, pincode, country, updateData }: UserData) {
    
    return (
        <div className="w-full max-w-2xl  border p-4 rounded-lg ml-8">
            <FieldGroup>
                <Field>
                    <FieldLabel htmlFor="form-name">Name</FieldLabel>
                    <Input
                        id="form-name"
                        value={name}
                        type="text"
                        placeholder="Evil Rabbit"
                        required
                        onChange={(e)=> updateData({'name': e.target.value})}
                    />
                </Field>
                <Field>
                    <FieldLabel htmlFor="form-email">Email</FieldLabel>
                    <Input id="form-email" type="email" required onChange={(e) => updateData({ 'email': e.target.value })} value={email} placeholder="john@example.com" />
                    <FieldDescription>
                        We&apos;ll never share your email with anyone.
                    </FieldDescription>
                </Field>
                <div className="grid grid-cols-2 gap-4">
                    <Field>
                        <FieldLabel htmlFor="form-phone">Phone</FieldLabel>
                        <Input id="form-phone" type="tel" required value={phone} onChange={(e) => updateData({ 'phone': e.target.value })} placeholder="+91 9876543210" />
                    </Field>
                    <Field>
                        <FieldLabel htmlFor="form-country" >Country</FieldLabel>
                        <Select  defaultValue="ind">
                            <SelectTrigger value={country}  onChange={(e) => updateData({ 'country': e.target.value })}  id="form-country">
                                <SelectValue  />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="ind">India</SelectItem>
                                <SelectItem value="uk">UK</SelectItem>
                                <SelectItem value="usa">USA</SelectItem>
                            </SelectContent>
                        </Select>
                    </Field>
                      <Field>
                        <FieldLabel htmlFor="form-city">City</FieldLabel>
                        <Input id="form-city" type="text" required value={city} onChange={(e) => updateData({  'city': e.target.value })} placeholder="City" />
                    </Field>
                      <Field>
                        <FieldLabel htmlFor="form-state">State</FieldLabel>
                        <Input id="form-state" type="text" required value={state} onChange={(e) => updateData({ 'state': e.target.value })} placeholder="State" />
                    </Field>
                      <Field>
                        <FieldLabel htmlFor="form-pincode">Pincode</FieldLabel>
                        <Input id="form-pincode" type="text" required  maxLength={6} value={pincode} onChange={(e)=> updateData({'pincode': e.target.value})} placeholder="Pincode" />
                    </Field>
                </div>
                <Field>
                    <FieldLabel htmlFor="form-address">Address</FieldLabel>
                    <Input id="form-address" type="text" required onChange={(e) => updateData({ 'address': e.target.value })} value={address} placeholder="123 Main St" />
                </Field>
                
            </FieldGroup>
        </div>
    )
}
