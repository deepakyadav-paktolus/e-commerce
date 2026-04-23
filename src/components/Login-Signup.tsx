'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "./ui/checkbox";

export function LoginCard({ setIsLogin }: { setIsLogin: (v: boolean) => void }) {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Login to your account</CardTitle>
        <CardDescription>
          Enter your email below to login
        </CardDescription>
        <CardAction>
          <Button variant="link" onClick={() => setIsLogin(false)}>
            Sign Up
          </Button>
        </CardAction>
      </CardHeader>

      <form>
        <CardContent className="flex flex-col gap-6">
          <div className="grid gap-2">
            <Label htmlFor="login-email">Email</Label>
            <Input id="login-email" type="email" placeholder="m@example.com" required />
          </div>

          <div className="grid gap-2">
            <div className="flex justify-between items-center">
              <Label htmlFor="login-password">Password</Label>
              <a className="text-sm hover:underline cursor-pointer">
                Forgot?
              </a>
            </div>
            <Input id="login-password" type="password" required />
          </div>
        </CardContent>

        <CardFooter className="flex flex-col gap-2">
          <Button type="submit" className="w-full">
            Login
          </Button>
          <Button variant="outline" className="w-full">
            Login with Google
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}

export function SignupCard({ setIsLogin }: { setIsLogin: (v: boolean) => void }) {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Sign Up</CardTitle>
        <CardDescription>
          Create a new account
        </CardDescription>
        <CardAction>
          <Button variant="link" onClick={() => setIsLogin(true)}>
            Login
          </Button>
        </CardAction>
      </CardHeader>

      <form>
        <CardContent className="flex flex-col gap-6">
          <div className="grid gap-2">
            <Label htmlFor="signup-email">Email</Label>
            <Input id="signup-email" type="email" required />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="signup-password">Password</Label>
            <Input id="signup-password" type="password" required />
          </div>

          <div className="flex items-center gap-2">
            <Checkbox id="terms" />
            <Label htmlFor="terms">
              Accept terms and conditions
            </Label>
          </div>
        </CardContent>

        <CardFooter className="flex flex-col gap-2">
          <Button type="submit" className="w-full">
            Sign Up
          </Button>
          <Button variant="outline" className="w-full">
            Sign Up with Google
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      {isLogin ? (
        <LoginCard setIsLogin={setIsLogin} />
      ) : (
        <SignupCard setIsLogin={setIsLogin} />
      )}
    </div>
  );
};

export default LoginSignup;