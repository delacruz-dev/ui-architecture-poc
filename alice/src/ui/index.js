import React from 'react'

const Alice = ({counter = 0, onButtonClick}) => (
  <div>
    <h1>Alice</h1>
    <h2>{counter}</h2>
    <button onClick={onButtonClick}>Click me!</button>
  </div>
)

export default Alice
