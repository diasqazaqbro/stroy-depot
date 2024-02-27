"use client"
import { useState } from 'react';
import Input from "@/shared/ui/Input/Input";
import './Filter.scss';

export default function Filter() {
  const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>({});

  const data = [
    { id: '1', name: 'Популярные' },
    { id: '2', name: 'Сначала дешевые' },
    { id: '3', name: 'Сначала дорогие', className: 'checkbox__filter w-[35px] h-[33px] mr-2.5 items-center' },
  ];

  const handleCheckboxChange = (id: string) => {
    setCheckedItems(prevCheckedItems => ({
      ...prevCheckedItems,
      [id]: !prevCheckedItems[id]
    }));
  };

  return (
    <ul className="">
      {data.map(({ name, className, id }) => (
        <li key={id} className="pb-2.5 pr-2.5 flex mb-2.5 items-center">
          <Input
            type="checkbox"
            checked={!!checkedItems[id]}
            onChange={() => handleCheckboxChange(id)}
            className={`${name === 'Техническое обслуживание и Ремонт' ? className : 'checkbox__filter w-[33px] h-[33px] mr-2.5 flex'}`}
          />
          <h3 className="checbox__text items-center flex" onClick={() => handleCheckboxChange(id)}>
            {name}
          </h3>
        </li>
      ))}
    </ul>
  );
}
