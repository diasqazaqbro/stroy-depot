import { Allow3 } from "@/shared/ui/Icon/Icon"

export default function Advantages() {
  const data = [
    { desc: 'Высокая производительность: до 65 литров', image: <Allow3 /> },
    { desc: 'При применении не выделяет паров MDI', image: <Allow3 /> },
    { desc: 'После отверждения не выделяет летучие вещества, формальдегиды, аммиак и MDI', image: <Allow3 /> },
    { desc: 'Низкое увеличение объема пены (вторичное расширение)', image: <Allow3 /> },
    { desc: 'Хорошая адгезия пены к поверхности', image: <Allow3 /> },
  ]

  return (
    <div className="mb-[49px]">
      <h2 className="mb-6 font-medium">Преимущества</h2>
      {data.map(({ desc, image }, index) => (
        <h3 key={index} className="py-1 mb-4 flex items-center">{image} {desc}</h3>
      ))}
    </div>
  )
}