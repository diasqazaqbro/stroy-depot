import Button from "@/shared/ui/Button/Button";
import './heropage.scss';
import Image from "next/image";
import Company from "@/entities/Company/ui/Company";

export default function HeroPage() {

  return (
    <>
      <section className="container flex md:mb-[127px]">
        <div id="main" className="left mr-[20px] rounded-[15px]">
          <h1 className="mb-14">Строим Будущее вместе</h1>
          <h2 className="mb-[57px]">Мы являемся официальным дистрибьютором</h2>
          <Company />
          <Button label='Заказать звонок' className="btn rounded-[50px] font-medium" />
        </div>
        <div className="right rounded-[15px]">
          <Image src='/right.png' className="hero__image" width={488} height={691} alt={"right"} /> 
        </div>
        <div></div>

      </section>
      <div className="hero__mobile">
        <h1 className="mb-[17px]">Строим Будущее вместе</h1>
        <h2>Мы являемся официальным дистрибьютором</h2>
        <Company />
        <Button className="btn mt-6 py-[17px] rounded-[50px] font-medium" label="Заказать звонок" />
      </div>
    </>
  )
}