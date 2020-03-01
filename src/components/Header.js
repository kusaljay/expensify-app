import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Expensify App</h1>
    <NavLink to="/" activeClassName="selected" exact={true}>Home</NavLink>
    <NavLink to="/create" activeClassName="selected">Add</NavLink>
    <NavLink to="/edit" activeClassName="selected">Edit</NavLink>
    <NavLink to="/help" activeClassName="selected">Help</NavLink>
  </header>
);

export default Header;
