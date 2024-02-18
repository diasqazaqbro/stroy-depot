"use client"
import { useState } from "react";
import Button from "@/shared/ui/Button/Button";
import Input from "@/shared/ui/Input/Input";
import './Form.scss';

export default function Form() {
  // const [phoneNumber, setPhoneNumber] = useState('');

  // const handlePhoneNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   phoneNumber(event.target.value)
  // }

  return (
    <form className="">
      <div className="input__inner mb-[15px] rounded-[50px]">
        <Input placeholder="Как к вам обращаться" type="text" />
      </div>
      <div className="input__inner mb-[15px] rounded-[50px]">
        <Input 
          placeholder="+ 7 (XXX) XXX XX XX" 
          type="tel" 
          // value={phoneNumber} 
          // onChange={handlePhoneNumberChange} 
        />
      </div>
      <div className="input__inner mb-[15px] rounded-[50px]">
        <Input placeholder="Что вас интересует?" type="text" />
      </div>
      <Button label="Отправить" className="form__btn rounded-[50px] py-4 md:px-8 md:pl-[204px] md:pr-[204px] mb-[15px]" />
    </form>
  )
}