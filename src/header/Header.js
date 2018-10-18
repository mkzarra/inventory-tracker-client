import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'

const authenticatedOptions = (
  <React.Fragment>
    <Link to="/change-password">Change Password</Link>
    <Link to="/sign-out">Logout</Link>
    <Link to="/items">Items</Link>
    <Link to="/items/new">Add Item</Link>
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