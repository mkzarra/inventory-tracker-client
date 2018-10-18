import React, {Component} from 'react'
import axios from 'axios'
import { apiUrl } from '../server'
import Nav from '../shared/Nav'
import ItemForm from './ItemForm'

export default class ItemEdit extends Component {
  constructor(props) {
    super(props)
    this.state = {
      item: {
        name: '',
        category: '',
        storage: '',
        expiration: '',
        volume: 0,
        unit: '',
        owner: null
      }
    }
  }

  handleChange = e => {
    const newItem = { ...this.state.item, [e.target.name]: e.target.value }
    this.setState({ item: newItem })
  }

  handleSubmit = async e => {
    e.preventDefault()

    const itemParams = JSON.stringify({ item: this.state.item })
    const res = await axios.post(`${apiUrl}/items`, itemParams)

    this.props.history.push(`/items/${res.data.item.id}/show`)
  }

  render() {
    const { item } = this.state
    
    return (
      <React.Fragment>
        <Nav />
        <ItemForm
          action="create"
          item={item}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </React.Fragment>
    )
  }

}