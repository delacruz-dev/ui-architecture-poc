import React from 'react'

const Denis = ({onConfirm, onActionDispatched}) => {
  const handleConfirm = () => onActionDispatched(onConfirm)

  return (
    <div>
      <p><strong>Confirm?</strong></p>
      <button onClick={handleConfirm}>yes</button>
      <button>no</button>
    </div>
  )
}

export default Denis
