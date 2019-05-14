import React, { FC, useState } from 'react';
import { Collapse, Nav, Navbar as BootstrapNavbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';

export const Navbar: FC = () => {
  const [state, setState] = useState<boolean>(false);

  const toggle = () => setState(!state);

  return (
    <BootstrapNavbar color="white" light={true} expand="md" fixed="top">
      <NavbarBrand href="/">Quinvoice</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={state} navbar={true}>
        <Nav className="ml-auto" navbar={true}>
          <NavItem>
            <NavLink href="https://www.npmjs.com/package/quinvoice" target="blank">
              npm
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://github.com/qcumbeer/quinvoice" target="blank">
              GitHub
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </BootstrapNavbar>
  );
};
