import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { remove } from '../../favs/favsSlice'
import './Favs.sass'

export const Favs = ({ isOpened }) => {
  const favs = useSelector((state) => state.favs.value)
  const dispatch = useDispatch()

  const removeFav = (name) => {
    dispatch(remove(name))
  }

  return (
    <div className={`favs ${isOpened ? 'opened' : 'closed'} `}>
      {favs.map(({ name, image }) => (
        <div className="fav" key={name}>
          <img src={image} alt="fav picture" className="fav__picture" />
          <p className="fav__name">{name}</p>
          <span
            className="material-symbols-outlined"
            onClick={() => removeFav(name)}
          >
            delete
          </span>
        </div>
      ))}
    </div>
  )
}
