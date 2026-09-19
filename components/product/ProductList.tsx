"use client";

import { useGetProductsQuery } from "@/lib/productApi";


export default function ProductList() {
  const { data, isLoading, error } = useGetProductsQuery();

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>Something went wrong.</p>;

  return (
    <main>
      {data?.map((product) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>{product.category.name}</p>
          <p>${product.price}</p>
        </div>
      ))}
    </main>
  );
}
