import React, { Component } from 'react'

export default class ShortText extends Component {
  constructor (...args) {
    super(...args)

    this.handleChange = this.handleChange.bind(this)

    this.state = {
      value: ''
    }
  }

  handleChange () {
    this.setState({
      value: this.inputField.value
    })
  }

  render () {
    return (
      <p>
        <label>Short text:</label>
        <input type='text' onChange={this.handleChange} ref={node => { this.inputField = node }} />
      </p>
    )
  }
}
