import ProductsPage from "@/pages/products/ui/products"
import Layout from "@/widgets/Layout/Layout"
import { useLocation } from "react-use"

export default function Products() {

  return (
    <Layout>
      <main className="main md:mt-[124px] mt-[76px] mb-[66px] md:mb-[176px]">
        <ProductsPage /> 
      </main>
    </Layout>
  )
}