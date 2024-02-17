import Allow3 from "@/shared/ui/Icon/icon16"
import './Use.scss'

export default function Use() {
  const data = [
    { desc: 'Герметизация швов при монтаже оконных блоков и дверей', image: <Allow3 className="mr-2.5 allow" /> },
    { desc: 'Тепло- и звукоизоляция', image: <Allow3 className="mr-2.5 allow" /> },
    { desc: 'Заполнение и герметизация', image: <Allow3 className="mr-2.5 allow" /> },
  ]

  return (
    <div className="mb-[49px]">
      <h2 className="mb-6 font-medium">Применение</h2>
      {data.map(({ desc, image }, index) => (
        <h3 key={index} className="use md:mb-4 md:py-1 mb-[7px] py-0.5 flex items-center">{image} {desc}</h3>
      ))}
    </div>
  )
}