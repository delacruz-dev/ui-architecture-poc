import React, {Component} from 'react'
import {Alice, AliceDomain} from '@typeform/alice'
import Bob from '@typeform/bob'

export default class Charlie extends Component {
  constructor (...args) {
    super(...args)

    this.state = {}

    this.handleIncrement = this.handleIncrement.bind(this)
    this.handleDecrement = this.handleDecrement.bind(this)
  }

  componentDidMount () {
    AliceDomain
      .service('counter')
      .useCase('initialize')
      .execute()
      .then(state => {
        this.state = state
      })
  }

  handleIncrement (counter) {
    AliceDomain
      .service('counter')
      .useCase('increment')
      .execute(this.state)
      .then(state => {
        this.setState(state)
      })
  }

  handleDecrement (counter) {
    AliceDomain
      .service('counter')
      .useCase('decrement')
      .execute(this.state)
      .then(state => {
        this.setState(state)
      })
  }

  render () {
    return (
      <div>
        <Alice {...this.state} onIncrement={this.handleIncrement} onDecrement={this.handleDecrement} />
        <Bob {...this.state} />
      </div>
    )
  }
}
