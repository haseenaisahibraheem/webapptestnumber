import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from "reactstrap";

const NavBarMenu = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Mannir.net</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://vn.indeed.com/" target="_blank">
                Jobs
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Class
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem href="#">JavaScript</DropdownItem>
                <DropdownItem href="##">HTML and CSS</DropdownItem>
                <DropdownItem href="###">ExpressJS by NodeJS</DropdownItem>
                <DropdownItem href="####">ReactJS and ReactNative</DropdownItem>
                <DropdownItem divider />
                <DropdownItem href="#-#">Class More...</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBarMenu;
