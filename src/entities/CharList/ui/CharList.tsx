import './CharList.scss';

export default function CharList() {
  const data = [
    { charName: 'Высокая производительность: до 65 литров', details: '≤ 10 минут' },
    { charName: 'Предварительное время обработки:', details: '≤ 30 минут' },
    { charName: 'Температура баллона (оптимально +20°C):', details: '+10°C ÷ +30°C' },
    { charName: 'Температура поверхности:', details: '+5°C ÷ +30°C' },
    { charName: 'Класс огнестойкости:', details: 'B3/F (DIN 4102/EN 13501-1:2008)' },
    { charName: 'Срок годности:', details: '18 месяцев' },
    { charName: 'Вид пены:', details: 'профессиональная' },
    { charName: 'Сезон применения:', details: 'лето' },
  ];
  
  return (
    <div className="">
      {data.map(( { charName, details }, index ) => (
        <div key={index} className="charlist flex py-[15px]">
          <h3 className="font-normal">{charName}</h3>
          <h2 className="">{details}</h2>
        </div>
      ))}
    </div>
  )
}