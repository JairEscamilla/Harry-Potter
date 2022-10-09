import React from 'react'
import './CharacterCard.sass'

export const CharacterCard = () => {
  return (
    <div className="character">
      <div className="character__image">
        <img
          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
          alt="character image"
        />
      </div>

      <div className="character__description">
        <h4 className="name">Harry Potter</h4>

        <div className="status">
          <p>
            vivo <br /> estudiante
          </p>
          <span className="material-symbols-outlined">bookmark</span>
        </div>
      </div>
    </div>
  )
}
