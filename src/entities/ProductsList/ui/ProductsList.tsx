import { Arrow } from "@/shared/ui/Icon/Icon";
import Image from "next/image";
import './ProductsList.scss';

export const PopularProductsList = () => {
  const data = [
    { id: '1', name: 'Ultra Fast 70', image: '/UltraFast700.png' },
    { id: '2', name: 'EURO Клей', image: '/Euro.png' },
    { id: '3', name: 'Ultra Fast 70', image: '/UltraFast70.png' },
    { id: '4', name: 'Ultra Fast 70', image: '/2UltraFast70.png' },
  ];

  return (
    <ul className="products md:flex">
      {data.map(({ id, name, image }, index) => (
        <li key={id} className={`product ${index !== data.length - 1 ? 'md:mr-5' : ''} rounded-[15px] ${index === data.length - 1 ? 'mr-0' : ''}`}>
          <div className="products__image p-5 mb-2.5 flex justify-center items-center">
            <Image src={image} width={200} height={390} alt="" className="object-cover" />
          </div>
          <h2 className="product__name mb-[13px] xl:flex xl:justify-center xl:items-center">{name}</h2>
          <div className="flex items-center">
            <h4 className="hidden">Подробнее</h4>
            <Arrow className="flex justify-center items-center ml-[21px]" />
          </div>
        </li>
      ))}
    </ul>
  )
}
