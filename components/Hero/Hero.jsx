import { Content, ImageContainer, StyledHero } from './Hero.styles';

const Hero = (props) => (
  <StyledHero>
    <ImageContainer>
      <img src="/images/hero-image.jpg" alt="Cheers!" />
    </ImageContainer>
    <Content>
      <h1>Discover Aisle</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </Content>
  </StyledHero>
);

export default Hero;
