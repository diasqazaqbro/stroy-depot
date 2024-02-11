import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import './Navbar.scss'
import { useEffect } from 'react';

export const Navbar = () => {
  useEffect(() => {
    const handleSmoothScroll = () => {
      scroll.scrollToTop({
        duration: 1000,
        smooth: 'easeInOutQuart',
      });
    };

    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
      link.addEventListener('click', handleSmoothScroll);
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleSmoothScroll);
      });
    };
  }, []);

  return (
    <nav className="nav lg:flex lg:gap-7">
      <ScrollLink to="main" spy smooth duration={500} className="font-medium nav-link">Главная</ScrollLink>
      <ScrollLink to="about" spy smooth duration={500} className="font-medium whitespace-nowrap nav-link">О компании</ScrollLink>
      <ScrollLink to="catalog" spy smooth duration={500} className="font-medium nav-link">Каталог</ScrollLink>
      <ScrollLink to="contacts" spy smooth duration={500} className="font-medium nav-link">Контакты</ScrollLink>
    </nav>
  );
};

