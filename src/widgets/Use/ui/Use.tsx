import Allow3 from "@/shared/ui/Icon/icon16"

export default function Use() {
  const data = [
    { desc: 'Герметизация швов при монтаже оконных блоков и дверей', image: <Allow3 /> },
    { desc: 'Тепло- и звукоизоляция', image: <Allow3 /> },
    { desc: 'Заполнение и герметизация', image: <Allow3 /> },
  ]

  return (
    <div className="mb-[49px]">
      <h2 className="mb-6 font-medium">Применение</h2>
      {data.map(({ desc, image }, index) => (
        <h3 key={index} className="mb-4 py-1 flex items-center">{image} {desc}</h3>
      ))}
    </div>
  )
}