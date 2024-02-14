import cn from "classnames";
import './Input.scss';

interface IInput {
  className?: string;
  type?: string;
  placeholder?: string;
}

export default function Input(props: IInput) {
  const { className, type, placeholder } = props

  return (
    <input type={type} className={cn(className, 'input')} placeholder={placeholder} />
  )
}