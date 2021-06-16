import React, { Component } from "react";

import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import Search from "./Search";

class AppHeader extends Component {
  render() {
    return (
      <Navbar color="dark" dark expand="md">
        <Nav className="container-fluid">
          <NavItem>
            <NavbarBrand href="/">
              <FontAwesomeIcon icon={faUsers} size="2x" pull="right" />
            </NavbarBrand>
          </NavItem>
          <NavItem>
            <h3 style={{ color: "white" }}> Employee Managament System</h3>{" "}
          </NavItem>
          <NavItem>
            {" "}
            <NavLink>
              {" "}
              <Search />{" "}
            </NavLink>{" "}
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}
export default AppHeader; // 8
