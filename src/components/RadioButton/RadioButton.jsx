import React from 'react'
import './RadioButton.sass'

export const RadioButton = ({ name, id, value, onChange, text }) => {
  return (
    <div className="radio">
      <input
        type="radio"
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        className="radio__button"
      />
      <label htmlFor={id} className="radio__label">
        {text}
      </label>
    </div>
  )
}
