import React from 'react'

const Denis = ({askForConfirmation}) => {
  return (
    <div>
    {
      askForConfirmation && <div>
        <button onClick={handleConfirm}>yes</button>
        <button>no</button>
      </div>
    }
    </div>
  )
}

export default Denis
