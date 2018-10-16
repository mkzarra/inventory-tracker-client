import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import AuthenticateRoute from './auth/components/AuthenticateRoute'
import Login from './auth/components/Login';
import Register from './auth/components/Register';
import ChangePwdForm from './auth/components/ChangePWForm'
import Logout from './auth/components/Logout'
import Header from './header/Header'

class App extends Component {

  constructor() {
    super()

    this.state = {
      user: null,
      flashMessage: '',
      flashType: null
    }
  }

  setUser = user => this.setState({ user })
  
  clearUser = () => this.setState({ user: null })

  flash = (message, type) => {
    this.setState({ flashMessage: message, flashType: type })
    
    clearTimeout(this.messageTimeout)

    this.messageTimeout = setTimeout(() => this.setState({flashMessage: null}), 2000)
  }

  render() {
    const { flashMessage, flashType, user } = this.state
    
    return (
      <React.Fragment>
        <Header user={user} />
        {flashMessage && <h3 className={flashType}>{flashMessage}</h3>}

        <main className="container">
          <Route path="/sign-up" render={() => (
            <Register flash={this.flash} setUser={this.setUser} />
          )} />
          <Route path="/sign-in" render={() => (
            <Login flash={this.flash} setUser={this.setUser} />
          )} />
          <AuthenticateRoute user={user} path="/sign-out" render={() => (
            <Logout flash={this.flash} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticateRoute user={user} path="/change-password" render={() => (
            <ChangePwdForm flash={this.flash} user={user} />
          )} />
        </main>
      </React.Fragment>
    )
  }
}

export default App;
