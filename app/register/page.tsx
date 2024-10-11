"use client";
import { SetStateAction, useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CardContent, Card, CardTitle, CardDescription, CardHeader } from "@/components/ui/card";
import axios from "axios";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Component() {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter(); 

  const handleFormValueChange = (e: { target: { id: string; value: SetStateAction<string> } }) => {
    if (e.target.id === "username") {
      setUserName(e.target.value);
    }
    if (e.target.id === "email") {
      setEmail(e.target.value);
    }
    if (e.target.id === "password") {
      setPassword(e.target.value);
    }
  };

  const register = async () => {
    try {
      const response = await axios.post("http://localhost:3000/api/auth/sign-up", {
        username,
        email,
        password,
      });

      router.push("/Login");

      console.log(response.data);
      alert("Successfully registered!");

    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <motion.div
      className="flex h-screen items-center justify-center bg-gradient-to-r from-red-500 to-orange-300"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="w-full max-w-md space-y-8"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <motion.div
          className="mx-auto max-w-sm flex-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Card className="bg-white shadow-2xl rounded-lg overflow-hidden">
            <CardHeader className="space-y-1 p-6">
              <CardTitle>Sign Up to Ario!</CardTitle>
              <CardDescription>Create Your Account</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 p-6">
              <motion.div
                className="space-y-2"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Label htmlFor="username">Username</Label>
                <Input onChange={handleFormValueChange} id="username" type="text" />
              </motion.div>
              <motion.div
                className="space-y-2"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <Label htmlFor="email">Email</Label>
                <Input onChange={handleFormValueChange} id="email" placeholder="name@example.com" type="email" />
              </motion.div>
              <motion.div
                className="space-y-2"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <Label htmlFor="password">Password</Label>
                <Input onChange={handleFormValueChange} id="password" placeholder="••••••••" type="password" />
              </motion.div>
              <div className="flex items-center justify-between">
                <Label htmlFor="create account?" className="text-sm">
                  Have an account?
                </Label>
                <Link href="/Login" className="text-sm text-indigo-500 hover:underline">
                  Login
                </Link>
              </div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <Button onClick={register} className="w-full bg-blue-500 hover:bg-indigo-600 text-white">
                  Sign Up
                </Button>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
