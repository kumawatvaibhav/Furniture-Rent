import Header from "@/components/component/header"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Pagination, PaginationContent, PaginationItem, PaginationPrevious, PaginationLink, PaginationEllipsis, PaginationNext } from "@/components/ui/pagination";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuCheckboxItem } from "@radix-ui/react-dropdown-menu";
import { Link } from "lucide-react";

export default function catalog(){
    return (
      <div className="catalog">
        <Header />
        <main className="flex-1">
          <section className="py-12 sm:py-16 lg:py-20">
            <div className="container px-4 sm:px-6 lg:px-8">
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl text-red-400 font-bold tracking-tight text-foreground sm:text-4xl">
                  Explore Our Catalog
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Browse our wide selection of furniture for your home or
                  office.
                </p>
              </div>
              <div className="mt-10 flex items-center justify-between">
                <div className="relative w-full max-w-md">
                  <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search furniture..."
                    className="pl-10 pr-4 py-2 w-full rounded-2xl border border-muted focus:border-primary focus:ring-primary"
                  />
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="outline"
                      className="flex items-center gap-2"
                    >
                      <FilterIcon className="h-5 w-5" />
                      <span>Filter</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56">
                    <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuCheckboxItem>
                      Living Room
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>Bedroom</DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>Office</DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>Outdoor</DropdownMenuCheckboxItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuCheckboxItem>
                      Under $50/month
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>
                      $50-$100/month
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>
                      Over $100/month
                    </DropdownMenuCheckboxItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
                <div className="group relative">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 lg:aspect-none group-hover:opacity-75">
                    <img
                      src="/Furniture/Beds/bed.jpg"
                      alt="Furniture image"
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                      width={300}
                      height={300}
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm font-medium text-foreground">
                        <Link href="/pr">
                          <span
                            aria-hidden="true"
                            className="absolute inset-0"
                          />
                          Modern Sofa
                        </Link>
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        $49/month
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="rounded-full p-2 hover:bg-primary hover:text-primary-foreground"
                    >
                      <PlusIcon className="h-5 w-5" />
                      <span className="sr-only">Add to cart</span>
                    </Button>
                  </div>
                </div>
                <div className="group relative">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 lg:aspect-none group-hover:opacity-75">
                    <img
                      src="/placeholder.svg"
                      alt="Furniture image"
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                      width={300}
                      height={300}
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm font-medium text-foreground">
                        <Link href="#" prefetch={false}>
                          <span
                            aria-hidden="true"
                            className="absolute inset-0"
                          />
                          Ergonomic Chair
                        </Link>
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        $29/month
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="rounded-full p-2 hover:bg-primary hover:text-primary-foreground"
                    >
                      <PlusIcon className="h-5 w-5" />
                      <span className="sr-only">Add to cart</span>
                    </Button>
                  </div>
                </div>
                <div className="group relative">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 lg:aspect-none group-hover:opacity-75">
                    <img
                      src="/placeholder.svg"
                      alt="Furniture image"
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                      width={300}
                      height={300}
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm font-medium text-foreground">
                        <Link href="#" prefetch={false}>
                          <span
                            aria-hidden="true"
                            className="absolute inset-0"
                          />
                          Wooden Desk
                        </Link>
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        $39/month
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="rounded-full p-2 hover:bg-primary hover:text-primary-foreground"
                    >
                      <PlusIcon className="h-5 w-5" />
                      <span className="sr-only">Add to cart</span>
                    </Button>
                  </div>
                </div>
                <div className="group relative">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 lg:aspect-none group-hover:opacity-75">
                    <img
                      src="/placeholder.svg"
                      alt="Furniture image"
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                      width={300}
                      height={300}
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm font-medium text-foreground">
                        <Link href="#" prefetch={false}>
                          <span
                            aria-hidden="true"
                            className="absolute inset-0"
                          />
                          Leather Armchair
                        </Link>
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        $59/month
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="rounded-full p-2 hover:bg-primary hover:text-primary-foreground"
                    >
                      <PlusIcon className="h-5 w-5" />
                      <span className="sr-only">Add to cart</span>
                    </Button>
                  </div>
                </div>
                <div className="group relative">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 lg:aspect-none group-hover:opacity-75">
                    <img
                      src="/placeholder.svg"
                      alt="Furniture image"
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                      width={300}
                      height={300}
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm font-medium text-foreground">
                        <Link href="#" prefetch={false}>
                          <span
                            aria-hidden="true"
                            className="absolute inset-0"
                          />
                          Minimalist Bookshelf
                        </Link>
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        $39/month
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="rounded-full p-2 hover:bg-primary hover:text-primary-foreground"
                    >
                      <PlusIcon className="h-5 w-5" />
                      <span className="sr-only">Add to cart</span>
                    </Button>
                  </div>
                </div>
                <div className="group relative">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 lg:aspect-none group-hover:opacity-75">
                    <img
                      src="/placeholder.svg"
                      alt="Furniture image"
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                      width={300}
                      height={300}
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm font-medium text-foreground">
                        <Link href="#" prefetch={false}>
                          <span
                            aria-hidden="true"
                            className="absolute inset-0"
                          />
                          Rustic Coffee Table
                        </Link>
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        $69/month
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="rounded-full p-2 hover:bg-primary hover:text-primary-foreground"
                    >
                      <PlusIcon className="h-5 w-5" />
                      <span className="sr-only">Add to cart</span>
                    </Button>
                  </div>
                </div>
              </div>
              <div className="mt-10 flex justify-center">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious href="#" />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#" isActive>
                        2
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationEllipsis />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationNext href="#" />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
}

function FilterIcon(props) {
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
        <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
      </svg>
    )
  }
  
  
  function PlusIcon(props) {
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
        <path d="M5 12h14" />
        <path d="M12 5v14" />
      </svg>
    )
  }
  
  
  function SearchIcon(props) {
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
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
    )
  }
  
  
  function ShoppingCartIcon(props) {
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
        <circle cx="8" cy="21" r="1" />
        <circle cx="19" cy="21" r="1" />
        <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
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