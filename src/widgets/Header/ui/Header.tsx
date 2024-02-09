import Link from 'next/link'
import styles from './Header.module.scss'
import { Position } from '@/shared/ui/Icon/Icon'
import { Navbar } from '@/entities/Navbar/ui/Navbar'

export const Header = () => {
  return (
    <header className={`${styles.header} container`}>
      <Link href='/' className={styles.logo}>
        Stroy depot
      </Link>
      <Navbar />
      <div className={`${styles.location} flex flex-col`}>
        <div className='2xl:flex mb-2.5 flex justify-end items-center'>
          <Position className='mr-[10px] flex items-center' /> <h3 className='font-medium'>г. Алматы</h3>
        </div>
        <h3 className='font-medium'>+ 7 (777) 123 45 67</h3>
      </div>
    </header>
  )
}