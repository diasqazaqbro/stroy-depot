"use client"
import React, { useEffect, useState } from "react";
import { BASE_URL } from "@/shared/api/apiBase";
import Image from "next/image";
import axios from "axios";
import Button from "@/shared/ui/Button/Button";
import Company from "@/entities/Company/ui/Company";
import './heropage.scss';

export default function HeroPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}api/settings`);
        setData(response.data);
      } catch (error) {
        console.error('Ошибка при выполнении запроса:', error);
      }
    };

    fetchData();

    return () => {};
  }, []);

  return (
    <>
      {data.map(({ title, id, suptitle }) => (
        <section key={id} className="container flex md:mb-[127px]">
          <div id="main" className="left mr-[20px] rounded-[15px]">
            <h1 className="mb-14">{title}</h1>
            <h2 className="mb-[57px]">{suptitle}</h2>
            <Company />
            <Button label='Заказать звонок' className="btn rounded-[50px] font-medium" />
          </div>
          <div className="right rounded-[15px]">
            <Image src='/right.png' loading="lazy" className="hero__image" width={488} height={691} alt={"right"} /> 
          </div>
        </section>
      ))}
      <div className="hero__mobile">
        {data.map(({ title, id, suptitle }) => (
          <div id="main_mobile" key={id}>
            <h1 className="mb-[17px]">{title}</h1>
            <h2>{suptitle}</h2>
            <Company />
            <Button className="btn mt-6 py-[17px] rounded-[50px] font-medium" label="Заказать звонок" />
          </div>
        ))}
      </div>
    </>
  )
}