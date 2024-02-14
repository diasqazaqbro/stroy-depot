import Link  from 'next/link';
import './Navbar.scss'

export default function Navbar() {

  return (
    <nav className="nav lg:flex lg:gap-7">
      <Link href="#main" className="font-medium nav-link">Главная</Link>
      <Link href="#about" className="font-medium whitespace-nowrap nav-link">О компании</Link>
      <Link href="/catalogs" className="font-medium nav-link">Каталог</Link>
      <Link href="#contacts" className="font-medium nav-link">Контакты</Link>
    </nav>
  );
};

