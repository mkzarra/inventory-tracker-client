import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { signIn } from '../api'
import messages from '../messages'
// import Button from '@material-ui/core/Button'
// import Card from '@material-ui/core/Card'
// import TextField from '@material-ui/core/TextField'
import './Login.css'
const store = require('../../store')


class Login extends Component {
  constructor() {
    super()

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
   
  handleChange = e => this.setState({ [e.target.name]: e.target.value })

  signIn = e => {
    e.preventDefault()

    // const { email, password } = this.state
    const { flash, history, setUser } = this.props
    
    signIn(this.state)
      .then(res => res.ok ? res : new Error())
      .then(res => res.json())
      .then(res => {
        setUser(res.user)
        store.user = res.user
      })
      .then(() => flash(messages.signInSuccess, 'flash-success'))
      .then(() => history.push('/'))
      .catch(() => flash(messages.signInFailure, 'flash-error'))
  }

  render() {
    const { email, password } = this.state
    
    return (
      <form className="auth-form" onSubmit={this.signIn}>
        <h3>Log into your account</h3>
        <label htmlFor="email">Email</label>
        <input
          required
          type="email"
          name="email"
          value={email}
          placeholder="Email"
          onChange={this.handleChange}
        />
        <br />
        <label htmlFor="password">Password</label>
        <input
          required
          type="password"
          name="password"
          value={password}
          placeholder="Password"
          onChange={this.handleChange}
        />
        <br />
        <button type="submit" id="login-button" className="auth-button">Login</button>
      </form>
    )
  }
}

 export default withRouter(Login)