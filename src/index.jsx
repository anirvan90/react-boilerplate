import React from 'react'
import ReactDOM from 'react-dom'

import ListItems from './components/list-items.jsx'
import AddListItem from './components/add-list-item.jsx'

class App extends React.Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <div>
        <AddListItem />
        <ListItems />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
