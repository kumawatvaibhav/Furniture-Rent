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
import { Link } from "lucide-react";

export default function Catalog() {
  const [furnitureItems, setFurnitureItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState(""); // To store selected category
  const itemsPerPage = 10;

  const categories = ["Chairs", "Tables", "Sofas", "Beds", "Desks"]; // Sample categories

  useEffect(() => {
    const fetchFurnitureData = async () => {
      try {
        const response = await fetch("https://66f278d171c84d80587562dc.mockapi.io/api/Product");
        const data = await response.json();
        console.log("Fetched furniture data:", data); // Debug: Check the data
        setFurnitureItems(data); // Assuming API returns a list of furniture items
        setLoading(false);
      } catch (error) {
        console.error("Error fetching furniture data:", error);
        setLoading(false);
      }
    };

    fetchFurnitureData();
  }, []);

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
              {/* Search Input */}
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

              {/* Category Filter Dropdown */}
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
                  <div key={item.id} className="group relative">
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 lg:aspect-none group-hover:opacity-75">
                      <img
                        src={item.imageUrl || "/path/to/placeholder.jpg"}
                        alt={item.name}
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                        width={300}
                        height={300}
                      />
                    </div>
                    <div className="mt-4 flex justify-between">
                      <div>
                        <h3 className="text-sm font-medium text-foreground">
                          <Link href={`/furniture/${item.id}`}>
                            <span aria-hidden="true" className="absolute inset-0" />
                            {item.name}
                          </Link>
                        </h3>
                        <p className="mt-1 text-sm text-muted-foreground">
                          ${item.price}/month
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
                      <PaginationPrevious
                        href="#"
                        onClick={handlePreviousPage}
                        disabled={currentPage === 1}
                      />
                    </PaginationItem>

                    {/* Display page numbers dynamically */}
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
                      <PaginationNext
                        href="#"
                        onClick={handleNextPage}
                        disabled={currentPage === totalPages}
                      />
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

function PlusIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}

function SearchIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
