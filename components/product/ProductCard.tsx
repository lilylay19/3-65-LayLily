import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Product } from "@/types/api";



type CardImageProps = {
  product: Product;
};

export default function ProductCard({ product }: CardImageProps) {
  return (
    <Card className="relative mx-auto w-full max-w-sm pt-0">
      <div className="absolute inset-0 z-30 aspect-video bg-black/35" />

      <img
        src={product.image}
        alt={product.title}
        className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
      />

      <CardHeader>
        <CardTitle>{product.title}</CardTitle>

        <CardDescription>
          {product.description}
        </CardDescription>
      </CardHeader>

      <CardFooter>
        ${product.price}
      </CardFooter>
    </Card>
  );
}
