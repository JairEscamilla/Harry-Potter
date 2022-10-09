import React, { useEffect, useRef } from 'react'
import './Modal.sass'

export const Modal = ({ isOpen, title, setIsOpen, children }) => {
  const dialogRef = useRef(null)

  useEffect(() => {
    if (isOpen) {
      dialogRef.current.showModal()
    } else {
      dialogRef.current.close()
    }
  }, [isOpen])

  return (
    <dialog ref={dialogRef}>
      <div className="modal__header">
        <h4 className="title">{title}</h4>
        <span
          className="material-symbols-outlined"
          onClick={() => setIsOpen(false)}
        >
          cancel
        </span>
      </div>

      <div className="modal__body">{children}</div>
    </dialog>
  )
}
