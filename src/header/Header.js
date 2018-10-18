import React from 'react'
import { Link } from 'react-router-dom'

const authenticatedOptions = (
  <React.Fragment>
    <Link to="/change-password" className="links">Change Password</Link>
    <Link to="/sign-out" className="links">Logout</Link>
    <Link to="/items" className="links">Items</Link>
    <Link to="/items/new" className="links">Add Item</Link>
  </React.Fragment>
)

const unauthenticatedOptions = (
  <React.Fragment>
    <Link to="/sign-up" className="links">Register</Link>
    <Link to="/sign-in" className="links">Login</Link>
  </React.Fragment>
)

const alwaysOptions = (
  <React.Fragment>
    <Link to="/" className="links">Home</Link>
  </React.Fragment>
)

const Header = ({ user }) => (
  <header className="main-header">
    <nav>
      <h1 className="title">Inventory Tracker</h1>
      { user && <span> Welcome, {user.email}</span> }
      { user ? authenticatedOptions : unauthenticatedOptions }
      { alwaysOptions }
    </nav>
  </header>
)

export default Header