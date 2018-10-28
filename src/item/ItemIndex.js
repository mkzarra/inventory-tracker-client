import React, { Component } from 'react'
import axios from 'axios'
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

  getItemIndex = e => {
    e.preventDefault()

    const { setItem } = this.props
    
    getItemIndex(this.state)
      .then(handleErrors)
      .then(res => res.json())
      .then(res => {
        setItem(res.item)
        console.log(res.item)
      })
  }

  async componentDidMount() {
    const response = await axios.get(`${apiUrl}/items`)
    this.setState({ items: response.data.items })
  }

  async deleteItem(e, itemId) {
    e.preventDefault()

    await axios.delete(`${apiUrl}/items/${itemId}`)
    this.setState({items: this.state.items.filter(item => item.id !== itemId)})
  }

  render() {
    const itemRows = this.state.items.map(item => 
      
        <tr key={item}>
          <td><Link to={`/items/${item.id}/show`}></Link></td>
          <td><Link to={`/items/${item.id}/edit`}></Link> | <a href="" onClick={e => this.deleteItem(e, item.id)}>Remove</a> </td>
        </tr>
      
    )

    return (
      <React.Fragment>

        <h1>Pantry</h1>

        <table>
          <tbody>
            {itemRows}
          </tbody>
        </table>
      </React.Fragment>
    )
  }
}

export default withRouter(ItemIndex)