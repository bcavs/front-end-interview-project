import { DiscountedPrice, ImageContainer, PriceContainer, ProductPrice, ProductTitle, StyledProductCard } from './ProductCard.styles';

import PropTypes from 'prop-types';
import React from 'react';

const ProductCard = ({product}) => {
  return(
    <StyledProductCard>
      <ImageContainer>
        <img src={product.assets[0].url} />
      </ImageContainer>
      <ProductTitle>{product.title}</ProductTitle>
      <PriceContainer>
        <ProductPrice discounted={product.sale_price}>${product.unitPrice}</ProductPrice>
        {product.sale_price && <DiscountedPrice>${product.sale_price.toFixed(2)}</DiscountedPrice>}
      </PriceContainer>
    </StyledProductCard>
  )
};

ProductCard.propTypes = {
  // bla: PropTypes.string,
};

ProductCard.defaultProps = {
  // bla: 'test',
};

export default ProductCard;
