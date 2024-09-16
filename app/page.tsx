'use client';
import Image from "next/image";
import Header from "@/components/component/header";
import product from '@/lib/Card_data';
import { Button } from "@/components/ui/button";
const imageStyle = {
  borderRadius: "15%",
  border: "1px solid #fff",
};
import App from "@/lib/Card_data";
import { cn } from "@/lib/cn";
import Link from "next/link";
import {
  CardTitle,
  CardHeader,
  CardDescription,
  CardContent,
  Card,
  CardFooter,
} from "@/components/ui/card";
import RoomModel from "@/components/3D_interact/RoomModel";
import Spline from "@splinetool/react-spline";
import CardStack from "@/components/ui/card-stack";

export function CardStackDemo() {
  return (
    <div className="h-[40rem] flex items-center justify-center w-full">
      <CardStack items={product} />
    </div>
  );
}

export default function Home(){
  return (
    <div>
      <Header />
      <section id="Main-section" className="h-screen">
        <div className="w-full">
        <Spline scene="https://prod.spline.design/zjn66bHs3hgB06Om/scene.splinecode"/>
        {/* <RoomModel splineUrl="https://prod.spline.design/zjn66bHs3hgB06Om/scene.splinecode" /> */}
        </div>
      </section>
      <section id="Explore" className="bg-muted p-10 py-16 md:py-32 h-screen">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 mt-10 gap-10 justify-center items-center h-full">
            <div className="space-y-6">
              <div className="inline-block rounded-lg bg-red-400 px-3 py-1 text-sm text-white">
                Explore
              </div>
              <h1 className="text-8xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Explore our top-rated furniture pieces
              </h1>
              <p className="text-muted-foreground md:text-xl">
                Discover a wide range of high-quality furniture for your home or
                office. Rent what you need, when you need it.
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <Link href="/catalog">
                  <Button size="lg" className="w-full sm:w-auto">
                    Browse Furniture
                  </Button>
                </Link>
                <Link href="#Works">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    How It Works
                  </Button>
                </Link>
              </div>
            </div>
            <App />
          </div>
        </div>
      </section>
      <section
        id="Categories"
        className="p-8 mt-10 px-10 md:px-10 lg:px-15 h-screen"
      >
        <div id="Card" className="max-w-6xl mx-auto ">
          <div className="inline-block rounded-lg bg-red-400 px-3 py-1 text-sm text-white">
            Categories
          </div>
          <h1 className="mt-10 text-3xl mb-3 text-red-400 font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Explore our Categories
          </h1>
          <p className="mb-10 text-muted-foreground md:text-xl">
            We have everything for everyplace
          </p>
          <div className="grid grid-cols-3 gap-4 h-full">
            <Link href="/catalog">
              <Card
                className="text-white text-center w-full bg-purple hover:shadow-lg cursor-pointer inline-block rounded-2xl h-full"
                style={{
                  backgroundImage: `url('/living_room.jpg')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "300px",
                }}
              >
                <CardHeader>
                  <CardTitle>Living Room</CardTitle>
                </CardHeader>
              </Card>
            </Link>

            <Link href="/catalog">
              <Card
                className="text-black text-center w-full bg-purple hover:shadow-lg cursor-pointer rounded-2xl h-full"
                style={{
                  backgroundImage: `url('/bed_room.jpg')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "300px",
                }}
              >
                <CardHeader>
                  <CardTitle>Bedroom</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-black">
                    Rent beds, dressers, and other bedroom furniture to create
                    your perfect retreat.
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>

            <Link href="/catalog">
              <Card
                className="text-center text-white w-full hover:shadow-lg cursor-pointer rounded-2xl h-full"
                style={{
                  backgroundImage: `url('/office.jpg')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "300px",
                }}
              >
                <CardHeader>
                  <CardTitle>Office</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-bottom text-white">
                    Rent desks, chairs, and more to create a productive
                    workspace.
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>
      <section id="why" className="py-12 sm:py-16 lg:py-20 bg-muted">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Why Rent with Us?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Discover the benefits of renting furniture with our service.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 h-full">
            <div className="rounded-lg bg-background p-6 shadow">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <SofaIcon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-lg font-medium text-foreground">
                Flexible Rentals
              </h3>
              <p className="mt-2 text-muted-foreground">
                Rent furniture for as long as you need, with the option to
                extend or return at any time.
              </p>
            </div>
            <div className="rounded-lg bg-background p-6 shadow">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <TruckIcon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-lg font-medium text-foreground">
                Free Delivery
              </h3>
              <p className="mt-2 text-muted-foreground">
                We offer free delivery and setup for all rental furniture,
                making the process hassle-free.
              </p>
            </div>
            <div className="rounded-lg bg-background p-6 shadow">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <ShieldCheckIcon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-lg font-medium text-foreground">
                Quality Assurance
              </h3>
              <p className="mt-2 text-muted-foreground">
                All our furniture is well-maintained and inspected to ensure a
                great rental experience.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="Works" className="py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <img
              src="/Movers.jpg"
              width={500}
              height={500}
              alt="How It Works"
              className="mx-auto aspect-square object-cover rounded-2xl"
            />
            <div className="space-y-4">
              <h2 className="text-red-400 text-2xl font-bold tracking-tighter sm:text-3xl">
                How It Works
              </h2>
              <p className="text-muted-foreground md:text-lg">
                Renting furniture has never been easier. Follow these simple
                steps to get started.
              </p>
              <div className="grid gap-4">
                <div className="flex items-start gap-4">
                  <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center font-semibold">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold">Browse and Select</h3>
                    <p className="text-muted-foreground">
                      Explore our wide selection of furniture and choose what
                      you need.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center font-semibold">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold">Reserve and Pay</h3>
                    <p className="text-muted-foreground">
                      Secure your rental with a simple booking and payment
                      process.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center font-semibold">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold">Enjoy and Return</h3>
                    <p className="text-muted-foreground">
                      Receive your furniture, use it, and return it when you're
                      done.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-primary text-primary-foreground py-6 px-4 md:px-6">
        <div className="container flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-2">
            <SofaIcon className="w-6 h-6" />
            <span className="text-2xl font-bold">Ario!</span>
          </div>
          <nav className="flex items-center gap-4 mt-4 md:mt-0">
            <Link href="/about" className="hover:underline" prefetch={false}>
              About
            </Link>
            <Link href="/contact" className="hover:underline" prefetch={false}>
              Contact
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Terms
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Privacy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}

function SofaIcon(props) {
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
      <path d="M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3" />
      <path d="M2 11v5a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H6v-2a2 2 0 0 0-4 0Z" />
      <path d="M4 18v2" />
      <path d="M20 18v2" />
      <path d="M12 4v9" />
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

function ShieldCheckIcon(props) {
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
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}