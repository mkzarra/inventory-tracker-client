import React from 'react'
import axios from 'axios'
import { apiUrl } from '../server'
import Nav from '../shared/Nav'
import Item from './Item'

class MovieIndex extends React.Component {
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
        <Item />
      </React.Fragment>
    )
  }

}