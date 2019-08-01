import React, { Component } from 'react';
import {Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, Container} from 'reactstrap';
import { Link } from 'react-router-dom';

export default class AppNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {isOpen: false};
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return <Container><Navbar expand="md">
      <NavbarBrand tag={Link} to="/">IPMS</NavbarBrand>
      <NavbarToggler onClick={this.toggle}/>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink
              href="">Logout</NavLink>
          </NavItem>
        </Nav>
    </Navbar>
    </Container>;
  }
}