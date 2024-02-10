import { Insta, Telegram, WhatsApp } from "@/shared/ui/Icon/Icon"
import Link from "next/link";
import './footer.scss'

export const Footer = () => {
  return (
    <footer className="container lg:flex mb-[58px]">
      <div className="footer__left rounded-[15px] pt-10 pb-12 pl-10 pr-[225px] mr-5">
        <h2 className="">Stroy Depot</h2>
        <h4 className="mt-[86px] white">
          Название Ип
        </h4>
        <h4 className="">Всякие сертификаты если есть</h4>
      </div>
      <div className="footer__right flex rounded-[15px] pt-10 pl-[102px] pr-28 pb-12">
        <div className="mr-[187px]">
          <h3 className="right__text mb-5">Навигация</h3>
          <ul className="flex flex-col footer__links">
            <Link href={''} className="mb-[15px]">Главная</Link>
            <Link href={''} className="mb-[15px]">О компании</Link>
            <Link href={''} className="mb-[15px]">Каталог</Link>
            <Link href={''} className="">Контакты</Link>
          </ul>
        </div>
        <div className="">
          <h3 className="right__text mb-5">Контакты</h3>
          <h4 className="mb-[15px]">Тел: + 7 (777) 123 45 67</h4>
          <h4 className="mb-3">Почта: post@gmail.com</h4>
          <ul className="flex">
            <Link href={''} className="mr-5" ><Insta /></Link>
            <Link href={''} className="mr-5" ><WhatsApp /></Link>
            <Link href={''} className="" ><Telegram /></Link>
          </ul>
        </div>
      </div>
    </footer>
  )
}