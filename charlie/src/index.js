import React, {Component} from 'react'
import {Alice, AliceDomain} from '@typeform/alice'
import Bob from '@typeform/bob'

export default class Charlie extends Component {
  constructor (...args) {
    super(...args)
    this.state = {
      counter: 0
    }

    this.handleButtonClick = this.handleButtonClick.bind(this)
  }

  handleButtonClick (counter) {
    this.setState({
      counter: AliceDomain
                .service('counter')
                .useCase('increment')
                .execute({counter: this.state.counter})
    })
  }

  render () {
    return (
      <div>
        <Alice counter={this.state.counter} onButtonClick={this.handleButtonClick} />
        <Bob counter={this.state.counter} />
      </div>
    )
  }
}
