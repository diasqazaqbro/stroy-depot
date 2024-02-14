import { ProductList } from "@/entities/ProductList"
import { ProductFilter } from "@/widgets/Products/ui/Products"

export default function ProductsPage() {
  return (
    <section className="container">
      <div className="flex">
        <ProductFilter />
        <ProductList />
      </div>
    </section>
  )
}