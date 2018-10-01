import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import axios from 'axios'
import apiUrl from './server.js'
import Main from './Main.js'
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

  // captures user input and sets it as this component's state
  onChange = e => {
    const state = this.state
    state[e.target.name] = e.target.value
    this.setState(state)
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
    .catch(err => console.error(err))
  }

  render() {
    const { email, password } = this.state
    return (
      <div>
        <form className="Login-form" onSubmit={this.onSubmit}>
          <label> Log into your account </label>
          <br />
          <input type="email" placeholder="email" name="email" value={email} onChange={this.onChange}></input>
          <br />
          <input type="password" placeholder="password" name="email" value={password} onChange={this.onChange}></input>
          <br />
          <button type="submit" id="login-button">Login</button>
        </form>
      </div>
    )
  }
}