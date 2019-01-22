import React, { Component } from 'react'
import axios from 'axios'
import Item from './Item'
import { withRouter } from 'react-router-dom'
import { apiUrl } from '../server.js'
// import { getItemIndex, deleteItem, handleErrors } from './api'
import './Item.css'

class ItemIndex extends Component {
  constructor(props) {
    super(props)

    this.state = {
      items: [],

    }
  }

  handleChange = e => {
    this.setState({ name: e.target.value })
  }

  handleDelete = (e) => {
    e.preventDefault()
    const itemId = e.target.value
    axios.delete(`${apiUrl}/items/${itemId}`, { headers: { 'Authorization': 'Bearer ' + this.props.user.token } })
      .then(res => console.log(res.data))
      .catch(err => console.error(err));
  }

  componentDidMount() {
    console.log('[componentDidMount] ItemIndex', this.props.user)
    axios.get(`${apiUrl}/items`)
      .then(res => {
        console.log(res.data.items)
        this.setState({items: res.data.items.reverse()})
      })
  }

  render() {
    const renderItems = this.state.items.map(item => {
      return (
        <Item key={item._id}
          itemName={item.name}
          storage={item.storage}
          expiration={item.expiration.slice(0, 10)}
          volume={item.volume}
          unit={item.unit}
          id={item._id}
          clicked={this.handleDelete}
        />
      )
    })

    return (
      <React.Fragment>  
        {this.state.items.length > 0 ? renderItems : <h2>You currently have no items to display!</h2>}
      </React.Fragment>
    )
  }
}

export default withRouter(ItemIndex)