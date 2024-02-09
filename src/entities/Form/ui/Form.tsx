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
        <Input placeholder="Как к вам обращаться" />
      </div>
      <div className="input__inner mb-[15px] rounded-[50px]">
        <Input placeholder="+ 7 (XXX) XXX XX XX" />
      </div>
      <div className="input__inner mb-[15px] rounded-[50px]">
        <Input placeholder="Что вас интересует?" />
      </div>
      <Button label="Отправить" className="form__btn pt-4 pb-4 pl-[204px] pr-[204px] rounded-[50px] mb-[15px]" />
    </form>
  )
}