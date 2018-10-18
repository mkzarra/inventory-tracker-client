import React from 'react'
import './Item.css'

const Item = props => {

  return (
    <div className="item-div">
      <div className="item-header">
        <div className="item-id">ID: {props._id}</div>
        <div className="item-name">name: {props.name}</div>
        <div className="item-storage">storage: {props.storage}</div>
        <div className="item-perishable">perishable: {props.perishable}</div>
        <div className="item-volume">volume: {props.volume}</div>
        <div className="item-unit">unit: {props.unit}</div>
      </div>
    </div>
  )
}

export default Item