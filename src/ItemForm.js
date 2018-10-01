import React, { Component } from 'react'
import axios from 'axios'
import { apiUrl } from './server.js'
import './ItemForm.css'

export default class ItemForm extends Component {

  constructor(props) {
    console.log(props)
    super(props)
  }

  resetItems = () => {
    document.getElementById("item-input").reset()
  }

  itemDataSubmit = e => {
    e.preventDefault()
    const data = {
      item: {
        name: e.target.querySelector('#name').value,
        storage: e.target.querySelector('#storage').value,
        expiration: e.target.querySelector('#expiration').value,
        volume: e.target.querySelector('#volume').value,
        unit: e.target.querySelector('#unit').value
      }
    }

    if (this.props.action === "Add") {

      this.addItem(data)
        .then(result => console.log(result))
        .then(this.props.itemRequest)
        .then(this.resetItems)
        .catch(err => console.error(err))
    }

    if (this.props.action === "Update") {

      this.updateItem(data)
        .then(result => console.log(result))
        .then(this.resetItems)
        .then(this.props.itemRequest)
        .then(this.props.setCurrentFormItemID(null))
        .catch(err => console.error(err))
    }

    addItem = data => {
      return axios.post(`${apiUrl}/items`, data, {
        headers: {
          Authorization: `Bearer ${this.props.token}`
        }
      })
    }

    updateItem = data => {
      return axios.post(`${apiUrl}/items/${this.props.currentFormItemID}`, data, {
        headers: {
          Authorization: `Bearer ${this.props.token}`
        }
      })
    }
  }

  render() {
    return (
      <div>
        <form id="item-input" className="addItem-form" onSubmit={this.itemDataSubmit}>
          <div id="label">
            <label>{this.props.action === "Add"
              ? this.props.prefix
              : `${this.props.currentFormItemID} - ${this.props.action}`} Item</label>
            <br />
          </div>

          <div className="divide">
            <input type="text" id="name" placeholder="item name (required)" name="name"></input>
            <br />
            <input type="text" id="storage" placeholder="storage requirements (required)" name="storage"></input>
            <br />
            <input type="date" id="expiration" placeholder="exp. date (required)" name="expiration"></input>
            <br />
            <input type="number" id="volume" placeholder="volume (required)" name="volume"></input>
            <br />
            <input type="text" id="unit" placeholder="unit (required)" name="unit"></input>
            <br />
            <button type="submit" id="item-form-button">{this.props.action}</button>
          </div>
        </form>
      </div>
    )
  }
}