import React from 'react';

import classes from './NavItems.module.css';
import NavItem from './NavItem/NavItem';

const navItems = (props) => (
  <ul className={classes.NavItems}>
    <NavItem link="/" exact>Grocery Helper</NavItem>
    <NavItem link="/items">Browse Items</NavItem>
    {!props.isAuthenticated ? null : <NavItem link='/pantry'>Pantry</NavItem>}
    {!props.isAuthenticated
      ? <NavItem link="/register">Register</NavItem>
      : <NavItem link="/logout">Logout</NavItem>
    }
    {!props.isAuthenticated ? <NavItem link="/login">Login</NavItem> : null}
  </ul>
);

export default navItems;