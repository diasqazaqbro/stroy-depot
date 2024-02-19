import Order from "@/features/AddTo/ui/AddTo"
import Advantages from "@/widgets/Advantages/ui/Advantages"
import Charach from "@/widgets/Char/ui/Charach"
import Use from "@/widgets/Use/ui/Use"
import Image from "next/image"
import './solo-prod.scss'

export default function SoloProd() {
  const data = [
    { image: '/image 8.png', price: '32 420 ₸ ', desc: 'Профессиональная пена с высокой производительностью (до 65 литров).', }
  ]

  return (
    <section className="">
      {data.map(({ image, price, desc }, index) => (
        <div key={index} className="lg:flex mb-[35px]">
          <div className="mr-[126px] w-[100%] py-8 flex justify-center border-[2px] border-solid border-gray-500 image__product">
            <Image src={image} className="flex justify-center items-center" alt="Product" width={90} height={423} /> 
          </div>
          <div className="">
            <h1 className="mb-[18px] price">{price}</h1>
            <Order />
            <h2 className="font-medium mb-[14px]">Описание</h2>
            <h4 className="w-[285px]">{desc}</h4>
          </div>
        </div>
      ))}
      <Use />
      <Advantages />
      <Charach />
    </section>
  )
}