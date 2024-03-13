'use client'
import { useState, useEffect } from "react";
import { useLocation } from "react-use";
import Image from "next/image";
import Link from "next/link";
import ProductFilter from "@/widgets/Products/ui/Products";
import Arrow2 from "@/shared/ui/Icon/icon15";
import { collection, getDocs, query, where } from "@firebase/firestore/lite";
import { db } from "@/shared/lib/config";
import "./products.scss";

export type Product = {
  id: string;
  title: string;
  image: string;
  category: string;
  price: number;
  popularity: number;
};

export default function ProductsPage() {
  const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>({
    first: false,
    second: false,
    three: false,
  });

  const [productsList, setProductsList] = useState<Product[]>([]);
  const location = useLocation();
  const category = location.pathname;
  let categoryNumber: string | null = null;

  if (category) {
    categoryNumber = String(category.split("/")[2]);
  } else {
    console.log("Category is undefined");
  }

  useEffect(() => {
    async function fetchProducts() {
      try {
        const q = query(collection(db, "products"), where("category", "==", categoryNumber));
        const querySnapshot = await getDocs(q);
        const productsDocs = querySnapshot.docs.map((doc: any) => ({
          id: doc.id,
          ...doc.data(),
          price: parseInt(doc.data().price),
        })) as Product[];

        if (productsDocs.length > 0) {
          setProductsList(productsDocs);
        } else {
          window.location.reload();
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }

    fetchProducts();
  }, [categoryNumber]);

  const handleCheckboxChange = (id: string) => {
    setCheckedItems((prevCheckedItems: any) => {
      const updatedCheckedItems = { [id]: !prevCheckedItems[id] };
      Object.keys(prevCheckedItems).forEach((key) => {
        if (key !== id) {
          updatedCheckedItems[key] = false;
        }
      });
      return updatedCheckedItems;
    });
  };

  function sortProducts(criteria: string, productList: Product[]): Product[] {
    let sortedProducts: Product[] = [...productList];

    if (criteria === "first") {
      sortedProducts.sort((a, b) => (a.title > b.title ? -1 : 1));
    } else if (criteria === "second") {
      sortedProducts.sort((a, b) => (a.price < b.price ? -1 : 1));
    } else if (criteria === "three") {
      sortedProducts.sort((a, b) => (a.price > b.price ? -1 : 1));
    }

    return sortedProducts;
  }

  const sortedProducts = sortProducts(Object.keys(checkedItems).find((key) => checkedItems[key]) || "", productsList);

  return (
    <section className="container">
      <div className="lg:flex">
        <ProductFilter
          data={[
            { id: "first", name: "По названию" },
            { id: "second", name: "Сначала дешевые" },
            {
              id: "three",
              name: "Сначала дорогие",
              className: "checkbox__filter w-[35px] h-[33px] mr-2.5 items-center",
            },
          ]}
          handleCheckboxChange={handleCheckboxChange}
          checkedItems={checkedItems}
        />
        <ul className="product__grid grid">
          {sortedProducts.map(({ id, title, image }) => (
            <Link
              href={`/product/${id}`}
              key={id}
              className="product__item mb-2.5 rounded-[15px] px-8 pt-[21px]"
            >
              <div className="product__item__image mb-2 py-[22px] px-2.5">
                <Image
                  src={image}
                  width={500}
                  height={300}
                  alt="product"
                  className="object-fill"
                  style={{ width: "100%", height: "180px" }}
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
      </div>
    </section>
  );
}
