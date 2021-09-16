import { Cart, Links, Logo, StyledNavBar } from './NavBar.styles';

import Image from "next/image"
import PropTypes from 'prop-types';
import React from 'react';

const NavBar = (props) => (
  <StyledNavBar>
    <Links>
      <a href="#stores">Stores</a>
      <a href="#contact">Contact Us</a>
    </Links>
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
