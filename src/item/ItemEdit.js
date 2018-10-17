import React, { Component } from 'react'
import axios from 'axios'
import { apiUrl } from '../server'
import Nav from '../shared/Nav'
import withRouter from 'react-router-dom/withRouter';

class ItemEdit extends Component {
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

  async componentDidMount() {
    const response = await axios.get(`${apiUrl}/items/${this.props.match.params.id}`)
    this.setState({item: response.data.item})
  }

  handleChange = e => {
    const editedItem = { ...this.state.item, [e.target.name]: e.target.value }
  
    this.setState({ item: editedItem })
  }

  handleSubmit = async e => {
    e.preventDefault()

    const itemParams = JSON.stringify({ item: this.state.item })
    await axios.put(`${apiUrl}/items/${this.props.match.params.id}`, itemParams)

    this.props.history.push(`/items/${this.state.item.id}/show`)
  }

  render() {
    const { item } = this.state
    
    return (
      <React.Fragment>
        <Nav />
        <h1>Edit Item</h1>
        
        <br />
        <input
          type="text"
          name="name"
          value={item.name}
          onChange={this.handleChange}
        />
        
        <br />
        <input
          type="text"
          name="category"
          value={item.category}
          onChange={this.handleChange}
        />
        
        <br />
        <input
          type="text"
          name="storage"
          value={item.storage}
          onChange={this.handleChange}
        />
        
        <br />
        <input
          type="date"
          name="expiration"
          value={item.expiration}
          onChange={this.handleChange}
        />

        <br />
        <input
          type="number"
          name="volume"
          value={item.volume}
          onChange={this.handleChange}
        />

        <br />
        <input
          type="text"
          name="unit"
          value={item.unit}
          onChange={this.handleChange}
        />

        <button type="submit" onClick={this.handleSubmit}>Submit Changes</button>
      </React.Fragment>
    )
  }
  
}

export default withRouter(ItemEdit)