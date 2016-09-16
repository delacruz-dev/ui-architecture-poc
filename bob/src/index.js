import React from 'react'

export default ({counter}) => (
  <div>
    <h1>Bob</h1>
    {
      Array.apply(null, {length: counter}).map(n => {
        return (
          <p>
            <label>Input field:</label>
            <input type='text' />
          </p>
        )
      })
    }
  </div>
)
