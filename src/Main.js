import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import axios from 'axios'
import apiUrl from './server.js'
import './Main.css'
import ChangePWForm from './ChangePWForm.js'
import ItemForm from './ItemForm.js'
import ItemList from './ItemList.js'

export default class Main extends Component {

  constructor(props) {
    super(props)
    this.state = {
      token: null,
      items: [],
      currentFormItemID: null
    }
  }

  setCurrentFormItemID = id => {
    this.setState({ currentFormItemID: id })
  }

  getAllItems = () => {
    axios.get(`${apiUrl}/items`, {
      headers: {
        Authorization: `Bearer ${this.state.token}`
      }
    })
      .then(result => {
        console.log(result)
        this.setState({ items: result.data.items })
      })
      .catch(err => console.error(err))
  }

  componentDidMount(props) {
    const token = this.props.location.state.token
    this.setState({ token }, this.getAllItems)
    this.props.setViewLinkState()
    // sets viewLinkState to null - removing visible links to login/signup
  }

  logout = e => {
    axios.delete(`${apiUrl}/sign-out`, {
      headers: {
        Authorization: `Bearer ${this.props.location.state.token}`
      }
    })
      .then(result => {
        console.log(result)
        this.props.setViewLinkState('view')
        this.props.history.push({
          pathname: '/'
        })
      })
      .catch(err => console.error(err))
  }

  formAction = id => {
    id === null ? "Add" : "Update"
  }

  render() {
    // TODO: write a function to make this less verbose and repetative
    return (
      <div>
        <button type="submit" onClick={this.logout}>Log out</button>
        <ChangePWForm token={this.props.location.state.token} />
        {<ItemForm action={this.formAction(this.state.currentFormItemID)}
            setCurrentFormItemID={this.setCurrentFormItemID}
            currentFormItemID={this.state.currentFormItemID}
            items={this.state.items}
            itemRequest={this.getAllItems}
            token={this.state.token} />
        }
        <ItemList items={this.state.items}
          setCurrentFormItemID={this.setCurrentFormItemID}
          token={this.state.token}
          itemRequest={this.getAllItems} />
      </div>
    )
  }
}