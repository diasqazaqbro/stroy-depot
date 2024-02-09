import { ProductsList } from "@/entities/ProductsList"
import styles from './PopularProducts.module.scss'

export const PopularProducts = () => {
  return (
    <section className={`${styles.section} container`}>
      <h2 className={`${styles.section__title} mb-[25px]`}>Популярные товары</h2>
      <ProductsList />
      <h3 className="md:text-right mt-[50px] font-semibold">Все товары</h3>
    </section>
  )
}