import React from 'react'

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
    console.log(this.state.listItem)
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
