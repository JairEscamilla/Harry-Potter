import React from 'react'
import './Button.sass'

export const Button = ({
  children,
  onClick,
  type = 'button',
  variant = '',
}) => {
  return (
    <button className={`btn btn-${variant}`} onClick={onClick} type={type}>
      {children}
    </button>
  )
}
