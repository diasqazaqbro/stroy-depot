import cn from "classnames";
import './Input.scss';

interface IInput {
  className?: string;
  type?: string;
  placeholder?: string;
  value?: string,
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input(props: IInput) {
  const { className, type, placeholder, value, onChange } = props

  return (
    <input type={type} value={value} onChange={onChange} className={cn(className, 'input')} placeholder={placeholder} />
  )
}