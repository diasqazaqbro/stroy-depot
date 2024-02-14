import CatalogPages from "@/pages/catalog/ui/catalog";
import Layout from "@/widgets/Layout/Layout";

export default function Catalog() {
  return (
    <Layout>
      <main className="main pb-[103px]">
        <CatalogPages />
      </main>
    </Layout>
  )
}