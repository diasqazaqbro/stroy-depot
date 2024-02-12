import React from 'react';
import {
  PolyurethaneFoams,
  FoamGlue,
  SiliconeSealants,
  AssemblyAdhesives,
  AerosolPaints,
  GroutForSeams,
  WallpaperAdhesives,
  Miscellaneous
} from '@/shared/ui/Icon/Icon';
import './CatalogList.scss';
import Link from 'next/link';

export const CatalogList = () => {
  const data = [
    { id: '1', name: 'Полиуретановые пены', icon: <PolyurethaneFoams />, className: 'whitespace-nowrap text-center font-medium mt-[15px] px-5' },
    { id: '2', name: 'Пено-клеи', icon: <FoamGlue />, className: 'text-center font-medium mt-[15px] px-5' },
    { id: '3', name: 'Силиконовые герметики', icon: <SiliconeSealants />, className: 'whitespace-normal text-center font-medium mt-[15px] px-5' },
    { id: '4', name: 'Монтажные клеи', icon: <AssemblyAdhesives />, className: 'text-center font-medium mt-[15px] px-5' },
    { id: '5', name: 'Краски аэрозольные', icon: <AerosolPaints />, className: 'text-center font-medium mt-[15px] px-5' },
    { id: '6', name: 'Затирка для швов', icon: <GroutForSeams />, className: 'text-center font-medium mt-[15px] px-5' },
    { id: '7', name: 'Обойные клеи', icon: <WallpaperAdhesives />, className: 'text-center font-medium mt-[15px] px-5' },
    { id: '8', name: 'Разное', icon: <Miscellaneous />, className: 'text-center mt-[15px] font-medium' },
  ];

  return (
    <div className='catalog__grid grid pt-5'>
      {data.map(({ id, name, icon, className }) => (
        <Link href={'/product'} key={id} className='catalog__item rounded-[15px] pt-2.5 pb-5'>
          <div className='flex justify-center items-center'>
            {icon}
          </div>
            <h3 className={className}>{name}</h3>
        </Link>
      ))}
    </div>
  );
};