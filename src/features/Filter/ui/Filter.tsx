import { Input } from "@/shared/ui/Input/Input";
import './Filter.scss';

export const Filter = () => {
  const data = [
    { name: 'Двери и окна' },
    { name: 'Стены и фасады' },
    { name: 'Техническое обслуживание и Ремонт' },
  ]
  
  return (
    <ul className="">
      {data.map(({ name }, index ) => (
        <li key={index} className="py-2.5 pr-2.5 flex mb-2.5">
          <Input type="checkbox" className="mr-2.5 checkbox__filter flex"></Input>
          <h3 className="checbox__text text-left">{name}</h3>
        </li>
      ))}
    </ul>
  )
}