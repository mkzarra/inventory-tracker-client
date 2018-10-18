import React from 'react'
import './Item.css'

const Item = props => {

  return (
    <div className="item-div">
      <div className="item-header">
        <h3 className="item-name">Item: {props.name}</h3>
        <p className="item-storage">Storage: {props.storage}</p>
        <p className="item-perishable">Perishable: {props.perishable}</p>
        <p className="item-volume">Volume: {props.volume}</p>
        <p className="item-unit">Unit: {props.unit}</p>
        <p className="item-id">ID: {props._id}</p>
      </div>
    </div>
  )
}

export default Item