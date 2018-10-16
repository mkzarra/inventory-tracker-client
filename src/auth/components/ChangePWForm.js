import React, { Component } from "react"
// import axios from 'axios'
import { withRouter } from 'react-router-dom'
import {handleErrors, changePwd} from '../api'
import apiUrl from '../../server.js'
import "./ChangePWForm.css"
import messages from "../messages";

class ChangePWForm extends Component {
  constructor() {
    super()
    this.state = {
      oldPwd: '',
      newPwd: '',
    }
  }

  handleChange = e => this.setState({[e.target.name]: this.state})

  changePwd = e => {
    e.preventDefault()

    const { oldPwd, newPwd } = this.state
    const { flash, history, user } = this.props
    
    changePwd(this.state, user)
      .then(handleErrors)
      .then(() => flash(messages.changePwdSuccess, 'flash-success'))
      .then(() => history.push('/'))
      .catch(() => flash(messages.changePwdFailure, 'flash-error'))
  }

  
  render() {
    const { oldPwd, newPwd } = this.state

    return (
      <form className="changePwd-form" onSubmit={this.onSubmit}>
        <h3>Change Password</h3>
        <br />

        <label htmlFor="oldPwd">Old Password</label>
        <input
          required
          type="password"
          placeholder="old password"
          name="oldPwd"
          value={oldPwd}
          onChange={this.handleChange}
        />
        <br />

        <label htmlFor="newPwd">New Password</label>
        <input
          required
          type="password"
          placeholder="new password"
          name="newPwd"
          value={newPwd}
          onChange={this.handleChange}
        />
        <br />

        <button type="submit" id="change-pwd-button" className="auth-button">Submit Changes</button>
      </form>
    )
  }
}

export default withRouter(ChangePWForm)