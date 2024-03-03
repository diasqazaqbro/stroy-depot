'use client'
import Order from "@/features/AddTo/ui/AddTo"
import Advantages from "@/widgets/Advantages/ui/Advantages"
import Charach from "@/widgets/Char/ui/Charach"
import Use from "@/widgets/Use/ui/Use"
import Image from "next/image"
import { useLocation } from "react-use"
import { useEffect, useState } from "react"
import { collection, getDocs } from "firebase/firestore/lite"
import { db } from "@/shared/lib/config"
import { Product } from "@/entities/ProductList/ui/ProdutctList"
import './solo-prod.scss'
import ReactHtmlParser from "react-html-parser";

interface ProductData extends Product {
  description: string;
  code: string;
  price: string;
}

export default function SoloProd() {
  const location = useLocation();
  const id = location.pathname;
  const [data, setData] = useState<ProductData | null>(null);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState<string | null>(null); 

  useEffect(() => {
    async function fetchProduct() {
      try {
        const productsCollection = collection(db, "products");
        const querySnapshot = await getDocs(productsCollection);
        const productsDocs = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as ProductData[];
        const foundProduct = productsDocs.find((product) => `/product/${product.id}` === id);
        if (foundProduct) {
          setData(foundProduct);
          setLoading(false); 
        } else {
          setError("Product not found");
          setLoading(false); 
        }
      } catch (error) {
        console.error("Error fetching product:", error);
        setError("Failed to fetch product");
        setLoading(false);
      }
    }

    fetchProduct();
  }, [id]);

  if (loading) {
    return <div className="text-center text-2xl font-semibold mt-[-20px]">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-2xl font-semibold mt-[-20px]">Error: {error}</div>;
  }

  if (!data) {
    return <div className="">No product found</div>;
  }

  return (
    <section className="">
      <h1 className="mb-5">{data.title}</h1>
      <div className="lg:flex mb-[35px]">
        <div className="mr-[126px] w-[100%] py-8 flex justify-center border-[2px] border-solid border-gray-500 image__product">
          <Image src={data.image} className="flex justify-center items-center object-contain" alt="Product" width={90} height={423} style={{ width: '100%', height: '423px' }} />
        </div>
        <div className="">
          <h1 className="mb-[18px] price">{data.price} ₸</h1>
          <Order />
          <h2 className="font-medium mb-[14px]">Описание</h2>
          <h4 className="w-[285px]">{data.code}</h4>
        </div>
      </div>
      {ReactHtmlParser(data.description)}
    </section>
  );
}
