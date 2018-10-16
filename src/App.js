import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Routes from './Routes.js';
import Login from './auth/Login';
import Register from './auth/Register';
import AppBar from '@material-ui/core/AppBar'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      viewLink: 'view'
    }
  }

  setViewLinkState = newState => {
    this.setState({viewLink: newState})
  }

  setLoggedInEmail = email => {
    this.setState({loggedInEmail: email})
  }

  getLoggedInEmail = () => {
    return this.setState.loggedInEmail
  }

  render() {
    // if (this.state.viewLink === 'view') {
      return (     
        <div className="App">
          <AppBar position="sticky" className="background">
            <nav>
            {/* <Link to="/" className="links" id="home-link">HOME</Link> */}
            {/* logout success should reroute user back to home page */}
            <Link to="/sign-up" className="links nav">Register</Link>
            {/* mount Register User component */}
            <Link to="/sign-in" className="links nav">Login</Link>
            {/* mount Login user component */}
              </nav>
          </AppBar>
        <Routes setViewLinkState={this.setViewLinkState} viewLinkState={this.state.viewLink} />
        {/* load routes and pass view state and setter method as props */}
        </div>
      );
    // } else {
    //   return (
      
    //     <div className="App container">
    //       <nav>
    //         {/* hide login/logout links */}
    //         {/* <Link to="/" className="links" id="home-link">HOME</Link> */}
    //         {/* logout success should reroute user back to home page */}
    //         {/* <Link to="/sign-up" className="links nav">register</Link> */}
    //         {/* mount Register User component */}
    //         {/* <Link to="/sign-in" className="links nav">login</Link> */}
    //         {/* mount Login user component */}
    //       </nav>
    //       <Routes setViewLinkState={this.setViewLinkState} viewLinkState={this.state.viewLink} />
    //       {/* load routes and pass view state and setter method as props so they're available in <Main /> */}
    //       </div>
    //   )
    // }
  }
}

export default App;
