import React, { Component } from 'react'
import axios from 'axios'
import apiUrl from './server.js'
import './Main.css'
import ChangePWForm from './auth/components/ChangePWForm.js'
import ItemIndex from './item/ItemIndex.js'
import ItemList from './item/ItemList.js'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'

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
    axios.get(`${apiUrl}/items`)
      .then(result => {
        console.log(result)
        this.setState({ items: result.data.items.reverse() })
      })
      .catch(err => console.error(err))
  }

  componentDidMount(props) {
    const token = this.props.location.state.token
    this.setState({ token }, this.getAllItems)
    this.props.setViewLinkState()
    // sets viewLinkState to null - removing visible links to login/signup
  }

  logout = () => {
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
    !id ? "Add" : "Update"
  }

  render() {
    return (
      <div>
        <AppBar position="sticky" className="background" id="mainApp">
          <Button type="submit" onClick={this.logout}>Log out</Button>
        </AppBar>
        <ChangePWForm token={this.props.location.state.token} />
        {<ItemIndex action={this.formAction(this.state.currentFormItemID)}
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