import { Cart, Links, MobileMenu, StyledNavBar } from './NavBar.styles';

import Image from "next/image"

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

export default NavBar;
