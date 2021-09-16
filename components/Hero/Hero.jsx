import { Content, ImageContainer, StyledHero } from './Hero.styles';

import Image from "next/image"
import PropTypes from 'prop-types';
import React from 'react';

const Hero = (props) => (
  <StyledHero>
    <ImageContainer>
      <Image src="/images/hero-image.jpg" alt="Cheers!" width="387" height="185" />
    </ImageContainer>
    <Content>
      <h1>Discover Aisle</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </Content>
  </StyledHero>
);

Hero.propTypes = {
  // bla: PropTypes.string,
};

Hero.defaultProps = {
  // bla: 'test',
};

export default Hero;
