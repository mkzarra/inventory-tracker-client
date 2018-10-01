import React from 'react'
import axios from 'axios'
import { apiUrl } from './server.js'
import './Item.css'

const Item = props => {

  const updateHandler = e => props.setCurrentFormItemID(props._id)

  const handleDeleteItem = e => {
    e.preventDefault()

    axios.delete(`${apiUrl}/items/${props._id}`, {
      headers: {
      Authorization: `Bearer ${props.token}`
      }
    })
      .then(result => console.log(result))
      .then(props.itemRequest)
      .catch(err => console.error(err))
  }

  return (
    <div className="item-div">
      <div className="item-header">
        <div className="item-id">ID: {props._id}</div>
        <div className="item-name">name: {props.name}</div>
        <div className="item-storage">storage: {props.storage}</div>
        <div className="item-perishable">perishable: {props.perishable}</div>
        <div className="item-volume">volume: {props.volume}</div>
        <div className="item-unit">unit: {props.unit}</div>
        <button type="submit" id="delete-item" onClick={handleDeleteItem}>Delete</button>
        <button type="submit" id="update-item" onClick={updateHandler}>Update</button>
      </div>
    </div>
  )
}

export default Item