import React from 'react'

const Alice = ({counter = 0, onIncrement, onDecrement}) => (
  <div>
    <h1>Alice</h1>
    <h2>{counter}</h2>
    <button onClick={onIncrement}>Increment!</button>
    <button onClick={onDecrement}>Decrement!</button>
  </div>
)

export default Alice
