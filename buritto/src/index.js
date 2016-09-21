import React from 'react'
import Bob from '@typeform/bob'

const Buritto = React.createClass({
  getInitialState () {
      return {
        isSaveButtonVisible: true
      };
  },

  render () {
    return (
      <div>
        <Bob />
        { this.state.isSaveButtonVisible
          ? <button>Save Typeform</button>
          : null }
      </div>
    );
  }
});

export default Buritto
