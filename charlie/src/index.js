import React, {Component} from 'react'
import Alice from '@typeform/alice'
import Bob from '@typeform/bob'

const increment = (value) => value + 1

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
      counter: increment(this.state.counter)
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
