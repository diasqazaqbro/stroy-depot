import React from 'react';
import Input from "@/shared/ui/Input/Input";
import './Filter.scss';

interface FilterProps {
  data: { name: string; className?: string; id: string }[];
  checkedItems: { [key: string]: boolean };
  handleCheckboxChange: (id: string) => void;
}

const Filter: React.FC<FilterProps> = ({ data, checkedItems, handleCheckboxChange }) => {
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

export default Filter;
