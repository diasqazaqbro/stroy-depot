import ProductList from "@/entities/ProductList/ui/ProdutctList"
import ProductFilter from "@/widgets/Products/ui/Products"

export default function ProductsPage() {
  return (
    <section className="container">
      <div className="md:flex">
        <ProductFilter />
        <ProductList />
      </div>
    </section>
  )
}
