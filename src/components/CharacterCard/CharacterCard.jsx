import React from 'react'
import './CharacterCard.sass'

export const CharacterCard = ({ character }) => {
  return (
    <div className="character">
      <div className={`character__image ${character.house.toLowerCase()}`}>
        <img src={character.image} alt="character image" />
      </div>

      <div className="character__description">
        <h4 className="name">
          {' '}
          {character.alive ? '' : '+'} {character.name}
        </h4>

        <div className="status">
          <p>
            {character.alive ? 'vivo' : 'finado'} <br />{' '}
            {character.hogwartsStudent ? 'estudiante' : 'staff'}
          </p>
          <span className="material-symbols-outlined">bookmark</span>
        </div>
      </div>
    </div>
  )
}
