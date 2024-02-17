import Allow3 from "@/shared/ui/Icon/icon16"
import './Advantages.scss'

export default function Advantages() {
  const data = [
    { desc: 'Высокая производительность: до 65 литров', image: <Allow3 className="md:mr-2.5 mr-[5px] allow" /> },
    { desc: 'При применении не выделяет паров MDI', image: <Allow3 className="md:mr-2.5 mr-[5px] allow" /> },
    { desc: 'После отверждения не выделяет летучие вещества, формальдегиды, аммиак и MDI', image: <Allow3 className="md:mr-2.5 mr-[5px] allow" /> },
    { desc: 'Низкое увеличение объема пены (вторичное расширение)', image: <Allow3 className="md:mr-2.5 mr-[5px] allow" /> },
    { desc: 'Хорошая адгезия пены к поверхности', image: <Allow3 className="md:mr-2.5 mr-[5px] allow" /> },
  ]

  return (
    <div className="mb-[49px]">
      <h2 className="mb-6 font-medium">Преимущества</h2>
      {data.map(({ desc, image }, index) => (
        <h3 key={index} className="use md:py-1 py-0.5 md:mb-4 mb-[7px] flex items-center">{image} {desc}</h3>
      ))}
    </div>
  )
}