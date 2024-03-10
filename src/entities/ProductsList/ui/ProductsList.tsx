"use client";
import Image from "next/image";
import "./ProductsList.scss";
import Arrow from "@/shared/ui/Icon/icon2";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Timestamp, collection, getDocs } from "firebase/firestore/lite";
import { db } from "@/shared/lib/config";
import { Product } from "@/entities/ProductList/ui/ProdutctList";

interface IProduct extends Product {
  importasntProducts: boolean;
  time_posted: Timestamp;
}

export default function PopularProductsList() {
  const [productsList, setProductsList] = useState<IProduct[]>([]); // Устанавливаем тип для списка продуктов
  const data = [
    { id: "1", name: "Ultra Fast 70", image: "/UltraFast700.png" },
    { id: "2", name: "EURO Клей", image: "/Euro.png" },
    { id: "3", name: "Ultra Fast 70", image: "/UltraFast70.png" },
    { id: "4", name: "Ultra Fast 70", image: "/2UltraFast70.png" },
  ];

  useEffect(() => {
    async function fetchProducts() {
      try {
        const productsCollection = collection(db, "products");
        const querySnapshot = await getDocs(productsCollection);
        const productsDocs = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as IProduct[];

        productsDocs.sort(
          (a, b) => b.time_posted.seconds - a.time_posted.seconds
        );

        setProductsList(productsDocs);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }

    fetchProducts();
  }, []);
  const importantProducts = productsList
    ? productsList.filter((product) => product.importasntProducts === true)
    : productsList;

  return (
    <ul className="products lg:flex lg:px-0 px-7">
      {importantProducts.map(({ id, title, image }, index) => (
        <Link href={`/product/${id}`} key={id}>
          <li
            className={`product ${
              index !== data.length - 1 ? "md:mr-5" : ""
            } rounded-[15px] ${index === data.length - 1 ? "mr-0" : ""}`}
          >
            <div className="products__image p-5 mb-2.5 flex justify-center items-center">
              <Image
                src={image}
                width={200}
                height={390}
                alt=""
                className="object-cover"
                style={{ width: '100%', height: 'auto'}}
              />
            </div>
            <h2 className="product__name mb-[13px] xl:flex xl:justify-center xl:items-center">
              {title}
            </h2>
            <div className="flex items-center">
              <h4 className="hidden">Подробнее</h4>
              <Arrow className="flex justify-center items-center ml-[21px]" />
            </div>
          </li>
        </Link>
      ))}
    </ul>
  );
}
