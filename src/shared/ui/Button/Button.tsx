import { ReactNode } from 'react';
import './Button.scss'

interface IButton {
  label?: string;
  className?: string;
  onClick?: (event: any) => void;
  children?: ReactNode;
  disabled?: boolean;
}

export default function Button(props: IButton) {
  const { label, className, onClick, children, disabled } = props

  return (
    <button 
      onClick={onClick}
      className={className}
      disabled={disabled}
    >
      {label}
      {children}
    </button>
  )
}