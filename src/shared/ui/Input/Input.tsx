import cn from "classnames";
import './Input.scss';

interface IInput {
  className?: string;
  id?: string
  error?: string;
  helperText?: string;
  name?: string;
  type?: string;
  placeholder?: string;
  checked?: boolean;
  value?: string,
  pattern?: string;
  maxLength?: number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input(props: IInput) {
  const { className, type, placeholder, id, name, helperText, error, value, pattern, onChange, checked, maxLength } = props

  return (
    <input type={type} value={value} id={id} name={name} onChange={onChange} pattern={pattern} maxLength={maxLength} checked={checked} className={cn(className, 'input')} placeholder={placeholder} />
  )
}