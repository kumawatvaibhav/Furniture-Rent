'use client';

import { useEffect, useState } from "react";
import Header from "@/components/component/header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationLink,
} from "@/components/ui/pagination";
import { PlusIcon, SearchIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface FurnitureItem {
  _id: string;
  name: string;
  price: number;
  category: string;
  image: string;
}

export default function Catalog() {
  const [furnitureItems, setFurnitureItems] = useState<FurnitureItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState(""); 
  const [currentUser, setCurrentUser] = useState(null); 

  const itemsPerPage = 10;
  const categories = ["Chairs", "Tables", "Sofas", "Beds", "Desks"]; 

  useEffect(() => {
    const user = sessionStorage.getItem('currentUser');
    if (user) {
      const parsedUser = JSON.parse(user);
      console.log("Current User:", parsedUser); // Debugging: Check the user object
      setCurrentUser(parsedUser); // Set user state
    }

    const fetchFurnitureData = async () => {
      try {
        const response = await fetch("/api/furniture/list");
        const data = await response.json();
        console.log("Fetched furniture data:", data);
        setFurnitureItems(data.furniture); 
        setLoading(false);
      } catch (error) {
        console.error("Error fetching furniture data:", error);
        setLoading(false);
      }
    };

    fetchFurnitureData();
  }, []);
  
  const addToCart = async (furnitureId: string) => {
    try {
      // Retrieve the session data
      const sessionData = sessionStorage.getItem('user');
      console.log('Session Data:', sessionData); // Check if sessionData is being retrieved
  
      if (!sessionData) {
        console.error('No session data found');
        alert("Need to login first");
        return;
      }
  
      // Parse the session data
      const parsedData = JSON.parse(sessionData);
      console.log('Parsed Session Data:', parsedData); // Check parsed session data
  
      // Access the userId inside parsedData.data
      const userId = parsedData?.userId;
  
      // Ensure userId is defined
      if (!userId) {
        console.error('User not logged in or user ID is missing');
        return;
      }
  
      console.log('Adding to cart for user ID:', userId);
  
      // Send the add to cart request to the API
      const response = await fetch('/api/cart/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: userId,       // Pass the userId
          furnitureId: furnitureId, // Pass the furnitureId
          quantity: 1,          // Default quantity, you can modify as needed
        }),
      });
  
      const result = await response.json();
  
      if (response.status === 200) {
        console.log('Item added to cart successfully:', result);
        alert("Item added to cart")
      } else {
        console.error('Error adding to cart:', result.message);
      }
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };
  

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = furnitureItems.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(furnitureItems.length / itemsPerPage);

  // Filter by search term and category
  const filteredItems = currentItems.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory ? item.category === selectedCategory : true;
    return matchesSearch && matchesCategory;
  });

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

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
                Browse our wide selection of furniture for your home or office.
              </p>
            </div>

            <div className="mt-10 flex items-center justify-between">
              <div className="relative w-full max-w-md">
                <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search furniture..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 w-full rounded-2xl border border-muted focus:border-primary focus:ring-primary"
                />
              </div>

              <div className="relative">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="block w-full border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded-2xl focus:outline-none bg-muted focus:border-gray-500"
                >
                  <option value="">All Categories</option>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {loading ? (
              <p>Loading...</p>
            ) : furnitureItems.length > 0 ? (
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
                {filteredItems.map((item) => (
                  <div key={item._id} className="group relative">
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 lg:aspect-none group-hover:opacity-75">
                      <Image
                        src={item.image || "/path/to/placeholder.jpg"}
                        alt={item.name}
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                        width={300}
                        height={300}
                      />
                    </div>
                    <div className="mt-4 flex justify-between">
                      <div>
                        <h3 className="text-sm font-medium text-foreground">
                          <span aria-hidden="true" className="absolute inset-0" />
                          {item.name}
                        </h3>
                        <p className="mt-1 text-sm text-muted-foreground">
                          ${item.price}/month
                        </p>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="rounded-full p-2 hover:bg-primary hover:text-primary-foreground z-10"
                        onClick={() => {
                          addToCart(item._id);
                        }}
                      >
                        <PlusIcon className="h-5 w-5" />
                        <span className="sr-only">Add to cart</span>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p>No furniture items found.</p>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-10 flex justify-center">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      {currentPage > 1 ? (
                        <PaginationPrevious
                          href="#"
                          onClick={handlePreviousPage}
                        />
                      ) : (
                        <span className="opacity-50 cursor-not-allowed">Previous</span>
                      )}
                    </PaginationItem>

                    {[...Array(totalPages)].map((_, i) => (
                      <PaginationItem key={i}>
                        <PaginationLink
                          href="#"
                          isActive={i + 1 === currentPage}
                          onClick={() => setCurrentPage(i + 1)}
                        >
                          {i + 1}
                        </PaginationLink>
                      </PaginationItem>
                    ))}

                    <PaginationItem>
                      {currentPage < totalPages ? (
                        <PaginationNext
                          href="#"
                          onClick={handleNextPage}
                        />
                      ) : (
                        <span className="opacity-50 cursor-not-allowed">Next</span>
                      )}
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

