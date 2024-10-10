'use client';

import { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { loadStripe } from '@stripe/stripe-js';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import Header from "@/components/component/header";
import { CalendarIcon, FileIcon, TruckIcon } from "lucide-react";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function Component() {
  const [cartData, setCartData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch cart data from the API
  useEffect(() => {
    async function fetchCartData() {
      try {
        const userId = sessionStorage.getItem("userId");
        console.log(userId)
        
        const response = await axios.get(`/api/cart/view?userId=${userId}`); // Replace with your API endpoint
        setCartData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching cart data:", error);
        setLoading(false);
      }
    }

    fetchCartData();
  }, []);

  const handlePayment = async () => {
    if (!cartData || cartData.payableNow == null) {
      console.error("Cart data or payableNow amount is not available.");
      return;
    }
  
    const stripe = await stripePromise;
  
    if (!stripe) {
      console.error("Stripe.js has not yet loaded.");
      return;
    }
  
    try {
      // Call your backend to create a PaymentIntent
      const response = await axios.post('/api/payment', {
        amount: cartData.payableNow * 100, // Convert to paise or smallest currency unit
      });
  
      const { clientSecret } = response.data;
  
      // Redirect to the Stripe Checkout
      const { error } = await stripe.redirectToCheckout({
        clientSecret,
      });
  
      if (error) {
        console.error("Error redirecting to checkout:", error);
      }
    } catch (error) {
      console.error("Error during payment processing:", error);
    }
  };
  

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
                <Button className="bg-red-500 text-white">
                  Proceed
                </Button>
              </div>
            </div>
            <div className="w-1/3 space-y-4">
              {cartData.items?.map((item) => (
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
        </div>
      </main>
    </div>
  );
}
