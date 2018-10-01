import React, { Component } from "react"
import axios from 'axios'
import { apiUrl } from '../server.js'
import "./ChangePWForm.css"

export default class ChangePWForm extends Component {

  constructor() {
    super(props)
    this.state = {
      oldPwd: '',
      newPwd: '',
      token: props.token
    }
  }

  onChange = e => {
    const state = this.state
    state[e.target.name] = this.state
    this.setState(state)
  }

  onSubmit = e => {
    e.preventDefault()
    const { oldPwd, newPwd } = this.state
    this.changePwd()
  }

  clearControlledFields = () => {
    this.setState({
      oldPwd: "",
      newPwd: ""
    })
  }

  changePwd = e => {
    const { oldPwd, newPwd } = this.state
    axios.patch(`${apiUrl}/change-password`, { oldPwd, newPwd }, {
      headers: {
      Authorization: `Bearer ${this.state.token}`
      }
    })
      .then(result => {
        console.log(result)
      })
      .then(this.clearControlledFields)
      .catch(err => console.error(err))
  }

  render() {
    const { oldPwd, newPwd } = this.state
    return (
      <div>
        <form className="changePwd-form" onSubmit={this.onSubmit}>
          <label>Change Password</label>
          <br />
          <input type="password" placeholder="old password" name="oldPwd" value={this.state.oldPwd} onChange={this.onChange}></input>
          <br />
          <input type="password" placeholder="new password" name="newPwd" value={this.state.newPwd} onChange={this.onChange}></input>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}