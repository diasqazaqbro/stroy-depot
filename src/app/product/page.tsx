import { ProductsPage } from "@/pages/products"
import { Layout } from "@/widgets/Layout/Layout"

export default function Products() {
  return (
    <Layout>
      <main className="main mt-[124px] mb-[176px]">
        <ProductsPage />
      </main>
    </Layout>
  )
}