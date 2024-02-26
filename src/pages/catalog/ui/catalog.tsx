import CatalogList from "@/entities/CatalogList/ui/CatalogList"
import Goods from "@/entities/Goods/ui/Goods"

export default function CatalogPages() {
  
  return (
    <section className="container mt-[60px] md:mt-[97px]">
      <div className="md:flex">
        <CatalogList />
      </div>
    </section>
  )
}