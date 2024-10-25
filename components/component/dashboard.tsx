"use client"

import { useState, useEffect, useMemo } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BellIcon, FilePenIcon, FilterIcon, ListIcon, PlusIcon, SearchIcon, SofaIcon, TrashIcon, UserIcon } from "lucide-react"
import Image from "next/image"

// Define a type for furniture items
interface FurnitureItem {
  id: number;
  name: string;
  category: string;
  availability: "available" | "rented";
  description: string;
  price: number;
  image: string;
}

export function DashboardComponent() {
  const [search, setSearch] = useState("")
  const [filters, setFilters] = useState({
    availability: "all",
    category: "all",
  })
  const [furniture, setFurniture] = useState<FurnitureItem[]>([]) // Define the state as an array of FurnitureItem
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Fetch furniture data from API
  useEffect(() => {
    const fetchFurnitureData = async () => {
      try {
        const response = await fetch("/api/furniture/list");
        const data = await response.json();
        console.log("Fetched furniture data:", data);
        setFurniture(data.furniture); 
        setLoading(false);
      } catch (error) {
        console.error("Error fetching furniture data:", error);
        setError("Failed to load furniture data.");
        setLoading(false);
      }
    };

    fetchFurnitureData();
  }, []);

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
  }, [filters, search, furniture])

  const totalItems = furniture.length
  const rentedItems = furniture.filter((item) => item.availability === "rented").length
  const availableItems = furniture.filter((item) => item.availability === "available").length

  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>Error: {error}</p>
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-transparent text-primary-foreground py-4 px-6 flex items-center justify-between">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <span className="text-3xl font-sans">Ario!</span>
        </Link>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <Link href="/profile">
              <UserIcon className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </header>
      <main className="flex-1 bg-background p-6 md:p-5">
        <h1 className="mb-10 text-3xl font-bold text-center text-red-500">Furniture Dashboard</h1>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <DropdownMenu>
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
              className="rounded-md pl-10 w-full"
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
            <Card key={item.id} className="shadow-lg">
              <Image src={item.image} alt={item.name} width={200} height={200} />
              <CardContent>
                <h3 className="text-lg font-bold">{item.name}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
                <Badge variant="default">
                  {item.availability === "available" ? "Available" : "Rented"}
                </Badge>
                <p className="mt-2 text-xl font-semibold text-gray-700">₹{item.price}</p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="text-red-500">
                  <TrashIcon className="w-5 h-5 mr-2" />
                  Delete
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}
