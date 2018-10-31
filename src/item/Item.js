import React from 'react'
import './Item.css'

function Item(props)  {
console.log(props.items)
  return (
    <li>
      <div className="item-div">
        <h3 className="item-name" name={props.name}>Item: {props.name}</h3>
        <p className="item-storage" name={props.storage}>Storage: {props.storage}</p>
        <p className="item-expiration" name={props.expiration}>Expiration: {props.expiration}</p>
        <p className="item-volume" name={props.volume}>Volume: {props.volume}</p>
        <p className="item-unit" name={props.unit}>Unit: {props.unit}</p>
        <p className="item-id" name={props._id}>ID: {props._id}</p>
      <button className="remove" value={props._id} onClick={props.onClick}>Remove</button>
      <button className="update" value={props._id} onClick={props.onClick}>Update</button>
      </div>
    </li>
  )
}

export default Item