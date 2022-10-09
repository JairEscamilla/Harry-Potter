import React from 'react'

import './Favs.sass'

export const Favs = ({ isOpened }) => {
  return (
    <div className={`favs ${isOpened ? 'opened' : 'closed'} `}>
      <div className="fav">
        <img
          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
          alt="fav picture"
          className="fav__picture"
        />
        <p className="fav__name">Luna Lovegood</p>
        <span className="material-symbols-outlined">delete</span>
      </div>
      <div className="fav">
        <img
          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
          alt="fav picture"
          className="fav__picture"
        />
        <p className="fav__name">Luna Lovegood</p>
        <span className="material-symbols-outlined">delete</span>
      </div>
    </div>
  )
}
