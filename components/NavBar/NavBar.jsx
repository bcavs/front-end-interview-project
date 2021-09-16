import { Cart, Links, Logo, MobileMenu, StyledNavBar } from './NavBar.styles';

import Image from "next/image"
import PropTypes from 'prop-types';
import React from 'react';

const NavBar = (props) => (
  <StyledNavBar>
    <Links>
      <a href="#stores">Stores</a>
      <a href="#contact">Contact Us</a>
    </Links>
    <MobileMenu>
      <Image src="/images/menu.svg" alt="Foxtrot" width="16" height="13" />
    </MobileMenu>
    <Image src="/images/foxtrot-logo.svg" alt="Foxtrot" width="135" height="17" />
    <Cart>
      <Image src="/images/basket.svg" alt="Cart" width="16" height="16" />
    </Cart>
  </StyledNavBar>
);

NavBar.propTypes = {
  // bla: PropTypes.string,
};

NavBar.defaultProps = {
  // bla: 'test',
};

export default NavBar;
