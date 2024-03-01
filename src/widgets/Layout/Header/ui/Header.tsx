'use client'
import Link from 'next/link';
// import { MouseEvent } from 'react';
import Navbar from '@/entities/Navbar/ui/Navbar';
import styles from './Header.module.scss';
import Burger from '@/widgets/Burger/ui/Burger';
import Position from '@/shared/ui/Icon/icon1';
import DefaultLogo from '@/shared/ui/Icon/defautlLogo';

interface IHeader {
  onClick?: any; 
  className?: string;
}

export default function Header({ onClick }: IHeader) {

  return (
    <header className={`${styles.header} container `}>
      <Link href='/' className={`${styles.logo} flex justify-center items-center`}>
        <DefaultLogo />
        STROY DEPOT
      </Link>
      <Burger onClick={onClick} />
      <Navbar />
      <div className={`${styles.location} flex flex-col`}>
        <div className='2xl:flex mb-2.5 flex justify-end items-center'>
          <Position className='relative top-[1.5px] mr-[10px] flex items-center' /> <h3 className='font-medium'>г. Алматы</h3>
        </div>
        <h3 className='font-medium'>+ 7 (777) 123 45 67</h3>
      </div>
    </header>
  );
};