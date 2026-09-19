"use client";

import { useState } from "react";


import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useGetProductsQuery } from "@/lib/productApi";
import ProductCard from "./ProductCard";

const PRODUCTS_PER_PAGE = 9;
const TOTAL_PAGES = 3;

export default function Products() {
  const [currentPage, setCurrentPage] = useState(1);

  const {
    data: products,
    isLoading,
    isError,
  } = useGetProductsQuery();

  if (isLoading) {
    return <p>Loading products...</p>;
  }

  if (isError || !products) {
    return <p>Failed to load products.</p>;
  }


  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;

  const currentProducts = products.slice(
    startIndex,
    startIndex + PRODUCTS_PER_PAGE
  );


  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

 
  const handleNext = () => {
    if (currentPage < TOTAL_PAGES) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div>
   
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {currentProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>

 
      <Pagination className="mt-8">
        <PaginationContent>

 
          <PaginationItem>
            <PaginationPrevious
              href="#"
              onClick={(event) => {
                event.preventDefault();
                handlePrevious();
              }}
            />
          </PaginationItem>

     
          {Array.from(
            { length: TOTAL_PAGES },
            (_, index) => index + 1
          ).map((page) => (
            <PaginationItem key={page}>
              <PaginationLink
                href="#"
                isActive={currentPage === page}
                onClick={(event) => {
                  event.preventDefault();
                  setCurrentPage(page);
                }}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          ))}

          {/* Next */}
          <PaginationItem>
            <PaginationNext
              href="#"
              onClick={(event) => {
                event.preventDefault();
                handleNext();
              }}
            />
          </PaginationItem>

        </PaginationContent>
      </Pagination>
    </div>
  );
}


