import { ReactNode } from 'react';
import './Button.scss'

interface IButton {
  label?: string;
  className?: string;
  onClick?: (event: any) => void;
  children?: ReactNode
}

export const Button: React.FC<IButton> = (props) => {
  const { label, className, onClick, children } = props

  return (
    <button 
      onClick={onClick}
      className={className}
    >
      {label}
      {children}
    </button>
  )
}