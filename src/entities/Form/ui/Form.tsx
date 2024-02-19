"use client"
import { parsePhoneNumberFromString } from 'libphonenumber-js';
import Button from "@/shared/ui/Button/Button";
import Input from "@/shared/ui/Input/Input";
import './Form.scss';

export default function Form() {
  const normalizePhoneNumber = (value: string) => {
    const phoneNumber = value.replace(/\D/g, '');

    const maxLength = 11;
    const formattedPhoneNumber = phoneNumber.substring(0, maxLength);

    if (!formattedPhoneNumber) return value;

    let formattedValue = `+${formattedPhoneNumber}`;

    const parsedPhoneNumber = parsePhoneNumberFromString(formattedValue);

    if (parsedPhoneNumber && parsedPhoneNumber.isValid()) {
      formattedValue = parsedPhoneNumber.formatInternational();
    }

    return formattedValue;
  }

  return (
    <form className="">
      <div className="input__inner mb-[15px] rounded-[50px]">
        <Input placeholder="Как к вам обращаться" type="text" />
      </div>
      <div className="input__inner mb-[15px] rounded-[50px]">
        <Input 
          placeholder="+7 (XXX) XXX XX XX" 
          type="tel" 
          maxLength={16}
          onChange={(event) => {
            event.target.value = normalizePhoneNumber(event.target.value);
          }}
        />
      </div>
      <div className="input__inner mb-[15px] rounded-[50px]">
        <Input placeholder="Что вас интересует?" type="text" />
      </div>
      <Button label="Отправить" className="form__btn rounded-[50px] py-4 md:px-8 md:pl-[204px] md:pr-[204px] mb-[15px]" />
    </form>
  )
}
