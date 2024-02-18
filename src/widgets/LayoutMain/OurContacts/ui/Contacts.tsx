"use client"
import React, { useEffect, useState } from 'react';
import './Contacts.scss';
import axios from 'axios';

export default function Contacts() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const FetchData = async () => {
      try {
        const response = await axios.get('https://stroy-depot-get-serv.vercel.app/api/settings')
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    FetchData();

    return () => {}
  }, [])

  return (
    <>
    {data.map(({ address, workTime, id }) => (
      <section key={id} className='contact__section container mb-10'>
        <div id='contacts' className='contacts rounded-[15px] pt-[65px] pl-10 pb-[72px]  '>
          <h2 className='mb-[43px]'>Наши контакты</h2>
          <h3 className='mb-2.5 address'>Адрес: </h3>
          <h3 className='mb-[43px] address__street'>{address}</h3>
          <h3 className='mb-2.5 address'>Режим работы:</h3>
          <h3 className='address__street'>{workTime}</h3>
        </div>
      </section>
    ))}
    </>
  )
}
