import React from 'react'

const Alice = ({counter = 0, onActionDispatched}) => {
  const handleIncrement = () => onActionDispatched({service: 'counter', useCase: 'increment'})
  const handleDecrement = () => onActionDispatched({service: 'counter', useCase: 'askForDecrement'})

  return (
    <div>
      <h1>Alice</h1>
      <h2>{counter}</h2>
      <button onClick={handleIncrement}>Increment!</button>
      <button onClick={handleDecrement}>Decrement!</button>
    </div>
  )
}

export default Alice
