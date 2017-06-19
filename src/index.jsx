import React from 'react'
import ReactDOM from 'react-dom'

import ListItems from './components/list-items.jsx'
import AddListItem from './components/add-list-item.jsx'
import axios from 'axios'
class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      items: []
    }
    // this.getItems = this.getItems.bind(this)
    // this.getItems()
  }

  componentDidMount () {
    axios.get('/list').then(({data}) => {
      this.setState({
        items: data
      })
    })
    .catch((err) => {
      console.error('Error Fetching List', err)
    })
  }
  render () {
    return (
      <div>
        <AddListItem />
        <hr />
        <ListItems items={this.state.items} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
