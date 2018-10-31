import React, { Component } from 'react'
import axios from 'axios'
import Item from './Item'
import { withRouter,Link } from 'react-router-dom'
import { apiUrl } from '../server.js'
import { getItemIndex, deleteItem, handleErrors } from './api'
import './Item.css'

class ItemIndex extends Component {
  constructor(props) {
    super(props)

    this.state = {
      items: []
    }
  }

  // getItemIndex = e => {
  //   e.preventDefault()

  //   const { setItem } = this.props
    
  //   getItemIndex(this.state)
  //     .then(handleErrors)
  //     .then(res => res.json())
  //     .then(res => {
  //       setItem(res.item)
  //       console.log(res.item)
  //     })
  // }

  componentDidMount() {
    axios.get(`${apiUrl}/items`)
      .then(res => {
        console.log(res.data.items)
        this.setState({items: res.data.items})
      })
  }

  deleteItem(e, itemId) {
    e.preventDefault()

    axios.delete(`${apiUrl}/items/${itemId}`)
    this.setState({items: this.state.items.filter(item => item.id !== itemId)})
  }

  render() {
    const items = this.state.items
    const renderItems = items.map(item => {
      return (
      <li key={item._id} className="card">
        <div className="item-div">
          <h3 className="item-name">Item: {item.name}</h3>
          <p className="item-storage">Storage: {item.storage}</p>
          <p className="item-expiration">Expiration: {item.expiration.slice(0,10)}</p>
          <p className="item-volume">Volume: {item.volume}</p>
          <p className="item-unit">Unit: {item.unit}</p>
          <p className="item-id">ID: {item._id}</p>
          <button className="remove" type="submit" value={this.props._id} >Remove</button>
          <button className="update" value={this.props._id} onClick={this.props.onClick}>Update</button>
          </div>
          <br />
      </li>
      )
    })

    return (
      <React.Fragment>  
        {renderItems}
      </React.Fragment>
    )
  }
}

export default withRouter(ItemIndex)