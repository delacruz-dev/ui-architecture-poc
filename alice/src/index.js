import React, {Component} from 'react'

export default class Alice extends Component {
  constructor (...args) {
    super(...args)
    this.state = {
      counter: 0
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  componentDidUpdate (newProps, newState) {
    console.log(newProps, newState)
    this.props.onButtonClick(newState.counter)
  }

  render () {
    return (
      <div>
        <h1>Alice</h1>
        <h2>{this.state.counter}</h2>
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    )
  }
}
