import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import axios from 'axios'
import { apiUrl } from '../server.js'
import Main from '../Main.js'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import TextField from '@material-ui/core/TextField'
import './Login.css'

export default class Login extends Component {

  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      token: ''
    }
  }

  clearControlledFields = () => {
    this.setState({
      email: "",
      password: ""
    })
  }

  // captures user input and sets it as this component's state
  onChange = e => {
    const state = this.state
    state[e.target.name] = e.target.value
    this.setState(state)
    console.log(this.setState(state))
    this.props.setLoggedInEmail(this.state.email)
  }

  // form submission: sends the current state as the params for signup
  // submission button triggers axios call
  onSubmit = e => {
    e.preventDefault()
    const { email, password } = this.state
    console.log(this.state)

    axios.post(`${apiUrl}/sign-in`, { email, password })
      .then(result => {
        this.setState({
          token: result.data.user.token
        })
        this.props.history.push({
          pathname: '/main',
          state: { token: this.state.token }
        })
      })
      .then(this.clearControlledFields)
      .catch(err => console.error(err))
      .then(this.clearControlledFields)
  }

  render() {
    const { email, password } = this.state
    return (
      <div>
        <Card className="Login-form">
          <form onSubmit={this.onSubmit}>
            <label> Log into your account </label>
            <br />
              <TextField type="email" label="email" placeholder="email" name="email" value={email} onChange={this.onChange}></TextField>
              <br />
              <TextField type="password" label="password" placeholder="password" name="email" value={password} onChange={this.onChange}></TextField>
              <br />
                <Button type="submit" id="login-button">Login</Button>
          </form>
        </Card>
      </div>
    )
  }
}