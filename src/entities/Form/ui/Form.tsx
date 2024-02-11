import { Button } from "@/shared/ui/Button/Button";
import { Input } from "@/shared/ui/Input/Input";
import './Form.scss';
// import { useState } from "react";

export const Form = () => {
  // const [input, setInput] = useState({
  //   name: '',
  //   number: '',
  //   quest: ''
  // })

  return (
    <form className="">
      <div className="input__inner mb-[15px] rounded-[50px]">
        <Input placeholder="Как к вам обращаться" type="text" />
      </div>
      <div className="input__inner mb-[15px] rounded-[50px]">
        <Input placeholder="+ 7 (XXX) XXX XX XX" type="tel" />
      </div>
      <div className="input__inner mb-[15px] rounded-[50px]">
        <Input placeholder="Что вас интересует?" type="text" />
      </div>
      <Button label="Отправить" className="form__btn rounded-[50px] py-4 md:px-8 md:pl-[204px] md:pr-[204px] mb-[15px]" />
    </form>
  )
}