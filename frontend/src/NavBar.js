import React, { useContext } from "react";
import "./NavBar.css";
import { NavLink, Link } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";

function NavBar() {
  return (
    <div>
      <Navbar expand="md" className="Nav">
        <Link exact to="/" className="navbar-brand">
          Snack or Booze
        </Link>

        <Nav className="ml-auto" navbar>
          <NavItem className="nav-item mr-4">
            <NavLink className="nav-link" to="/other/add">
              Add An Item
            </NavLink>
          </NavItem>
          <NavItem className="nav-item mr-4">
            <NavLink className="nav-link" to="/other/add">
              Things
            </NavLink>
          </NavItem>
          <NavItem className="nav-item mr-4">
            <NavLink className="nav-link" to="/another/add">
              Wow
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavBar;
