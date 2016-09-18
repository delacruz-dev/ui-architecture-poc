import React from 'react'
import { InputField } from './components'

const Alice = ({counter}) => (
  <div>
    <h1>Bob</h1>
    {
      Array.apply(null, {length: counter}).map((_, index) => <InputField key={index} />)
    }
  </div>
)

export default Alice
