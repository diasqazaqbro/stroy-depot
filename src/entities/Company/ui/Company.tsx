import Image from "next/image";
import './Company.scss';

export default function Company() {
  return (
    <div className="flex mb-[68px]">
      <div className="card rounded-[10px] flex justify-center items-center">
        <Image width={93} height={49} src='/tytan.png' alt={"tytan"} />
      </div>
      <div className="card xl: flex justify-center items-center rounded-[10px]">
        <Image width={116} height={65} src='/henkei.png' alt="henkei" />
      </div>
      <div className="card rounded-[10px] flex justify-center items-center">
        <Image width={176} height={41} src='/mapei.png' alt="mapei" />
      </div>
    </div>
  )
}