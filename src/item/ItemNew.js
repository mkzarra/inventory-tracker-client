import React, {Component} from 'react'
import axios from 'axios'
import { apiUrl } from '../server'
import ItemForm from './ItemForm'
import './Item.css'

export default class ItemEdit extends Component {
  constructor(props) {
    super(props)
    this.state = {
      item: {
        name: '',
        category: '',
        storage: '',
        expiration: '',
        volume: '',
        unit: '',
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
    console.log(res.data)
  }

  render() {
    const { item } = this.state
    
    return (
      <React.Fragment>
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