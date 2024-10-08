"use client";
import axios from "axios";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { useRouter } from 'next/navigation';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const handleFormValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.id === "email") {
      setEmail(e.target.value);
    }
    if (e.target.id === "password") {
      setPassword(e.target.value);
    }
  };

  const login = async (email: string, password: string) => {
    setLoading(true);
    setErrorMessage("");
    try {
      const response = await axios.post("/api/auth/login", { email, password });
      const { token } = response.data;
      
      // Save the token in localStorage
      localStorage.setItem('token', token);
      alert(response.data.message || "Login successful");
      
      // Redirect to the homepage or profile
      router.push("/");
    } catch (error) {
      console.error("Login Error:", error);
      if (error.response && error.response.data) {
        setErrorMessage(error.response.data.message || "Login failed. Please try again.");
      } else {
        setErrorMessage("Something went wrong. Please check your credentials and try again.");
      }
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-r from-red-500 to-orange-300">
      <div className="w-full max-w-md space-y-8">
        <Card className="mx-auto max-w-sm flex-2">
          <CardHeader className="space-y-1">
            <CardTitle>Welcome to Ario!</CardTitle>
            <CardDescription>Enter your credentials</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 p-6">
            {errorMessage && (
              <div className="text-red-500 text-center">
                {errorMessage}
              </div>
            )}
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                onChange={handleFormValueChange}
                id="email"
                placeholder="name@example.com"
                type="email"
                value={email}
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
              </div>
              <Input
                onChange={handleFormValueChange}
                id="password"
                placeholder="••••••••"
                type="password"
                value={password}
              />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="create account?" className="text-sm">
                Don't have an account?
              </Label>
              <Link href="/register" className="text-sm">
                Signup
              </Link>
            </div>
            <Button
              onClick={() => login(email, password)}
              className="w-full hover:bg-black-400"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );

}