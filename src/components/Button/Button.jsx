import React from 'react'
import './Button.sass'

export const Button = ({
  children,
  onClick,
  type = 'button',
  variant = '',
  isActive = false,
}) => {
  return (
    <button
      className={`btn btn-${variant} ${isActive ? 'btn-active' : ''}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  )
}
