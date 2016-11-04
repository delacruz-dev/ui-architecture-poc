import React, {Component} from 'react'
import {BlockTypes} from './components'
import Domain from '../domain'

class Alice extends Component {
  constructor (...args) {
    super(...args)
    this.state = {
      blockTypes: []
    }
  }

  componentDidMount () {
    Domain
    .service('block')
    .useCase('getBlockTypes')
    .execute()
    .then(({blockTypes}) => {
      this.setState({blockTypes})
    })
  }

  render () {
    const {counter = 0, onActionDispatched} = this.props

    const handleIncrement = () => onActionDispatched({service: 'counter', useCase: 'increment'})
    const handleDecrement = () => onActionDispatched({service: 'counter', useCase: 'askForDecrement'})

    const handleAddBlockType = (block) => {
      console.log(block)
    }

    return (
      <div>
        <h1>Alice</h1>
        <h2>{counter}</h2>
        <button onClick={handleIncrement}>Increment!</button>
        <button onClick={handleDecrement}>Decrement!</button>
        <BlockTypes {...this.state} onActionDispatched={handleAddBlockType} />
      </div>
    )
  }
}

export default Alice
