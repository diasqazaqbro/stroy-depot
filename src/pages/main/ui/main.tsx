import Layout  from "@/widgets/Layout/Layout";
import About from "@/widgets/LayoutMain/About/ui/About"
import Gallery  from "@/widgets/LayoutMain/Gallery/ui/Gallery"
import PopularProducts from "@/widgets/LayoutMain/PopularProducts/ui/PopularProducts"
import Questions from "@/widgets/LayoutMain/Questions/ui/Questions"
import HeroPage from "@/widgets/LayoutMain/heropage/ui/heropage"

export default function MainPage() {
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