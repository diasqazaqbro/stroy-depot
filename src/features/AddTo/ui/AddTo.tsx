'use client'
import { useCallback, useState } from "react";
import { Button } from "@/shared/ui/Button/Button";
import './AddTo.scss'
import { Decrease, Increase } from "@/shared/ui/Icon/Icon";

export const Order = () => {
  const [count, setCount] = useState(1)

  const increaseCounter = useCallback(() => {
    setCount(count => count + 1);
  }, [count])

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
      <Button label="Заказать" className="py-[13px] mb-[35px] order__btn px-[125px] rounded-[15px]"/>
    </>
  )
}