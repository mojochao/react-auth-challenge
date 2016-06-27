import React from 'react'
import ReactDOM from 'react-dom'

import auth from './auth'

const Root = React.createClass({
  render() {
    return (
      <p>Go!</p>
    )
  }
})

ReactDOM.render(<Root/>, document.getElementById('root'))
