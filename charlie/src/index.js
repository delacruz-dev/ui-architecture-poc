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
      .then(counter => {
        this.state = {
          counter
        }
      })
  }

  handleIncrement (counter) {
    AliceDomain
      .service('counter')
      .useCase('increment')
      .execute({counter: this.state.counter})
      .then(counter => {
        this.setState({
          counter
        })
      })
  }

  handleDecrement (counter) {
    AliceDomain
      .service('counter')
      .useCase('decrement')
      .execute({counter: this.state.counter})
      .then(counter => {
        this.setState({
          counter
        })
      })
  }

  render () {
    return (
      <div>
        <Alice counter={this.state.counter} onIncrement={this.handleIncrement} onDecrement={this.handleDecrement} />
        <Bob counter={this.state.counter} />
      </div>
    )
  }
}
