import React from 'react'

const Modal = ({ open, onClose, children }) => {
  if(open) return null

  return (
    <div>
      <button onClick={onClose}>Close</button>
      {children}
    </div>
  )
}

export default Modal
