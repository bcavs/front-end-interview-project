//import { Test } from './ProductCard.styles';
import Image from 'next/image'
import PropTypes from 'prop-types';
import React from 'react';

const ProductCard = ({product}) => {
  console.log("Product: ", product)

  return(
    <div>
      <Image src={product.assets[0].url} width="137" height="102.75"/>
      <p>{product.title}</p>
    </div>
  )
};

ProductCard.propTypes = {
  // bla: PropTypes.string,
};

ProductCard.defaultProps = {
  // bla: 'test',
};

export default ProductCard;
