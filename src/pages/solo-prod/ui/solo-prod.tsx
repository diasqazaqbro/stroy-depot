'use client'
import Order from "@/features/AddTo/ui/AddTo"
import Advantages from "@/widgets/Advantages/ui/Advantages"
import Charach from "@/widgets/Char/ui/Charach"
import Use from "@/widgets/Use/ui/Use"
import Image from "next/image"
import './solo-prod.scss'
import { useLocation } from "react-use"
import { useEffect, useState } from "react"
import { collection, getDocs } from "firebase/firestore/lite"
import { db } from "@/shared/lib/config"
import { Product } from "@/entities/ProductList/ui/ProdutctList"

interface ProductData extends Product {
  description: string;
  code: string;
  price: string;
}

export default function SoloProd() {
  const location = useLocation();
  const id = location.pathname;
  const [data, setData] = useState<ProductData | null>(null); // Используем типизированный состояние данных продукта
  console.log(id);
  
  useEffect(() => {
    async function fetchProducts() {
      try {
        const productsCollection = collection(db, "products");
        const querySnapshot = await getDocs(productsCollection);
        const productsDocs = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as ProductData[]; // Приводим данные к типу ProductData
        const foundProduct = productsDocs.find((product) => `/product/${product.id}` === id);
        if (foundProduct) {
          setData(foundProduct);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }

    fetchProducts();
  }, [id]);

  if (!data) {
    return <div>Loading...</div>; // Выводим заглушку, пока данные загружаются
  }

  return (
    <section className="">
      <h1 className="mb-[5px]">{data.title}</h1>
        <h3 className="mb-[35px]">Код товара: {data.code}</h3>
        <div  className="lg:flex mb-[35px]">
          <div className="mr-[126px] w-[100%] py-8 flex justify-center border-[2px] border-solid border-gray-500 image__product">
            <Image src={data.image} className="flex justify-center items-center" alt="Product" width={90} height={423} /> 
          </div>
          <div className="">
            <h1 className="mb-[18px] price">{data.price}</h1>
            <Order />
            <h2 className="font-medium mb-[14px]">Описание</h2>
            <h4 className="w-[285px]">{data.description}</h4>
          </div>
        </div>
      <Use />
      <Advantages />
      <Charach />
    </section>
  )
}
