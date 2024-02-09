import { Header } from "@/widgets/Header"
import { PopularProducts } from "@/widgets/LayoutMain/PopularProducts"
import { HeroPage } from "@/widgets/LayoutMain/heropage/ui/heropage"

export const MainPage = () => {
  return (
    <>
      <Header />
      <main className="main">
        <HeroPage />
        <PopularProducts />
      </main>
    </>
      
  )
}