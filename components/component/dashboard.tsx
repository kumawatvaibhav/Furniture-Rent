"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function DashboardComponent() {
  const [search, setSearch] = useState("")
  const [filters, setFilters] = useState({
    availability: "all",
    category: "all",
  })
  const furniture = [
    {
      id: 1,
      name: "Leather Sofa",
      category:"sofa",
      description: "Comfortable and stylish leather sofa",
      image: "/placeholder.svg",
      availability: "available",
      price: 50,
    },
    {
      id: 2,
      name: "Wooden Dining Table",
      category:"table",
      description: "Elegant solid wood dining table",
      image: "/placeholder.svg",
      availability: "rented",
      price: 75,
    },
    {
      id: 3,
      name: "Plush Armchair",
      category:"armchair",
      description: "Cozy and inviting armchair",
      image: "/placeholder.svg",
      availability: "available",
      price: 35,
    },
    {
      id: 4,
      name: "Modern Bed Frame",
      category:"bed",
      description: "Minimalist and contemporary bed frame",
      image: "/placeholder.svg",
      availability: "available",
      price: 60,
    },
    {
      id: 5,
      name: "Rustic Coffee Table",
      category:"table",
      description: "Charming and durable coffee table",
      image: "/placeholder.svg",
      availability: "rented",
      price: 45,
    },
    {
      id: 6,
      name: "Chic Bookshelf",
      category:"bookshelf",
      description: "Stylish and functional bookshelf",
      image: "/placeholder.svg",
      availability: "available",
      price: 40,
    },
  ]
  const filteredFurniture = useMemo(() => {
    return furniture.filter((item) => {
      if (filters.availability !== "all" && item.availability !== filters.availability) {
        return false
      }
      if (filters.category !== "all" && item.category !== filters.category) {
        return false
      }
      return item.name.toLowerCase().includes(search.toLowerCase())
    })
  }, [filters, search])
  const totalItems = furniture.length
  const rentedItems = furniture.filter((item) => item.availability === "rented").length
  const availableItems = furniture.filter((item) => item.availability === "available").length
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-transparent text-primary-foreground py-4 px-6 flex items-center justify-between">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <span className="text-xl font-bold">Ario!</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#" className="text-sm font-medium hover:text-accent" prefetch={false}>
            Inventory
          </Link>
          <Link href="#" className="text-sm font-medium hover:text-accent" prefetch={false}>
            Rentals
          </Link>
          <Link href="#" className="text-sm font-medium hover:text-accent" prefetch={false}>
            Customers
          </Link>
          <Link href="#" className="text-sm font-medium hover:text-accent" prefetch={false}>
            Reports
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <BellIcon className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <UserIcon className="w-5 h-5" />
          </Button>
        </div>
      </header>
      <main className="flex-1 bg-background p-6 md:p-10">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2">
                  <FilterIcon className="w-5 h-5" />
                  <span>
                    {filters.availability === "all"
                      ? "All"
                      : filters.availability === "available"
                      ? "Available"
                      : "Rented"}
                  </span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem onSelect={() => setFilters({ ...filters, availability: "all" })}>
                  All
                </DropdownMenuItem>
                <DropdownMenuItem onSelect={() => setFilters({ ...filters, availability: "available" })}>
                  Available
                </DropdownMenuItem>
                <DropdownMenuItem onSelect={() => setFilters({ ...filters, availability: "rented" })}>
                  Rented
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2">
                  <ListIcon className="w-5 h-5" />
                  <span>{filters.category === "all" ? "All Categories" : filters.category}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem onSelect={() => setFilters({ ...filters, category: "all" })}>
                  All Categories
                </DropdownMenuItem>
                <DropdownMenuItem onSelect={() => setFilters({ ...filters, category: "sofa" })}>
                  Sofas
                </DropdownMenuItem>
                <DropdownMenuItem onSelect={() => setFilters({ ...filters, category: "table" })}>
                  Tables
                </DropdownMenuItem>
                <DropdownMenuItem onSelect={() => setFilters({ ...filters, category: "chairs" })}>
                  Chairs
                </DropdownMenuItem>
                <DropdownMenuItem onSelect={() => setFilters({ ...filters, category: "beds" })}>Beds</DropdownMenuItem>
                <DropdownMenuItem onSelect={() => setFilters({ ...filters, category: "storage" })}>
                  Storage
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="relative flex-1 max-w-md">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search furniture..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 w-full"
            />
          </div>
          <Link href="/dashboard/add_product">
            <Button className="bg-red-400">
              <PlusIcon className="w-5 h-5 mr-2" />
              Add Furniture
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredFurniture.map((item) => (
            <Card key={item.id}>
              <img
                src="/placeholder.svg"
                alt={item.name}
                width={400}
                height={300}
                className="rounded-t-md object-cover w-full h-48"
                style={{ aspectRatio: "400/300", objectFit: "cover" }}
              />
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-muted-foreground text-sm line-clamp-2">{item.description}</p>
                <div className="flex items-center justify-between mt-4">
                  <Badge variant={item.availability === "available" ? "secondary" : "outline"}>
                    {item.availability}
                  </Badge>
                  <div className="text-lg font-semibold">${item.price}/month</div>
                </div>
              </CardContent>
              <CardFooter className="p-4 flex justify-end gap-2">
                <Button variant="outline" size="sm">
                  <FilePenIcon className="w-4 h-4 mr-1" />
                  Edit
                </Button>
                <Button variant="outline" size="sm">
                  <TrashIcon className="w-4 h-4 mr-1" />
                  Delete
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
      <footer className="bg-muted p-6 md:p-10 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center gap-4">
          <SofaIcon className="w-6 h-6" />
          <span className="text-lg font-bold">Ario!</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 md:mt-0">
          <div className="flex flex-col items-center md:items-start">
            <span className="text-muted-foreground text-sm font-medium">Total Items</span>
            <span className="text-2xl font-bold">{totalItems}</span>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <span className="text-muted-foreground text-sm font-medium">Rented Items</span>
            <span className="text-2xl font-bold">{rentedItems}</span>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <span className="text-muted-foreground text-sm font-medium">Available Items</span>
            <span className="text-2xl font-bold">{availableItems}</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

function BellIcon(props) {
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
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  )
}


function FilePenIcon(props) {
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
      <path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v10" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M10.4 12.6a2 2 0 1 1 3 3L8 21l-4 1 1-4Z" />
    </svg>
  )
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


function ListIcon(props) {
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
      <line x1="8" x2="21" y1="6" y2="6" />
      <line x1="8" x2="21" y1="12" y2="12" />
      <line x1="8" x2="21" y1="18" y2="18" />
      <line x1="3" x2="3.01" y1="6" y2="6" />
      <line x1="3" x2="3.01" y1="12" y2="12" />
      <line x1="3" x2="3.01" y1="18" y2="18" />
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


function TrashIcon(props) {
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
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  )
}


function UserIcon(props) {
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
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}
