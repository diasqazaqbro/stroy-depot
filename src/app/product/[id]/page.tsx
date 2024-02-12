import { SoloProd } from "@/pages/solo-prod/ui/solo-prod";
import { Layout } from "@/widgets/Layout/Layout";

export default function ProductsCheck() {
  return (
    <Layout>
      <main className="main container mt-[75px] mb-[35px]">
        <h1 className="mb-[5px]">Название товара</h1>
        <h3 className="mb-[35px]">Код товара: 12353245</h3>
        <SoloProd />
      </main>
    </Layout>
  )
}