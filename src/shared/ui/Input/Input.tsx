import React from "react";
import cn from "classnames";
import './Input.scss';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Input: React.FC<InputProps> = ({ className, ...rest }) => {
  return <input className={cn(className, 'input')} {...rest} />;
};

export default Input;