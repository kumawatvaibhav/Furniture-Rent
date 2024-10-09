'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@nextui-org/input";
import axios from 'axios';

export default function ProfilePage() {
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Fetch user data from API
    const fetchUserData = async () => {
      try {
        const response = await axios.get('/api/user/profile'); // Update this URL as needed
        setUserData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setIsLoading(false);
      }
    };

    fetchUserData();
  }, []);

  // Handle Logout
  const handleLogout = async () => {
    try {
      // Remove token from cookies or session
      await axios.post('/api/user/logout');

      router.push('/');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!userData) {
    return <div>Error loading user data</div>;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground py-6 px-4 md:px-6">
        <div className="container flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="w-12 h-12 md:w-16 md:h-16">
              <AvatarImage src={userData.avatar || "/placeholder-user.jpg"} alt={userData.name} />
              <AvatarFallback>{userData.name?.[0]}</AvatarFallback>
            </Avatar>
            <div className="grid gap-1">
              <h1 className="text-xl font-semibold md:text-2xl">{userData.name}</h1>
              <p className="text-sm text-primary-foreground/80">{userData.email}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="text-black" onClick={handleLogout}>
              Logout
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 py-8 px-4 md:px-6">
        <div className="container grid gap-8">
          {/* Rented Furniture Section */}
          <section>
            <h2 className="text-2xl font-semibold">Rented Furniture</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {userData.rentedFurniture?.map((item) => (
                <Card key={item.id}>
                  <CardContent className="grid gap-4">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt="Furniture Image"
                      width={300}
                      height={200}
                      className="mt-5 rounded-lg object-cover aspect-[3/2]"
                    />
                    <div className="grid gap-1">
                      <h3 className="text-lg font-semibold">{item.name}</h3>
                      <p className="text-muted-foreground">Rented since: {item.rentedSince}</p>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm">
                          Return
                        </Button>
                        <Button variant="outline" size="sm">
                          Extend
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Past Orders Section */}
          <section>
            <h2 className="text-2xl font-semibold">Past Orders</h2>
            <div className="grid gap-4">
              {userData.pastOrders?.map((order) => (
                <Card key={order.id}>
                  <CardContent className="grid gap-4 md:grid-cols-[1fr_auto]">
                    <div className="mt-5 grid gap-2">
                      <h3 className="text-lg font-semibold">{order.name}</h3>
                      <p className="text-muted-foreground">
                        Rented from: {order.startDate} - {order.endDate}
                      </p>
                      <p className="text-muted-foreground">Total: {order.total}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">
                        Rent Again
                      </Button>
                      <Button variant="outline" size="sm">
                        Leave Review
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Update Profile Section */}
          <section>
            <h2 className="text-2xl font-semibold">Update Profile</h2>
            <Card>
              <CardContent className="mt-5 grid gap-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" defaultValue={userData.name} />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" defaultValue={userData.email} />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="address">Address</Label>
                  <Textarea id="address" rows={3} defaultValue={userData.address} />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" type="tel" defaultValue={userData.phone} />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="ml-auto">Update Profile</Button>
              </CardFooter>
            </Card>
          </section>
        </div>
      </main>
    </div>
  );
}
