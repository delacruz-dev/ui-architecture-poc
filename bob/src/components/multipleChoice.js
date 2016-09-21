import React, { Component } from 'react'

export default class MultipleChoice extends Component {
  constructor (...args) {
    super(...args)

    this.handleChange = this.handleChange.bind(this)

    this.state = {
      value: 'yes'
    }
  }

  handleChange () {
    this.setState({
      value: this.multipleChoiceField.value
    })
  }

  render () {
    return (
      <p>
        <label>Multiple choice:</label>
        <select value={this.state.value} onChange={this.handleChange} ref={node => { this.multipleChoiceField = node }}>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </p>
    )
  }
}
