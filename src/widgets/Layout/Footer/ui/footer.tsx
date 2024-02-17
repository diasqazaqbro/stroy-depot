import Link from "next/link";
import './footer.scss'
import Insta from "@/shared/ui/Icon/Icon";
import WhatsApp from "@/shared/ui/Icon/icon3";
import Telegram from "@/shared/ui/Icon/icon4";
import Logo from "@/shared/ui/Icon/logo";

export default function Footer() {
  return (
    <footer className="container lg:flex md:mb-[58px]">
      <div className="footer__left rounded-[15px] pt-10 pb-12 pl-10 pr-[225px] mr-5">
        <h2 className="">Stroy Depot</h2>
        <h4 className="mt-[86px] white">
          Название Ип
        </h4>
        <h4 className="">Всякие сертификаты если есть</h4>
      </div>
      <div className="footer__right md:flex rounded-[15px] pt-10 pl-[102px] pr-28 pb-12">
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

      <div className="mobile flex">
        <div className="mobile__footer rounded-[15px] md:flex px-10 py-[34px]">
          <div className="mobile__footer__logo jusstify-center items-center flex whitespace-nowrap mb-[33.67px]">
            <Logo /> STROY DEPOT
          </div>
          <h2 className="mb-[23px]">Наши контакты</h2>
          <h3 className="mb-2.5 font-semibold">Адрес:</h3>
          <h3 className="font-semibold mb-[43px] w-[162px]">
            г. Алматы, 
            ул Абая 1, дом 1
          </h3>
          <h3 className="font-semibold mb-2.5">Режим работы:</h3>
          <h3 className="font-semibold mb-[26px]">Пн - Пт: с 9:00 до 19:00</h3>
          <h4 className="mb-[15px]">Тел: + 7 (777) 123 45 67</h4>
          <h4 className="mb-3">Почта: post@gmail.com</h4>
          <div className="flex gap-5 mb-10">
            <Insta/> <WhatsApp /> <Telegram />
          </div>
          <h4 className="white">
            Название Ип
          </h4>
          <h4 className="">Всякие сертификаты если есть</h4>
        </div>
      </div>
    </footer>
  )
}