import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import axios from 'axios'
import { apiUrl } from '../server.js'
import Main from '../Main.js'
import './Register.css'

export default class Register extends Component {

  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      password_confirmation: ''
    }
  }

  clearInputData = () => {
    this.setState({
      email: '',
      password: '',
      password_confirmation: ''
    })
  }

  onChange = e => {
    const state = this.state
    state[e.target.name] = e.target.value
    this.setState(state)
  }

  onSubmit = e => {
    e.preventDefault()

    const { email, password, password_confirmation } = this.state

    axios.post(`${apiUrl}/sign-up`, { email, password, password_confirmation })
      .then(result => {
        console.log(result)
        // this.props.history.push('/sign-in')
        // routes to login on success
      })
      .then(this.clearInputData)
      .catch(err => console.error(err))
  }

  render() {
    const { email, password, password_confirmation } = this.state
    return (
      <div>
        <form className="Register-form" onSubmit={this.onSubmit}>
          <label>Create an account</label>
          <br />
          <input type="email" placeholder="email" name="email" value={email} onChange={this.onChange}></input>
          <br />
          <input type="password" placeholder="create password" name="password" value={password} onChange={this.onChange}></input>
          <br />
          <input type="password" placeholder="re-enter password" name="password_confirmation" value={password_confirmation} onChange={this.onChange}></input>
          <br />
          <button type="submit" id="register-button">Register</button>
        </form>
      </div>
    )
  }
}