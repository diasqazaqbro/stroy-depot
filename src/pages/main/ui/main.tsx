import { Layout } from "@/widgets/Layout/Layout";
import { About } from "@/widgets/LayoutMain/About/ui/About"
import { Gallery } from "@/widgets/LayoutMain/Gallery"
import { Contacts } from "@/widgets/LayoutMain/OurContacts/ui/Contacts"
import { PopularProducts } from "@/widgets/LayoutMain/PopularProducts"
import { Questions } from "@/widgets/LayoutMain/Questions"
import { HeroPage } from "@/widgets/LayoutMain/heropage/ui/heropage"

export const MainPage = () => {
  return (
    <>
      <Layout >
        <HeroPage />
        <PopularProducts />

        <About />

        <Gallery />

        <Questions />

      </Layout>
    </>
  )
}