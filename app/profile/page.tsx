// 'use client';

// import { FormEvent, useState, useEffect } from 'react';
// import { useRouter } from 'next/navigation';
// import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { Label } from "@/components/ui/label";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@nextui-org/input";
// import axios from 'axios';
// import Image from 'next/image';

// import { IUserProfile } from '@/model/user.model';
// import { IRentedFurniture } from '@/model/RentedFurniture.model';
// import { IFurniture } from '@/model/furniture.model';

// export default function ProfilePage() {
//   const [userData, setUserData] = useState<IUserProfile | null>(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const router = useRouter();

//   useEffect(() => {
//     // Fetch user data from API
//     const fetchUserData = async () => {
//       try {
//         const response = await axios.get('/api/user/profile'); // Adjust this URL if needed
//         setUserData(response.data);
//       } catch (error) {
//         console.error("Error fetching user data:", error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchUserData();
//   }, []);

//   // Handle Logout
//   const handleLogout = async () => {
//     try {
//       await axios.post('/api/user/logout');
//       router.push('/');
//     } catch (error) {
//       console.error('Logout failed:', error);
//     }
//   };

//   // Handle form submission to update profile
//   const handleUpdateProfile = async (event: FormEvent<HTMLFormElement>) => {
//     event.preventDefault();

//     const form = event.currentTarget;

//     const updatedData = {
//       name: (form.querySelector('#name') as HTMLInputElement).value,
//       email: (form.querySelector('#email') as HTMLInputElement).value,
//       address: (form.querySelector('#address') as HTMLTextAreaElement).value,
//       phone: (form.querySelector('#phone') as HTMLInputElement).value,
//     };

//     try {
//       const response = await axios.put('/api/user/update', updatedData);
//       setUserData(response.data); // Update userData with the response
//       alert('Profile updated successfully');
//     } catch (error) {
//       console.error('Error updating profile:', error);
//       alert('Failed to update profile');
//     }
//   };

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (!userData) {
//     return <div>Error loading user data</div>;
//   }

//   return (
//     <div className="flex flex-col min-h-screen">
//       <header className="bg-primary text-primary-foreground py-6 px-4 md:px-6">
//         <div className="container flex items-center justify-between">
//           <div className="flex items-center gap-4">
//             <Avatar className="w-12 h-12 md:w-16 md:h-16">
//               <AvatarImage src={userData.avatar || "/placeholder-user.jpg"} alt={userData.name} />
//               <AvatarFallback>{userData.name?.[0]}</AvatarFallback>
//             </Avatar>
//             <div className="grid gap-1">
//               <h1 className="text-xl font-semibold md:text-2xl">{userData.name}</h1>
//               <p className="text-sm text-primary-foreground/80">{userData.email}</p>
//             </div>
//           </div>
//           <div className="flex items-center gap-2">
//             <Button variant="outline" size="sm" className="text-black" onClick={handleLogout}>
//               Logout
//             </Button>
//           </div>
//         </div>
//       </header>

//       <main className="flex-1 py-8 px-4 md:px-6">
//         <div className="container grid gap-8">
//           {/* Rented Furniture Section */}
//           <section>
//             <h2 className="text-2xl font-semibold">Rented Furniture</h2>
//             <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//               {userData.rentedFurniture?.map((item: IRentedFurniture) => (
//                 <Card key={item._id}>
//                   <CardContent className="grid gap-4">
//                     <Image
//                       src={item.image || "/placeholder.svg"}
//                       alt="Furniture Image"
//                       width={300}
//                       height={200}
//                       className="mt-5 rounded-lg object-cover aspect-[3/2]"
//                     />
//                     <div className="grid gap-1">
//                       <h3 className="text-lg font-semibold">{item.name}</h3>
//                       <p className="text-muted-foreground">
//                         Rented since: {item.rentedSince ? new Date(item.rentedSince).toLocaleDateString() : "N/A"}
//                       </p>
//                       <div className="flex items-center gap-2">
//                         <Button variant="outline" size="sm">
//                           Return
//                         </Button>
//                         <Button variant="outline" size="sm">
//                           Extend
//                         </Button>
//                       </div>
//                     </div>
//                   </CardContent>
//                 </Card>
//               ))}
//             </div>
//           </section>

//           {/* Past Orders Section */}
//           <section>
//             <h2 className="text-2xl font-semibold">Past Orders</h2>
//             <div className="grid gap-4">
//               {userData.pastOrders?.map((order: IFurniture) => (
//                 <Card key={order.id}>
//                   <CardContent className="grid gap-4 md:grid-cols-[1fr_auto]">
//                     <div className="mt-5 grid gap-2">
//                       <h3 className="text-lg font-semibold">{order.name}</h3>
//                       <p className="text-muted-foreground">
//                         Rented from: {order.startDate ? new Date(order.startDate).toLocaleDateString() : "N/A"} - {order.endDate ? new Date(order.endDate).toLocaleDateString() : "N/A"}
//                       </p>
//                       <p className="text-muted-foreground">Total: {order.total}</p>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <Button variant="outline" size="sm">
//                         Rent Again
//                       </Button>
//                       <Button variant="outline" size="sm">
//                         Leave Review
//                       </Button>
//                     </div>
//                   </CardContent>
//                 </Card>
//               ))}
//             </div>
//           </section>

//           {/* Update Profile Section */}
//           <section>
//             <h2 className="text-2xl font-semibold">Update Profile</h2>
//             <form onSubmit={handleUpdateProfile}>
//               <Card>
//                 <CardContent className="mt-5 grid gap-4">
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     <div className="grid gap-2">
//                       <Label htmlFor="name">Name</Label>
//                       <Input id="name" defaultValue={userData.name} />
//                     </div>
//                     <div className="grid gap-2">
//                       <Label htmlFor="email">Email</Label>
//                       <Input id="email" defaultValue={userData.email} />
//                     </div>
//                   </div>
//                   <div className="grid gap-2">
//                     <Label htmlFor="address">Address</Label>
//                     <Textarea id="address" defaultValue={userData.address} />
//                   </div>
//                   <div className="grid gap-2">
//                     <Label htmlFor="phone">Phone</Label>
//                     <Input id="phone" defaultValue={userData.phone} />
//                   </div>
//                 </CardContent>
//                 <div className="flex justify-end">
//                   <Button type="submit" variant="outline">
//                     Update Profile
//                   </Button>
//                 </div>
//               </Card>
//             </form>
//           </section>
//         </div>
//       </main>
//     </div>
//   );
// }
import React from 'react'

export default function profilepage() {
  return (
    <div>
      Loading
    </div>
  )
}
