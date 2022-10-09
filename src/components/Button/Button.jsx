import React from 'react'
import './Button.sass'

export const Button = ({ children, onClick, type = 'button' }) => {
  return (
    <button className="btn" onClick={onClick} type={type}>
      {children}
    </button>
  )
}
