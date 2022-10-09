import React from 'react'
import './Menu.sass'

export const Menu = ({ setIsModalOpen }) => {
  return (
    <ul className="menu">
      <li>
        <span>Favoritos</span>
        <span class="material-symbols-outlined">bookmark</span>
      </li>
      <li onClick={() => setIsModalOpen(true)}>
        <span>Agregar</span>
        <span class="material-symbols-outlined">person_add</span>
      </li>
    </ul>
  )
}
