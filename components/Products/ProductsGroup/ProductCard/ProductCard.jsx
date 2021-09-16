import { DiscountedPrice, ImageContainer, PriceContainer, ProductImage, ProductPrice, ProductTitle, StyledProductCard } from './ProductCard.styles';

import React from 'react';

const ProductCard = ({product}) => {
  return(
    <StyledProductCard>
      <ImageContainer>
        <ProductImage src={product.assets[0].url} />
      </ImageContainer>
      <ProductTitle>{product.title}</ProductTitle>
      <PriceContainer>
        <ProductPrice discounted={product.sale_price}>${product.unitPrice}</ProductPrice>
        {product.sale_price && <DiscountedPrice>${product.sale_price.toFixed(2)}</DiscountedPrice>}
      </PriceContainer>
    </StyledProductCard>
  )
};

export default ProductCard;
