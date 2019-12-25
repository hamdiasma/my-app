import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,

} from 'reactstrap';
import logo from "../assets/img/icon.png";


class MyNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false }
  }


  toggle = () => this.setState({ isOpen: !this.state.isOpen })
  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/">
            <img
              src={logo}
              alt="logo"
              style={{ width: 30, height: 30, margin: 10 }}
            />
          </NavbarBrand>
          <NavbarBrand href="/">movies</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/movies">movies</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/series">series</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/login" disabled>login</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }


}

export default MyNavbar;

