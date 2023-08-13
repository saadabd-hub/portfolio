import { FC } from 'react'

type ButtonProps = {
    id: string
    className: string
    label: string;
    onClick: () => void
}

const Button:FC<ButtonProps> = ({
  id,
  className,
  label,
  onClick
}) => {
  return (
    <button
      id={id}
      className={className}
      onClick={onClick}
    >
      {label}
    </button>
  )
}

export default Button;