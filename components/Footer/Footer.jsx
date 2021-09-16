import {IconContainer, LegalContainer, StyledFooter} from './Footer.styles';

import  Image from "next/image"

const Footer = (props) => (
  <StyledFooter>
    <IconContainer>
      <Image src="/images/blog-icon.svg" alt="Cart" width="24" height="24" />
      <Image src="/images/insta-icon.svg" alt="Cart" width="24" height="24" />
      <Image src="/images/twitter-icon.svg" alt="Cart" width="24" height="24" />
      <Image src="/images/fb-icon.svg" alt="Cart" width="24" height="24" />
      <Image src="/images/mail-icon.svg" alt="Cart" width="24" height="24" />
    </IconContainer>
    <LegalContainer>
      <p>Terms of Service</p>
      <p>Privacy</p>
    </LegalContainer>
  </StyledFooter>
);

export default Footer;
