import React from 'react';
import './CatalogList.scss';
import Link from 'next/link';
import PolyurethaneFoams from '@/shared/ui/Icon/icon5';
import FoamGlue from '@/shared/ui/Icon/icon6';
import SiliconeSealants from '@/shared/ui/Icon/icon7';
import AssemblyAdhesives from '@/shared/ui/Icon/icon8';
import AerosolPaints from '@/shared/ui/Icon/icon9';
import GroutForSeams from '@/shared/ui/Icon/icon10';
import WallpaperAdhesives from '@/shared/ui/Icon/icon11';
import Miscellaneous from '@/shared/ui/Icon/icon12';

export default function CatalogList() {
  const data = [
    { id: '1', name: 'Полиуретановые пены', icon: <PolyurethaneFoams className='mt-2 mb-[15px] poly' />, className: 'whitespace-nowrap text-center font-medium mt-[15px] px-5' },
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