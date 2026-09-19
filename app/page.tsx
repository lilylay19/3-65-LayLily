import Navbar from "@/components/layout/NavBar";
import Products from "@/components/product/Product";


export default function Home() {
  return (
    <main className="p-6">
      <Navbar/>
      <h1 className="mb-6 text-3xl font-bold">Products</h1>
    <Products />
    </main>
  );
}
