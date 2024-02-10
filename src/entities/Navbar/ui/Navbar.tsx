import Link from 'next/link'

export const Navbar = () => {
  return (
    <nav className="nav lg:flex lg:gap-7">
        <Link href={'#main'} className='font-medium'>
          Главная
        </Link>
        <Link href={'#company'} className='font-medium whitespace-nowrap'>
          О компании
        </Link>
        <Link href={''} className='font-medium'>
          Каталог
        </Link>
        <Link href={'#contacts'} className='font-medium'>
          Контакты
        </Link>
    </nav>
  )
}