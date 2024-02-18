import './Goods.scss';

export default function Goods() {
  const data = [
    {name: 'Полиуретановые пены'},
    {name: 'Пено-клеи'},
    {name: 'Силиконовые герметики'},
    {name: 'Монтажные клеи'},
    {name: 'Краски аэрозольные'},
    {name: 'Затирка для швов'},
    {name: 'Обойные клеи'},
    {name: 'Обойные клеи'},
  ]

  return (
    <div className="mr-[21px]">
      <h1 className='mb-[15px]'>Товары</h1>
      <div className='goods__item'>
        {data.map(({ name }, index) => (
          <h5 key={index} className="whitespace-nowrap font-medium p-[5px] mb-[5px] goods__name">{name}</h5>
        ))}
      </div>
    </div>
  )
}