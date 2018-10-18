import React from 'react'
import Item from './Item.js'
import './Item.css'

const ItemList = props => {
  // props = the item list taken from <Main /> state + itemID setter method, token, axios GET method

  const Items = props.items.map((itemData, index) => {
    return (
      <Item setCurrentFormItemID={props.setCurrentFormItemID} token={props.token} itemRequest={props.itemRequest} key={index} {...itemData} />
    )
  })

  return (
    <div className="list-div">
    {Items}
    </div>
  )
}

export default ItemList