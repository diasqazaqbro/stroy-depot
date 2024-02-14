import Input from "@/shared/ui/Input/Input";
import './Filter.scss';

export default function Filter() {
  const data = [
    { name: 'Двери и окна',  },
    { name: 'Стены и фасады', },
    { name: 'Техническое обслуживание и Ремонт', className: 'checkbox__filter w-[39px] h-[33px] mr-2.5' },
  ]
  
  return (
    <ul className="">
      {data.map(({ name, className }, index ) => (
        <li key={index} className="py-2.5 pr-2.5 flex mb-2.5">
          <Input type="checkbox" className={`${name === 'Техническое обслуживание и Ремонт' ? className : 'checkbox__filter w-[33px] h-[33px] mr-2.5 flex'}`} />
          <h3 className="checbox__text items-center flex">{name}</h3>
        </li>
      ))}
    </ul>
  )
}