import React from 'react'
import Item from './item.jsx'
class ListItems extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        {
          this.props.items.map((item) => {
            return <Item key={item._id} item={item} />
          })
        }
      </div>
    )
  }
}

export default ListItems
