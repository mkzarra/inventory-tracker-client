import React from 'react'
import axios from 'axios'
import { withRouter, Link } from 'react-router-dom'
import { apiUrl } from '../server'
import { getItemIndex, deleteItem, handleErrors } from './api'
import Item from './Item'

export default class ItemGet extends React.Component {

  getItemIndex = e => {
    e.preventDefault()

    const {
      setItem
    } = this.props

    getItemIndex(this.state)
      .then(handleErrors)
      .then(res => res.json())
      .then(res => {
        setItem(res.item)
        console.log(res.item)
      })
  }

  renderItem(i) {
    return <Item
      onClick={() => this.props.onClick(i)}
    />
  }

  render() {
    console.log(this.props.items)
    return (
      <div className="item-header">
        {this.renderItem(this.props.items)}
      </div>
    )
  }
}