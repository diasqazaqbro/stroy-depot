import React from 'react';
import './Contacts.scss';

export default function Contacts() {
  return (
    <section className='contact__section container mb-10'>
      <div id='contacts' className='contacts rounded-[15px] pt-[65px] pl-10 pb-[72px]  '>
        <h2 className='mb-[43px]'>Наши контакты</h2>
        <h3 className='mb-2.5 address'>Адрес: </h3>
        <h3 className='mb-[43px] address__street'>г. Алматы, 
            ул Абая 1, дом 1
        </h3>
        <h3 className='mb-2.5 address'>Режим работы:</h3>
        <h3 className='address__street'>Пн - Пт: с 9:00 до 19:00</h3>
      </div>
    </section>
  )
}
