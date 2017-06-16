import React from 'react'

class ListItems extends React.Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <div>
        <ul>
          <li>One</li>
          <li>Two</li>
          <li>Three</li>
        </ul>
      </div>
    )
  }
}

export default ListItems
