import React from 'react'
import './Item.css'

const ItemForm = props => {
  const { action, item, handleChange, handleSubmit } = props
  const formattedAction = action.charAt(0).toUpperCase() + action.slice(1)

  return (
    <React.Fragment>
      <h1>{formattedAction} Item</h1>
      
      <br />
      <input
          type="text"
          name="name"
          value={item.name}
          onChange={handleChange}
        />
        
        <br />
        <input
          type="text"
          name="category"
          value={item.category}
          onChange={handleChange}
        />
        
        <br />
        <input
          type="text"
          name="storage"
          value={item.storage}
          onChange={handleChange}
        />
        
        <br />
        <input
          type="date"
          name="expiration"
          value={item.expiration}
          onChange={handleChange}
        />

        <br />
        <input
          type="number"
          name="volume"
          value={item.volume}
          onChange={handleChange}
        />

        <br />
        <input
          type="text"
          name="unit"
          value={item.unit}
          onChange={handleChange}
        />

        <button type="submit" onClick={handleSubmit}>Submit Changes</button>
    </React.Fragment>
  )
}

export default ItemForm