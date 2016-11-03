import React from 'react'
import dialogs from '@typeform/dialogs'

const getDialogFields = (dialog) => {
  if (dialog === dialogs.askForUsername) {
    return <div>
      <label htmlFor='username'>Username:</label>
      <input type='text' name='username' />
    </div>
  }
}

const Denis = ({dialog, onConfirm, onActionDispatched}) => {
  const handleConfirm = () => onActionDispatched(onConfirm)

  return (
    <div>
      <p><strong>Confirm?</strong></p>
      {getDialogFields(dialog)}
      <button onClick={handleConfirm}>yes</button>
      <button>no</button>
    </div>
  )
}

export default Denis
