import React, {Component} from 'react'
import Alice from '@typeform/alice'
import Buritto from '@typeform/buritto'

export default class App extends Component {
  constructor (...args) {
    super(...args)

    this.state = {}
  }

  componentDidMount () {
  }

  render () {
    return (
      <div>
        <h1>App</h1>
        <div className={'content'}>
          {this.props.children}
        </div>
      </div>
    )
  }
}
