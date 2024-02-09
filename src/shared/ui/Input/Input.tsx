import cn from "classnames";
import './Input.scss';

interface IInput {
  className?: string;
  type?: string;
  placeholder?: string;
}

export const Input: React.FC<IInput> = (props) => {
  const { className, type, placeholder } = props

  return (
    <input type={type} className={cn(className, 'input')} placeholder={placeholder} />
  )
}