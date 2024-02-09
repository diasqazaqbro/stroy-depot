import './Button.scss'

interface IButton {
  label: string;
  className?: string;
  onClick?: (event: any) => void;
}

export const Button: React.FC<IButton> = (props) => {
  const { label, className, onClick } = props

  return (
    <button 
      onClick={onClick}
      className={className}
    >
      {label}
    </button>
  )
}