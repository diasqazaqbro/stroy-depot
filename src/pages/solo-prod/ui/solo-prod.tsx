'use client'
import Image from "next/image";
import Link from "next/link";
import { useLocation } from "react-use";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore/lite";
import { db } from "@/shared/lib/config";
import ReactHtmlParser from "react-html-parser";
import Order from "@/features/AddTo/ui/AddTo";

interface ProductData {
  id: string;
  title: string;
  image: string;
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
        const productsDocs = querySnapshot.docs.map((doc: any) => ({
          id: doc.id,
          ...doc.data(),
        })) as ProductData[];
        const foundProduct = productsDocs.find((product) => `/product/${product.id}` === id);
        if (foundProduct) {
          setData(foundProduct);
        } else {
          setError("Product not found");
          window.location.reload()

        }
      } catch (error) {
        console.error("Error fetching product:", error);
        
        setError("Failed to fetch product");
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [id]);
  if (loading) {
    return <div className="text-center text-2xl font-semibold mt-[-20px]">Loading...</div>;
  }

  if (!data) {
    return <div className="text-center text-2xl font-semibold mt-[-20px]">Loading...</div>;
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
