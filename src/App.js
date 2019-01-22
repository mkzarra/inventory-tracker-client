import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import AuthenticateRoute from './auth/components/AuthenticateRoute'
import Login from './auth/components/Login';
import Register from './auth/components/Register';
import ChangePwdForm from './auth/components/ChangePWForm'
import Logout from './auth/components/Logout'
import Header from './header/Header'
import Home from './Home'
import ItemIndex from './item/ItemIndex';
import ItemNew from './item/ItemNew'
// import { deleteItem, updateItem } from './item/api'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      user: null,
      history: [{
        items: []
      }],
      flashMessage: '',
      flashType: null
    }
  }

  handleClick(i) {
    const history = this.state.history
    const items = this.state.history.items.slice()
    console.log(items[i])
    this.setState({
      history: history.concat([{
        items
      }])
    })
  }

  setUser = user => this.setState({ user })

  setItem = item => this.setState({ history: item })
  
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
          <Route path="/" render={() => (
            <Home />
          )} />
          <AuthenticateRoute user={user} path="/items" render={() => (
            <ItemIndex user={user} />
          )} />
          <AuthenticateRoute user={user} path="/items" render={() => (
            <ItemNew flash={this.flash} user={user} setItem={this.setItem}/>
          )} />
        </main>
      </React.Fragment>
    )
  }
}

export default App;
