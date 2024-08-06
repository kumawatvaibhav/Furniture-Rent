"use client"
import { useState } from "react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CardContent, Card, CardTitle, CardDescription, CardHeader } from "@/components/ui/card"
import Image from "next/image";
import icon from "../favicon.ico";
import axios from "axios";

export default function Component() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleFormValueChange = (e) => {
    if(e.target.id === 'firstName'){
      setFirstName(e.target.value);
    } 
    if(e.target.id === 'lastName'){
      setLastName(e.target.value);
    } 
    if(e.target.id === 'email'){
      setEmail(e.target.value);
      // sessionStorage.setItem('username', email);
    } 
    if(e.target.id === 'password'){
      setPassword(e.target.value);
    }
  }
  const register = () => {
      const options = {
        method: 'POST',
        url: 'http://localhost:3001/api/register',
        headers: {'Content-Type': 'application/json'},
        data: {
          firstName,
          lastName,
          email,
          password
        }
      };

      axios.request(options).then(function (response) {
        alert("succesfully registered")
        console.log(response.data);
      }).catch(function (error) {
        alert("Something went wrong")
        console.error(error);
      });
  }
  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-r from-red-500 to-orange-300">
      <div className="w-full max-w-md space-y-8">
        <Card className="mx-auto max-w-sm flex-2">
          <CardHeader className="space-y-1">
            <CardTitle>Sign Up to Ario!</CardTitle>
            <CardDescription>Create Your Account </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 p-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input onChange={handleFormValueChange} id="firstName" type="text" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input  onChange={handleFormValueChange} id="lastName"  type="text" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input  onChange={handleFormValueChange} id="email" placeholder="name@example.com" type="email" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
              </div>
              <Input  onChange={handleFormValueChange} id="password" placeholder="••••••••" type="password" />
            </div>
            <div>
              <div className="flex items-center justify-between">
                <Label htmlFor="create account?" className="text-sm">
                  Have an account?
                </Label>
                <Link href="/Login" className="text-sm">
                  Login
                </Link>
              </div>
            </div>
            <Button onClick={register} className="w-full" type="submit">
              Sign Up
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}





