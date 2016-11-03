import React from 'react'
import {BlockTypes} from './components'

const Alice = ({counter = 0, onActionDispatched}) => {
  const handleIncrement = () => onActionDispatched({service: 'counter', useCase: 'increment'})
  const handleDecrement = () => onActionDispatched({service: 'counter', useCase: 'askForDecrement'})

  return (
    <div>
      <h1>Alice</h1>
      <h2>{counter}</h2>
      <button onClick={handleIncrement}>Increment!</button>
      <button onClick={handleDecrement}>Decrement!</button>
      <BlockTypes />
    </div>
  )
}

export default Alice
