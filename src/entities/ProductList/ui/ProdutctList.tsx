import Image from "next/image";
import Link from "next/link";
import './ProductList.scss';
import Arrow2 from "@/shared/ui/Icon/icon15";

export default function ProductList() {
  const data = [
    { id: '2', name: 'Ultra Fast 70', image: '/UltraFast700.png'  },
    { id: '1', name: 'Ultra Fast 70', image: '/UltraFast700.png'  },
    { id: '3', name: 'Ultra Fast 70', image: '/UltraFast700.png'  },
    { id: '4', name: 'Ultra Fast 70', image: '/UltraFast700.png'  },
    { id: '5', name: 'Ultra Fast 70', image: '/UltraFast700.png'  },
    { id: '6', name: 'Ultra Fast 70', image: '/UltraFast700.png'  },
    { id: '7', name: 'Ultra Fast 70', image: '/UltraFast700.png'  },
    { id: '8', name: 'Ultra Fast 70', image: '/UltraFast700.png'  },
  ]

  return (
    <ul className="product__grid grid">
      {data.map(({ id, name, image }) => (
        <Link href={`product/${id}`} key={id} className="product__item mb-2.5 rounded-[15px] px-[14px] pt-[21px]">
          <div className="product__item__image mb-2 py-[22px] px-2.5">
            <Image src={image} width={135} height={146} alt="product" className="object-cover" />
          </div>
          <h3 className="text-center font-semibold flex justify-center items-center pb-6">{name}</h3>
          <div className="flex items-center">
            <h4 className="hidden mr-2 mb-[13px]">Подробнее</h4>
            <Arrow2 className="flex justify-center items-center mb-[13px]" />
          </div>
        </Link>
      ))}
    </ul>
  )
}