import React, { Component } from 'react'

export default class InputField extends Component {
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
        <label>Input field:</label>
        <input type='text' onChange={this.handleChange} ref={node => { this.inputField = node }} />
        {this.state.value && <button>ok</button>}
      </p>
    )
  }
}
