/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/ZBtX0OAd7pC
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Arimo } from 'next/font/google'
import { Libre_Franklin } from 'next/font/google'

arimo({
  subsets: ['latin'],
  display: 'swap',
})

libre_franklin({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible"

export function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <SofaIcon className="h-6 w-6" />
          <span className="sr-only">Furniture Rentals</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Living Room
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Bedroom
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Office
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            FAQ
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full pt-12 md:pt-24 lg:pt-32">
          <div className="container px-4 md:px-6 space-y-10 xl:space-y-16">
            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
              <div>
                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  Rent Furniture, Live Comfortably
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Discover the perfect furniture for your home or office with our hassle-free rental service.
                </p>
                <div className="mt-6">
                  <Link
                    href="#"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    prefetch={false}
                  >
                    Rent Now
                  </Link>
                </div>
              </div>
              <img
                src="/placeholder.svg"
                width="1270"
                height="700"
                alt="Hero"
                className="mx-auto aspect-[16/9] overflow-hidden rounded-t-xl object-cover"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Featured Categories</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Explore Our Furniture Collections</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Browse our wide selection of furniture for every room in your home or office.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <Link
                href="#"
                className="group relative overflow-hidden rounded-lg shadow-lg transition-all hover:shadow-xl"
                prefetch={false}
              >
                <img
                  src="/placeholder.svg"
                  width="550"
                  height="310"
                  alt="Living Room"
                  className="aspect-video w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="text-lg font-bold group-hover:underline">Living Room</h3>
                  <p className="text-sm">Sofas, chairs, coffee tables, and more.</p>
                </div>
              </Link>
              <Link
                href="#"
                className="group relative overflow-hidden rounded-lg shadow-lg transition-all hover:shadow-xl"
                prefetch={false}
              >
                <img
                  src="/placeholder.svg"
                  width="550"
                  height="310"
                  alt="Bedroom"
                  className="aspect-video w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="text-lg font-bold group-hover:underline">Bedroom</h3>
                  <p className="text-sm">Beds, dressers, nightstands, and more.</p>
                </div>
              </Link>
              <Link
                href="#"
                className="group relative overflow-hidden rounded-lg shadow-lg transition-all hover:shadow-xl"
                prefetch={false}
              >
                <img
                  src="/placeholder.svg"
                  width="550"
                  height="310"
                  alt="Office"
                  className="aspect-video w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="text-lg font-bold group-hover:underline">Office</h3>
                  <p className="text-sm">Desks, chairs, storage, and more.</p>
                </div>
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Featured Products</div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Rent the Best Furniture</h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Browse our curated selection of high-quality furniture pieces for your home or office.
                  </p>
                </div>
              </div>
              <div className="mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <div className="relative overflow-hidden rounded-lg shadow-lg transition-all hover:shadow-xl">
                  <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                    <span className="sr-only">View Product</span>
                  </Link>
                  <img
                    src="/placeholder.svg"
                    width="550"
                    height="310"
                    alt="Product 1"
                    className="aspect-video w-full object-cover object-center"
                  />
                  <div className="p-4 bg-background">
                    <h3 className="text-xl font-bold">Modern Sofa</h3>
                    <p className="text-sm text-muted-foreground">$49/month</p>
                    <p className="text-sm text-muted-foreground">Dimensions: 80" x 35" x 32"</p>
                    <div className="mt-4">
                      <Button size="sm" className="w-full">
                        Rent Now
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-lg shadow-lg transition-all hover:shadow-xl">
                  <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                    <span className="sr-only">View Product</span>
                  </Link>
                  <img
                    src="/placeholder.svg"
                    width="550"
                    height="310"
                    alt="Product 2"
                    className="aspect-video w-full object-cover object-center"
                  />
                  <div className="p-4 bg-background">
                    <h3 className="text-xl font-bold">Ergonomic Office Chair</h3>
                    <p className="text-sm text-muted-foreground">$29/month</p>
                    <p className="text-sm text-muted-foreground">Dimensions: 27" x 27" x 45"</p>
                    <div className="mt-4">
                      <Button size="sm" className="w-full">
                        Rent Now
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-lg shadow-lg transition-all hover:shadow-xl">
                  <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                    <span className="sr-only">View Product</span>
                  </Link>
                  <img
                    src="/placeholder.svg"
                    width="550"
                    height="310"
                    alt="Product 3"
                    className="aspect-video w-full object-cover object-center"
                  />
                  <div className="p-4 bg-background">
                    <h3 className="text-xl font-bold">King Size Bed</h3>
                    <p className="text-sm text-muted-foreground">$79/month</p>
                    <p className="text-sm text-muted-foreground">Dimensions: 80" x 76" x 12"</p>
                    <div className="mt-4">
                      <Button size="sm" className="w-full">
                        Rent Now
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-lg shadow-lg transition-all hover:shadow-xl">
                  <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                    <span className="sr-only">View Product</span>
                  </Link>
                  <img
                    src="/placeholder.svg"
                    width="550"
                    height="310"
                    alt="Product 4"
                    className="aspect-video w-full object-cover object-center"
                  />
                  <div className="p-4 bg-background">
                    <h3 className="text-xl font-bold">Minimalist Bookshelf</h3>
                    <p className="text-sm text-muted-foreground">$39/month</p>
                    <p className="text-sm text-muted-foreground">Dimensions: 72" x 16" x 84"</p>
                    <div className="mt-4">
                      <Button size="sm" className="w-full">
                        Rent Now
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Frequently Asked Questions</div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Have Questions? We Have Answers.</h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Check out our FAQ section to find answers to common questions about our furniture rental service.
                  </p>
                </div>
              </div>
              <div className="mx-auto grid gap-4">
                <Collapsible>
                  <CollapsibleTrigger className="flex items-center justify-between rounded-md bg-muted px-4 py-3 font-medium transition-colors hover:bg-muted/50 [&[data-state=open]>svg]:rotate-90">
                    How does the furniture rental process work?
                    <ChevronRightIcon className="h-5 w-5 transition-all" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="px-4 py-3 text-muted-foreground">
                    <p>
                      To rent furniture, simply browse our selection, choose the items you want, and place your order.
                      We'll deliver the furniture to your doorstep and handle all the logistics. When you're done, we'll
                      pick it up and you can move on to your next rental.
                    </p>
                  </CollapsibleContent>
                </Collapsible>
                <Collapsible>
                  <CollapsibleTrigger className="flex items-center justify-between rounded-md bg-muted px-4 py-3 font-medium transition-colors hover:bg-muted/50 [&[data-state=open]>svg]:rotate-90">
                    What is the rental period and can I extend it?
                    <ChevronRightIcon className="h-5 w-5 transition-all" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="px-4 py-3 text-muted-foreground">
                    <p>
                      Our standard rental period is 3 months, but you can extend your rental for as long as you need.
                      Just let us know and we'll work with you to extend your rental agreement.
                    </p>
                  </CollapsibleContent>
                </Collapsible>
                <Collapsible>
                  <CollapsibleTrigger className="flex items-center justify-between rounded-md bg-muted px-4 py-3 font-medium transition-colors hover:bg-muted/50 [&[data-state=open]>svg]:rotate-90">
                    What happens
                  </CollapsibleTrigger>
                </Collapsible>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
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
