import React from 'react'
import axios from 'axios'
import { apiUrl } from '../server'
import Nav from '../shared/Nav'

export default class MovieIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      item: {}
    }
  }

  async componentDidMount() {
    const res = await axios.get(`${apiUrl}/items/${this.props.match.params.id}`)
    this.setState({item: res.data.item})
  }

  render() {
    const { item } = this.state

    return (
      <React.Fragment>
        <Nav />
        <h4 className="item-name">Item: {item.name}</h4>
        <p className="item-storage">Storage: {item.storage}</p>
        <p className="item-expiration">Expiration: {item.expiration}</p>
        <p className="item-volume">Volume: {item.volume}</p>
        <p className="item-unit">Unit: {item.unit}</p>
        <p className="item-id">ID: {item._id}</p>
      </React.Fragment>
    )
  }
}