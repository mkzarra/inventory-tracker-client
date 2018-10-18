import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'
import Nav from '../shared/Nav'

const authenticatedOptions = (
  <React.Fragment>
    <Link to="/change-password">Change Password</Link>
    <Link to="/sign-out">Logout</Link>
  </React.Fragment>
)

const unauthenticatedOptions = (
  <React.Fragment>
    <Link to="/sign-up">Register</Link>
    <Link to="/sign-in">Login</Link>
  </React.Fragment>
)

const alwaysOptions = (
  <React.Fragment>
    <Link to="/">Home</Link>
    <Nav />
  </React.Fragment>
)

const Header = ({ user }) => (
  <header className="main-header">
    <h1>Inventory Tracker</h1>
    <nav>
      { user && <span> Welcome, {user.email}</span> }
      { user ? authenticatedOptions : unauthenticatedOptions }
      { alwaysOptions }
    </nav>
  </header>
)

export default Header