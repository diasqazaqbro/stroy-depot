import { CatalogList } from "@/entities/CatalogList/ui/CatalogList"
import { Goods } from "@/entities/Goods/ui/Goods"

export const CatalogPages = () => {
  return (
    <section className="container mt-[97px]">
      <div className="flex">
        <Goods />
        <CatalogList />
      </div>
    </section>
  )
}