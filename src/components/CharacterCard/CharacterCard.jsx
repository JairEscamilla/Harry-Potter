import React from 'react'
import { useDispatch } from 'react-redux'
import { add } from '../../favs/favsSlice'
import './CharacterCard.sass'

export const CharacterCard = ({ character, isFav }) => {
  const dispatch = useDispatch()

  const addToFavs = () => {
    dispatch(add({ ...character }))
  }

  return (
    <div className="character">
      <div className={`character__image ${character.house?.toLowerCase()}`}>
        <img src={character.image} alt="character image" />
      </div>

      <div className="character__description">
        <h4 className="name">
          {character.alive ? '' : '+'} {character.name}
        </h4>

        <div className="status">
          <p>
            {character.alive ? 'vivo' : 'finado'}{' '}
            <span className="divider">/</span> <br />
            {character.hogwartsStudent ? 'estudiante' : 'staff'}
          </p>
          <span
            className={`material-symbols-outlined ${isFav ? 'filled' : ''}`}
            onClick={addToFavs}
          >
            bookmark
          </span>
        </div>

        <h4 className="desktop__name">
          {character.alive ? '' : '+'} {character.name}
        </h4>

        <ul className="character-info">
          <li>
            <b>Cumpleaños: </b>
            {character.dateOfBirth}
          </li>
          <li>
            <b>Género: </b>
            {character.gender}
          </li>
          <li>
            <b>Color de ojos: </b>
            {character.eyeColour}
          </li>
          <li>
            <b>Color de pelo: </b>
            {character.hairColour}
          </li>
        </ul>
      </div>
    </div>
  )
}
