import { fetchAllProduct ,fetchProduct} from "@/lib/api";
import ProductGrid from "@/components/layout/ProductGrid";
import { ProductCardProps } from "@/components/layout/ProductCard";

export default async function Home() {
  const product:ProductCardProps[] = await fetchAllProduct().then(res => res.json())

  return (
    <main>
      <ProductGrid data={product}/>
    </main>
  )
}
