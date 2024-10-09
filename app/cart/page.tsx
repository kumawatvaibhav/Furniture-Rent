'use client';

import { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import Header from "@/components/component/header";

export default function Component() {
  const [cartData, setCartData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch cart data from the API
  useEffect(() => {
    async function fetchCartData() {
      try {
        const response = await axios.get("/api/cart"); // Replace with your API endpoint
        setCartData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching cart data:", error);
        setLoading(false);
      }
    }

    fetchCartData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!cartData) {
    return <div>No items in the cart</div>;
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main className="mt-10 flex justify-center p-4">
        <div className="w-full max-w-5xl space-y-4">
          <div className="flex space-x-4">
            <div className="flex-1 p-4 bg-white rounded shadow">
              <h2 className="flex items-center space-x-2 text-lg font-semibold">
                <FileIcon className="h-5 w-5" />
                <span>Order Summary</span>
              </h2>
              <div className="flex justify-between mt-4">
                <div>
                  <h3 className="text-sm font-medium">Payable Now</h3>
                  <div className="mt-2 space-y-1">
                    <div className="flex justify-between">
                      <span>Refundable Deposit</span>
                      <span>₹{cartData.refundableDeposit}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Delivery Charges</span>
                      <span>₹{cartData.deliveryCharges}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-medium">Monthly Payable</h3>
                  <div className="mt-2 space-y-1">
                    <div className="flex justify-between">
                      <span>Products Rent</span>
                      <span>₹{cartData.monthlyRent}/mo</span>
                    </div>
                    <div className="flex justify-between">
                      <span>GST</span>
                      <span>₹{cartData.gst}/mo</span>
                    </div>
                    <div className="flex justify-between">
                      <span>
                        First month rent <span className="text-red-500">(Tentative)</span>
                      </span>
                      <span>₹{cartData.firstMonthRent}</span>
                    </div>
                    <a href="#" className="text-blue-500 text-sm">
                      View Details
                    </a>
                    <div className="flex justify-between">
                      <span>Total Rent after first month</span>
                      <span>₹{cartData.totalMonthlyRent}/mo</span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="mt-4 text-xs text-gray-500">
                <CalendarIcon className="inline h-4 w-4 mr-1" />
                Not to be paid now. Pay post usage every month.
              </p>
              <div className="flex justify-between mt-4">
                <div className="flex items-center space-x-2">
                  <span className="text-lg font-bold">₹{cartData.payableNow}</span>
                  <span className="text-sm text-gray-500">Payable Now</span>
                </div>
                <Button className="bg-red-500 text-white">Proceed</Button>
              </div>
            </div>
            <div className="w-1/3 space-y-4">
              {cartData.items.map((item) => (
                <div key={item.id} className="p-4 bg-white rounded shadow">
                  <div className="flex items-center space-x-4">
                    <img src={item.image} alt={item.name} className="h-16 w-16 rounded" />
                    <div>
                      <h3 className="text-sm font-medium">{item.name}</h3>
                      <div className="flex justify-between mt-2">
                        <span>Rent</span>
                        <span>₹{item.rent}/mo</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Deposit</span>
                        <span>₹{item.deposit}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center mt-4 space-x-2">
                    <Button variant="outline" className="h-8 w-8">
                      -
                    </Button>
                    <span>{item.quantity}</span>
                    <Button variant="outline" className="h-8 w-8">
                      +
                    </Button>
                    <Select>
                      <SelectTrigger className="text-sm">
                        <SelectValue placeholder="12 Months" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="6">6 Months</SelectItem>
                        <SelectItem value="12">12 Months</SelectItem>
                        <SelectItem value="24">24 Months</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <p className="mt-4 text-xs text-gray-500">
                    <TruckIcon className="inline h-4 w-4 mr-1" />
                    Delivery in 3-5 days post KYC
                  </p>
                </div>
              ))}
            </div>
          </div>
          {/* Additional UI */}
        </div>
      </main>
    </div>
  );
}

function FileIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    </svg>
  )
}


function MapPinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}


function PhoneIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}


function TruckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
      <path d="M15 18H9" />
      <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
      <circle cx="17" cy="18" r="2" />
      <circle cx="7" cy="18" r="2" />
    </svg>
  )
}
