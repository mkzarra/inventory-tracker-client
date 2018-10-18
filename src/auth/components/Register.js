import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
// import axios from 'axios'
import { handleErrors, signUp, signIn } from '../api'
import messages from '../messages'
import Main from '../../Main.js'
import './Register.css'

class Register extends Component {
  constructor() {
    super()
    
    this.state = {
      email: '',
      password: '',
      password_confirmation: ''
    }
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value })
  
  signUp = e => {
    e.preventDefault()

    const { email, password, password_confirmation } = this.state
    const { flash, history, setUser } = this.props
    
    signUp(this.state)
      .then(handleErrors)
      .then(() => signIn(this.state))
      .then(handleErrors)
      .then(res => res.json())
      .then(res => setUser(res.user))
      .then(() => flash(messages.signUpSuccess, 'flash-success'))
      .then(() => history.push('/'))
      .catch(() => flash(messages.signUpFailure, 'flash-error'))
  }

  render() {
    const { email, password, password_confirmation } = this.state

    return (
      <form className="auth-form" onSubmit={this.signUp}>
        <h3>Create an account</h3>
        <br />

        <label htmlFor="email">Email</label>
        <input
          required
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={this.handleChange}
        />
        <br />

        <label htmlFor="password">Password</label>
        <input
          required
          type="password"
          placeholder="Create Password"
          name="password"
          value={password}
          onChange={this.handleChange}
        />
        <br />

        <label htmlFor="password_confirmation">Confirm Password</label>
        <input
          required
          type="password"
          placeholder="confirm password"
          name="password_confirmation"
          value={password_confirmation}
          onChange={this.handleChange}
        />
        <br />
        
        <button type="submit" id="register-button" className="auth-button">Register</button>
      </form>
    )
  }
}

export default withRouter(Register)