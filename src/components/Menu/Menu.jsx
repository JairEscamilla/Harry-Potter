import React, { useState } from 'react'
import { Favs } from '../Favs/Favs'
import './Menu.sass'

export const Menu = ({ setIsModalOpen }) => {
  const [favsAreOpened, setFavsAreOpened] = useState(false)

  return (
    <div className="menu__container">
      <ul className="menu">
        <li onClick={() => setFavsAreOpened(!favsAreOpened)}>
          <span>Favoritos</span>
          <span className="material-symbols-outlined filled">bookmark</span>
        </li>
        <li onClick={() => setIsModalOpen(true)}>
          <span>Agregar</span>
          <span className="material-symbols-outlined filled">person_add</span>
        </li>
      </ul>

      <Favs isOpened={favsAreOpened} />
    </div>
  )
}
