import React, { useState } from 'react'
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
  } from 'reactstrap';
  import {Link} from 'react-router-dom';

const NavigationBar = (props) => {

    
        const [isOpen, setIsOpen] = useState(false);
      
        const toggle = () => setIsOpen(!isOpen);
    return (
        <div>
           <Navbar color="light" light expand="md">
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem tag={Link} to="/cupcakes">
                  Cupcakes
                </DropdownItem>
                <DropdownItem tag={Link} to="/cakebatter">
                  CakeBatter
                </DropdownItem>
                <DropdownItem tag={Link} to="/frosting">
                  Frosting
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavLink>Contact</NavLink>
        </Collapse>
      </Navbar>
  </div>
    )
}


export default NavigationBar;

