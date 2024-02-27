import PopularProductsList from "@/entities/ProductsList/ui/ProductsList"
import Link from "next/link";
import styles from './PopularProducts.module.scss';

export default function PopularProducts() {
  return (
    <section className={`${styles.section} container`}>
      <h2 className={`${styles.section__title} mb-[25px]`}>Популярные товары</h2>
      <PopularProductsList />
      <Link href="/catalogs"><h3 className="md:text-right pt-[50px] font-semibold">Все товары</h3></Link>
    </section>
  )
}