import { Header } from "@/widgets/Header"
import { About } from "@/widgets/LayoutMain/About/ui/About"
import { Gallery } from "@/widgets/LayoutMain/Gallery"
import { PopularProducts } from "@/widgets/LayoutMain/PopularProducts"
import { Questions } from "@/widgets/LayoutMain/Questions"
import { HeroPage } from "@/widgets/LayoutMain/heropage/ui/heropage"

export const MainPage = () => {
  return (
    <>
      <Header />

      <main className="main">
        <HeroPage />

        <PopularProducts />

        <About />

        <Gallery />

        <Questions />
      </main>
    </>
  )
}