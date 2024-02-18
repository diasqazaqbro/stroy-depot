import cn from "classnames";
import './Input.scss';

interface IInput {
  className?: string;
  type?: string;
  placeholder?: string;
  checked?: boolean;
  value?: string,
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input(props: IInput) {
  const { className, type, placeholder, value, onChange, checked } = props

  return (
    <input type={type} value={value} onChange={onChange} checked={checked} className={cn(className, 'input')} placeholder={placeholder} />
  )
}