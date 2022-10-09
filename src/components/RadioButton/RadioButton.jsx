import React from 'react'

export const RadioButton = ({ name, id, value, onChange }) => {
  return (
    <div className="radio">
      <input
        type="radio"
        name={name}
        id={id}
        value={value}
        onChange={onChange}
      />
      <label htmlFor={id}>{value}</label>
    </div>
  )
}
