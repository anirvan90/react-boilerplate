import React from 'react'

class Item extends React.Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <div>
        <div>
          {this.props.item.item}
        </div>
      </div>
    )
  }
}

export default Item
