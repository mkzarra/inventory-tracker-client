import React, {Component} from 'react'
// import axios from 'axios'
// import { apiUrl } from '../server'
import './Item.css'
import { withRouter } from 'react-router-dom';
import { newItem } from './api'
import messages from './messages'
const store = require('../store')

class ItemNew extends Component {
  constructor(props) {
    super(props)
    this.state = {
      item: {
        name: '',
        category: '',
        storage: '',
        expiration: '',
        volume: '',
        unit: ''
        // owner: props.user._id
      }
    }
  }

  handleChange = e => {
    const newItem = { ...this.state.item, [e.target.name]: e.target.value }
    this.setState({ item: newItem })
  }

  newItem = e => {
    e.preventDefault()

    const { flash, history, setItem } = this.props
    
    newItem(this.state)
      .then(res => res.ok ? res : new Error())
      .then(res => res.json())
      .then(res => {
        setItem(res.item)        
        store.item = res.item
        console.log(res.item)
      })
      .then(() => flash(messages.createItemSuccess, 'flash-success'))
      .then(() => history.push('/items'))
      .catch(() => flash(messages.createItemFailure, 'flash-error'))
  }

  // handleSubmit = async e => {
  //   e.preventDefault()

  //   const itemParams = JSON.stringify({ item: this.state.item })
  //   const res = await axios.post(`${apiUrl}/items`, itemParams)

  //   this.props.history.push(`/items/${res.data.item.id}/show`)
  //   console.log(res.data)
  // }

  render() {
    const { item } = this.state

    
    return (
      <React.Fragment>
        <h1>Add Item</h1>
      <form className="item-form" onSubmit={this.newItem}>
      <br />
      <input
          type="text"
          name="name"
          placeholder="name"
          value={item.name}
          onChange={this.handleChange}
        />
        
        <br />
        <input
          type="text"
          name="category"
          placeholder="category"
          value={item.category}
          onChange={this.handleChange}
        />
        
        <br />
        <input
          type="text"
          name="storage"
          placeholder="storage"
          value={item.storage}
          onChange={this.handleChange}
        />
        
        <br />
        <input
          type="date"
          name="expiration"
          placeholder="expiration"
          value={item.expiration}
          onChange={this.handleChange}
        />

        <br />
        <input
          type="number"
          name="volume"
          placeholder="volume"
          value={item.volume}
          onChange={this.handleChange}
        />

        <br />
        <input
          type="text"
          name="unit"
          placeholder="unit"
          value={item.unit}
          onChange={this.handleChange}
        />

          <button type="submit" id="new-item" className="item-button">Submit</button>
          </form>
        {/* <ItemForm
          action="create"
          item={item}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        /> */}
      </React.Fragment>
    )
  }
}

export default withRouter(ItemNew)