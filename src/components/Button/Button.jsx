import React from 'react'
import './Button.sass'

export const Button = ({ children, onClick }) => {
  return (
    <button className="btn" onClick={onClick}>
      {children}
    </button>
  )
}
