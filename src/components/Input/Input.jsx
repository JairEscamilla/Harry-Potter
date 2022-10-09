import React from 'react'
import './Input.sass'

export const Input = ({ label, onChange, name }) => {
  return (
    <div className="input__container">
      <label htmlFor="label">{label}</label>
      <input
        className="custom__input"
        type="text"
        id={label}
        onChange={onChange}
        name={name}
      />
    </div>
  )
}
