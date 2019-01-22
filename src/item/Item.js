import React from 'react'
import './Item.css'

const item = (props) =>  {
  return (
    <li key={props._id}>
      <div className="item-div">
        <h3 className="item-name" name={props.itemName}>Item: {props.itemName}</h3>
        <p className="item-storage" name={props.storage}>Storage: {props.storage}</p>
        <p className="item-expiration" name={props.expiration}>Expiration: {props.expiration}</p>
        <p className="item-volume" name={props.volume}>Volume: {props.volume}</p>
        <p className="item-unit" name={props.unit}>Unit: {props.unit}</p>
        <p className="item-id" name={props._id}>ID: {props.id}</p>
      <button className="remove" type="submit" name="remove" value={props.id} onClick={props.clicked}>Remove</button>
      <button className="update" value={props.id} onClick={props.update}>Update</button>
      </div>
    </li>
  )
}

export default item