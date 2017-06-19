import React from 'react'
import axios from 'axios'

class AddListItem extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      listItem: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.addList = this.addList.bind(this)
  }
  handleChange (e) {
    this.setState({
      listItem: e.target.value
    })
  }
  addList (event) {
    axios.post('/list')
  }
  render () {
    return (
      <div>
        <input type='text' placeholder='Enter A Task...' onChange={this.handleChange} />
        <button onClick={this.addList}>Submit</button>
      </div>
    )
  }
}

export default AddListItem
