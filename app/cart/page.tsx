import { Button } from "@/components/ui/button"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import Header from "@/components/component/header"

export default function Component() {
  return (
    <div className="min-h-screen">
      <Header/>
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
                      <span>₹601</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Delivery Charges</span>
                      <span>₹49</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-medium">Monthly Payable</h3>
                  <div className="mt-2 space-y-1">
                    <div className="flex justify-between">
                      <span>Products Rent</span>
                      <span>₹421/mo</span>
                    </div>
                    <div className="flex justify-between">
                      <span>GST</span>
                      <span>₹76/mo</span>
                    </div>
                    <div className="flex justify-between">
                      <span>
                        First month rent <span className="text-red-500">(Tentative)</span>
                      </span>
                      <span>₹297</span>
                    </div>
                    <a href="#" className="text-blue-500 text-sm">
                      View Details
                    </a>
                    <div className="flex justify-between">
                      <span>Total Rent after first month</span>
                      <span>₹497/mo</span>
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
                  <span className="text-lg font-bold">₹650</span>
                  <span className="text-sm text-gray-500">Payable Now</span>
                </div>
                <Button className="bg-red-500 text-white">Proceed</Button>
              </div>
            </div>
            <div className="w-1/3 space-y-4">
              <div className="p-4 bg-white rounded shadow">
                <h3 className="text-sm font-medium">Have a coupon code?</h3>
                <ChevronRightIcon className="h-5 w-5 text-gray-500" />
              </div>
              <div className="p-4 bg-white rounded shadow">
                <div className="flex items-center space-x-4">
                  <img src="/placeholder.svg" alt="Product" className="h-16 w-16 rounded" />
                  <div>
                    <h3 className="text-sm font-medium">Stylish Baby Stroller and Pram</h3>
                    <div className="flex justify-between mt-2">
                      <span>Rent</span>
                      <span>₹421/mo</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Deposit</span>
                      <span>₹601</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center mt-4 space-x-2">
                  <Button variant="outline" className="h-8 w-8">
                    -
                  </Button>
                  <span>1</span>
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
            </div>
          </div>
          <div className="p-4 bg-white rounded shadow">
            <div className="flex items-center space-x-2">
              <PhoneIcon className="h-5 w-5" />
              <span>Verify Your Phone Number</span>
            </div>
          </div>
          <div className="p-4 bg-white rounded shadow">
            <div className="flex items-center space-x-2">
              <MapPinIcon className="h-5 w-5" />
              <span>Address & Payment</span>
            </div>
          </div>
          <div className="p-4 bg-white rounded shadow">
            <h2 className="flex items-center space-x-2 text-lg font-semibold">
              <ClipboardListIcon className="h-5 w-5" />
              <span>Past Orders</span>
            </h2>
            <div className="mt-4 space-y-4">
              <div className="flex items-center space-x-4">
                <img src="/placeholder.svg" alt="Product" className="h-16 w-16 rounded" />
                <div>
                  <h3 className="text-sm font-medium">Stylish Baby Stroller and Pram</h3>
                  <div className="flex justify-between mt-2">
                    <span>Rent</span>
                    <span>₹421/mo</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Deposit</span>
                    <span>₹601</span>
                  </div>
                </div>
                <div className="ml-auto">
                  <Button variant="outline" className="h-8 w-8">
                    <ChevronRightIcon className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <img src="/placeholder.svg" alt="Product" className="h-16 w-16 rounded" />
                <div>
                  <h3 className="text-sm font-medium">Stylish Sofa Set</h3>
                  <div className="flex justify-between mt-2">
                    <span>Rent</span>
                    <span>₹821/mo</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Deposit</span>
                    <span>₹1201</span>
                  </div>
                </div>
                <div className="ml-auto">
                  <Button variant="outline" className="h-8 w-8">
                    <ChevronRightIcon className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="fixed bottom-4 left-4">
        <Button className="bg-red-500 text-white">
          <CircleHelpIcon className="h-5 w-5 mr-2" />
          Need Help?
        </Button>
      </div>
    </div>
  )
}

function CalendarIcon(props) {
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
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  )
}


function ChevronRightIcon(props) {
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
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}


function CircleHelpIcon(props) {
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
      <circle cx="12" cy="12" r="10" />
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
      <path d="M12 17h.01" />
    </svg>
  )
}


function ClipboardListIcon(props) {
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
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <path d="M12 11h4" />
      <path d="M12 16h4" />
      <path d="M8 11h.01" />
      <path d="M8 16h.01" />
    </svg>
  )
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