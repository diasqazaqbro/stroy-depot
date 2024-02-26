import Image from "next/image";
import Link from "next/link";
import "./ProductList.scss";
import Arrow2 from "@/shared/ui/Icon/icon15";
import { useLocation } from "react-use";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore/lite";
import { db } from "@/shared/lib/config";

export type Product = {
  id: string;
  title: string;
  image: string;
  category: string;
};

export default function ProductList() {
  const location = useLocation();
  const category = location.pathname;
  const [productsList, setProductsList] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const productsCollection = collection(db, "products");
        const querySnapshot = await getDocs(productsCollection);
        const productsDocs = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Product[];
        setProductsList(productsDocs);
        console.log(productsDocs);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }

    fetchProducts();
  }, []);

  const filteredProductsByCategory = category
    ? productsList.filter(
        (product) => `/catalogs/${product.category}` === category
      )
    : productsList;

  return (
    <ul className="product__grid grid">
      {filteredProductsByCategory.map(({ id, title, image }) => (
        <Link
          href={`/product/${id}`}
          key={id}
          className="product__item mb-2.5 rounded-[15px] px-[14px] pt-[21px]"
        >
          <div className="product__item__image mb-2 py-[22px] px-2.5">
            <Image
              src={image}
              width={500}
              height={300}
              alt="product"
              className="object-cover"
            />
          </div>
          <h3 className="text-center font-semibold flex justify-center items-center pb-6">
            {title}
          </h3>
          <div className="flex items-center">
            <h4 className="hidden mr-2 mb-[13px]">Подробнее</h4>
            <Arrow2 className="flex justify-center items-center mb-[13px]" />
          </div>
        </Link>
      ))}
    </ul>
  );
}
