'use client'
import { useCallback, useState } from "react";
import Button  from "@/shared/ui/Button/Button";
import './AddTo.scss'
import Decrease from "@/shared/ui/Icon/icon14";
import Increase from "@/shared/ui/Icon/icon13";

export default function Order() {
  const [count, setCount] = useState(1)

  const increaseCounter = () => {
    setCount(count => count + 1);
  }

  const decreaseCounter = useCallback(() => {
    if (count == 1) {
      setCount(count => count)
    } else {
      setCount(count => count - 1)  
    }
  }, [count])

  return (
    <>
      <div className="flex items-center mb-[31px]">
        <Button className="rounded-[100%] mr-5" onClick={() => decreaseCounter()}><Decrease /></Button>
        <h2 className="font-medium mr-5">{count}</h2>
        <Button className="rounded-[100%] " onClick={() => increaseCounter()}><Increase /></Button>
      </div>
      <Button label="Заказать" isPhone={true} className="py-[13px] mb-[35px] order__btn w-[100%] md:px-[125px] rounded-[15px]"/>
    </>
  )
}